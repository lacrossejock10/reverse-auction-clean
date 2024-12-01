'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

interface RatingReviewProps {
  itemName: string
  onSubmit: (rating: number, review: string) => void
}

export function RatingReview({ itemName, onSubmit }: RatingReviewProps) {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmit(rating, review)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rate and Review: {itemName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`cursor-pointer ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
        <Textarea
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="mb-4"
        />
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={rating === 0}>
          Submit Review
        </Button>
      </CardFooter>
    </Card>
  )
}

