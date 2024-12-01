import { useState, useEffect } from 'react'
import { api } from '../utils/api'
import type { ApiResponse, ItemRequest, User, Offer } from '../types'

interface UseDataOptions<T> {
  endpoint: string
  initialData?: T
  dependencies?: any[]
  transform?: (data: T) => T
}

export function useData<T>({
  endpoint,
  initialData,
  dependencies = [],
  transform,
}: UseDataOptions<T>) {
  const [data, setData] = useState<T | undefined>(initialData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const fetchData = async (showLoading = true) => {
    if (showLoading) {
      setIsLoading(true)
    } else {
      setIsRefreshing(true)
    }
    setError(null)

    try {
      const response: ApiResponse<T> = await api.get(endpoint)
      
      if (response.error) {
        throw new Error(response.error)
      }

      if (response.data) {
        const transformedData = transform ? transform(response.data) : response.data
        setData(transformedData)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching data')
    } finally {
      if (showLoading) {
        setIsLoading(false)
      } else {
        setIsRefreshing(false)
      }
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  const refresh = () => fetchData(false)

  return {
    data,
    isLoading,
    error,
    isRefreshing,
    refresh,
  }
}

// Specialized hook for item requests
export function useItemRequests() {
  return useData<ItemRequest[]>({
    endpoint: '/api/item-requests',
    initialData: [],
    transform: (data) => {
      // Sort by creation date, newest first
      return [...data].sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    }
  })
}

// Specialized hook for user data
export function useUser(userId: string) {
  return useData<User>({
    endpoint: `/api/users/${userId}`,
    dependencies: [userId],
  })
}

// Specialized hook for offers
export function useOffers(itemRequestId: string) {
  return useData<Offer[]>({
    endpoint: `/api/item-requests/${itemRequestId}/offers`,
    dependencies: [itemRequestId],
    initialData: [],
  })
}
