'use client'

import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ScrollArea } from "./ui/scroll-area"

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  avatar?: string
}

export function MessageSystem() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "VintageHokie",
      content: "I have a jersey that matches your description. Would you like to see photos?",
      timestamp: "2 mins ago",
      avatar: "/avatars/hokie1.png"
    },
    {
      id: 2,
      sender: "System",
      content: "Your request for 'Vintage VT Football Jersey' has been posted successfully.",
      timestamp: "5 mins ago"
    }
  ])

  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message: Message = {
      id: messages.length + 1,
      sender: "You",
      content: newMessage,
      timestamp: "Just now"
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  return (
    <Card className="border-secondary h-[600px] flex flex-col">
      <CardHeader className="bg-secondary">
        <CardTitle className="text-white">Messages</CardTitle>
      </CardHeader>
      <ScrollArea className="flex-grow p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-2 ${
                message.sender === "You" ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              {message.sender !== "System" && (
                <Avatar className="h-8 w-8">
                  {message.avatar ? (
                    <AvatarImage src={message.avatar} alt={message.sender} />
                  ) : (
                    <AvatarFallback>{message.sender[0]}</AvatarFallback>
                  )}
                </Avatar>
              )}
              <div
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.sender === "System"
                    ? "bg-gray-100 text-gray-600 mx-auto text-center"
                    : message.sender === "You"
                    ? "bg-primary text-white"
                    : "bg-secondary text-white"
                }`}
              >
                {message.sender !== "System" && (
                  <p className="font-semibold text-sm mb-1">{message.sender}</p>
                )}
                <p>{message.content}</p>
                <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow border-primary"
          />
          <Button type="submit" className="bg-primary text-white hover:bg-secondary">
            Send
          </Button>
        </div>
      </form>
    </Card>
  )
}
