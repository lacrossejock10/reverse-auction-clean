'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface ItemDetailProps {
  id: number
  name: string
  description: string
  maxPrice: number
  category: string
  seller: string
  endDate: string
}

export function ItemDetail({ id, name, description, maxPrice, category, seller, endDate }: ItemDetailProps) {
  const [bidAmount, setBidAmount] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleBid = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the bid to your backend
    console.log(`Bid placed: $${bidAmount} for item ${id}`)
    // For now, we'll just show an alert
    alert(`Bid of $${bidAmount} placed successfully!`)
  }

  const handleMessage = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the message to your backend
    console.log(`Message sent to seller of item ${id}: ${message}`)
    // For now, we'll just show an alert
    alert('Message sent successfully!')
    setMessage('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        onClick={() => router.back()} 
        className="mb-4 bg-primary text-white hover:bg-secondary"
      >
        Back to Gallery
      </Button>
      <Card className="border-secondary">
        <CardHeader className="bg-secondary">
          <CardTitle className="text-white text-2xl">{name}</CardTitle>
        </CardHeader>
        <CardContent className="bg-white p-6">
          <p className="text-primary font-medium mb-2">{description}</p>
          <p className="text-black font-semibold mb-2">Max Price: ${maxPrice}</p>
          <p className="text-primary font-medium mb-2">Category: {category}</p>
          <p className="text-primary font-medium mb-2">Seller: {seller}</p>
          <p className="text-primary font-medium mb-4">Auction Ends: {endDate}</p>
          
          <form onSubmit={handleBid} className="mb-6">
            <Label htmlFor="bidAmount" className="text-primary font-semibold">Your Bid:</Label>
            <div className="flex mt-2">
              <Input
                id="bidAmount"
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder="Enter bid amount"
                className="mr-2 border-primary"
              />
              <Button type="submit" className="bg-primary text-white hover:bg-secondary">
                Place Bid
              </Button>
            </div>
          </form>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-secondary text-white hover:bg-primary">
                Message Seller
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
              <DialogHeader>
                <DialogTitle className="text-primary">Message to Seller</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleMessage} className="space-y-4">
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="border-primary"
                />
                <Button type="submit" className="bg-primary text-white hover:bg-secondary">
                  Send Message
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  )
}

