import React from 'react';

// home page data 
export const BeautifulDesign = [
  {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Modern Workspace',
    subtitle: 'Collaborative environment',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Innovation Hub',
    subtitle: 'Cutting-edge technology',
  },
  {
    src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
    title: 'Creative Design',
    subtitle: 'Beautiful aesthetics',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    title: 'Team Collaboration',
    subtitle: 'Working together',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
    title: 'Data Analytics',
    subtitle: 'Insights & metrics',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Customer Support',
    subtitle: '24/7 assistance',
  },
];

export const whyChooseUs = [
  {
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our optimized platform designed for speed and efficiency.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Secure & Reliable',
    description: 'Your data is protected with enterprise-grade security and 99.9% uptime guarantee.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'User Friendly',
    description: 'Intuitive design that makes complex tasks simple and enjoyable for everyone.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
    color: 'bg-purple-100 text-purple-600',
  },
]

// Pricing Page Data
export const pricingPlans = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 projects',
      'Basic analytics',
      'Email support',
      '1GB storage',
      'Basic integrations'
    ],
    popular: false,
    cta: 'Get Started',
    color: 'blue'
  },
  {
    name: 'Professional',
    price: '$29',
    period: '/month',
    description: 'Ideal for growing teams and businesses',
    features: [
      'Up to 25 projects',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'Advanced integrations',
      'Team collaboration',
      'Custom branding'
    ],
    popular: true,
    cta: 'Start Free Trial',
    color: 'green'
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited projects',
      'Enterprise analytics',
      '24/7 phone support',
      'Unlimited storage',
      'Custom integrations',
      'Advanced security',
      'Dedicated account manager',
      'SLA guarantee'
    ],
    popular: false,
    cta: 'Contact Sales',
    color: 'purple'
  }
];

export const pricingFeatures = [
  {
    name: 'Analytics Dashboard',
    starter: 'Basic',
    professional: 'Advanced',
    enterprise: 'Enterprise'
  },
  {
    name: 'API Access',
    starter: 'Limited',
    professional: 'Full',
    enterprise: 'Custom'
  },
  {
    name: 'Team Members',
    starter: '1',
    professional: '10',
    enterprise: 'Unlimited'
  },
  {
    name: 'Storage',
    starter: '1GB',
    professional: '10GB',
    enterprise: 'Unlimited'
  },
  {
    name: 'Support',
    starter: 'Email',
    professional: 'Priority',
    enterprise: '24/7 Phone'
  }
];

export const pricingFAQs = [
  {
    question: 'Can I change my plan at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise clients.'
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time. No long-term contracts required.'
  }
];

// Careers Page Data
export const jobListings = [
  {
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We&apos;re looking for a talented frontend developer to join our team and help build amazing user experiences.',
    requirements: [
      '5+ years of experience with React/Next.js',
      'Strong TypeScript skills',
      'Experience with modern CSS frameworks',
      'Excellent communication skills'
    ],
    benefits: [
      'Competitive salary',
      'Remote work options',
      'Health insurance',
      '401k matching'
    ]
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Join our product team to help shape the future of our platform and drive user engagement.',
    requirements: [
      '3+ years of product management experience',
      'Strong analytical skills',
      'Experience with agile methodologies',
      'User-centered design thinking'
    ],
    benefits: [
      'Competitive salary',
      'Stock options',
      'Flexible work hours',
      'Professional development'
    ]
  },
  {
    title: 'UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help us create beautiful, intuitive user experiences that delight our customers.',
    requirements: [
      '4+ years of UX design experience',
      'Proficiency in Figma',
      'Strong portfolio',
      'User research experience'
    ],
    benefits: [
      'Competitive salary',
      'Remote-first culture',
      'Design tools provided',
      'Conference attendance'
    ]
  }
];

