"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import Hero from '@/components/Hero';
import Loader from '@/components/Loader';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import { platformFeatures } from '@/utils/MockData';

const FeaturesPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      toast.error("Please Login to explore")
      return;
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <Loader/>
    );
  };

  return (
    <div className="bg-white">
      <Hero
        title="Powerful Features"
        subtitle="Discover the comprehensive suite of tools and capabilities that make our platform the preferred choice for modern businesses."
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        primaryButtonText="Get Started"
        secondaryButtonText="View Pricing"
        secondaryButtonLink="/pricing"
      />

      <Section className="py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides all the tools and features you need to succeed in today&apos;s digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
            />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built for Scale
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our platform is designed to grow with your business. From startups to enterprise, we provide the tools you need to succeed.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Scalable infrastructure</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Advanced integrations</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Custom workflows</span>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden w-full rounded-xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Scalable platform"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 z-1 bg-black opacity-50"></div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real-World Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our features are being used by businesses around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Team collaboration"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Team Collaboration</h3>
                <p className="text-sm">Real-time teamwork</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
              alt="Data analytics"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Data Analytics</h3>
                <p className="text-sm">Insights & metrics</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              alt="Business growth"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Business Growth</h3>
                <p className="text-sm">Scale your operations</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Our Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their business with our powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Start Free Trial
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default FeaturesPage;