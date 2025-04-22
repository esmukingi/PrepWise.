import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronRight, Brain, CheckCircle, TrendingUp, MessageSquare, Star, Rocket } from 'lucide-react'
import ClientAnimatedSection from '@/components/ClientAnimatedSection'

export default function LearnMore() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Feedback',
      description: 'Receive instant, personalized feedback from our advanced AI to improve your interview skills.',
    },
    {
      icon: MessageSquare,
      title: 'Real Interview Questions',
      description: 'Practice with questions sourced from top companies across industries.',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your improvement with detailed analytics and performance insights.',
    },
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Build Confidence',
      description: 'Practice in a safe environment to boost your interview confidence.',
    },
    {
      icon: Star,
      title: 'Land Your Dream Job',
      description: 'Hone skills that make you stand out to top employers.',
    },
    {
      icon: Rocket,
      title: 'Accelerate Growth',
      description: 'Fast-track your career with targeted feedback and practice.',
    },
  ]

  const steps = [
    {
      number: '1',
      title: 'Start Practicing',
      description: 'Choose a mock interview or specific questions to begin your session.',
    },
    {
      number: '2',
      title: 'Get Feedback',
      description: 'Receive instant AI-driven insights on your responses and delivery.',
    },
    {
      number: '3',
      title: 'Improve & Repeat',
      description: 'Track your progress and practice again to master your skills.',
    },
  ]

  return (
    <div
      className="min-h-screen"
    >
      {/* Hero Section */}
      <ClientAnimatedSection animationType="hero">
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center" data-animate="hero-text">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Discover the Power of AI-Driven Interview Practice
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Learn how our platform helps you master interviews with cutting-edge AI technology and real-world questions.
            </p>
            <Button
              asChild
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-lg z-10"
              data-animate="cta-button"
            >
              <Link href="/interview">
                Start Practicing Now <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </ClientAnimatedSection>

      {/* Features Section */}
      <ClientAnimatedSection animationType="features">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12" data-animate="section-title">
              Why Choose Our Platform?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900/80 border border-gray-700 p-6 rounded-lg shadow-lg"
                  data-animate={`feature-${index}`}
                >
                  <feature.icon className="h-12 w-12 text-indigo-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ClientAnimatedSection>

      {/* Benefits Section */}
      <ClientAnimatedSection animationType="benefits">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12" data-animate="section-title">
              Benefits of Practicing with Us
            </h2>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  data-animate={`benefit-${index}`}
                >
                  <benefit.icon className="h-8 w-8 text-indigo-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ClientAnimatedSection>

      {/* How It Works Section */}
      <ClientAnimatedSection animationType="how-it-works">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12" data-animate="section-title">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="text-center"
                  data-animate={`step-${index}`}
                >
                  <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ClientAnimatedSection>

      {/* CTA Section */}
      <ClientAnimatedSection animationType="cta">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4" data-animate="section-title">
              Ready to Master Your Interviews?
            </h2>
            <p className="text-lg text-gray-200 mb-8" data-animate="section-text">
              Join thousands of users who are transforming their careers with our AI-powered platform.
            </p>
            <Button
              asChild
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-lg z-10"
              data-animate="cta-button"
            >
              <Link href="/interview">
                Get Started Now <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </ClientAnimatedSection>
    </div>
  )
}