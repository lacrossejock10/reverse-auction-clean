'use client'

import { useParams } from 'next/navigation'
import { ItemDetail } from '@/components/item-detail'

// This would typically come from an API call
const items = [
  { id: 1, name: "Vintage VT Football Helmet", description: "1970s game-worn helmet", maxPrice: 500, category: "Sports Memorabilia", seller: "HokieCollector", endDate: "2023-12-31" },
  { id: 2, name: "First Edition 'The Stone Diaries'", description: "Signed by author Carol Shields", maxPrice: 200, category: "Books", seller: "LiteraryEnthusiast", endDate: "2023-12-25" },
  { id: 3, name: "Original Hokie Bird Costume Piece", description: "Authentic feather from 1980s costume", maxPrice: 150, category: "Collectibles", seller: "VTMemorabiliaFan", endDate: "2023-12-28" },
  { id: 4, name: "VT Engineering Slide Rule", description: "Used by 1950s VT engineering students", maxPrice: 75, category: "Academic", seller: "EngineeringAlum", endDate: "2023-12-30" },
]

export default function ItemDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const item = items.find(item => item.id === id)

  if (!item) {
    return <div className="text-center text-primary font-bold mt-8">Item not found</div>
  }

  return <ItemDetail {...item} />
}

