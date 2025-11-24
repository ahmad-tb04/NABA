import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { TrianglePattern } from "@/components/TrianglePattern";
import { FeatureCard } from "@/components/FeatureCard";
import { Brain, TrendingUp, Package, Target, Boxes, Lightbulb } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <TrianglePattern />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="bg-accent/10 border-2 border-accent/30 rounded-full px-6 py-2 text-accent font-semibold">
                94% Accuracy
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI-Powered Inventory Intelligence for{" "}
              <span className="text-gradient">Smarter, Faster</span> Decisions
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Naba helps companies optimize stock, reduce losses, and forecast demand with high accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="min-w-[200px]">
                Request Partnership
              </Button>
              <Button variant="hero-outline" size="lg" className="min-w-[200px]">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
      
      {/* Core Feature Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Core Feature</span>
            </h2>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent rounded-3xl blur-2xl" />
              
              <div className="relative bg-card border-2 border-accent/30 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">AI-Powered Demand Forecasting</h3>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Dynamic Lead-Time Prediction</h3>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Package className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Shipping Time Prediction</h3>
                  </div>
                </div>
                
                <div className="border-t-2 border-border pt-8">
                  <p className="text-center text-muted-foreground text-lg leading-relaxed">
                    Naba continuously learns from company data, monitors patterns, and automatically 
                    retrains the model to maintain high accuracy.
                  </p>
                  
                  <div className="mt-6 flex justify-center">
                    <div className="bg-accent text-accent-foreground font-bold text-3xl px-8 py-3 rounded-full shadow-yellow">
                      Accuracy: 94%
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Additional Features Section */}
      <section className="py-24 relative bg-muted/30">
        <TrianglePattern />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Additional <span className="text-gradient">Key Features</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={<Boxes className="w-12 h-12" />}
              title="Unified Data Integration & Smart Inventory Optimization"
              description="Connect all your data streams into one system and let Naba reduce dead-stock, prevent stockouts, and recommend optimized purchase decisions."
              delay={0.1}
            />
            
            <FeatureCard
              icon={<Lightbulb className="w-12 h-12" />}
              title="Scenario Simulation & What-If Analysis (XAI)"
              description="Explore business scenarios, test outcomes, and make informed decisions through explainable AI simulations."
              delay={0.2}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <TrianglePattern />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Inventory Management?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join leading companies using Naba to optimize their supply chain operations.
            </p>
            <Button variant="hero" size="lg" className="min-w-[250px]">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
