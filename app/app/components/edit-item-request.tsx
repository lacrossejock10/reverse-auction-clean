'use client'

import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

interface EditItemRequestProps {
  request: {
    id: number
    itemName: string
    price: number
  }
  onSave: (updatedRequest: any) => void
}

export function EditItemRequest({ request, onSave }: EditItemRequestProps) {
  const [editedRequest, setEditedRequest] = useState({
    id: request.id,
    itemName: request.itemName,
    price: request.price
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(editedRequest)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
          Edit Request
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Item Request</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="itemName">Item Name</Label>
            <Input
              id="itemName"
              value={editedRequest.itemName}
              onChange={(e) => setEditedRequest({ ...editedRequest, itemName: e.target.value })}
              className="border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Maximum Price ($)</Label>
            <Input
              id="price"
              type="number"
              value={editedRequest.price}
              onChange={(e) => setEditedRequest({ ...editedRequest, price: Number(e.target.value) })}
              className="border-primary"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-white hover:bg-secondary">
            Save Changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
