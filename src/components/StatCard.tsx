interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">
        {label}
      </div>
    </div>
  );
};
