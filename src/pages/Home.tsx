import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { FloatingOrb } from "@/components/FloatingOrb";
import { FlowingShape } from "@/components/FlowingShape";
import {
  Brain,
  TrendingUp,
  Package,
  Boxes,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001a3d] via-[#002952] to-[#000b1f] relative overflow-hidden">
      {/* Flowing Background Shapes */}
      <FlowingShape variant="wave1" className="top-0 left-0 w-full h-[600px]" />
      <FlowingShape
        variant="wave2"
        className="top-40 right-0 w-full h-[500px]"
      />
      <FlowingShape
        variant="wave3"
        className="bottom-0 left-0 w-full h-[700px]"
      />

      {/* Floating Orbs */}
      <FloatingOrb size={160} top="15%" left="8%" delay={0} />
      <FloatingOrb size={120} top="19%" right="12%" delay={1.5} duration={8} />
      <FloatingOrb size={100} top="60%" left="15%" delay={3} duration={7} />
      <FloatingOrb size={140} bottom="12%" right="18%" delay={2} duration={9} />
      <FloatingOrb size={80} top="45%" right="8%" delay={4} duration={6} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-8"
            ></motion.div>

            <div className="glass-card px-10 py-12 rounded-3xl mx-auto max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <h1 className="
                text-3xl                /* mobile */
                sm:text-5xl             /* small screens */
                md:text-6xl             /* tablets */
                lg:text-7xl             /* laptops */
                xl:text-8xl             /* desktops */
                font-extrabold mb-8 leading-tight text-white text-center
              ">
                AI-Powered Inventory
                <br />
                Intelligence for{" "}
                <span className="text-gradient">Smarter, Faster</span>
                <br />
                Decisions
              </h1>

            </div>


            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Naba helps companies optimize stock, reduce losses, and forecast
              demand with high accuracy using intelligent AI-driven predictions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center"></div>
          </motion.div>
        </div>
      </section>

      {/* Core Feature Section */}
      <section className="py-32 relative z-10 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="text-gradient">Core Feature</span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-accent/20 rounded-[3rem] blur-3xl group-hover:blur-[100px] transition-all duration-700" />

              <div className="relative glass-card rounded-[3rem] p-12 md:p-16 shadow-2xl">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                  {[
                    {
                      icon: Brain,
                      title: "AI-Powered Demand Forecasting",
                      delay: 0.1,
                    },
                    {
                      icon: TrendingUp,
                      title: "Dynamic Lead-Time Prediction",
                      delay: 0.2,
                    },
                    {
                      icon: Package,
                      title: "Shipping Time Prediction",
                      delay: 0.3,
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: feature.delay }}
                      whileHover={{ y: -10, scale: 1.05 }}
                      className="text-center group/item"
                    >
                      <div className="w-24 h-24 glass-card rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover/item:shadow-yellow-glow transition-all duration-500">
                        <feature.icon className="w-12 h-12 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-white leading-snug">
                        {feature.title}
                      </h3>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-10">
                  <p className="text-center text-blue-100/70 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                    Naba continuously learns from company data, monitors
                    patterns, and automatically retrains the model to maintain
                    high accuracy across all predictions.
                  </p>

                  <div className="flex justify-center w-full">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="
                        bg-gradient-to-r from-accent via-yellow-400 to-accent
                        text-accent-foreground font-bold
                        text-xl        /* mobile */
                        sm:text-2xl    /* small screens */
                        md:text-3xl    /* tablets & up */
                        px-6 py-3      /* mobile padding */
                        sm:px-10 sm:py-4
                        md:px-12 md:py-5
                        rounded-full shadow-yellow-glow relative overflow-hidden
                        text-center
                        w-fit mx-auto
                      "
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      <span className="relative">Accuracy: 94%</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-32 relative z-10 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Additional <span className="text-gradient">Key Features</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass-card rounded-3xl p-10 shadow-2xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10">
                <div className="mb-6 text-accent">
                  <Boxes className="w-14 h-14" />
                </div>
                <h3 className="text-2xl font-bold mb-5 text-white leading-tight">
                  Unified Data Integration & Smart Inventory Optimization
                </h3>
                <p className="text-blue-100/70 leading-relaxed text-lg">
                  Connect all your data streams into one system and let Naba
                  reduce dead-stock, prevent stockouts, and recommend optimized
                  purchase decisions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass-card rounded-3xl p-10 shadow-2xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10">
                <div className="mb-6 text-accent">
                  <Lightbulb className="w-14 h-14" />
                </div>
                <h3 className="text-2xl font-bold mb-5 text-white leading-tight">
                  Scenario Simulation & What-If Analysis (XAI)
                </h3>
                <p className="text-blue-100/70 leading-relaxed text-lg">
                  Explore business scenarios, test outcomes, and make informed
                  decisions through explainable AI simulations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Ready to Transform Your
              <br />
              <span className="text-gradient">Inventory Management?</span>
            </h2>
            <p className="text-xl text-blue-100/70 mb-12 leading-relaxed">
              Join leading companies using Naba to optimize their supply chain
              operations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
