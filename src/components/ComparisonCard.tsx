import { Calendar, Clock } from "lucide-react";

export const ComparisonCard = () => {
  return (
    <div className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Transforming Healthcare Delivery</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Traditional */}
        <div className="bg-muted/50 p-8 rounded-2xl border-2 border-muted relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Calendar className="h-16 w-16 text-muted-foreground/20" />
          </div>
          
          <h3 className="text-2xl font-bold text-muted-foreground mb-6 line-through">The Old Way</h3>
          
          <ul className="space-y-3 mb-8">
            <li className="text-muted-foreground line-through">Day 1: Initial consultation</li>
            <li className="text-muted-foreground line-through">Day 3-4: Lab test appointment</li>
            <li className="text-muted-foreground line-through">Day 5-7: Wait for lab results</li>
            <li className="text-muted-foreground line-through">Day 8: Follow-up consultation</li>
            <li className="text-muted-foreground line-through">Day 10-12: Specialist referral</li>
            <li className="text-muted-foreground line-through">Day 13-14: Additional tests</li>
            <li className="text-muted-foreground line-through">Day 15: Treatment plan finalized</li>
          </ul>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p><strong>Time:</strong> 15+ days of back-and-forth</p>
            <p><strong>Cost:</strong> Multiple visits, transportation, lost work days</p>
            <p><strong>Outcome:</strong> Delayed treatment, patient frustration</p>
          </div>
        </div>

        {/* Telth */}
        <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary relative overflow-hidden hover-lift">
          <div className="absolute top-4 right-4">
            <Clock className="h-16 w-16 text-primary/20" />
          </div>
          
          <h3 className="text-2xl font-bold text-primary mb-6">The Telth Way</h3>
          
          <ul className="space-y-3 mb-8">
            <li className="text-foreground flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Minute 1-5: Comprehensive health screening (90+ parameters)</span>
            </li>
            <li className="text-foreground flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Minute 6-10: AI-powered analysis via P3DSC™</span>
            </li>
            <li className="text-foreground flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Minute 11-13: Doctor consultation with complete data</span>
            </li>
            <li className="text-foreground flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Minute 14-15: Treatment plan + prescriptions + care plan</span>
            </li>
          </ul>

          <div className="space-y-2 text-sm">
            <p><strong className="text-primary">Time:</strong> 15 minutes total</p>
            <p><strong className="text-primary">Cost:</strong> Single visit, one payment, no waiting</p>
            <p><strong className="text-primary">Outcome:</strong> Immediate treatment, complete care plan</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-xl md:text-2xl font-bold">
          From 15 Days to 15 Minutes: 99% Time Reduction
        </div>
      </div>
    </div>
  );
};
