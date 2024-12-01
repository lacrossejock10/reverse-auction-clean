'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

export function ItemGallery() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Vintage VT Football Jersey",
      description: "Authentic game-worn jersey from the 1999 season",
      maxPrice: 500,
      deadline: "2024-12-31",
      location: "Blacksburg, VA"
    },
    {
      id: 2,
      title: "First Edition Engineering Textbook",
      description: "Rare first edition of Virginia Tech's custom engineering manual",
      maxPrice: 200,
      deadline: "2024-12-15",
      location: "Christiansburg, VA"
    }
  ])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="border-secondary">
          <CardHeader className="bg-secondary">
            <CardTitle className="text-white">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="bg-white">
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="space-y-2">
              <p className="text-primary font-medium">Max Price: ${item.maxPrice}</p>
              <p className="text-primary">Deadline: {item.deadline}</p>
              <p className="text-primary">Location: {item.location}</p>
            </div>
            <Button className="w-full mt-4 bg-primary text-white hover:bg-secondary">
              Make Offer
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
