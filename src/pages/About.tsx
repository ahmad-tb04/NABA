import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { TrianglePattern } from "@/components/TrianglePattern";
import { TeamCard } from "@/components/TeamCard";
import { Target } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Shamme Alkhawaldeh",
      major: "AI Engineering",
      year: "3rd Year",
      description: "Specializes in machine learning models and AI architecture design.",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "Ola Amro",
      major: "Data Science",
      year: "3rd Year",
      description: "Expert in data analysis and predictive modeling.",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "Aws Alswini",
      major: "Software Engineering",
      year: "3rd Year",
      description: "Focuses on backend development and system architecture.",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "Raneem Khanji",
      major: "Computer Science",
      year: "3rd Year",
      description: "Specializes in algorithms and optimization techniques.",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "Ahamd Ibakhi",
      major: "IT Engineering",
      year: "3rd Year",
      description: "Expert in system integration and cloud infrastructure.",
      linkedinUrl: "https://linkedin.com"
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
              Who <span className="text-gradient">We Are</span>
            </h1>
          </motion.div>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card border-2 border-accent/20 rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Naba is built by five students from <span className="text-accent font-semibold">Al-Hussein Technical University</span> as 
                part of an innovation challenge. We competed against students from multiple universities 
                across Jordan and were selected among the <span className="text-accent font-semibold">top winning teams</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 relative">
        <TrianglePattern />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <TeamCard
                key={member.name}
                {...member}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden bg-muted/30">
        <TrianglePattern />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Target className="w-10 h-10 text-accent" />
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              We aim to help businesses make intelligent inventory decisions using data-driven, 
              ethical, and efficient AI technology.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
