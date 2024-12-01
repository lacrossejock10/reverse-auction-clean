'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for demonstration
const mockAnalytics = {
  totalSales: 15000,
  completedRequests: 50,
  averageRating: 4.7,
  topCategories: [
    { name: 'Sports Memorabilia', sales: 5000 },
    { name: 'Comics', sales: 4000 },
    { name: 'Antiques', sales: 3000 },
    { name: 'Collectibles', sales: 2000 },
    { name: 'Art', sales: 1000 },
  ],
  monthlySales: {
    'Last 30 Days': 5000,
    'Last 60 Days': 9000,
    'Last 90 Days': 15000,
  }
}

export default function SupplierAnalytics() {
  const [timeFrame, setTimeFrame] = useState('Last 30 Days')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Supplier Analytics</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${mockAnalytics.totalSales}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completed Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{mockAnalytics.completedRequests}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{mockAnalytics.averageRating.toFixed(1)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {mockAnalytics.topCategories.map((category, index) => (
                <li key={index} className="flex justify-between mb-2">
                  <span>{category.name}</span>
                  <span>${category.sales}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Sales Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <p className="text-3xl font-bold">${mockAnalytics.monthlySales[timeFrame]}</p>
            <Select value={timeFrame} onValueChange={setTimeFrame}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time frame" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(mockAnalytics.monthlySales).map((key) => (
                  <SelectItem key={key} value={key}>{key}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Here you would typically include a chart component */}
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            Chart placeholder
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

