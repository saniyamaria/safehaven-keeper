
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, MapPin, MessageSquare, Bell, ChevronRight, CheckCircle2 } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-b from-safehaven-50 to-white py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-safehaven-100 mb-4">
              <Shield className="h-8 w-8 text-safehaven-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-safehaven-950">
              Protect What Matters Most
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              SafeHaven keeps your family connected and protected without invading privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                className="bg-safehaven-600 hover:bg-safehaven-700 text-lg px-8 py-6 h-auto"
                onClick={() => navigate("/signup")}
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6 h-auto"
                onClick={() => navigate("/login")}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-safehaven-900">
              Features Designed for Families
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Simple, intuitive tools that help you stay connected while respecting boundaries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-safehaven-50 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-safehaven-100 mb-4">
                <MapPin className="h-6 w-6 text-safehaven-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-safehaven-900">Location Awareness</h3>
              <p className="text-gray-500">
                Know when family members arrive at and leave important locations.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-safehaven-50 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-safehaven-100 mb-4">
                <Bell className="h-6 w-6 text-safehaven-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-safehaven-900">Emergency Alerts</h3>
              <p className="text-gray-500">
                One-touch alerts to quickly notify your trusted circle in case of emergency.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-safehaven-50 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-safehaven-100 mb-4">
                <MessageSquare className="h-6 w-6 text-safehaven-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-safehaven-900">Secure Messaging</h3>
              <p className="text-gray-500">
                Private communication channels for your family's conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-24 bg-safehaven-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-safehaven-900">
              Why Choose SafeHaven?
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Our approach puts safety first without compromising on privacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="h-6 w-6 text-safehaven-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-safehaven-900">Privacy Focused</h3>
                <p className="text-gray-500">
                  We believe in safety with dignity. Location tracking is consent-based and never invasive.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="h-6 w-6 text-safehaven-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-safehaven-900">Family-First Design</h3>
                <p className="text-gray-500">
                  Created for modern families who want to stay connected in a busy world.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="h-6 w-6 text-safehaven-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-safehaven-900">Quick Emergency Response</h3>
                <p className="text-gray-500">
                  When seconds matter, our emergency alert system ensures help is on the way.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="h-6 w-6 text-safehaven-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-safehaven-900">Simple to Use</h3>
                <p className="text-gray-500">
                  Intuitive design means the whole family can use SafeHaven, regardless of tech skills.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              className="bg-safehaven-600 hover:bg-safehaven-700 text-lg px-8 py-6 h-auto"
              onClick={() => navigate("/signup")}
            >
              Join SafeHaven Today
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-safehaven-600" />
              <span className="text-lg font-semibold">SafeHaven</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2023 SafeHaven. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
