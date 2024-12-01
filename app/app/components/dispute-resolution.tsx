'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface DisputeResolutionProps {
  itemName: string
  transactionId: string
  onSubmit: (disputeDetails: { reason: string; description: string }) => void
}

export function DisputeResolution({ itemName, transactionId, onSubmit }: DisputeResolutionProps) {
  const [reason, setReason] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ reason, description })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dispute Resolution for {itemName}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label>Reason for Dispute</Label>
              <RadioGroup value={reason} onValueChange={setReason}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="item-not-received" id="item-not-received" />
                  <Label htmlFor="item-not-received">Item Not Received</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="item-not-as-described" id="item-not-as-described" />
                  <Label htmlFor="item-not-as-described">Item Not as Described</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="damaged-item" id="damaged-item" />
                  <Label htmlFor="damaged-item">Damaged Item</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="description">Describe the Issue</Label>
              <Textarea
                id="description"
                placeholder="Please provide details about your dispute..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={!reason || !description}>Submit Dispute</Button>
      </CardFooter>
    </Card>
  )
}

