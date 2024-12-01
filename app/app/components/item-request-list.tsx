'use client'

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { useItemRequests } from "../../hooks/useData"
import { Button } from "../components/ui/button"

export function ItemRequestList() {
  const { data: requests, isLoading, error, refresh, isRefreshing } = useItemRequests()

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((n) => (
          <Card key={n} className="animate-pulse">
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-md">
        <p className="font-medium">Error: {error}</p>
        <div className="mt-4 flex space-x-4">
          <Button 
            onClick={() => refresh()}
            disabled={isRefreshing}
            variant="outline"
            className="text-red-700 border-red-700 hover:bg-red-50"
          >
            {isRefreshing ? 'Retrying...' : 'Try again'}
          </Button>
        </div>
      </div>
    )
  }

  if (!requests || requests.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-md">
        <p className="text-gray-600 mb-4">No item requests found</p>
        <Button 
          onClick={() => refresh()} 
          disabled={isRefreshing}
          variant="outline"
        >
          {isRefreshing ? 'Refreshing...' : 'Refresh'}
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Item Requests</h2>
        <Button 
          onClick={() => refresh()} 
          disabled={isRefreshing}
          variant="outline"
          size="sm"
        >
          {isRefreshing ? 'Refreshing...' : 'Refresh'}
        </Button>
      </div>

      {requests.map((request) => (
        <Card 
          key={request.id} 
          className="hover:shadow-md transition-shadow duration-200"
        >
          <CardHeader>
            <CardTitle className="text-primary flex justify-between items-center">
              <span>{request.itemName}</span>
              <span className={`text-sm px-2 py-1 rounded ${
                request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                request.status === 'active' ? 'bg-green-100 text-green-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-gray-700">{request.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-black font-medium">Category: {request.category}</p>
                <p className="text-black font-medium">Max Price: ${request.maxPrice.toLocaleString()}</p>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <p>
                  Posted: {new Date(request.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <Button 
                  variant="link" 
                  className="text-primary hover:text-primary/80"
                  onClick={() => window.location.href = `/item/${request.id}`}
                >
                  View Details →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
