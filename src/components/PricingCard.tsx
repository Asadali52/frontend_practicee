interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  color?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  onCtaClick?: () => void;
}

const PricingCard = ({ plan, onCtaClick }: PricingCardProps) => {
  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
          <div className="flex items-baseline justify-center mb-4">
            <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
            <span className="text-gray-600 ml-1">{plan.period}</span>
          </div>
          <p className="text-gray-600">{plan.description}</p>
        </div>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onCtaClick}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
            plan.popular
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
};

export default PricingCard; 