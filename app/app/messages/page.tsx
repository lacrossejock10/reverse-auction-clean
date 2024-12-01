'use client'

import { MessageSystem } from "../components/message-system"

export default function Messages() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">Messages</h1>
      <div className="max-w-4xl mx-auto">
        <MessageSystem />
      </div>
    </div>
  )
}
