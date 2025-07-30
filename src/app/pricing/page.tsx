'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import Hero from '@/components/Hero';
import Loader from '@/components/Loader';
import FAQCard from '@/components/FAQCard';
import Section from '@/components/Section';
import PricingCard from '@/components/PricingCard';
import FeatureComparison from '@/components/FeatureComparison';
import { pricingPlans, pricingFeatures, pricingFAQs } from '@/utils/MockData';

const PricingPage = () => {
  
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
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
    <div>
      <Hero
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that&apos;s right for you. All plans include our core features with no hidden fees."
        showButtons={false}
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
      />

      <Section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free trial and upgrade when you&apos;re ready to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              onCtaClick={() => console.log(`Clicked ${plan.name} plan`)}
            />
          ))}
        </div>
      </Section>

      <Section className="py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Feature Comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our plans stack up against each other.
          </p>
        </div>

        <FeatureComparison features={pricingFeatures} />
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Need something custom? Our enterprise solutions are tailored to your specific requirements with dedicated support and custom integrations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Custom integrations</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Dedicated account manager</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">SLA guarantee</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Enterprise solutions"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our pricing and plans.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {pricingFAQs.map((faq, index) => (
              <FAQCard
                key={index}
                faq={faq}
                isExpanded={expandedFAQ === index}
                onToggle={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our platform for their business needs.
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
};

export default PricingPage; 