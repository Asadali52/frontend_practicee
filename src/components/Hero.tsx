import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showButtons?: boolean;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  showButtons = true,
  primaryButtonText = "Get Started",
  primaryButtonLink = "/signup",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/features"
}: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        className="object-cover absolute z-1"
        priority
      />
      <div className="absolute inset-0 z-2 bg-black opacity-60" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {subtitle}
        </p>
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryButtonLink}
              className="bg-blue-600 hover:bg-blue-700 border-2 border-blue-600 hover:border-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              {primaryButtonText}
            </a>
            <a
              href={secondaryButtonLink}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              {secondaryButtonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
} 