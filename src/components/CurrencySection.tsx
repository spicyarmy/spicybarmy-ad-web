import { motion } from "framer-motion";
import { Coins, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const currencies = [
  {
    id: "coins",
    name: "In-Game Coins",
    description: "Buy coins to use in the server economy. Trade, purchase items from shops, and more!",
    rate: "₹2 = 1 Coin",
    icon: Coins,
    minQuantity: 100,
    gradient: "from-yellow-500 to-amber-600",
    bgGradient: "from-yellow-500/20 to-amber-600/20",
    glow: "0 0 40px hsla(45, 100%, 50%, 0.3)",
    accent: "text-yellow-400",
  },
  {
    id: "claimblocks",
    name: "Claim Blocks",
    description: "Protect your builds! Claim blocks let you expand your protected territory on the server.",
    rate: "₹1 = 1 Claim Block",
    icon: MapPin,
    minQuantity: 100,
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/20 to-emerald-600/20",
    glow: "0 0 40px hsla(140, 100%, 50%, 0.3)",
    accent: "text-green-400",
  },
];

const CurrencySection = () => {
  const navigate = useNavigate();

  return (
    <section id="currency" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-yellow-500/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-green-500/10 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-display tracking-wider text-muted-foreground mb-4">
            💰 IN-GAME CURRENCY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4">
            <span className="gradient-text">Coins & Claim Blocks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Buy any amount you need! Pay for exactly what you want.
          </p>
        </motion.div>

        {/* Currency cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {currencies.map((currency, index) => {
            const Icon = currency.icon;
            return (
              <motion.div
                key={currency.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div
                  className="relative rounded-2xl bg-card border border-border/50 overflow-hidden h-full"
                  style={{ boxShadow: currency.glow }}
                >
                  {/* Gradient top bar */}
                  <div className={`h-2 bg-gradient-to-r ${currency.gradient}`} />
                  
                  <div className="p-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currency.bgGradient} flex items-center justify-center mb-4`}>
                      <Icon className={`w-8 h-8 ${currency.accent}`} />
                    </div>

                    {/* Name */}
                    <h3 className={`font-display text-2xl font-bold ${currency.accent} mb-2`}>
                      {currency.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {currency.description}
                    </p>

                    {/* Rate badge */}
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${currency.gradient} mb-6`}>
                      <span className="font-display font-bold text-white">
                        {currency.rate}
                      </span>
                    </div>

                    {/* Min quantity info */}
                    <p className="text-xs text-muted-foreground mb-4">
                      Minimum purchase: {currency.minQuantity} {currency.id === "coins" ? "coins" : "blocks"}
                    </p>

                    {/* Buy button */}
                    <Button
                      variant="hero"
                      className="w-full group-hover:scale-[1.02] transition-transform"
                      onClick={() => navigate(`/checkout/${currency.id}`)}
                    >
                      Buy {currency.name}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info banner */}
        <motion.div
          className="mt-12 p-6 rounded-2xl glass border border-yellow-500/20 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            <span className="text-yellow-400 font-semibold">💡 TIP:</span> Enter any amount you want at checkout - buy exactly what you need!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrencySection;
