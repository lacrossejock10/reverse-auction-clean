'use client'

import { useRouter } from 'next/navigation'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card'

export default function Home() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">VT Reverse Auction</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader className="bg-secondary">
            <CardTitle className="text-white">Post a Request</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="itemName">Item Name</Label>
                <Input
                  id="itemName"
                  placeholder="Enter the item name"
                  className="border-primary"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the item you're looking for"
                  className="border-primary"
                />
              </div>
              <div>
                <Label htmlFor="maxPrice">Maximum Price ($)</Label>
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="Enter your maximum price"
                  className="border-primary"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-white hover:bg-secondary">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader className="bg-secondary">
              <CardTitle className="text-white">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Post your item request and maximum price</li>
                <li>Sellers review requests and make offers</li>
                <li>Choose the best offer and complete the transaction</li>
                <li>Receive your item and leave feedback</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-secondary">
              <CardTitle className="text-white">Why Choose Our Platform?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Verified VT memorabilia sellers
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Secure payment processing
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Buyer protection guarantee
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Direct communication with sellers
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Competitive pricing through reverse auction
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
