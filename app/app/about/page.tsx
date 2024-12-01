'use client'

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function About() {
  const features = [
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
    }
  ]

  const benefits = [
    {
      title: "Save Time and Money",
      description: "Let suppliers come to you with their best offers instead of spending hours searching.",
      icon: "⏰"
    },
    {
      title: "Verified Suppliers",
      description: "All suppliers are verified to ensure quality and reliability.",
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
    }
  ]

  const faqs = [
    {
      question: "How does pricing work?",
      answer: "You set your maximum price when posting a request. Suppliers can then make offers at or below your maximum price. You're never charged more than your stated maximum."
    },
    {
      question: "What if I'm not satisfied with my purchase?",
      answer: "We offer a comprehensive buyer protection program. If the item doesn't match the description or doesn't arrive, you'll receive a full refund."
    },
    {
      question: "How long do suppliers have to respond?",
      answer: "Requests remain active for 7 days by default, but you can set a custom deadline when posting your request."
    },
    {
      question: "Can I negotiate with suppliers?",
      answer: "Yes! Once a supplier makes an offer, you can communicate with them through our messaging system to discuss details or negotiate terms."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">How It Works</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature) => (
          <Card key={feature.title} className="border-secondary">
            <CardHeader className="bg-secondary">
              <CardTitle className="text-white flex items-center">
                <span className="text-2xl mr-2">{feature.icon}</span>
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-white">
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-primary">Why Choose Our Platform?</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {benefits.map((benefit) => (
          <Card key={benefit.title} className="border-primary">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
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

      <h2 className="text-3xl font-bold mb-8 text-primary">Frequently Asked Questions</h2>
      
      <div className="space-y-6 mb-8">
        {faqs.map((faq) => (
          <Card key={faq.question} className="border-secondary">
            <CardHeader className="bg-secondary">
              <CardTitle className="text-white">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent className="bg-white">
              <p className="text-gray-600">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="text-primary">Ready to Get Started?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Join our community of buyers and sellers to find the items you're looking for at the best prices.
          </p>
          <p className="text-gray-600">
            If you have any questions, our support team is available 24/7 to help you get started.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
