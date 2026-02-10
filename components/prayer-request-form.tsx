"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Send } from "lucide-react"
import { motion } from "framer-motion"

interface PrayerRequestFormProps {
  onClose: () => void
}

export function PrayerRequestForm({ onClose }: PrayerRequestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: "",
    isAnonymous: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast({
        title: "Prayer Request Submitted",
        description: "Thank you for sharing your prayer request. Our prayer team will be lifting you up in prayer.",
      })
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        request: "",
        isAnonymous: false,
      })
      
      // Close the form after a short delay
      setTimeout(() => {
        onClose()
      }, 2000)
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your prayer request. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <motion.div 
        className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 500 }}
      >
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white">
          <h3 className="text-2xl font-bold">Share Your Prayer Request</h3>
          <p className="text-teal-100 mt-1">We're here to pray with you</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {!formData.isAnonymous && (
            <>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name (Optional)
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email (Optional)
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>
            </>
          )}
          
          <div className="space-y-2">
            <label htmlFor="request" className="block text-sm font-medium text-gray-700">
              Your Prayer Request *
            </label>
            <Textarea
              id="request"
              name="request"
              value={formData.request}
              onChange={handleChange}
              placeholder="Share your prayer request here..."
              rows={5}
              className="w-full"
              required
            />
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <input
              type="checkbox"
              id="isAnonymous"
              name="isAnonymous"
              checked={formData.isAnonymous}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
            />
            <label htmlFor="isAnonymous" className="text-sm text-gray-600">
              Submit anonymously
            </label>
          </div>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Request
                </>
              )}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}
