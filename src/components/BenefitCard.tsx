interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface BenefitCardProps {
  benefit: Benefit;
  onClick?: () => void;
}

const BenefitCard = ({ benefit, onClick }: BenefitCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-center mb-4">
        {benefit.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
      <p className="text-gray-600">{benefit.description}</p>
    </div>
  );
};

export default BenefitCard; 