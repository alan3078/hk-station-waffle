"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MapPin, Phone, Clock, ShoppingCart, Star, Quote, ChevronDown, ExternalLink } from "lucide-react";
import { motion, useReducedMotion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";

// Component for scroll-triggered fade-in animations
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const slides = [
    {
      title: "Authentic Hong Kong Egg Waffles",
      subtitle: "Traditional Street Food",
      description: "Experience the crispy, golden perfection of Hong Kong egg waffles, made fresh daily with our secret family recipe.",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
      buttonText: "Find a Store",
      buttonLink: "/#contact"
    },
    {
      title: "Premium Artisanal Gelato",
      subtitle: "Italian Craftsmanship",
      description: "Indulge in our handcrafted gelato, featuring authentic Italian flavors and the finest natural ingredients.",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd",
      buttonText: "Order Online",
      buttonLink: "#"
    },
    {
      title: "Three Locations Across NZ",
      subtitle: "Convenient & Accessible",
      description: "Visit us at our CBD, Sylvia Park, or Dominion Road stores. Perfect for any occasion, any time.",
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
      buttonText: "View Locations",
      buttonLink: "/#contact"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [prefersReducedMotion, slides.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar moved to shared layout */}

      {/* Main Content */}
      <main>
        {/* Hero Section - Carousel */}
        <motion.section 
          ref={heroRef}
          id="home" 
          className="relative bg-gradient-to-br from-amber-50 to-yellow-100 py-20 overflow-hidden"
          style={prefersReducedMotion ? {} : { opacity: heroOpacity, scale: heroScale }}
        >
          <div className="container mx-auto px-4">
            <div className="relative h-[600px] md:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 grid md:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <motion.h1
                      className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      {slides[currentSlide].title.split(' ').slice(0, -1).join(' ')} <span className="text-yellow-600">{slides[currentSlide].title.split(' ').slice(-1)}</span>
                    </motion.h1>
                    <motion.h2
                      className="text-2xl text-gray-700 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {slides[currentSlide].subtitle}
                    </motion.h2>
                    <motion.p
                      className="text-xl text-gray-600 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white" asChild>
                        <Link href={slides[currentSlide].buttonLink}>{slides[currentSlide].buttonText}</Link>
                      </Button>
                      {currentSlide === 1 && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="lg" variant="outline">
                              Choose Store <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
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
                      )}
                    </motion.div>
                  </div>
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="relative w-full h-[320px] md:h-[480px]">
                      <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="rounded-lg shadow-2xl object-cover"
                        quality={70}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-yellow-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <FadeInSection delay={0}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <motion.div 
                      className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ShoppingCart className="h-6 w-6 text-yellow-600" />
                    </motion.div>
                    <CardTitle>Fresh Daily</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">All our waffles and gelato are made fresh every day using traditional recipes and premium ingredients.</p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={0.2}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <motion.div 
                      className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Star className="h-6 w-6 text-yellow-600" />
                    </motion.div>
                    <CardTitle>Authentic Taste</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Experience the genuine flavors of Hong Kong street food, crafted by our expert team.</p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={0.4}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <motion.div 
                      className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <MapPin className="h-6 w-6 text-yellow-600" />
                    </motion.div>
                    <CardTitle>Three Locations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Visit us at any of our three convenient locations across New Zealand.</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Origin of Bubble Waffle Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInSection>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Origin of Bubble Waffle</h2>
                </div>
              </FadeInSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeInSection delay={0.2}>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700">
                      Bubble Waffle is a traditional street snack originally from Hong Kong. It is said to have appeared in Hong Kong in the 1950s. The most representative traditional street food.
                    </p>
                    <p className="text-lg text-gray-700">
                      The bubble waffle is made with eggs, sugar, flour, evaporated milk, etc., poured in the middle of two special honeycomb iron templates, and placed on the fire and baked. The bubble waffle comes out golden yellow, with the aroma of cake, and the middle is half empty, crispy outside and the taste is particularly elastic when bitten.
                    </p>
                    <p className="text-lg text-gray-700">
                      However, with the evolution of modernization, it has generally begun to replace the charcoal burning flavor with an electronic oven.
                    </p>
                    <p className="text-lg text-gray-700">
                      In 2015, Egg Waffle was successfully selected as a Michelin snack. HKS wish to brought this Hong Kong&apos;s most representative snack to New Zealand to share the sweetness with you!
                    </p>
                  </div>
                </FadeInSection>
                <FadeInSection delay={0.4}>
                  <div className="relative">
                    <motion.div 
                      className="aspect-square overflow-hidden rounded-lg relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Image 
                        src="https://images.unsplash.com/photo-1488477181946-6428a0291777" 
                        alt="Bubble Waffle" 
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        loading="lazy"
                        quality={70}
                      />
                    </motion.div>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInSection>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR STORY</h2>
                </div>
              </FadeInSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeInSection delay={0.2}>
                  <div className="relative">
                    <motion.div 
                      className="aspect-square overflow-hidden rounded-lg relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Image 
                        src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f" 
                        alt="HKS Store" 
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        loading="lazy"
                        quality={70}
                      />
                    </motion.div>
                  </div>
                </FadeInSection>
                <FadeInSection delay={0.4}>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700">
                      Hong Kong Station (HKS), was founded in 2018 by two ladies from Hong Kong at the center of Auckland. It introduces Hong Kong local street food into New Zealand, It specializes in Bubble Waffles, Checkered Waffles, Hong Kong-style milk tea, and customized bubble-waffle ice cream and so on, this is also our childhood.
                    </p>
                    <p className="text-lg text-gray-700">
                      In keeping with the traditional craftsmanship and combined with modern and innovative methods, we launched a variety of sweet, salty, spicy bubble waffles and other Hong Kong street food.
                    </p>
                    <p className="text-lg text-gray-700">
                      We also thinking of our guests, observe carefully, and treat every customer.
                    </p>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                <p className="text-xl text-gray-600">Don&apos;t just take our word for it</p>
              </div>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-8">
              <FadeInSection delay={0}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <Quote className="h-8 w-8 text-yellow-600 mb-4" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">&ldquo;The best egg waffles I&apos;ve ever had! Takes me right back to Hong Kong. The gelato combination is absolutely divine.&rdquo;</p>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-yellow-200 flex items-center justify-center">
                          <span className="text-yellow-700 font-semibold">SL</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-gray-900">Sarah Lee</p>
                        <div className="flex text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <Quote className="h-8 w-8 text-yellow-600 mb-4" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">&ldquo;My kids absolutely love this place! The staff are friendly and the quality is consistently excellent. Highly recommend!&rdquo;</p>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-yellow-200 flex items-center justify-center">
                          <span className="text-yellow-700 font-semibold">JW</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-gray-900">James Wilson</p>
                        <div className="flex text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <Quote className="h-8 w-8 text-yellow-600 mb-4" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">&ldquo;Perfect treat after shopping! The matcha waffle with vanilla gelato is my go-to. Fresh, delicious, and great value.&rdquo;</p>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-yellow-200 flex items-center justify-center">
                          <span className="text-yellow-700 font-semibold">EP</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-gray-900">Emma Patel</p>
                        <div className="flex text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
                <p className="text-xl text-gray-600">A visual journey through our delicious creations</p>
              </div>
            </FadeInSection>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb", alt: "Ice cream cone" },
                { src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f", alt: "Waffle closeup" },
                { src: "https://images.unsplash.com/photo-1586313219032-b0e1b9ed7b40", alt: "Gelato flavors" },
                { src: "https://images.unsplash.com/photo-1488477181946-6428a0291777", alt: "Desserts" },
                { src: "https://images.unsplash.com/photo-1587314168485-3236d6710814", alt: "Sweet treats" },
                { src: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd", alt: "Ice cream scoops" },
                { src: "https://images.unsplash.com/photo-1514849302-984523450cf4", alt: "Waffle and ice cream" },
                { src: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc", alt: "Dessert spread" }
              ].map((image, index) => (
                <FadeInSection key={index} delay={index * 0.1}>
                  <motion.div 
                    className="aspect-square overflow-hidden rounded-lg relative group cursor-pointer"
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                      className="object-cover"
                      loading="lazy"
                      quality={70}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
                <p className="text-xl text-gray-600">Stories, recipes, and news</p>
              </div>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-8">
              <FadeInSection delay={0}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="aspect-square overflow-hidden relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1563805042-7684c019e1cb" 
                    alt="Blog post" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                    quality={70}
                  />
                </div>
                <CardHeader>
                  <CardTitle>The History of Hong Kong Egg Waffles</CardTitle>
                  <CardDescription>November 10, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Discover the fascinating origins of this beloved street food and how it became a cultural icon...</p>
                  <Button asChild variant="link" className="p-0 text-yellow-600 hover:text-yellow-700">
                    <Link href="/blog/history-of-egg-waffles">Read More →</Link>
                  </Button>
                </CardContent>
              </Card>
              </FadeInSection>

              <FadeInSection delay={0.2}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="aspect-square overflow-hidden relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1586313219032-b0e1b9ed7b40" 
                    alt="Blog post" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                    quality={70}
                  />
                </div>
                <CardHeader>
                  <CardTitle>5 Perfect Gelato & Waffle Pairings</CardTitle>
                  <CardDescription>November 5, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Learn which gelato flavors complement our egg waffles best. Our expert recommendations...</p>
                  <Button asChild variant="link" className="p-0 text-yellow-600 hover:text-yellow-700">
                    <Link href="/blog/gelato-waffle-pairings">Read More →</Link>
                  </Button>
                </CardContent>
              </Card>
              </FadeInSection>

              <FadeInSection delay={0.4}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="aspect-square overflow-hidden relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1488477181946-6428a0291777" 
                    alt="Blog post" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                    quality={70}
                  />
                </div>
                <CardHeader>
                  <CardTitle>Behind the Scenes: A Day at HKS</CardTitle>
                  <CardDescription>October 28, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Follow our team as we prepare fresh waffles and gelato from dawn to dusk...</p>
                  <Button asChild variant="link" className="p-0 text-yellow-600 hover:text-yellow-700">
                    <Link href="/blog/behind-the-scenes-hks">Read More →</Link>
                  </Button>
                </CardContent>
              </Card>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us</h2>
                <p className="text-xl text-gray-600">Find us at any of our three New Zealand locations</p>
              </div>
            </FadeInSection>

            {/* Store Locations */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <FadeInSection delay={0}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-yellow-600" />
                      CBD Store
                    </CardTitle>
                  </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p className="text-gray-900">1 Rutland Street & 350 Queen Street<br />Auckland CBD<br />Auckland 1010</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-yellow-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href="tel:0226208564" className="text-gray-900 hover:text-yellow-600">022 620 8564</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-yellow-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Hours</p>
                      <p className="text-gray-900 text-sm">SAT–WED: 9:00 am – 7:00 pm<br />Thu & Fri: 9:00 am – 9:00 pm<br />(Close at LV4 & LV3)</p>
                    </div>
                  </div>
                  {/* No online ordering button inside Visit Us card */}
                </CardContent>
              </Card>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-yellow-600" />
                      Sylvia Park Store
                    </CardTitle>
                  </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p className="text-gray-900">Kiosk SFD08, level 2<br />Sylvia Park Mall<br />Mount Wellington, Auckland 1060</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-yellow-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href="tel:0224992070" className="text-gray-900 hover:text-yellow-600">022 499 2070</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-yellow-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Hours</p>
                      <p className="text-gray-900 text-sm">MON–SUN (7 days): 12:00 pm – 8:00 pm</p>
                    </div>
                  </div>
                  {/* No online ordering button inside Visit Us card */}
                </CardContent>
              </Card>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-yellow-600" />
                      Dominion Rd Store
                    </CardTitle>
                  </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p className="text-gray-900">529 Dominion Road<br />Mount Eden<br />Auckland 1041</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-yellow-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href="tel:02102211468" className="text-gray-900 hover:text-yellow-600">021 022 11468</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-yellow-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Hours</p>
                      <p className="text-gray-900 text-sm">MON–SUN (7 days): 1:00 pm – 10:00 pm</p>
                    </div>
                  </div>
                  {/* No online ordering button inside Visit Us card */}
                </CardContent>
              </Card>
              </FadeInSection>
            </div>

            {/* Join HKS Form */}
            <FadeInSection delay={0.3}>
              <div className="max-w-2xl mx-auto">
                <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Join HKS</CardTitle>
                  <CardDescription>Interested in franchising, partnerships, or joining our team? Let us know!</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input placeholder="Your full name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input type="email" placeholder="your.email@example.com" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone</label>
                        <Input type="tel" placeholder="+64 21 234 5678" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">City</label>
                        <Input placeholder="Your city" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea 
                        placeholder="Tell us about your interest in HKS..." 
                        className="min-h-32"
                      />
                    </div>
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      {/* Footer moved to shared layout */}
    </div>
  );
}
