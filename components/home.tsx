"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, CreditCard, LineChart, Lock, Wallet, Users, Globe, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, HelpCircle, Shield, Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for the cursor glow effect with improved responsiveness
  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* Cursor Glow Effect - Improved Performance */}
      <motion.div
        className="pointer-events-none fixed z-[1] h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
        style={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.1
        }}
      />

      {/* Navigation - Increased Height by 1.75x */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="container flex h-28 items-center justify-between px-4">
          <div className="flex items-center space-x-12">
            <Link className="flex items-center space-x-2 font-bold" href="/">
              <Wallet className="h-7 w-7 text-cyan-400" />
              <span className="text-lg">FinEdge</span>
            </Link>
            
            {/* Extended Navbar Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link className="text-sm hover:text-cyan-400 transition-colors" href="#features">
                Features
              </Link>
              <Link className="text-sm hover:text-cyan-400 transition-colors" href="#about">
                About Us
              </Link>
              <Link className="text-sm hover:text-cyan-400 transition-colors" href="#pricing">
                Pricing
              </Link>
              <Link className="text-sm hover:text-cyan-400 transition-colors" href="#support">
                Support
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link className="hidden text-sm hover:text-cyan-400 transition-colors sm:block" href="/login">
              Login
            </Link>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-[0_0_15px_rgba(96,165,250,0.5)] hover:shadow-[0_0_20px_rgba(96,165,250,0.7)] transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Curved Lines */}
          <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#6c4bf9" stopOpacity="0" />
                <stop offset="50%" stopColor="#6c4bf9 " stopOpacity="0.5" />
                <stop offset="100%" stopColor="#6c4bf9 " stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Top Curves */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 1,
              }}
              d="M 100 100 Q 300 0 500 100 T 900 100"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 1,
                delay: 0.5,
              }}
              d="M 0 200 Q 200 100 400 200 T 800 200"
              fill="none"
              stroke="url(#grad2)"
              strokeWidth="1"
            />
            {/* Bottom Curves */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 1,
                delay: 1,
              }}
              d="M 100 600 Q 300 500 500 600 T 900 600"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1"
            />
          </svg>

          {/* Straight Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: "100%", opacity: 0 }}
                animate={{
                  x: "-100%",
                  opacity: [0, 0.7, 0.7, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "linear",
                }}
                className="absolute right-0"
                style={{
                  top: `${15 + i * 10}%`,
                  height: "1px",
                  width: "100%",
                  background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? "#22d3ee" : "#6c4bf9 "}60, transparent)`,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 z-[1]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute -right-1/4 top-1/2 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="container relative z-[3] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-3xl space-y-8"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Modern Banking for Everyone
            </h1>
            <p className="mx-auto max-w-2xl text-muted text-gray-400 sm:text-xl">
            Our platform allows your business to access international payment rails in seconds instead of hours.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-lg text-white hover:from-blue-700 hover:to-purple-700 shadow-[0_0_15px_rgba(96,165,250,0.5)] hover:shadow-[0_0_20px_rgba(96,165,250,0.7)] transition-all duration-300">
              Start Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* Fixed Contact Us button to match the styling of other buttons */}
              <Button variant="outline" className="border-white/20 text-lg text-white bg-white/5 hover:bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
              Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Rising Lines */}
      <section id="features" className="relative z-10 border-t border-white/10 bg-transparent py-24 overflow-hidden">
        {/* Rising Lines Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Generate multiple rising lines at different positions */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ 
                y: [null, "-100%"],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 5, // 5-8 seconds
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 10, // Staggered start
                ease: "linear"
              }}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 1 + 0.2}px`, // Varied width
                height: '50vh',
                background: i % 2 === 0 
                  ? 'linear-gradient(to top, transparent, rgba(34, 211, 238, 0.4), transparent)' 
                  : 'linear-gradient(to top, transparent, rgba(108, 75, 249, 0.4), transparent)',
              }}
            />
          ))}
        </div>

        <div className="container px-4 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why FinEdge?</h2>
            <p className="mt-4 text-gray-400">A new way to manage your money. Finance that fits your lifestyle</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Transparent card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/5 bg-transparent backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <div className="p-6 bg-gradient-to-br from-transparent to-black/10 backdrop-filter backdrop-blur-md">
                <CreditCard className="mb-4 h-12 w-12 text-cyan-400" />
                <h3 className="mb-2 text-xl font-bold">Smart Cards</h3>
                <p className="text-gray-400">
                Manage limits, block/unblock, and get instant alerts for every transaction.
                </p>
              </div>
            </motion.div>
            
            {/* Transparent card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/5 bg-transparent backdrop-blur-sm transition-all duration-300 hover:border-violet-400/50 hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"
            >
              <div className="p-6 bg-gradient-to-br from-transparent to-black/10 backdrop-filter backdrop-blur-md">
                <LineChart className="mb-4 h-12 w-12 text-violet-400" />
                <h3 className="mb-2 text-xl font-bold">Smart Investments</h3>
                <p className="text-gray-400">
                Smart investment tools aligned with your goals and risk profile.
                </p>
              </div>
            </motion.div>
            
            {/* Transparent card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/5 bg-transparent backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <div className="p-6 bg-gradient-to-br from-transparent to-black/10 backdrop-filter backdrop-blur-md">
                <Lock className="mb-4 h-12 w-12 text-cyan-400" />
                <h3 className="mb-2 text-xl font-bold">Bank-Grade Security</h3>
                <p className="text-gray-400">
                Your data is protected with bank-grade security and encryption.
                </p>
              </div>
            </motion.div>
            
            {/* Added 4th Transparent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/5 bg-transparent backdrop-blur-sm transition-all duration-300 hover:border-violet-400/50 hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"
            >
              <div className="p-6 bg-gradient-to-br from-transparent to-black/10 backdrop-filter backdrop-blur-md">
                <Briefcase className="mb-4 h-12 w-12 text-violet-400" />
                <h3 className="mb-2 text-xl font-bold">Business Solutions</h3>
                <p className="text-gray-400">
                Custom financial tools designed specifically for your business needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Transparent Background */}
      <section className="relative z-10 border-t border-white/10 bg-transparent py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-transparent p-8 text-center backdrop-blur-md md:p-12 lg:p-16">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-950/20 to-violet-950/20 z-[-1]"></div>
            
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Trusted by thousands to handle their money with care.            </p>
            <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-left">
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <span>No fees or hidden charges</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <span>24/7 Customer Support</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <span>Secure & Regulated Platform</span>
              </li>
            </ul>
            <Button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-lg text-white hover:from-blue-700 hover:to-purple-700 shadow-[0_0_15px_rgba(96,165,250,0.5)] hover:shadow-[0_0_20px_rgba(96,165,250,0.7)] transition-all duration-300">
            Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with More Information */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wallet className="h-6 w-6 text-cyan-400" />
                <span className="font-bold text-lg">FinEdge</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                The next generation financial platform designed to simplify your banking experience.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="font-bold mb-4 text-lg">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#compliance" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link href="#security" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4 text-lg">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-cyan-400 mt-0.5" />
                  <span className="text-sm text-gray-400">
                    123 Finance Street, Tech City, TC 10011
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm text-gray-400">
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm text-gray-400">
                    support@finedge.com
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <HelpCircle className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm text-gray-400">
                    24/7 Support Available
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} FinEdge. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link className="text-sm text-gray-400 hover:text-cyan-400 transition-colors" href="#">
                Privacy
              </Link>
              <Link className="text-sm text-gray-400 hover:text-cyan-400 transition-colors" href="#">
                Terms
              </Link>
              <Link className="text-sm text-gray-400 hover:text-cyan-400 transition-colors" href="#">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}