'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Textarea } from "../components/ui/textarea"
import { Badge } from "../components/ui/badge"

interface UserProfile {
  name: string
  email: string
  bio: string
  location: string
  phone: string
  notifications: {
    email: boolean
    sms: boolean
    deals: boolean
  }
}

interface Bid {
  id: number
  itemName: string
  bidAmount: number
  status: string
  date: string
}

interface Listing {
  id: number
  itemName: string
  price: number
  bids: number
  status: string
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@vt.edu',
    bio: 'Passionate Hokie and collector of VT memorabilia.',
    location: 'Blacksburg, VA',
    phone: '(540) 555-0123',
    notifications: {
      email: true,
      sms: true,
      deals: false
    }
  })

  const [activeBids, setActiveBids] = useState<Bid[]>([
    { 
      id: 1, 
      itemName: 'Vintage VT Football Helmet', 
      bidAmount: 450, 
      status: 'Winning',
      date: '2023-11-25'
    },
    { 
      id: 2, 
      itemName: 'First Edition "The Stone Diaries"', 
      bidAmount: 180, 
      status: 'Outbid',
      date: '2023-11-24'
    }
  ])

  const [activeListings, setActiveListings] = useState<Listing[]>([
    { 
      id: 1, 
      itemName: 'VT Engineering Textbook Set', 
      price: 100, 
      bids: 3,
      status: 'Active'
    },
    { 
      id: 2, 
      itemName: 'Hokie Bird Plush Toy', 
      price: 25, 
      bids: 1,
      status: 'Active'
    }
  ])

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated profile to your backend
    alert('Profile updated successfully!')
  }

  const handleNotificationToggle = (type: keyof UserProfile['notifications']) => {
    setProfile(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }))
  }

  const handleCancelBid = (id: number) => {
    setActiveBids(prev => prev.filter(bid => bid.id !== id))
    alert('Bid cancelled successfully!')
  }

  const handleEndListing = (id: number) => {
    setActiveListings(prev => 
      prev.map(listing => 
        listing.id === id 
          ? { ...listing, status: 'Ended' }
          : listing
      )
    )
    alert('Listing ended successfully!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">User Profile</h1>
      
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="bg-secondary">
          <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Profile
          </TabsTrigger>
          <TabsTrigger value="bids" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            My Bids
          </TabsTrigger>
          <TabsTrigger value="listings" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            My Listings
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="border-secondary">
            <CardHeader className="bg-secondary">
              <CardTitle className="text-white">Edit Profile</CardTitle>
            </CardHeader>
            <CardContent className="bg-white">
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    className="border-primary"
                  />
                </div>
                <Button type="submit" className="bg-primary text-white hover:bg-secondary">
                  Update Profile
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bids">
          <div className="space-y-4">
            {activeBids.map((bid) => (
              <Card key={bid.id} className="border-secondary">
                <CardHeader className="bg-secondary">
                  <CardTitle className="text-white">{bid.itemName}</CardTitle>
                </CardHeader>
                <CardContent className="bg-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-primary font-medium">Bid Amount: ${bid.bidAmount}</p>
                      <p className="text-primary">Date: {bid.date}</p>
                      <Badge className={bid.status === 'Winning' ? 'bg-green-500' : 'bg-red-500'}>
                        {bid.status}
                      </Badge>
                    </div>
                    <Button 
                      onClick={() => handleCancelBid(bid.id)}
                      className="bg-red-500 text-white hover:bg-red-600"
                    >
                      Cancel Bid
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="listings">
          <div className="space-y-4">
            {activeListings.map((listing) => (
              <Card key={listing.id} className="border-secondary">
                <CardHeader className="bg-secondary">
                  <CardTitle className="text-white">{listing.itemName}</CardTitle>
                </CardHeader>
                <CardContent className="bg-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-primary font-medium">Price: ${listing.price}</p>
                      <p className="text-primary">Number of Bids: {listing.bids}</p>
                      <Badge className={listing.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}>
                        {listing.status}
                      </Badge>
                    </div>
                    {listing.status === 'Active' && (
                      <Button 
                        onClick={() => handleEndListing(listing.id)}
                        className="bg-primary text-white hover:bg-secondary"
                      >
                        End Listing
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="border-secondary">
            <CardHeader className="bg-secondary">
              <CardTitle className="text-white">Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="bg-white space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <Button
                  id="email-notifications"
                  onClick={() => handleNotificationToggle('email')}
                  variant={profile.notifications.email ? 'default' : 'outline'}
                  className={profile.notifications.email ? 'bg-primary text-white' : ''}
                >
                  {profile.notifications.email ? 'Enabled' : 'Disabled'}
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notifications">SMS Notifications</Label>
                <Button
                  id="sms-notifications"
                  onClick={() => handleNotificationToggle('sms')}
                  variant={profile.notifications.sms ? 'default' : 'outline'}
                  className={profile.notifications.sms ? 'bg-primary text-white' : ''}
                >
                  {profile.notifications.sms ? 'Enabled' : 'Disabled'}
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="deals-notifications">Deal Alerts</Label>
                <Button
                  id="deals-notifications"
                  onClick={() => handleNotificationToggle('deals')}
                  variant={profile.notifications.deals ? 'default' : 'outline'}
                  className={profile.notifications.deals ? 'bg-primary text-white' : ''}
                >
                  {profile.notifications.deals ? 'Enabled' : 'Disabled'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
