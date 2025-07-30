interface Feature {
  name: string;
  starter: string;
  professional: string;
  enterprise: string;
}

interface FeatureComparisonProps {
  features: Feature[];
}

const FeatureComparison = ({ features }: FeatureComparisonProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-4 border-b border-gray-200">
          <div className="p-6 font-semibold text-gray-900">Feature</div>
          <div className="p-6 text-center font-semibold text-gray-900">Starter</div>
          <div className="p-6 text-center font-semibold text-gray-900">Professional</div>
          <div className="p-6 text-center font-semibold text-gray-900">Enterprise</div>
        </div>
        
        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-4 border-b border-gray-100">
            <div className="p-6 text-gray-700">{feature.name}</div>
            <div className="p-6 text-center text-gray-600">{feature.starter}</div>
            <div className="p-6 text-center text-gray-600">{feature.professional}</div>
            <div className="p-6 text-center text-gray-600">{feature.enterprise}</div>
          </div>
        ))}
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{feature.name}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Starter</span>
                <span className="text-gray-600">{feature.starter}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="font-medium text-blue-700">Professional</span>
                <span className="text-blue-600">{feature.professional}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="font-medium text-purple-700">Enterprise</span>
                <span className="text-purple-600">{feature.enterprise}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureComparison; 