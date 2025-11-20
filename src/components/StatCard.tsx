interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-8 rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] card-animate group">
      <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
        {value}
      </div>
      <div className="text-base md:text-lg text-white/90">
        {label}
      </div>
    </div>
  );
};
