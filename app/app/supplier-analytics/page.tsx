'use client'

import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"

interface SalesData {
  month: string
  revenue: number
  deals: number
  avgRating: number
}

const SupplierAnalytics: React.FC = () => {
  const [salesData] = useState<SalesData[]>([
    { month: "November", revenue: 2500, deals: 5, avgRating: 4.8 },
    { month: "October", revenue: 3200, deals: 7, avgRating: 4.5 },
    { month: "September", revenue: 1800, deals: 4, avgRating: 4.7 }
  ])

  const [topCategories] = useState([
    { name: "Sports Memorabilia", deals: 12, revenue: 5500 },
    { name: "Textbooks", deals: 8, revenue: 2800 },
    { name: "Vintage Clothing", deals: 6, revenue: 1900 }
  ])

  const [customerFeedback] = useState([
    { id: 1, rating: 5, comment: "Great seller, item exactly as described!", date: "2023-11-25" },
    { id: 2, rating: 4, comment: "Quick shipping, good communication", date: "2023-11-20" },
    { id: 3, rating: 5, comment: "Excellent condition, fair price", date: "2023-11-15" }
  ])

  const calculateTotalRevenue = () => {
    return salesData.reduce((total, month) => total + month.revenue, 0)
  }

  const calculateAverageRating = () => {
    const total = salesData.reduce((sum, month) => sum + month.avgRating, 0)
    return (total / salesData.length).toFixed(1)
  }

  const calculateTotalDeals = () => {
    return salesData.reduce((total, month) => total + month.deals, 0)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">Supplier Analytics</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="text-primary">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${calculateTotalRevenue()}</p>
          </CardContent>
        </Card>

        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="text-primary">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{calculateAverageRating()}/5.0</p>
          </CardContent>
        </Card>

        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="text-primary">Total Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{calculateTotalDeals()}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="monthly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="monthly">Monthly Performance</TabsTrigger>
          <TabsTrigger value="categories">Top Categories</TabsTrigger>
          <TabsTrigger value="feedback">Customer Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="monthly">
          <div className="space-y-4">
            {salesData.map((month) => (
              <Card key={month.month} className="border-secondary">
                <CardHeader className="bg-secondary">
                  <CardTitle className="text-white">{month.month}</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Revenue</p>
                    <p className="text-lg font-bold text-primary">${month.revenue}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Deals</p>
                    <p className="text-lg font-bold text-primary">{month.deals}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Avg Rating</p>
                    <p className="text-lg font-bold text-primary">{month.avgRating}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories">
          <div className="space-y-4">
            {topCategories.map((category) => (
              <Card key={category.name} className="border-secondary">
                <CardHeader className="bg-secondary">
                  <CardTitle className="text-white">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Total Deals</p>
                    <p className="text-lg font-bold text-primary">{category.deals}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Revenue</p>
                    <p className="text-lg font-bold text-primary">${category.revenue}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="feedback">
          <div className="space-y-4">
            {customerFeedback.map((feedback) => (
              <Card key={feedback.id} className="border-secondary">
                <CardHeader className="bg-secondary">
                  <CardTitle className="text-white">Rating: {feedback.rating}/5</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary">{feedback.comment}</p>
                  <p className="text-sm text-gray-500 mt-2">Date: {feedback.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <Button className="bg-primary text-white hover:bg-secondary">
          Download Full Report
        </Button>
      </div>
    </div>
  )
}

export default SupplierAnalytics
