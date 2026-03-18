import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const ease = [0.4, 0, 0.2, 1] as const;

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const portfolioItems = [
  {
    name: "Lucky Labs AS",
    description: "Produktselskap som utvikler digitale plattformer. Bak appen Vinn – en ny måte å spare og vinne på.",
    role: "Eier & Grunnlegger",
    status: "Aktiv",
    url: "https://luckylabs.no",
  },
  {
    name: "Private Investeringer",
    description: "Utvalgte posisjoner i norske og internasjonale selskaper med langsiktig verdiskapning som mål.",
    role: "Investor",
    status: "Pågående",
  },
];

const Index = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-[960px] px-6 py-12 md:px-8 md:py-20"
      >
        {/* Header */}
        <motion.header variants={fadeUp} className="mb-20 md:mb-32">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium tracking-wide text-foreground">
              Ihle Studio
            </h2>
            <div className="flex items-center gap-3">
              <span className="meta-label">Holdingselskap</span>
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </motion.header>

        {/* Hero */}
        <motion.section variants={fadeUp} className="mb-20 md:mb-32">
          <h1 className="max-w-[720px] text-4xl font-medium leading-[1.1] tracking-tighter text-foreground md:text-6xl lg:text-7xl" style={{ textWrap: "balance" } as React.CSSProperties}>
            Bygger og investerer i selskaper som former digitale plattformer.
          </h1>
          <p className="mt-6 max-w-[520px] text-base leading-relaxed text-muted-foreground md:text-lg">
            Et personlig holdingselskap ledet av Dag Brede Ihle, med fokus på
            langsiktig verdiskapning gjennom Lucky Labs og utvalgte private
            investeringer.
          </p>
        </motion.section>

        {/* Portfolio */}
        <motion.section variants={fadeUp} className="mb-20 md:mb-32">
          <span className="meta-label mb-8 block">Portefølje</span>
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioItems.map((item) => (
              <div key={item.name} className="glass-card group p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="meta-label">{item.role}</span>
                  <span className="meta-label">{item.status}</span>
                </div>
                <h3 className="mb-3 text-xl font-medium tracking-tight text-foreground">
                  {item.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          variants={fadeUp}
          className="flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-sm font-medium text-foreground">Dag Brede Ihle</p>
            <p className="meta-label mt-1">Ihle Studio</p>
          </div>
          <div className="md:text-center">
            <a href="mailto:dag@ihlestudio.no" className="meta-label transition-colors duration-300 hover:text-foreground">dag@ihlestudio.no</a>
          </div>
          <div className="md:text-right">
            <p className="meta-label">Org.nr 930 939 846</p>
            <p className="meta-label mt-1">Norge</p>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Index;
