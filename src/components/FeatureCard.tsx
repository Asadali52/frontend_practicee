import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface FeatureCardProps {
  feature: Feature;
  onClick?: () => void;
}

const FeatureCard = ({ feature, onClick }: FeatureCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-1 bg-black opacity-30"></div>
      </div>
      <div className="px-6 py-4">
        <div className="rounded-lg flex items-center mb-4">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard; 