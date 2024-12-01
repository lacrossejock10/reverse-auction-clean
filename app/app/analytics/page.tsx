'use client'

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function Analytics() {
  const monthlyData = [
    { month: "November", revenue: 2500, deals: 5, avgRating: 4.8 },
    { month: "October", revenue: 3200, deals: 7, avgRating: 4.5 },
    { month: "September", revenue: 1800, deals: 4, avgRating: 4.7 }
  ]

  const topCategories = [
    { name: "Sports Memorabilia", deals: 12, revenue: 5500 },
    { name: "Textbooks", deals: 8, revenue: 2800 },
    { name: "Vintage Clothing", deals: 6, revenue: 1900 }
  ]

  const customerFeedback = [
    { id: 1, rating: 5, comment: "Great seller, item exactly as described!", date: "2023-11-25" },
    { id: 2, rating: 4, comment: "Quick shipping, good communication", date: "2023-11-20" },
    { id: 3, rating: 5, comment: "Excellent condition, fair price", date: "2023-11-15" }
  ]

  const calculateTotalRevenue = () => {
    return monthlyData.reduce((total, month) => total + month.revenue, 0)
  }

  const calculateAverageRating = () => {
    const total = monthlyData.reduce((sum, month) => sum + month.avgRating, 0)
    return (total / monthlyData.length).toFixed(1)
  }

  const calculateTotalDeals = () => {
    return monthlyData.reduce((total, month) => total + month.deals, 0)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">Analytics Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${calculateTotalRevenue()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{calculateAverageRating()}/5.0</p>
          </CardContent>
        </Card>

        <Card>
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
            {monthlyData.map((month) => (
              <Card key={month.month}>
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
              <Card key={category.name}>
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
              <Card key={feedback.id}>
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
    </div>
  )
}
