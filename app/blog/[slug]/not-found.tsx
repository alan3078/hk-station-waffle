import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, BookOpen, AlertCircle } from 'lucide-react'

export default function BlogNotFound() {

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-amber-50 to-yellow-100 flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-yellow-200 rounded-full flex items-center justify-center">
              <AlertCircle className="h-12 w-12 text-yellow-600" />
            </div>
          </div>
          
          <h1 className="text-8xl md:text-9xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog Post Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            This recipe seems to be missing from our collection. Let&apos;s find you something tasty to read!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-yellow-600 hover:bg-yellow-700 text-white"
            asChild
          >
            <Link href="/#blog">
              <BookOpen className="mr-2 h-5 w-5" />
              View All Posts
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
