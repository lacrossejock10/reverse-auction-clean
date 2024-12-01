import { useState, useCallback } from 'react'

interface FormState {
  values: Record<string, any>
  errors: Record<string, string>
  touched: Record<string, boolean>
}

interface ValidationRules {
  [key: string]: {
    required?: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    custom?: (value: any, formValues: Record<string, any>) => string | undefined
  }
}

interface UseFormOptions {
  initialValues: Record<string, any>
  validationRules?: ValidationRules
  onSubmit: (values: Record<string, any>) => Promise<void> | void
}

export function useForm({
  initialValues,
  validationRules = {},
  onSubmit,
}: UseFormOptions) {
  const [formState, setFormState] = useState<FormState>({
    values: initialValues,
    errors: {},
    touched: {},
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validateField = useCallback(
    (name: string, value: any): string => {
      const rules = validationRules[name]
      if (!rules) return ''

      if (rules.required && !value) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      }

      if (rules.minLength && value.length < rules.minLength) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rules.minLength} characters`
      }

      if (rules.maxLength && value.length > rules.maxLength) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} must be less than ${rules.maxLength} characters`
      }

      if (rules.pattern && !rules.pattern.test(value)) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} is invalid`
      }

      if (rules.custom) {
        return rules.custom(value, formState.values) || ''
      }

      return ''
    },
    [validationRules, formState.values]
  )

  const validateForm = useCallback(() => {
    const errors: Record<string, string> = {}
    Object.keys(formState.values).forEach((name) => {
      const error = validateField(name, formState.values[name])
      if (error) {
        errors[name] = error
      }
    })
    return errors
  }, [formState.values, validateField])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target
      const newValue = type === 'number' ? parseFloat(value) : value

      setFormState((prev) => ({
        ...prev,
        values: { ...prev.values, [name]: newValue },
        touched: { ...prev.touched, [name]: true },
        errors: {
          ...prev.errors,
          [name]: validateField(name, newValue),
        },
      }))
    },
    [validateField]
  )

  const handleBlur = useCallback((
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target
    setFormState((prev) => ({
      ...prev,
      touched: { ...prev.touched, [name]: true },
    }))
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setSubmitError(null)

      const errors = validateForm()
      if (Object.keys(errors).length > 0) {
        setFormState((prev) => ({
          ...prev,
          errors,
          touched: Object.keys(prev.values).reduce(
            (acc, key) => ({ ...acc, [key]: true }),
            {}
          ),
        }))
        return
      }

      setIsSubmitting(true)
      try {
        await onSubmit(formState.values)
        // Reset form on successful submission
        setFormState({
          values: initialValues,
          errors: {},
          touched: {},
        })
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : 'An error occurred')
      } finally {
        setIsSubmitting(false)
      }
    },
    [formState.values, initialValues, onSubmit, validateForm]
  )

  const reset = useCallback(() => {
    setFormState({
      values: initialValues,
      errors: {},
      touched: {},
    })
    setSubmitError(null)
  }, [initialValues])

  return {
    values: formState.values,
    errors: formState.errors,
    touched: formState.touched,
    isSubmitting,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  }
}
