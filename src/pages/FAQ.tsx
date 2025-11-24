import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { TrianglePattern } from "@/components/TrianglePattern";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Naba?",
      answer: "Naba is an AI-powered inventory management and forecasting tool designed to help companies understand their stock needs, reduce losses, and make better purchasing decisions."
    },
    {
      question: "How can companies benefit from it?",
      answer: "By subscribing to Naba, companies receive accurate demand forecasting, inventory optimization insights, and predictive analytics that support smarter decision-making."
    },
    {
      question: "What features do you offer?",
      answer: "We offer: Core Feature: AI-powered demand forecasting with lead-time and shipping prediction, Smart inventory optimization, Data integration, and Scenario simulation and what-if analysis (XAI)."
    },
    {
      question: "How accurate is your model?",
      answer: "Our AI model achieved 94% accuracy based on real data, continuous monitoring, and automatic retraining."
    },
    {
      question: "Who can use Naba?",
      answer: "Retailers, warehouses, distributors, manufacturers, and any business that manages inventory or supply chains."
    },
    {
      question: "How do subscriptions work?",
      answer: "Companies choose a plan, create an account, connect their data, and activate the features they need."
    },
    {
      question: "Is our data safe?",
      answer: "Yes. All data is handled securely and used only for generating insights and forecasts."
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <TrianglePattern />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Naba
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-card border-2 border-border hover:border-accent/50 rounded-xl px-6 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
