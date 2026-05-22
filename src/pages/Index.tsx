import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import {
  Coffee,
  MapPin,
  Phone,
  Clock,
  Star,
  Navigation,
  ShoppingBag,
  Truck,
  Utensils,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import heroImage from "@/assets/gem-coffee-hero.avif";
import espressoImage from "@/assets/espresso.jpg";
import americanoImage from "@/assets/americano.jpg";
import cappuccinoImage from "@/assets/cappuccino.avif";
import ellinikosImage from "@/assets/ellinikos.jpg";
import filtrouImage from "@/assets/filtrou.jpg";
import flatWhiteImage from "@/assets/flat-white.jpg";
import freddoCappuccinoImage from "@/assets/freddo-cappuccino.avif";
import freddoEspressoAmericanoImage from "@/assets/espresso-americano.avif";
import freddoEspressoMacchiatoImage from "@/assets/freddo-espresso-macchiato.avif";
import frappeImage from "@/assets/frappe.avif";
import nesImage from "@/assets/nes.avif";
import freddoEspressoImage from "@/assets/freddo-espresso.avif";
import latteImage from "@/assets/latte.jpg";
import spanishLatteImage from "@/assets/spanish-latte.jpg";
import espressoMacchiatoImage from "@/assets/espresso-macchiato.jpg";
import espressoLungoImage from "@/assets/espresso-lungo.jpg";
import icedLatteImage from "@/assets/iced-latte.avif";
import baguetteGalopoulaImage from "@/assets/baguette-galopoula.avif";
import baguetteAllantikonImage from "@/assets/baguette-allantikon.avif";
import baguetteKotopouloImage from "@/assets/baguette-kotopoulo.avif";
import baguetteXoriatikiImage from "@/assets/baguette-xoriatiki.avif";
import baguetteKotompoukiesImage from "@/assets/baguette-kotompoukies.avif";
import kroyasanGalopoulaTiriImage from "@/assets/kroyasan-galopoula-tiri.png";
import sokolataImage from "@/assets/sokolata.png";
import xortopitaImage from "@/assets/xortopita.avif";
import pizzaImage from "@/assets/pizza.avif";
import kroyasanVoutyrouImage from "@/assets/kroyasan-voutyrou.avif";
import kroyasanSokolatasImage from "@/assets/kroyasan-sokolatas.avif";
import tiropitaImage from "@/assets/tiropita.png";
import foccaciaMesogeiakoImage from "@/assets/foccacia-mesogeiako.avif";
import giaourtiGranolaImage from "@/assets/giaourti-granola.jpg";
import kaltsouniLyxnarakiImage from "@/assets/kaltsouni-lyxnaraki.avif";
import kaltsouniAnebatoImage from "@/assets/kaltsouni-anebato.avif";
import miniBagketiniGalopoulaImage from "@/assets/mini-bagketini-galopoula.png";
import frostBrewImage from "@/assets/frost-brew.jpg";
import tsaiImage from "@/assets/tsai.jpg";
import granitaLemoniImage from "@/assets/granita-lemoni.avif";
import smoothieMangoAxladiImage from "@/assets/smoothie-mango-axladi.avif";
import smoothieKaleImage from "@/assets/smoothie-kale.jpg";
import smoothieMangoStrawberryImage from "@/assets/smoothie-mango-strawberry.avif";
import smoothieKarotoImage from "@/assets/smoothie-karoto.jpg";
import smoothieDragonImage from "@/assets/smoothie-dragon.jpg";
import smoothieFraoulaBananaImage from "@/assets/smoothie-fraoula-banana.jpg";
import xymosPortokaliImage from "@/assets/xymos-portokali.jpg";
import xymosAnameiktosImage from "@/assets/xymos-anameiktos.jpg";
import koulouriGalopoulaTiriImage from "@/assets/koulouri-galopoula-tiri.avif";
import tyrokoulouroImage from "@/assets/tyrokoulouro.jpg";
import koulouriThessalonikisImage from "@/assets/koulouri-thessalonikis.avif";
import koulouriOlikisImage from "@/assets/koulouri-olikis.avif";
import arabikiImage from "@/assets/arabiki.avif";
import pepsiImage from "@/assets/pepsi.png";
import pepsiZeroImage from "@/assets/pepsi-zero.avif";
import spriteImage from "@/assets/sprite.avif";
import fantaOrangeImage from "@/assets/fanta-orange.avif";
import fantaBlueImage from "@/assets/fanta-blue.avif";
import fantaLemonImage from "@/assets/fanta-lemon.avif";
import amitaImage from "@/assets/amita.avif";
import arizonaRodakinoImage from "@/assets/arizona-rodakino.avif";
import arizonaLemoniImage from "@/assets/arizona-lemoni.avif";
import arizonaGreenTeaImage from "@/assets/arizona-green-tea.avif";
import redbullImage from "@/assets/redbull.avif";
import hellImage from "@/assets/hell.avif";
import neroMikroImage from "@/assets/nero-mikro.avif";
import neroMegaloImage from "@/assets/nero-megalo.avif";
import candiaImage from "@/assets/candia.jpg";
import fixImage from "@/assets/fix.jpg";
import muffinVanillaSokolataImage from "@/assets/muffin-vanilla-sokolata.png";
import muffinSokolataImage from "@/assets/muffin-sokolata.png";
import cookiesNutellaImage from "@/assets/cookies-nutella.png";
import cookiesVanillaImage from "@/assets/cookies-vanilla.png";
import cookiesSokolataImage from "@/assets/cookies-sokolata.png";
import cookiesFystikiImage from "@/assets/cookies-fystiki.png";
import donutSokolataImage from "@/assets/donut-sokolata.png";
import loukoumasMiniImage from "@/assets/loukoumas-mini.png";

const ADDRESS = "Λεωφόρος Ικάρου &, Καρτερού 2, Νέα Αλικαρνασσός 716 01";
const PHONE = "281 022 1333";
const PHONE_TEL = "2810221333";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("GEM COFFEE & MORE, Λεωφόρος Ικάρου &, Καρτερού 2, Νέα Αλικαρνασσός 716 01");
const EMBED_URL =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Λεωφόρος Ικάρου &, Καρτερού 2, Νέα Αλικαρνασσός 716 01") +
  "&output=embed";

const menu = {
  "Καφέδες": [
    { name: "Espresso", price: "1,90", image: espressoImage },
    { name: "Espresso Macchiato", price: "1,90", image: espressoMacchiatoImage },
    { name: "Espresso Lungo", price: "1,90", image: espressoLungoImage },
    { name: "Espresso Americano", price: "1,90", image: americanoImage },
    { name: "Cappuccino", price: "2,30", image: cappuccinoImage },
    { name: "Latte", price: "2,60", popular: true, image: latteImage },
    { name: "Flat White", price: "2,50", image: flatWhiteImage },
    { name: "Freddo Espresso", price: "2,30", image: freddoEspressoImage },
    { name: "Freddo Cappuccino", price: "2,50", popular: true, image: freddoCappuccinoImage },
    { name: "Iced Latte", price: "2,60", image: icedLatteImage },
    { name: "Freddo Espresso Macchiato", price: "2,30", image: freddoEspressoMacchiatoImage },
    { name: "Freddo Espresso Americano", price: "2,30", image: freddoEspressoAmericanoImage },
    { name: "Spanish Latte", price: "3,10", image: spanishLatteImage },
    { name: "Nes", price: "2,20", image: nesImage },
    { name: "Frappe", price: "2,20", image: frappeImage },
    { name: "Ελληνικός", price: "2,00", image: ellinikosImage },
    { name: "Φίλτρου", price: "1,90", image: filtrouImage },
  ],
  "Ροφήματα": [
    { name: "Σοκολάτα", price: "2,50", image: sokolataImage },
    { name: "Frost Brew Shake", price: "3,20", image: frostBrewImage },
    { name: "Τσάι", price: "2,20", image: tsaiImage },
    { name: "Γρανίτα Λεμόνι", price: "2,80", image: granitaLemoniImage },
  ],
  "Smoothies & Χυμοί": [
    { name: "Smoothie Mango, Αχλάδι", price: "4,00", image: smoothieMangoAxladiImage },
    { name: "Smoothie Kale, Mango, Μπανάνα, Λεμονόχορτο", price: "4,00", popular: true, image: smoothieKaleImage },
    { name: "Smoothie Mango, Μπανάνα, Φράουλα, Σταφίδα", price: "4,00", image: smoothieMangoStrawberryImage },
    { name: "Smoothie Mango, Μπανάνα, Καρότο, Ακτινίδιο, Guava", price: "4,00", image: smoothieKarotoImage },
    { name: "Smoothie Dragon Fruit, Mango, Μπανάνα, Μήλο", price: "4,00", image: smoothieDragonImage },
    { name: "Smoothie Φράουλα & Μπανάνα", price: "4,00", image: smoothieFraoulaBananaImage },
    { name: "Φυσικός Χυμός Πορτοκάλι", price: "2,70", image: xymosPortokaliImage },
    { name: "Φυσικός Χυμός Ανάμεικτος", price: "3,20", image: xymosAnameiktosImage },
  ],
  "Sandwiches": [
    { name: "Μπαγκέτα Γαλοπούλα", price: "3,30", image: baguetteGalopoulaImage },
    { name: "Μπαγκέτα Αλλαντικών", price: "3,50", image: baguetteAllantikonImage },
    { name: "Μπαγκέτα Κοτόπουλο", price: "3,70", image: baguetteKotopouloImage },
    { name: "Μπαγκέτα Ολικής Χωριάτικη", price: "3,30", image: baguetteXoriatikiImage },
    { name: "Μπαγκέτα Κοτομπουκιές", price: "3,40", popular: true, image: baguetteKotompoukiesImage },
    { name: "Κρουασάν Γεμιστό Γαλοπούλα Τυρί", price: "2,90", image: kroyasanGalopoulaTiriImage },
  ],
  "Toast & Tortillas": [
    { name: "Κουλούρι Θεσ/νίκης Γαλοπούλα & Τυρί Κρέμα", price: "2,20", image: koulouriGalopoulaTiriImage },
    { name: "Τυροκούλουρο", price: "1,20", image: tyrokoulouroImage },
    { name: "Κουλούρι Θεσσαλονίκης", price: "0,80", image: koulouriThessalonikisImage },
    { name: "Κουλούρι Θεσσαλονίκης Ολικής", price: "0,90", image: koulouriOlikisImage },
    { name: "Αραβική Κοτόπουλο 230g", price: "2,90", image: arabikiImage },
    { name: "Αραβική Γαλοπούλα 230g", price: "2,90", image: arabikiImage },
  ],
  "Σφολιάτες": [
    { name: "Χορτόπιτα Στριφτή", price: "2,50", image: xortopitaImage },
    { name: "Pizza", price: "2,50", popular: true, image: pizzaImage },
    { name: "Κρουασάν Βουτύρου", price: "2,00", image: kroyasanVoutyrouImage },
    { name: "Κρουασάν Σοκολάτας", price: "2,20", image: kroyasanSokolatasImage },
    { name: "Τυρόπιτα Στριφτή", price: "2,20", image: tiropitaImage },
    { name: "Foccacia Μεσογειακό", price: "2,50", image: foccaciaMesogeiakoImage },
  ],
  "Mini Επιλογές": [
    { name: "Καλτσούνι Λυχναράκι", price: "1,10", image: kaltsouniLyxnarakiImage },
    { name: "Καλτσούνι Ανεβατό", price: "1,10", image: kaltsouniAnebatoImage },
    { name: "Γιαούρτι Granola", price: "2,50", image: giaourtiGranolaImage },
    { name: "Mini Μπαγκετίνι Γαλοπούλα", price: "1,80", image: miniBagketiniGalopoulaImage },
  ],
  "Γλυκά": [
    { name: "Muffin Βανίλια & Σοκολάτα", price: "3,00", image: muffinVanillaSokolataImage },
    { name: "Muffin Σοκολάτα", price: "2,30", image: muffinSokolataImage },
    { name: "Cookies Nutella", price: "1,40", image: cookiesNutellaImage },
    { name: "Cookies Βανίλια", price: "1,50", image: cookiesVanillaImage },
    { name: "Cookies Σοκολάτα", price: "1,50", image: cookiesSokolataImage },
    { name: "Cookies Φυστίκι", price: "1,50", image: cookiesFystikiImage },
    { name: "Donut Σοκολάτα", price: "1,90", image: donutSokolataImage },
    { name: "Λουκουμάς Mini", price: "1,20", image: loukoumasMiniImage },
  ],
  "Αναψυκτικά & Νερά": [
    { name: "Pepsi 0.33 L", price: "1,50", image: pepsiImage },
    { name: "Pepsi Zero 0.33 L", price: "1,50", image: pepsiZeroImage },
    { name: "Sprite 0.33 L", price: "1,50", image: spriteImage },
    { name: "Fanta Πορτοκαλάδα 0.33 L", price: "1,30", image: fantaOrangeImage },
    { name: "Fanta Πορτοκαλάδα Μπλε 0.33 L", price: "1,30", image: fantaBlueImage },
    { name: "Fanta Λεμόνι 0.33 L", price: "1,30", image: fantaLemonImage },
    { name: "Amita Motion 0.33 L", price: "1,50", image: amitaImage },
    { name: "Arizona Ροδάκινο 0.5 L", price: "2,40", image: arizonaRodakinoImage },
    { name: "Arizona Λεμόνι 0.5 L", price: "2,40", image: arizonaLemoniImage },
    { name: "Arizona Πράσινο Τσάι 0.5 L", price: "2,40", image: arizonaGreenTeaImage },
    { name: "Red Bull 0.25 L", price: "2,30", image: redbullImage },
    { name: "Hell Energy Classic 0.25 L", price: "1,20", image: hellImage },
    { name: "Νερό 0.5 L", price: "0,50", image: neroMikroImage },
    { name: "Νερό 1.5 L", price: "0,70", image: neroMegaloImage },
    { name: "Μπύρα Candia (5% vol) · 18+", price: "1,60", image: candiaImage },
    { name: "Μπύρα Fix (5% vol) · 18+", price: "1,60", image: fixImage },
  ],
};

const DELIVERY_PARTNERS = [
  {
    name: "efood",
    desc: "Fast delivery across Heraklion",
    url: "https://www.e-food.gr/delivery/irakleio-kriti/gem-coffee-and-more-8664373?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action",
    color: "bg-brand-red",
  },
  {
    name: "Wolt",
    desc: "Order in a few taps",
    url: "https://wolt.com/el/grc/heraklion/restaurant/gem-coffee-more?utm_source=googlemapreserved&utm_campaign=gem-coffee-more&utm_content=6964b54036925b2da9ba948e&rwg_token=AFd1xnHkhNvEvWU5RdHx7bGDx3srjXCvAdCF9V3pS6P4BFdgHONy-da0P_OVkOET52BqOVP6AkwKcq93_oyw8vQdJW-o2yOybw%3D%3D",
    color: "bg-espresso",
  },
  {
    name: "box",
    desc: "Local delivery service",
    url: "https://box.gr/delivery/irakleio-kritis/gem-coffee?utm_source=google&utm_medium=organic&utm_campaign=order_with_google",
    color: "bg-caramel",
  },
];

type ServiceAction = { type: "link"; href: string } | { type: "delivery" };

const services: Array<{
  icon: typeof Utensils;
  title: string;
  desc: string;
  action: ServiceAction;
}> = [
  { icon: Utensils, title: "Dine-in", desc: "Relax with a fresh brew", action: { type: "link", href: "#location" } },
  { icon: ShoppingBag, title: "Takeaway", desc: "Grab & go in seconds", action: { type: "link", href: "#location" } },
  { icon: Truck, title: "Contactless Delivery", desc: "Choose efood, Wolt or box", action: { type: "delivery" } },
  { icon: Phone, title: "Phone Ordering", desc: "Call us to place an order", action: { type: "link", href: "tel:2810221333" } },
];

const testimonials = [
  {
    quote: "Best freddo on the way to the airport. Always fast and friendly.",
    name: "Maria K.",
  },
  {
    quote: "Perfect quick stop. Coffee is consistently great and the staff are kind.",
    name: "Dimitris P.",
  },
  {
    quote: "Amazing value — quality coffee for just a couple of euros.",
    name: "Elena S.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Index = () => {
  const [deliveryOpen, setDeliveryOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="GEM Coffee & More logo"
              className="h-9 w-9 rounded-full object-cover bg-espresso"
            />
            <div className="leading-tight">
              <p className="font-display font-semibold text-base text-espresso">GEM Coffee</p>
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground">& More</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-espresso transition-colors">About</a>
            <a href="#menu" className="hover:text-espresso transition-colors">Menu</a>
            <a href="#reviews" className="hover:text-espresso transition-colors">Reviews</a>
            <a href="#location" className="hover:text-espresso transition-colors">Location</a>
          </nav>
          <Button asChild size="sm" className="bg-espresso text-primary-foreground hover:bg-espresso/90">
            <a href={`tel:${PHONE_TEL}`}>
              <Phone className="h-4 w-4" /> Call
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="GEM Coffee & More — premium coffee being prepared"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="relative container min-h-[90vh] flex flex-col justify-end pb-16 pt-32">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur border border-white/20 px-4 py-1.5 text-white text-xs">
              <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
              Open now · Closes 20:30
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-white mt-6 leading-[1.05] tracking-tight">
              Premium Coffee.
              <br />
              <span className="text-caramel italic">Everyday Prices.</span>
            </h1>
            <p className="text-white/85 text-lg md:text-xl mt-6 max-w-xl">
              Your favorite coffee stop in Nea Alikarnassos — inside EKO Mavrakis. Fast, fresh and made with care.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-red text-white hover:bg-brand-red/90 shadow-warm">
                <a href="#menu">View Menu <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur border-white/40 text-white hover:bg-white hover:text-espresso"
              >
                <a href={MAPS_URL} target="_blank" rel="noreferrer">
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/90">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-caramel text-caramel" />
                  ))}
                </div>
                <span className="font-semibold">4.4</span>
                <span className="text-white/70 text-sm">· 394 reviews</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold">1–5 €</span>
                <span className="text-white/70"> per person</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="text-brand-red font-medium tracking-widest uppercase text-xs mb-4">About us</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-espresso leading-tight">
              A trusted daily stop, made for the road.
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              GEM Coffee & More – Coffee Berry is located inside <strong className="text-espresso">EKO Mavrakis</strong> in
              Nea Alikarnassos, Heraklion. With over <strong className="text-espresso">394 reviews</strong> and a
              4.4-star rating, we serve high-quality coffee, fresh snacks and fast service at honest prices.
            </p>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Whether you're heading to the airport, going to work, or meeting friends — we're your perfect daily stop.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { k: "4.4★", v: "Google rating" },
              { k: "394+", v: "Happy customers" },
              { k: "1–5 €", v: "Affordable prices" },
              { k: "Daily", v: "Until 20:30" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl bg-card p-6 shadow-card border border-border/60"
              >
                <p className="font-display text-3xl md:text-4xl font-semibold text-espresso">{s.k}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.v}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 md:py-32 bg-cream/60">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-brand-red font-medium tracking-widest uppercase text-xs mb-4">Our menu</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-espresso">
              Quality coffee from just <span className="italic text-caramel">1,90 €</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Honest pricing, generous flavour. Every cup is freshly prepared.
            </p>
          </motion.div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(menu).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                className="rounded-3xl bg-card p-8 shadow-card border border-border/60 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-espresso/10 grid place-items-center">
                    <Coffee className="h-5 w-5 text-espresso" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-espresso">{category}</h3>
                </div>
                <ul className="space-y-3.5">
                  {items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-3 pb-3 border-b border-dashed border-border/70 last:border-0 last:pb-0"
                    >
                      <span className="text-foreground text-sm leading-snug flex items-center gap-2 flex-wrap">
                        {"image" in item && item.image && (
                          <img
                            src={item.image as string}
                            alt={item.name}
                            loading="lazy"
                            className="h-10 w-10 rounded-md object-cover border border-border/60"
                          />
                        )}
                        {item.name}
                        {"popular" in item && item.popular && (
                          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-brand-red/10 text-brand-red font-medium">
                            Δημοφιλές
                          </span>
                        )}
                      </span>
                      <span className="font-display font-semibold text-espresso whitespace-nowrap">
                        {item.price} €
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-brand-red font-medium tracking-widest uppercase text-xs mb-4">How we serve you</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-espresso">
              Made for life on the move.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.button
                key={s.title}
                type="button"
                onClick={() => {
                  if (s.action.type === "delivery") {
                    setDeliveryOpen(true);
                  } else {
                    if (s.action.href.startsWith("tel:")) {
                      const a = document.createElement("a");
                      a.href = s.action.href;
                      document.body.appendChild(a);
                      a.click();
                      a.remove();
                    } else {
                      window.location.href = s.action.href;
                    }
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group text-left rounded-2xl bg-card p-6 border border-border/60 hover:border-caramel/50 hover:shadow-card transition-all cursor-pointer"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-warm grid place-items-center text-primary-foreground mb-4 group-hover:scale-105 transition-transform">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-espresso">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery picker dialog */}
      <Dialog open={deliveryOpen} onOpenChange={setDeliveryOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-espresso">Choose your delivery partner</DialogTitle>
            <DialogDescription>Order online from one of our trusted partners.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 mt-2">
            {DELIVERY_PARTNERS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl border border-border/70 p-4 hover:border-caramel hover:shadow-card transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-11 w-11 rounded-xl ${p.color} grid place-items-center text-white font-display font-semibold`}>
                    {p.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-espresso">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-espresso group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Reviews */}
      <section id="reviews" className="py-24 md:py-32 bg-espresso text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-caramel/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />

        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-caramel text-caramel" />
                ))}
              </div>
              <span className="text-sm">Rated 4.4 by 394 customers</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Loved by locals, travelers <span className="italic text-caramel">and everyone in between.</span>
            </h2>
          </motion.div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white/[0.06] backdrop-blur border border-white/10 p-8"
              >
                <Quote className="h-7 w-7 text-caramel mb-4" />
                <p className="text-white/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="font-medium">{t.name}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-caramel text-caramel" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-24 md:py-32 bg-cream/60">
        <div className="container grid lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-brand-red font-medium tracking-widest uppercase text-xs mb-4">Find us</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-espresso leading-tight">
              Inside EKO Mavrakis,
              <br />
              Nea Alikarnassos.
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-cream grid place-items-center">
                  <MapPin className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <p className="font-medium text-espresso">Address</p>
                  <p className="text-muted-foreground">{ADDRESS}</p>
                  <p className="text-xs text-muted-foreground mt-1">Plus Code: 85P7+WM Nea Alikarnassos</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-cream grid place-items-center">
                  <Phone className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <p className="font-medium text-espresso">Phone</p>
                  <a href={`tel:${PHONE_TEL}`} className="text-muted-foreground hover:text-espresso">
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-cream grid place-items-center">
                  <Clock className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <p className="font-medium text-espresso">Hours</p>
                  <p className="text-muted-foreground">Open daily · Closes at 20:30</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-red text-white hover:bg-brand-red/90">
                <a href={`tel:${PHONE_TEL}`}><Phone className="h-4 w-4" /> Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-espresso/20 text-espresso hover:bg-espresso hover:text-primary-foreground">
                <a href={MAPS_URL} target="_blank" rel="noreferrer">
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] min-h-[420px] group"
          >
            <iframe
              title="GEM Coffee & More location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.7360570350147!2d25.1643127!3d35.3373753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5bdd58d3d1ed%3A0x678ef61e6f350c28!2sGEM%20COFFEE%20%26%20MORE!5e0!3m2!1sel!2sgr!4v1777030834302!5m2!1sel!2sgr"
              className="w-full h-full min-h-[420px] border-0 grayscale-[.2] contrast-[1.05] transition-all duration-300 group-hover:grayscale-0 group-hover:contrast-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso text-primary-foreground/80 pt-16 pb-8">
        <div className="container grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 text-primary-foreground">
              <img
                src="/logo.png"
                alt="GEM Coffee & More logo"
                className="h-9 w-9 rounded-full object-cover bg-espresso"
              />
              <div>
                <p className="font-display font-semibold">GEM Coffee & More</p>
                <p className="text-[10px] tracking-widest uppercase opacity-70">Coffee Berry</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Premium coffee, fresh snacks and friendly service inside EKO Mavrakis. Designed for fast service & easy access.
            </p>
          </div>

          <div>
            <p className="font-display text-primary-foreground font-semibold mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-caramel">About</a></li>
              <li><a href="#menu" className="hover:text-caramel">Menu</a></li>
              <li><a href="#reviews" className="hover:text-caramel">Reviews</a></li>
              <li><a href="#location" className="hover:text-caramel">Location</a></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-primary-foreground font-semibold mb-4">Visit</p>
            <p className="text-sm">{ADDRESS}</p>
            <p className="text-sm mt-2">
              <a href={`tel:${PHONE_TEL}`} className="hover:text-caramel">{PHONE}</a>
            </p>
            <p className="text-sm mt-2">Open daily · Until 20:30</p>
          </div>
        </div>

        <div className="container mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} GEM Coffee & More. All rights reserved.</p>
          <p className="opacity-70">Designed for fast service & easy access.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
