import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  major: string;
  year: string;
  description: string;
  linkedinUrl: string;
  delay?: number;
}

export const TeamCard = ({ name, major, year, description, linkedinUrl, delay = 0 }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-card border-2 border-accent/20 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 shadow-md hover:shadow-yellow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {year}
            </p>
          </div>
          
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-sm font-semibold text-accent mb-3">
          {major}
        </p>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
