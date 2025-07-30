interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({ 
  children, 
  className = "py-20", 
  containerClassName = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
}: SectionProps) {
  return (
    <section className={className}>
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  );
} 