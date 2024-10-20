import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown, ChevronUp, Car, Users, DollarSign, Target, Smartphone, TrendingUp, Globe } from 'lucide-react';

const ExpandableSection = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-4 transition-all duration-300 hover:scale-102 active:scale-98">
      <CardHeader 
        className="cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardTitle className="flex justify-between items-center">
          {title}
          <ChevronDown className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </CardTitle>
      </CardHeader>
      <div
        className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}
      >
        <CardContent>
          {content}
        </CardContent>
      </div>
    </Card>
  );
};

const InfoDialog = ({ title, content, buttonText }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>{buttonText}</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{content}</DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default function AnimatedHomepage() {
  const [activeTab, setActiveTab] = useState("drivers");

  const handleSubscribe = (plan) => {
    console.log(`Subscribed to ${plan} plan`);
    // Here you would typically handle the subscription process
  };

  const handleSignUp = (type) => {
    console.log(`Signed up as ${type}`);
    // Here you would typically handle the sign-up process
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-6 bg-primary text-primary-foreground animate-fadeIn">
        <h1 className="text-3xl font-bold animate-slideInLeft">RideShare</h1>
        <p className="mt-2 animate-slideInLeft animation-delay-200">
          Revolutionizing ride-sharing with subscription-based, commission-free rides - Launching first in Melbourne!
        </p>
      </header>

      <main className="container mx-auto p-6 space-y-12">
        <section className="animate-fadeInUp">
          <h2 className="text-2xl font-semibold mb-4">Value Proposition</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="drivers">For Drivers</TabsTrigger>
              <TabsTrigger value="passengers">For Passengers</TabsTrigger>
            </TabsList>
            <TabsContent value="drivers">
              <Card className="animate-fadeInUp animation-delay-200">
                <CardHeader>
                  <CardTitle>Driver Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Keep 100% of your earnings with our subscription model</li>
                    <li>Same-day payout system</li>
                    <li>Easy onboarding with less stringent requirements</li>
                    <li>Perks including vehicle maintenance discounts and insurance partnerships</li>
                    <li>Free first month subscription for new drivers</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <InfoDialog 
                    title="Driver Sign Up Process" 
                    content="Our streamlined sign-up process includes: 1) Online application, 2) Document verification, 3) Background check, 4) Vehicle inspection, 5) App orientation. Get started in as little as 24 hours!" 
                    buttonText="Learn About Sign Up"
                  />
                  <Button className="ml-2" onClick={() => handleSignUp('driver')}>Sign Up as a Driver</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="passengers">
              <Card className="animate-fadeInUp animation-delay-200">
                <CardHeader>
                  <CardTitle>Passenger Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Lower fares due to elimination of commission fees</li>
                    <li>Carpooling options for even more affordable rides</li>
                    <li>Enhanced safety measures including real-time tracking</li>
                    <li>Special offers for students and frequent riders</li>
                    <li>First ride free for new passengers</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <InfoDialog 
                    title="Passenger Safety Features" 
                    content="We prioritize your safety with features like real-time GPS tracking, emergency contact integration, driver background checks, and a comprehensive rating system." 
                    buttonText="Learn About Safety"
                  />
                  <Button className="ml-2" onClick={() => handleSignUp('passenger')}>Sign Up as a Passenger</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="animate-fadeInUp animation-delay-400">
          <h2 className="text-2xl font-semibold mb-4">Revenue Model</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Daily Subscription", description: "Perfect for occasional drivers", price: "$10/day", details: "Unlimited rides within 24 hours" },
              { title: "Weekly Subscription", description: "Great for part-time drivers", price: "$60/week", details: "Unlimited rides for 7 days" },
              { title: "Monthly Subscription", description: "Best value for full-time drivers", price: "$180/month", details: "Unlimited rides for 30 days" }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className="transition-all duration-300 hover:scale-105 active:scale-95 animate-fadeInUp"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{plan.price}</p>
                  <p>{plan.details}</p>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSubscribe(plan.title.toLowerCase())}>Subscribe</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-fadeInUp animation-delay-600">
          <h2 className="text-2xl font-semibold mb-4">Strategies & Expansion Plans</h2>
          <ExpandableSection 
            title="Launch Strategy" 
            content={
              <div>
                <p>Our initial launch in Melbourne focuses on:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Targeted campus outreach at major universities</li>
                  <li>Partnerships with local businesses and events</li>
                  <li>Digital marketing campaigns on social media platforms</li>
                  <li>Promotional offers and discounts for early adopters</li>
                </ul>
              </div>
            }
          />
          <ExpandableSection 
            title="Expansion Plans" 
            content={
              <div>
                <p>After establishing a strong presence in Melbourne, we plan to:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Expand to other major Australian cities</li>
                  <li>Adapt our model to suit each new market's unique needs</li>
                  <li>Develop partnerships with local transportation authorities</li>
                  <li>Explore international expansion opportunities</li>
                </ul>
              </div>
            }
          />
          <ExpandableSection 
            title="Driver Acquisition Strategy" 
            content={
              <div>
                <p>Our approach to attracting and retaining drivers includes:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Flexible subscription tiers catering to various driving schedules</li>
                  <li>Free first-month trial for new drivers</li>
                  <li>Partnerships with vehicle maintenance services for exclusive discounts</li>
                  <li>Referral program with incentives for bringing new drivers onboard</li>
                </ul>
              </div>
            }
          />
          <ExpandableSection 
            title="Passenger Acquisition Strategy" 
            content={
              <div>
                <p>We aim to grow our user base through:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Introductory discounts for new passengers</li>
                  <li>Tailored offers for different user segments (e.g., students, business travelers)</li>
                  <li>Referral programs with ride credits</li>
                  <li>Targeted marketing campaigns for eco-conscious riders</li>
                </ul>
              </div>
            }
          />
          <ExpandableSection 
            title="Technical Strategy" 
            content={
              <div>
                <p>Our technical approach includes:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Intuitive app design for both drivers and passengers</li>
                  <li>Real-time tracking and safety features</li>
                  <li>Scalable cloud infrastructure to support global growth</li>
                  <li>Robust data analytics for continuous improvement</li>
                  <li>Localization features to easily adapt to new markets</li>
                </ul>
              </div>
            }
          />
        </section>

        <section className="animate-fadeInUp animation-delay-800">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Car, title: "For Drivers", content: "Keep 100% of your fares with our unique subscription model. Enjoy flexible work hours and same-day payouts, no matter where you drive." },
              { icon: Users, title: "For Passengers", content: "Enjoy lower fares, special offers, and eco-friendly carpooling options. Experience enhanced safety with our real-time tracking, wherever your journey takes you." },
              { icon: Globe, title: "For Cities", content: "A flexible solution adaptable to each city's unique transportation needs, supporting local economies and helping reduce traffic congestion worldwide." }
            ].map((item, index) => (
              <Card 
                key={index}
                className="transition-all duration-300 hover:scale-105 active:scale-95 animate-fadeInUp"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle><item.icon className="inline-block mr-2" /> {item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-muted mt-12 p-6 animate-fadeIn animation-delay-1000">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 RideShare. All rights reserved. | Launching first in Melbourne, with plans for global expansion</p>
        </div>
      </footer>
    </div>
  );
}
