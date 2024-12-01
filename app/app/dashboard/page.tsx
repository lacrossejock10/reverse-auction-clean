'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { MessageSystem } from '../components/message-system'
import { ShippingTracker } from '../components/shipping-tracker'

export default function Dashboard() {
  const [activeRequests, setActiveRequests] = useState([
    { 
      id: 1, 
      itemName: 'Vintage VT Football Jersey', 
      price: 500, 
      description: 'Looking for a vintage VT football jersey from the 1990s, preferably in good condition with no major damage.',
      status: 'Pending' 
    },
    { 
      id: 2, 
      itemName: 'Vintage Hokie Bird Mascot Costume', 
      price: 1000, 
      description: 'Seeking an authentic Hokie Bird mascot costume from any era.',
      status: 'Accepted' 
    },
  ])

  const [completedRequests, setCompletedRequests] = useState([
    { 
      id: 3, 
      itemName: 'Antique Virginia Tech Yearbook', 
      price: 750, 
      description: 'Successfully acquired a 1950s VT yearbook in excellent condition.',
      status: 'Completed' 
    },
  ])

  const handleCancelRequest = (id: number) => {
    setActiveRequests(prev => prev.filter(req => req.id !== id))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">My Dashboard</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <Tabs defaultValue="active">
            <TabsList>
              <TabsTrigger value="active">Active Requests</TabsTrigger>
              <TabsTrigger value="completed">Completed Requests</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <div className="space-y-4">
                {activeRequests.map((request) => (
                  <Card key={request.id}>
                    <CardHeader className="bg-secondary">
                      <CardTitle className="text-white">{request.itemName}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-primary font-medium">Price: ${request.price}</p>
                      <p className="text-gray-600 mb-4">{request.description}</p>
                      <p className="text-primary font-medium">Status: {request.status}</p>
                      <div className="mt-4 space-x-2">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                          Edit Request
                        </Button>
                        {request.status === 'Pending' && (
                          <Button 
                            onClick={() => handleCancelRequest(request.id)}
                            className="bg-red-500 text-white hover:bg-red-600"
                          >
                            Cancel Request
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="completed">
              <div className="space-y-4">
                {completedRequests.map((request) => (
                  <Card key={request.id}>
                    <CardHeader className="bg-secondary">
                      <CardTitle className="text-white">{request.itemName}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-primary font-medium">Price: ${request.price}</p>
                      <p className="text-gray-600 mb-4">{request.description}</p>
                      <p className="text-primary font-medium">Status: {request.status}</p>
                      <div className="mt-4 space-x-2">
                        <Button className="bg-primary text-white hover:bg-secondary">
                          Leave Feedback
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <ShippingTracker />
        </div>
        <div>
          <MessageSystem />
        </div>
      </div>
    </div>
  )
}
