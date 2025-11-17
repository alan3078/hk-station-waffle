"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/#home">
              <Image src="/company_logo.png" alt="HKS Logo" width={40} height={40} />
            </Link>
            <span className="ml-2 text-sm text-gray-600 hidden sm:inline">Egg Waffles & Gelato</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#home" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                Online Ordering <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="https://www.aisystemshq.com/#/layout/cloudsale?access=2ee8ee7c-d89d-4022-952a-d124ca2f94fb" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                    CBD Store <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://www.aisystemshq.com/#/layout/cloudsale?access=55980b84-4c8d-41cc-a558-358b36984e07" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                    Sylvia Park Store <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://www.aisystemshq.com/#/layout/cloudsale?access=a7d7f196-0a65-4dc0-b224-3e0cd343fe85" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                    Dominion Rd Store <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/#gallery" className="text-gray-700 hover:text-gray-900 font-medium">Gallery</Link>
            <Link href="/#blog" className="text-gray-700 hover:text-gray-900 font-medium">Blog</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen((o) => !o)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/#home" onClick={closeMobile} className="text-gray-700 hover:text-gray-900 font-medium text-left">
                Home
              </Link>
              <div className="space-y-2 pl-4">
                <p className="text-sm font-semibold text-gray-900">Online Ordering</p>
                <a href="https://www.aisystemshq.com/#/layout/cloudsale?access=2ee8ee7c-d89d-4022-952a-d124ca2f94fb" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gray-900" onClick={closeMobile}>
                  CBD Store
                </a>
                <a href="https://www.aisystemshq.com/#/layout/cloudsale?access=55980b84-4c8d-41cc-a558-358b36984e07" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gray-900" onClick={closeMobile}>
                  Sylvia Park Store
                </a>
                <a href="https://www.aisystemshq.com/#/layout/cloudsale?access=a7d7f196-0a65-4dc0-b224-3e0cd343fe85" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gray-900" onClick={closeMobile}>
                  Dominion Rd Store
                </a>
              </div>
              <Link href="/#gallery" onClick={closeMobile} className="text-gray-700 hover:text-gray-900 font-medium text-left">
                Gallery
              </Link>
              <Link href="/#blog" onClick={closeMobile} className="text-gray-700 hover:text-gray-900 font-medium text-left">
                Blog
              </Link>
              <Link href="/#contact" onClick={closeMobile} className="text-gray-700 hover:text-gray-900 font-medium text-left">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
