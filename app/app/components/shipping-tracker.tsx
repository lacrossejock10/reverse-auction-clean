'use client'

import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

export function ShippingTracker() {
  const [trackingNumber, setTrackingNumber] = useState('')

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to track the shipment
    console.log('Tracking shipment:', trackingNumber)
  }

  return (
    <Card>
      <CardHeader className="bg-secondary">
        <CardTitle className="text-white">Track Your Shipment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleTrack} className="space-y-4">
          <div>
            <Input
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter tracking number"
              className="border-primary"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-white hover:bg-secondary">
            Track
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
