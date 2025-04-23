'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Mail, Github, Facebook, Code, ChevronRight } from 'lucide-react'
import ClientAnimatedSection from '@/components/ClientAnimatedSection'
import Image from 'next/image'

const ContactPage = () => {
  const myDetails = {
    name: 'NGOBOKA Alain Beni',
    email: 'ngobokaben.com',
    github: 'esmukingi',
    facebook: 'Nii Beni AEG',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Express', 'PHP', 'Vue', 'UX/UI designer', 'Project Manager', 'Version control', 'firebase', 'Javascript'],
    profileImage: '/beni.png', 
  }

  return (
    <div className="min-h-screen cursor-pointer py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <ClientAnimatedSection animationType="hero">
          <div className="text-center mb-16" data-animate="hero-text">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-600">
              Hey, I'm {myDetails.name}!
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm a passionate developer crafting awesome web experiences with modern technologies. Let's connect and build something amazing!
            </p>
          </div>
        </ClientAnimatedSection>

        {/* About Me Section */}
        <ClientAnimatedSection animationType="details">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 mb-12 shadow-xl" data-animate="section-details">
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div>
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/50">
                  <Image
                    src={myDetails.profileImage}
                    alt={`${myDetails.name}'s profile picture`}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-300 mb-4">
                  I'm a full-stack developer with a knack for creating sleek, user-friendly applications. My expertise lies in building scalable web solutions and bringing ideas to life through code.
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">My Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {myDetails.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-indigo-600/20 border border-indigo-500/50 rounded-full text-sm text-indigo-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ClientAnimatedSection>

        {/* Contact Info Section */}
        <ClientAnimatedSection animationType="contact">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 mb-12 shadow-xl" data-animate="section-contact">
            <h2 className="text-3xl font-bold text-white mb-6">Find Me Here</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-indigo-400" />
                <a
                  href={`mailto:${myDetails.email}`}
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  {myDetails.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Github className="h-6 w-6 text-indigo-400" />
                <a
                  href={`https://github.com/${myDetails.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  github.com/{myDetails.github}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Facebook className="h-6 w-6 text-indigo-400" />
                <a
                  href={`https://facebook.com/${myDetails.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  facebook.com/{myDetails.facebook}
                </a>
              </div>
            </div>
          </div>
        </ClientAnimatedSection>

        {/* CTA Section */}
        <ClientAnimatedSection animationType="cta">
          <div className="text-center" data-animate="section-text">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to Collaborate?
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              I'm always open to new projects and opportunities. Reach out, and let's create something extraordinary together!
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform"
              data-animate="cta-button"
            >
              <Link href={`mailto:${myDetails.email}`}>
                Get in Touch <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </ClientAnimatedSection>
      </div>
    </div>
  )
}

export default ContactPage