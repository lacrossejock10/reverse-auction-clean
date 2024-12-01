'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Notification } from '../components/notification'

const categories = [
  "All",
  "Antiques",
  "Art",
  "Books",
  "Collectibles",
  "Comics",
  "Electronics",
  "Fashion",
  "Jewelry",
  "Music",
  "Sports Memorabilia",
  "Toys",
  "Other"
]

const statusOptions = [
  "Accepted",
  "Processing",
  "Shipped",
  "Delivered",
  "Completed"
]

export default function SupplierDashboard() {
  const [availableRequests, setAvailableRequests] = useState([
    { id: 1, itemName: 'Rare Baseball Card', description: '1952 Topps Mickey Mantle', price: 500, category: 'Sports Memorabilia' },
    { id: 2, itemName: 'Vintage Comic Book', description: 'First appearance of Spider-Man', price: 1000, category: 'Comics' },
    { id: 3, itemName: 'Antique Pocket Watch', description: '19th century gold pocket watch', price: 750, category: 'Antiques' },
  ])

  const [acceptedRequests, setAcceptedRequests] = useState([
    { id: 4, itemName: 'Rare Stamp', description: 'Inverted Jenny stamp', price: 200, category: 'Collectibles', status: 'Accepted' },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [notification, setNotification] = useState<{ message: string; type: 'info' | 'success' | 'warning' | 'error' } | null>(null)

  const handleAccept = (id: number) => {
    const request = availableRequests.find(req => req.id === id)
    if (request) {
      setAvailableRequests(availableRequests.filter(req => req.id !== id))
      setAcceptedRequests([...acceptedRequests, { ...request, status: 'Accepted' }])
      setNotification({ message: `Request for ${request.itemName} accepted!`, type: 'success' })
    }
  }

  const handleStatusUpdate = (id: number, newStatus: string) => {
    setAcceptedRequests(acceptedRequests.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    ))
    const updatedRequest = acceptedRequests.find(req => req.id === id)
    if (updatedRequest) {
      setNotification({ message: `Status for ${updatedRequest.itemName} updated to ${newStatus}`, type: 'info' })
    }
  }

  const filteredAvailableRequests = availableRequests.filter(request => 
    (selectedCategory === 'All' || request.category === selectedCategory) &&
    (request.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
     request.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Supplier Dashboard</h1>
      <Tabs defaultValue="available">
        <TabsList>
          <TabsTrigger value="available">Available Requests</TabsTrigger>
          <TabsTrigger value="accepted">Accepted Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="available">
          <div className="mb-4 flex space-x-4">
            <Input
              placeholder="Search requests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            {filteredAvailableRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {request.itemName}
                    <Badge>{request.category}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{request.description}</p>
                  <p className="font-bold mb-4">Max Price: ${request.price}</p>
                  <Button onClick={() => handleAccept(request.id)}>Accept Request</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="accepted">
          <div className="space-y-4">
            {acceptedRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {request.itemName}
                    <Badge>{request.category}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{request.description}</p>
                  <p className="font-bold mb-2">Price: ${request.price}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <p>Status:</p>
                    <Select
                      value={request.status}
                      onValueChange={(newStatus) => handleStatusUpdate(request.id, newStatus)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Update status" />
                      </SelectTrigger>
                      <SelectContent>
                        {statusOptions.map((status) => (
                          <SelectItem key={status} value={status}>{status}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  )
}

