import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import { CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";

type Currency = "INR" | "GBP" | "USD";

const tiers = [
  {
    name: "Essential Care",
    priceINR: 12999,
    priceGBP: 99,
    priceUSD: 129,
    features: [
      "Basic health monitoring",
      "Quarterly Care Manager check-ins",
      "Telth Doc app access",
      "Telth Care Card",
      "TMart discounts",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Comprehensive Care",
    priceINR: 24999,
    priceGBP: 199,
    priceUSD: 259,
    features: [
      "Everything in Essential",
      "Weekly Care Manager interaction",
      "One TWBAN device included",
      "Monthly Smart Health Reports",
      "Specialist consultation credits",
      "Priority scheduling",
      "24/7 phone support",
      "Wellness Advisor access",
    ],
    popular: true,
  },
  {
    name: "Premium Care",
    priceINR: 49999,
    priceGBP: 399,
    priceUSD: 519,
    features: [
      "Everything in Comprehensive",
      "Complete TWBAN device suite",
      "Dedicated Wellness Advisor",
      "Unlimited specialist consultations",
      "Home visit services",
      "Family coverage (up to 4 members)",
      "Concierge health services",
      "International care coordination",
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currency, setCurrency] = useState<Currency>("INR");

  const currencySymbols = {
    INR: "₹",
    GBP: "£",
    USD: "$",
  };

  const getPrice = (tier: typeof tiers[0]) => {
    switch (currency) {
      case "INR":
        return tier.priceINR;
      case "GBP":
        return tier.priceGBP;
      case "USD":
        return tier.priceUSD;
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-purple-50/50 to-white overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary-purple))] mb-4">
            Choose Your Care Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Flexible plans designed to meet your health needs and budget
          </p>

          {/* Currency toggle */}
          <div className="flex justify-center gap-2 mb-8">
            {(["INR", "GBP", "USD"] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  currency === curr
                    ? "bg-[hsl(var(--primary-purple))] text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {currencySymbols[curr]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: tier.popular ? -20 : 0,
                      scale: tier.popular ? 1.05 : 1,
                    }
                  : {}
              }
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Most Popular badge */}
              {tier.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                </motion.div>
              )}

              {/* Card */}
              <div
                className={`relative h-full rounded-3xl p-8 transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-br from-[hsl(var(--primary-purple))] to-[hsl(var(--primary-purple-dark))] text-white shadow-2xl border-4 border-[hsl(var(--accent-teal))]"
                    : "bg-white border-2 border-gray-200 hover:border-[hsl(var(--primary-purple))]/50 hover:shadow-xl"
                }`}
              >
                {/* Spotlight effect for popular */}
                {tier.popular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-3xl pointer-events-none" />
                )}

                <div className="relative z-10">
                  <h3
                    className={`text-2xl font-bold mb-2 ${tier.popular ? "text-white" : "text-[hsl(var(--primary-purple))]"}`}
                  >
                    {tier.name}
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-5xl font-bold ${tier.popular ? "text-white" : "text-[hsl(var(--primary-purple))]"}`}
                      >
                        {currencySymbols[currency]}
                        {getPrice(tier).toLocaleString()}
                      </span>
                      <span
                        className={`text-lg ${tier.popular ? "text-white/80" : "text-muted-foreground"}`}
                      >
                        /month
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.popular ? "text-[hsl(var(--accent-teal))]" : "text-[hsl(var(--accent-teal))]"}`}
                        />
                        <span
                          className={`text-sm ${tier.popular ? "text-white/90" : "text-muted-foreground"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    className={`w-full ${
                      tier.popular
                        ? "bg-white text-[hsl(var(--primary-purple))] hover:bg-white/90"
                        : "bg-[hsl(var(--primary-purple))] text-white hover:bg-[hsl(var(--primary-purple-dark))]"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Condition-Specific Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-3xl p-8 border-2 border-dashed border-[hsl(var(--primary-purple))]/30">
            <h3 className="text-2xl font-bold text-[hsl(var(--primary-purple))] mb-3">
              Condition-Specific Plans
            </h3>
            <p className="text-muted-foreground mb-6">
              Tailored care plans for specific conditions with specialized monitoring, dedicated care
              teams, and customized protocols
            </p>
            <Button size="lg" variant="outline" className="border-2">
              Contact Us for Custom Pricing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
