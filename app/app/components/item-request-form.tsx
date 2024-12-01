'use client'

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { useForm } from "../../hooks/useForm"
import { api } from "../../utils/api"
import type { ItemRequest } from "../../types"

const validationRules = {
  itemName: {
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  description: {
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
  maxPrice: {
    required: true,
    custom: (value: number) => {
      if (isNaN(value) || value <= 0) {
        return 'Price must be greater than 0'
      }
      if (value > 1000000) {
        return 'Price cannot exceed $1,000,000'
      }
      return undefined
    },
  },
  category: {
    required: true,
  },
}

export function ItemRequestForm() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({
    initialValues: {
      itemName: '',
      description: '',
      maxPrice: '',
      category: 'Other',
    },
    validationRules,
    onSubmit: async (values) => {
      const response = await api.post<ItemRequest>('/api/item-requests', {
        ...values,
        maxPrice: parseFloat(values.maxPrice),
        status: 'pending',
        createdAt: new Date().toISOString(),
      })

      if (response.error) {
        throw new Error(response.error)
      }

      // Optionally redirect to the new item request
      if (response.data) {
        window.location.href = `/item/${response.data.id}`
      }
    },
  })

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitError && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md mb-4">
          {submitError}
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="itemName">Item Name</Label>
        <Input
          id="itemName"
          name="itemName"
          value={values.itemName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter the item name"
          className={`border-primary ${
            touched.itemName && errors.itemName ? 'border-red-500' : ''
          }`}
          disabled={isSubmitting}
        />
        {touched.itemName && errors.itemName && (
          <p className="text-red-500 text-sm mt-1">{errors.itemName}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <select
          id="category"
          name="category"
          value={values.category}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-md border border-primary px-3 py-2 ${
            touched.category && errors.category ? 'border-red-500' : ''
          }`}
          disabled={isSubmitting}
        >
          <option value="Other">Other</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Clothing">Clothing</option>
          <option value="Sports">Sports</option>
          <option value="Collectibles">Collectibles</option>
        </select>
        {touched.category && errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Describe the item you're looking for"
          className={`border-primary min-h-[100px] ${
            touched.description && errors.description ? 'border-red-500' : ''
          }`}
          disabled={isSubmitting}
        />
        {touched.description && errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="maxPrice">Maximum Price ($)</Label>
        <Input
          id="maxPrice"
          name="maxPrice"
          type="number"
          value={values.maxPrice}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your maximum price"
          className={`border-primary ${
            touched.maxPrice && errors.maxPrice ? 'border-red-500' : ''
          }`}
          disabled={isSubmitting}
          min="0"
          step="0.01"
        />
        {touched.maxPrice && errors.maxPrice && (
          <p className="text-red-500 text-sm mt-1">{errors.maxPrice}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full bg-primary text-white hover:bg-secondary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </Button>
    </form>
  )
}
