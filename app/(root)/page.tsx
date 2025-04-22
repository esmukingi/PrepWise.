import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Star, Users, Clock, Award } from 'lucide-react'
import ClientAnimatedSection from '@/components/ClientAnimatedSection'

const page = async () => {
  const user = await getCurrentUser()

  const [userInterviews, latestInterviews] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id }),
  ])

  const hasPastInterviews = userInterviews?.length > 0
  const hasUpcomingInterviews = latestInterviews?.length > 0

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Users' },
    { icon: Clock, value: '50,000+', label: 'Interviews Taken' },
    { icon: Award, value: '95%', label: 'Success Rate' },
  ]

  const testimonials = [
    {
      name: 'Sarah J.',
      role: 'Software Engineer',
      quote: 'The AI feedback helped me land my dream job at a top tech company!',
      rating: 5,
    },
    {
      name: 'Michael R.',
      role: 'Data Scientist',
      quote: 'The practice questions were spot-on, and the interface is so intuitive.',
      rating: 4,
    },
    {
      name: 'Emily T.',
      role: 'Product Manager',
      quote: 'I improved my confidence and nailed my interviews thanks to this platform.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ClientAnimatedSection animationType="hero">
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6" data-animate="hero-text">
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Master Your Interviews with AI-Powered Practice
                </h1>
                <p className="text-lg text-gray-600">
                  Hone your skills with real interview questions, get instant AI-driven feedback, and land your dream job.
                </p>
                <div className="flex gap-4">
                  <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg">
                    <Link href="/interview">Start Practicing Now</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-6 rounded-lg">
                    <Link href="/learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative" data-animate="hero-image">
                <Image
                  src="/robot.png"
                  alt="AI Interview Coach"
                  width={500}
                  height={500}
                  className="relative z-10"
                />
                <div className="absolute inset-0 bg-indigo-200 rounded-full blur-3xl opacity-50 -z-10" />
              </div>
            </div>
          </div>
        </section>
      </ClientAnimatedSection>

      {/* Stats Section */}
      <ClientAnimatedSection animationType="stats">
        <section className="py-16 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                  data-animate={`stat-${index}`}
                >
                  <stat.icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ClientAnimatedSection>

      {/* Past Interviews Section */}
      <ClientAnimatedSection animationType="past-interviews">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8" data-animate="section-title">
              Your Past Interviews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hasPastInterviews ? (
                userInterviews?.map((interview) => (
                  <div key={interview.id} data-animate="interview-card">
                    <InterviewCard {...interview} />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12  rounded-lg shadow-sm" data-animate="no-interviews">
                  <p className="text-gray-600 text-lg">You haven&apos;t taken any interviews yet.</p>
                  <Button asChild className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                    <Link href="/interview">Start Your First Interview</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </ClientAnimatedSection>

      {/* Upcoming Interviews Section */}
      <ClientAnimatedSection animationType="upcoming-interviews">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8" data-animate="section-title">
              Upcoming Interviews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hasUpcomingInterviews ? (
                latestInterviews?.map((interview) => (
                  <div key={interview.id} data-animate="interview-card">
                    <InterviewCard {...interview} />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12  rounded-lg shadow-sm" data-animate="no-interviews">
                  <p className="text-white text-lg">No upcoming interviews available.</p>
                  <Button asChild className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                    <Link href="/interview">Schedule an Interview</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </ClientAnimatedSection>

      {/* Testimonials Section */}
      <ClientAnimatedSection animationType="testimonials">
        <section className="py-16  text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12" data-animate="section-title">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="card card-border bg-gray-700 text-white p-6 rounded-lg shadow-lg"
                  data-animate={`testimonial-${index}`}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-indigo-200 rounded-full mr-4" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ClientAnimatedSection>

      {/* CTA Section */}
      <ClientAnimatedSection animationType="cta">
        <section className="card py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4" data-animate="section-title">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-lg text-gray-600 mb-8" data-animate="section-text">
              Join thousands of professionals who have transformed their interview skills with our AI-powered platform.
            </p>
            <Button
              asChild
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg"
              data-animate="cta-button"
            >
              <Link href="/interview">
                Get Started Today <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </ClientAnimatedSection>
    </div>
  )
}

export default page