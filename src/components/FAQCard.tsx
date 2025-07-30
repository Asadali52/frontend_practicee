import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCardProps {
  faq: FAQ;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const FAQCard = ({ faq, isExpanded: externalIsExpanded, onToggle }: FAQCardProps) => {
  const [internalIsExpanded, setInternalIsExpanded] = useState(false);
  
  // Use external state if provided, otherwise use internal state
  const isExpanded = externalIsExpanded !== undefined ? externalIsExpanded : internalIsExpanded;
  
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsExpanded(!internalIsExpanded);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div 
        className="flex items-center justify-between cursor-pointer group"
        onClick={handleToggle}
      >
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {faq.question}
        </h3>
        <svg 
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 group-hover:text-blue-600 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQCard; 