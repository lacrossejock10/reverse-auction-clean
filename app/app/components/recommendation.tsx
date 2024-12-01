'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Slider } from "./ui/slider"
import { Label } from "./ui/label"

interface RecommendedItem {
  id: number
  title: string
  price: number
  condition: string
  seller: string
  rating: number
}

export function Recommendations() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [items] = useState<RecommendedItem[]>([
    {
      id: 1,
      title: "VT Championship Ring 1999",
      price: 850,
      condition: "Excellent",
      seller: "VintageHokie",
      rating: 4.8
    },
    {
      id: 2,
      title: "Game Day Program Collection",
      price: 200,
      condition: "Good",
      seller: "SportsCollector",
      rating: 4.5
    }
  ])

  const filteredItems = items.filter(item => 
    item.price >= priceRange[0] && item.price <= priceRange[1]
  )

  return (
    <Card className="border-secondary">
      <CardHeader className="bg-secondary">
        <CardTitle className="text-white">Recommended Items</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Price Range: ${priceRange[0]} - ${priceRange[1]}</Label>
          <Slider
            defaultValue={[0, 1000]}
            max={1000}
            step={50}
            onValueChange={setPriceRange}
            className="w-full"
          />
        </div>
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="border-primary">
              <CardHeader>
                <CardTitle className="text-primary flex items-center justify-between">
                  {item.title}
                  <Badge className="bg-primary">${item.price}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Condition: {item.condition}</p>
                  <p className="text-sm text-gray-600">Seller: {item.seller}</p>
                  <p className="text-sm text-gray-600">Rating: {item.rating}/5</p>
                  <Button className="w-full bg-primary text-white hover:bg-secondary">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
