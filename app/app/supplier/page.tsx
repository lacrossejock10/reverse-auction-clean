'use client'

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"

export default function Supplier() {
  const activeRequests = [
    {
      id: 1,
      itemName: "Vintage VT Football Jersey",
      maxPrice: 500,
      description: "Looking for a vintage VT football jersey from the 1990s, preferably in good condition with no major damage.",
      requestedBy: "JohnDoe",
      postedDate: "2 hours ago"
    },
    {
      id: 2,
      itemName: "1995 Championship Ring",
      maxPrice: 2500,
      description: "Looking for an authentic 1995 VT Championship ring. Must be in excellent condition with original engravings and stones intact.",
      requestedBy: "HokieFan99",
      postedDate: "5 hours ago"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">Supplier Dashboard</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-secondary">Active Requests</h2>
          {activeRequests.map((request) => (
            <Card key={request.id}>
              <CardHeader className="bg-secondary">
                <CardTitle className="text-white">{request.itemName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium">Max Price: ${request.maxPrice}</p>
                <p className="text-gray-600 my-2">{request.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                  <p>Requested by: {request.requestedBy}</p>
                  <p>Posted: {request.postedDate}</p>
                </div>
                <div className="mt-4 space-x-2">
                  <Button className="bg-primary text-white hover:bg-secondary">
                    Make Offer
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Message Buyer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="bg-secondary">
              <CardTitle className="text-white">Your Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold text-primary">$7,500</p>
              </div>
              <div>
                <p className="text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-primary">4.8/5.0</p>
              </div>
              <div>
                <p className="text-gray-600">Completed Deals</p>
                <p className="text-2xl font-bold text-primary">16</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-secondary">
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full bg-primary text-white hover:bg-secondary">
                View Active Offers
              </Button>
              <Button className="w-full bg-primary text-white hover:bg-secondary">
                Check Messages
              </Button>
              <Button className="w-full bg-primary text-white hover:bg-secondary">
                Update Inventory
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
