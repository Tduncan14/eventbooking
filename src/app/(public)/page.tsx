'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Users, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 bg-primary shadow-md">
        <h2 className="text-2xl font-bold text-primary-foreground">EventBook</h2>
        <div className="flex gap-6 items-center">
          <Link href="/">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">Home</Button>
          </Link>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="secondary">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Book Events <span className="text-primary">Effortlessly</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Discover, book, and manage your favorite events all in one place. From concerts to conferences, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/register">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started Free
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Browse Events
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Why Choose EventBook?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <Calendar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Easy Browsing
            </h3>
            <p className="text-gray-600">
              Find events that match your interests with powerful search and filters.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Quick Booking
            </h3>
            <p className="text-gray-600">
              Secure your tickets in seconds with our streamlined checkout process.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Group Bookings
            </h3>
            <p className="text-gray-600">
              Bring your friends along with easy group booking and discounts.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Secure & Trusted
            </h3>
            <p className="text-gray-600">
              Your data and payments are protected with industry-leading security.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-r from-primary to-indigo-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Book Your Next Event?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
          Join thousands of event enthusiasts and start booking today.
        </p>
        <Link href="/register">
          <Button size="lg" variant="secondary">
            Create Your Account
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 bg-gray-900 text-gray-400 text-center border-t border-gray-800">
        <p>&copy; 2026 EventBook. All rights reserved.</p>
      </footer>
    </div>
  );
}
