'use client'

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"

export default function HowItWorks() {
  const steps = [
    {
      title: "Post Your Request",
      description: "Describe the item you're looking for and set your maximum price. Whether it's a rare collectible or a specific part, let suppliers know what you need.",
      icon: "📝"
    },
    {
      title: "Suppliers Respond",
      description: "Verified suppliers browse requests and can choose to fulfill your order if they can meet or beat your price.",
      icon: "🤝"
    },
    {
      title: "Secure Transaction",
      description: "Once a supplier accepts your request, your payment is processed securely. The supplier then ships your item directly to you.",
      icon: "🔒"
    },
    {
      title: "Leave Feedback",
      description: "After receiving your item, leave feedback for the supplier to help maintain our community's high standards.",
      icon: "⭐"
    }
  ]

  const benefits = [
    {
      title: "Verified Sellers",
      description: "All suppliers are thoroughly vetted to ensure authenticity and reliability.",
      icon: "✅"
    },
    {
      title: "Secure Payments",
      description: "Your payment is held securely until you receive and approve your item.",
      icon: "💳"
    },
    {
      title: "Buyer Protection",
      description: "Full refund if item doesn't match the description or doesn't arrive.",
      icon: "🛡️"
    },
    {
      title: "Direct Communication",
      description: "Message suppliers directly to discuss details or negotiate terms.",
      icon: "💬"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">How It Works</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-secondary">The Process</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={step.title} className="border-secondary">
                <CardHeader className="bg-secondary">
                  <CardTitle className="text-white flex items-center">
                    <span className="text-2xl mr-2">{step.icon}</span>
                    <span className="mr-2">{index + 1}.</span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Platform Benefits</h2>
          <div className="space-y-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-primary">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <span className="text-2xl mr-2">{benefit.icon}</span>
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
