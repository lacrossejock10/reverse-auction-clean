'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface NotificationProps {
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
}

export function Notification({ message, type }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const bgColor = {
    info: 'bg-blue-100 border-blue-500',
    success: 'bg-green-100 border-green-500',
    warning: 'bg-yellow-100 border-yellow-500',
    error: 'bg-red-100 border-red-500'
  }[type]

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-md border ${bgColor} shadow-lg`}>
      <div className="flex items-center justify-between">
        <p className="mr-8">{message}</p>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

