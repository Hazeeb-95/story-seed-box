import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How quickly can a Care Manager reach me?",
    answer:
      "Our Care Managers typically arrive within 2-4 hours of booking for standard appointments. For urgent care requests, we offer a 24/7 emergency response service with arrival within 2 hours. You can schedule appointments via our app, website, or by calling our dedicated hotline.",
  },
  {
    question: "What equipment do Care Managers bring?",
    answer:
      "Care Managers arrive fully equipped with portable diagnostic devices including the Telth HES Pro Plus (51-parameter testing), vital signs monitors, ECG equipment, blood analysis tools, and connectivity equipment to sync all data in real-time with your health records on RootCloud™ EHR.",
  },
  {
    question: "Can I use health insurance?",
    answer:
      "Yes, we work with major health insurance providers across India. We also offer flexible payment plans and accept various payment methods. Our Care Pay solution helps optimize coverage and ensures transparent pricing. Contact us to verify your specific insurance coverage.",
  },
  {
    question: "How does the 15-minute care cycle work?",
    answer:
      "The 15-minute care cycle includes: (1) Initial assessment and vital signs collection (5 mins), (2) Comprehensive diagnostic testing using our portable equipment (7 mins), (3) Real-time AI analysis and Care Manager consultation (3 mins). The results are instantly available in your health records, and treatment plans are initiated immediately.",
  },
  {
    question: "What if I need specialist care?",
    answer:
      "Your Care Manager coordinates with any specialist you choose—locally, nationally, or internationally. We facilitate virtual consultations, manage referrals, handle local logistics like sample collection and medication delivery, and ensure all specialists have access to your unified health records on RootCloud™ EHR.",
  },
  {
    question: "How are Care Managers trained?",
    answer:
      "All Care Managers undergo rigorous training in clinical assessment, emergency response, diagnostic equipment operation, and care coordination. They are certified healthcare professionals (nurses, paramedics, or equivalent) with additional specialized training in home healthcare, patient advocacy, and our technology platforms.",
  },
  {
    question: "Is my health data secure?",
    answer:
      "Absolutely. All health data is stored on RootCloud™ EHR, which uses blockchain technology for immutable record-keeping and military-grade encryption. Your data is HIPAA-compliant and follows international healthcare data protection standards. You maintain complete control over who can access your records.",
  },
  {
    question: "Can I cancel my care plan?",
    answer:
      "Yes, all our care plans are flexible with no long-term lock-in contracts. You can upgrade, downgrade, or cancel your plan at any time with 30 days' notice. We believe in earning your trust through service quality, not contractual obligations.",
  },
  {
    question: "Will my Care Manager speak my language?",
    answer:
      "Yes! We match you with Care Managers who speak your preferred language. Our team is multilingual and includes speakers of Hindi, English, Tamil, Telugu, Bengali, Marathi, Kannada, and other regional languages across India.",
  },
  {
    question: "What happens in emergencies?",
    answer:
      "Press the one-touch SOS button in our app for immediate Care Manager response. They'll coordinate emergency services, notify your designated family contacts, transmit your medical history to emergency responders, and provide real-time guidance until help arrives. Your Care Manager stays connected throughout the emergency.",
  },
  {
    question: "Can family members use the same Care Manager?",
    answer:
      "Yes, we offer family care plans where one Care Manager serves multiple family members. This ensures continuity of care, better understanding of family health history, and more efficient coordination. Family plans offer significant cost savings compared to individual plans.",
  },
  {
    question: "How does remote monitoring work?",
    answer:
      "Your Care Manager provides you with IoMT devices (smart wearables and home diagnostic kits) that continuously monitor your vitals, activity, and health metrics. All data syncs automatically to RootCloud™ EHR where your Care Manager reviews it daily. They'll proactively reach out if any concerning trends are detected.",
  },
];

export const CareHomeFAQ = () => {
  return (
    <section className="py-section-desktop bg-muted">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-section-headline text-center mb-12 text-foreground">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-lg border border-border px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
