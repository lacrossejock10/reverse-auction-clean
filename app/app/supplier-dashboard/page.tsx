'use client'

import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Badge } from "../components/ui/badge"

interface Listing {
  id: number
  itemName: string
  requestedBy: string
  maxPrice: number
  yourOffer: number
  status: string
}

interface Deal {
  id: number
  itemName: string
  buyer: string
  finalPrice: number
  rating: number
  date: string
}

const SupplierDashboard: React.FC = () => {
  const [activeListings, setActiveListings] = useState<Listing[]>([
    {
      id: 1,
      itemName: "Vintage VT Football Jersey",
      requestedBy: "John Doe",
      maxPrice: 500,
      yourOffer: 450,
      status: "Pending"
    },
    {
      id: 2,
      itemName: "1999 Game Day Program",
      requestedBy: "Jane Smith",
      maxPrice: 100,
      yourOffer: 75,
      status: "Accepted"
    }
  ])

  const [completedDeals, setCompletedDeals] = useState<Deal[]>([
    {
      id: 3,
      itemName: "VT Championship Ring",
      buyer: "Mike Johnson",
      finalPrice: 1200,
      rating: 5,
      date: "2023-11-20"
    }
  ])

  const handleUpdateOffer = (id: number, newOffer: number) => {
    setActiveListings(prev =>
      prev.map(listing =>
        listing.id === id ? { ...listing, yourOffer: newOffer } : listing
      )
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">Supplier Dashboard</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Active Requests</h2>
          <div className="space-y-4">
            {activeListings.map((listing) => (
              <Card key={listing.id} className="border-secondary">
                <CardHeader className="bg-secondary">
                  <CardTitle className="text-white">{listing.itemName}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-primary">Requested by: {listing.requestedBy}</p>
                    <p className="text-primary">Max Price: ${listing.maxPrice}</p>
                    <p className="text-primary">Your Offer: ${listing.yourOffer}</p>
                    <Badge className={listing.status === 'Accepted' ? 'bg-green-500' : 'bg-blue-500'}>
                      {listing.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`offer-${listing.id}`}>Update Offer</Label>
                    <div className="flex space-x-2">
                      <Input
                        id={`offer-${listing.id}`}
                        type="number"
                        placeholder="Enter new offer"
                        className="border-primary"
                      />
                      <Button 
                        onClick={() => {
                          const input = document.getElementById(`offer-${listing.id}`) as HTMLInputElement
                          handleUpdateOffer(listing.id, Number(input.value))
                        }}
                        className="bg-primary text-white hover:bg-secondary"
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Completed Deals</h2>
          <div className="space-y-4">
            {completedDeals.map((deal) => (
              <Card key={deal.id} className="border-secondary">
                <CardHeader className="bg-secondary">
                  <CardTitle className="text-white">{deal.itemName}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary">Buyer: {deal.buyer}</p>
                  <p className="text-primary">Final Price: ${deal.finalPrice}</p>
                  <p className="text-primary">Rating: {deal.rating}/5</p>
                  <p className="text-primary">Date: {deal.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierDashboard
