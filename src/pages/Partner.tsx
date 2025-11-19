import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Stethoscope, Users, Globe } from "lucide-react";

const Partner = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Partner With Us</h1>
              <p className="text-lg text-muted-foreground">
                Join the Telth ecosystem and transform healthcare delivery together
              </p>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-primary/20">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Care Manager</CardTitle>
                <CardDescription>Become a trained healthcare advocate in your community</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Franchise</CardTitle>
                <CardDescription>Open a Telth Smart Hub in your area</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Healthcare Provider</CardTitle>
                <CardDescription>Integrate Telth technology into your practice</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Government</CardTitle>
                <CardDescription>Scalable public health infrastructure solutions</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Partner Inquiry Form</CardTitle>
                <CardDescription>
                  Tell us about your interest in partnering with Telth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="John Doe" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" placeholder="Company Name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partnerType">Partnership Type</Label>
                    <Select>
                      <SelectTrigger id="partnerType">
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="care-manager">Care Manager</SelectItem>
                        <SelectItem value="franchise">Franchise</SelectItem>
                        <SelectItem value="provider">Healthcare Provider</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="technology">Technology Partner</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location/Region</Label>
                    <Input id="location" placeholder="City, State/Country" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your partnership interest..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Why Partner With Telth?</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-background p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">10x</div>
                  <p className="text-muted-foreground">Revenue growth potential for partners</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">65%</div>
                  <p className="text-muted-foreground">Cost efficiency improvement</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">Global</div>
                  <p className="text-muted-foreground">Reach across USA, UK, and India</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partner;