export const companyValues = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to solve complex problems.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Collaboration',
    description: 'We believe the best solutions come from working together and sharing diverse perspectives.',
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to customer experience.',
    icon: (
      <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

export const companyBenefits = [
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, dental, vision, and mental health support.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'Flexible Work',
    description: 'Remote work options, flexible hours, and unlimited PTO.',
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Learning & Growth',
    description: 'Professional development budget, conference attendance, and learning resources.',
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Team Events',
    description: 'Regular team building activities, happy hours, and company retreats.',
    icon: (
      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

// Blog Page Data
export const featuredBlogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore the latest trends and technologies that will shape the web development landscape in the coming year.',
    author: 'Sarah Johnson',
    date: 'December 15, 2023',
    category: 'Technology',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    featured: true
  },
  {
    id: 2,
    title: 'Building Scalable Applications with Next.js 14',
    excerpt: 'Learn how to leverage the latest features of Next.js 14 to build high-performance, scalable applications.',
    author: 'Michael Chen',
    date: 'December 12, 2023',
    category: 'Development',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featured: false
  },
  {
    id: 3,
    title: 'Designing for Accessibility: A Complete Guide',
    excerpt: 'Discover best practices for creating inclusive user experiences that work for everyone.',
    author: 'Emily Rodriguez',
    date: 'December 10, 2023',
    category: 'Design',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    featured: false
  }
];

export const recentBlogPosts = [
  {
    id: 4,
    title: 'Optimizing Performance in React Applications',
    excerpt: 'Practical tips and techniques for improving the performance of your React applications.',
    author: 'David Kim',
    date: 'December 8, 2023',
    category: 'Development',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 5,
    title: 'The Psychology of User Interface Design',
    excerpt: 'Understanding how users think and behave to create more intuitive interfaces.',
    author: 'Lisa Wang',
    date: 'December 5, 2023',
    category: 'Design',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
  },
  {
    id: 6,
    title: 'Getting Started with TypeScript',
    excerpt: 'A beginner&apos;s guide to TypeScript and how it can improve your JavaScript development.',
    author: 'Alex Thompson',
    date: 'December 3, 2023',
    category: 'Development',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
  }
];

export const blogCategories = [
  { name: 'Technology', count: 12, color: 'blue' },
  { name: 'Development', count: 18, color: 'green' },
  { name: 'Design', count: 8, color: 'purple' },
  { name: 'Business', count: 6, color: 'orange' },
  { name: 'Tutorials', count: 15, color: 'red' }
];

export const popularBlogTags = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'CSS', 'UI/UX', 'Performance', 'Accessibility'
];

// Features Page Data
export const platformFeatures = [
  {
    title: 'Advanced Analytics',
    description: 'Get deep insights into your data with our powerful analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with real-time updates and team collaboration tools.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Custom Integrations',
    description: 'Connect with your favorite tools and services through our flexible API.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

// Contact Page Data
export const contactInfo = [
  {
    title: 'Email',
    details: 'itsasadali5@gmail.com',
    color: 'blue',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Phone',
    details: '+1 (555) 123-4567',
    color: 'green',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    title: 'Office',
    details: '123 Business St, San Francisco, CA 94105',
    color: 'purple',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export const supportImages = [
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    alt: 'Customer support team',
    title: '24/7 Support'
  },
  {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Technical support',
    title: 'Expert Team'
  },
  {
    src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    alt: 'Customer success',
    title: 'Success Stories'
  }
];

// About Page Data
export const companyStats = [
  { number: '10M+', label: 'Active Users' },
  { number: '150+', label: 'Countries' },
  { number: '99.9%', label: 'Uptime' },
  { number: '24/7', label: 'Support' }
];

export const officeImages = [
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    alt: 'Main office',
    title: 'San Francisco HQ'
  },
  {
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    alt: 'Development office',
    title: 'Engineering Hub'
  },
  {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    alt: 'Design studio',
    title: 'Design Studio'
  }
];

export const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader driving innovation and growth.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Technical expert driving our platform&apos;s architecture.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Creating beautiful, intuitive user experiences.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'David Kim',
    role: 'VP of Engineering',
    bio: 'Leading our engineering team to build scalable solutions.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];


export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  );


export const UsersErrorUI = ({ error }: { error: string }) => (
  <div className="h-[calc(100vh-454px)] flex items-center justify-center">
    <div className="text-center">
      <div className="text-red-500 text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2 font-nunito">Error</h2>
      <p className="text-gray-600 font-nunito">{error}</p>
    </div>
  </div>
);


export const UsersEmptyUI = () => (
  <div className="text-center py-12">
    <div className="text-gray-400 text-6xl mb-4">👥</div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2 font-nunito">No Users Yet</h3>
    <p className="text-gray-600 font-nunito">Be the first to join our community!</p>
  </div>
);
