'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EscrowPaymentProps {
  itemName: string
  price: number
  onPaymentComplete: () => void
}

export function EscrowPayment({ itemName, price, onPaymentComplete }: EscrowPaymentProps) {
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'processing' | 'completed'>('pending')

  const handlePayment = () => {
    setPaymentStatus('processing')
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus('completed')
      onPaymentComplete()
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Secure Payment for {itemName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Total Amount: ${price}</p>
        <div className="space-y-4">
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input id="expiryDate" placeholder="MM/YY" />
            </div>
            <div className="flex-1">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="123" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handlePayment} 
          disabled={paymentStatus !== 'pending'}
          className="w-full"
        >
          {paymentStatus === 'pending' && 'Pay Now'}
          {paymentStatus === 'processing' && 'Processing...'}
          {paymentStatus === 'completed' && 'Payment Completed'}
        </Button>
      </CardFooter>
    </Card>
  )
}

