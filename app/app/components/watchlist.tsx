'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, EyeOff } from 'lucide-react'

interface WatchlistItem {
  id: number
  name: string
  category: string
  currentPrice: number
  endTime: string
}

export function Watchlist() {
  const [watchlistItems, setWatchlistItems] = useState<WatchlistItem[]>([
    { id: 1, name: "Vintage Hokie Bird Statue", category: "VT Memorabilia", currentPrice: 150, endTime: "2023-07-01 15:00:00" },
    { id: 2, name: "Signed Frank Beamer Football", category: "Sports", currentPrice: 500, endTime: "2023-07-02 18:00:00" },
    { id: 3, name: "1896 VT Class Ring", category: "Jewelry", currentPrice: 1200, endTime: "2023-07-03 12:00:00" },
  ])

  const removeFromWatchlist = (id: number) => {
    setWatchlistItems(watchlistItems.filter(item => item.id !== id))
  }

  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="bg-primary text-white">
        <CardTitle className="text-xl font-bold">Your Watchlist</CardTitle>
      </CardHeader>
      <CardContent>
        {watchlistItems.length === 0 ? (
          <p className="text-center text-gray-500 my-4">Your watchlist is empty</p>
        ) : (
          <ul className="space-y-4">
            {watchlistItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b border-gray-200 pb-2">
                <div>
                  <h3 className="font-semibold text-primary">{item.name}</h3>
                  <Badge variant="secondary" className="mt-1">{item.category}</Badge>
                  <p className="text-sm text-gray-600 mt-1">Current Price: ${item.currentPrice}</p>
                  <p className="text-xs text-gray-500">Ends: {new Date(item.endTime).toLocaleString()}</p>
                </div>
                <Button variant="ghost" onClick={() => removeFromWatchlist(item.id)}>
                  <EyeOff className="h-5 w-5 text-primary" />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

