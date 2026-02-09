import { motion } from "framer-motion";
import { useState } from "react";
import { Search, X } from "lucide-react";
import KeyCard from "./KeyCard";

const lifestealKeys = [
  {
    name: "Core Key",
    description: "Essential Lifesteal gear with balanced enchantments and hearts.",
    price: "₹10",
    buyLink: "https://spicysmp.dpdns.org/core_key.html",
    isFree: false,
  },
  {
    name: "Flux Key",
    description: "Advanced Lifesteal kit with powerful enchantments and extra hearts.",
    price: "₹20",
    buyLink: "https://spicysmp.dpdns.org/flux_key.html",
    isFree: false,
  },
  {
    name: "Aura Key",
    description: "Ultimate Lifesteal crate with max enchantments, hearts and rare items.",
    price: "₹30",
    buyLink: "https://spicysmp.dpdns.org/aura_key.html",
    isFree: false,
  },
];

const LifestealStoreSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredKeys = lifestealKeys.filter(
    (key) =>
      key.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      key.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="lifesteal-store" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-destructive/10 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-display tracking-wider text-muted-foreground mb-4">
            ❤️ LIFESTEAL KEYS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4">
            <span className="gradient-text">Lifesteal Crates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock powerful crate rewards on the Lifesteal server!
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          className="max-w-md mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search lifesteal keys..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-destructive/50 focus:shadow-[0_0_20px_hsla(0,100%,50%,0.2)] transition-all duration-300 font-display text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Keys grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {filteredKeys.map((key, index) => (
            <KeyCard key={key.name} {...key} index={index} />
          ))}
        </div>

        {filteredKeys.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground font-display">
              No keys found matching "{searchQuery}"
            </p>
          </motion.div>
        )}

        <motion.div
          className="mt-12 p-6 rounded-2xl glass border border-destructive/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            <span className="text-destructive font-semibold">💀 LIFESTEAL:</span> Use keys on the Lifesteal server to get random powerful items!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LifestealStoreSection;
