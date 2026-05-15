import { motion } from "motion/react";
import {
  CheckCircle,
  ArrowRight,
  Store,
  Factory,
  Microscope,
  Leaf,
  Star,
  Globe,
  Share2,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      city: formData.get("city"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxM7MO9hUhQL4GCncQ5zof0ZDrxfFywV96ixX2h2nnIO-zwpWUFWq_-P1sTacgHBK3s/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (result.status === "success") {
        navigate("/thank-you");
      } else {
        throw new Error("Sheet error");
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed");
      setLoading(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      name: "Herbal Distributor",
      role: "Punjab",
      text: "Zoic Pharma helped us build a successful herbal pharma business with quality products and excellent support.",
    },
    {
      name: "Pharma Partner",
      role: "Haryana",
      text: "Professional team with premium Ayurvedic products and timely delivery support.",
    },
    {
      name: "Franchise Partner",
      role: "Rajasthan",
      text: "Best herbal PCD pharma franchise company with attractive margins and monopoly support.",
    },
    {
      name: "Distributor",
      role: "Uttar Pradesh",
      text: "Very supportive company with timely product dispatch and premium packaging quality.",
    },
    {
      name: "Ayurvedic Partner",
      role: "Gujarat",
      text: "Excellent herbal product range with great customer response and repeat demand.",
    },
    {
      name: "Healthcare Entrepreneur",
      role: "Maharashtra",
      text: "Zoic Pharma provided everything required to start and grow our herbal franchise business.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <a href="/">
            <img
              src="https://www.zoicpharmaceuticals.com/wp-content/uploads/2025/02/zoicnew.png"
              className="w-50 h-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 font-headline text-sm font-semibold">
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              PCD Franchise
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              Third Party
            </button>

            <button
              onClick={() => scrollToSection("products")}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              Products
            </button>

            <button
              onClick={() => scrollToSection("manufacturing")}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              About Us
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-primary-dark active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            Contact Now
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface-container">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container via-surface-container/70 to-transparent z-10"></div>

            <img
              alt="Botanical Ingredients"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUwzOHs12UokeFMhc7jMY1jUc14pPziJ4zkm25B0TrJB5MUWiwJdIlAKlAEYV2JHUQwhi0W5FrJkEFL0ojkrNfD0SnTAPGVYitrn5P5joGgJf2-CTnJlx3oy_IuCUCKjPYzEOpwv9Hb-0G4LtIxa76WJkhspEG3De9BRgv4Pq6HNd2QndyY1FJN0YWME6tFYHg9hQHvbThp2xtW46GnAMkJQCmGXNjVneWNPTrmwgV_Bg19WAxjNjtcC_EBY43P5xhMjBG_e9inPi3"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-20 w-full py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <span className="inline-flex items-center px-4 py-1.5 bg-secondary-light text-secondary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  Established 1990
                </span>

                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Leading Herbal Third Party Manufacturer & PCD Pharma
                  Franchise Company
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                  Expand your herbal pharma business with high-quality
                  Ayurvedic & Herbal products, monopoly rights, private label
                  manufacturing, and complete business support across India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-slate-700">
                  {[
                    "Herbal Third Party Manufacturing",
                    "Herbal PCD Pharma Franchise",
                    "WHO-GMP Certified Products",
                    "Monopoly Rights Available",
                    "Attractive Promotional Support",
                    "Timely Delivery Across India",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/30"
                  >
                    Enquire Now
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => scrollToSection("products")}
                    className="bg-white text-secondary font-bold px-10 py-4 rounded-xl hover:bg-slate-50 transition-all border border-slate-100 shadow-sm"
                  >
                    View Product Portfolio
                  </button>
                </div>
              </motion.div>

              {/* Hero Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/95 backdrop-blur rounded-[2rem] p-8 shadow-2xl border border-white/40"
              >
                <h3 className="text-3xl font-extrabold mb-3">
                  Start Your Herbal Pharma Business Today
                </h3>

                <p className="text-slate-600 mb-8">
                  Get complete franchise, manufacturing & pricing details
                  instantly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full bg-slate-50 rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary/20"
                  />

                  <input
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="w-full bg-slate-50 rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary/20"
                  />

                  <input
                    name="city"
                    required
                    placeholder="City"
                    className="w-full bg-slate-50 rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary/20"
                  />

                  <button
                    disabled={loading}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all"
                  >
                    {loading ? "Submitting..." : "Get Product Catalogue"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white py-16 border-y border-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { label: "Years Expertise", value: "36+" },
                { label: "Quality Products", value: "2000+" },
                { label: "India Presence", value: "PAN" },
                { label: "GMP-ISO Certified", value: "WHO" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                    {stat.value}
                  </span>

                  <p className="font-headline font-semibold text-slate-500 uppercase tracking-tighter text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex px-5 py-2 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-widest text-xs mb-6">
                Trusted Herbal Pharma Company
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
                INDIA’S LEADING HERBAL PCD PHARMA & THIRD PARTY
                MANUFACTURING COMPANY
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Zoic Pharma is a trusted Herbal Third Party Manufacturer and
                Herbal PCD Pharma Franchise company offering premium-quality
                Ayurvedic and herbal healthcare products across India.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mt-6">
                We help distributors, entrepreneurs, medical representatives,
                and healthcare businesses grow successfully with quality
                products, monopoly rights, private label solutions, and complete
                business support.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl bg-surface-container p-12 transition-all hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="mb-8 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary">
                  <Store className="w-8 h-8" />
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  Herbal PCD Pharma Franchise
                </h3>

                <ul className="space-y-4 mb-8 text-slate-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    Monopoly Rights across designated territories
                  </li>

                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    High-end Marketing Support & Promotional Kits
                  </li>

                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    Extensive range of ISO-approved products
                  </li>
                </ul>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all"
                >
                  Partner With Us <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl bg-surface-container p-12 transition-all hover:shadow-2xl hover:shadow-secondary/5 border border-transparent hover:border-secondary/10"
              >
                <div className="mb-8 bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-secondary">
                  <Factory className="w-8 h-8" />
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  Herbal Third Party Manufacturing
                </h3>

                <ul className="space-y-4 mb-8 text-slate-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    Advanced WHO-GMP manufacturing facilities
                  </li>

                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    High-volume bulk production capacity
                  </li>

                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    Timely delivery with strict QC protocols
                  </li>
                </ul>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center text-secondary font-bold gap-2 group-hover:gap-4 transition-all"
                >
                  Start Manufacturing <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-xl mb-16">
              <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
                Herbal PCD Pharma Franchise Product Range
              </h2>

              <p className="text-slate-600">
                Explore our premium Ayurvedic, herbal and nutraceutical product
                portfolio designed for growing herbal pharma businesses across
                India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[900px]">
              <div className="md:row-span-2 group relative overflow-hidden rounded-3xl shadow-lg">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="nutraceutical.jpg"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white text-2xl font-bold">
                    Nutraceutical Products
                  </h4>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl shadow-lg">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="syrups.jpg"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white text-2xl font-bold">
                    Herbal Syrups
                  </h4>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl shadow-lg">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="capsules.jpg"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white text-2xl font-bold">
                    Herbal Capsules
                  </h4>
                </div>
              </div>

              <div className="md:col-span-2 group relative overflow-hidden rounded-3xl shadow-lg">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="ayurvedic.jpg"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white text-2xl font-bold">
                    Ayurvedic Product Packaging
                  </h4>
                </div>
              </div>

              <div className="md:col-span-3 group relative overflow-hidden rounded-3xl shadow-lg h-[300px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white text-2xl font-bold">
                    Herbal Wellness Range
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-8">
                Why Choose Zoic Pharma for Herbal PCD Pharma Franchise?
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Zoic Pharma is a leading Herbal PCD Pharma Franchise and Herbal
                Third Party Manufacturing company committed to delivering
                high-quality Ayurvedic and herbal healthcare products across
                India.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                We support our franchise partners and businesses with monopoly
                rights, premium-quality formulations, attractive packaging,
                competitive pricing, promotional materials, and reliable
                delivery support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Premium Ayurvedic & Herbal Products",
                "Monopoly Franchise Rights",
                "Attractive Promotional Support",
                "Private Label Manufacturing",
                "WHO-GMP Certified Manufacturing",
                "Timely PAN India Delivery",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all"
                >
                  <CheckCircle className="w-10 h-10 text-primary mb-5" />

                  <h3 className="font-bold text-xl">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing */}
        <section
          id="manufacturing"
          className="py-32 bg-slate-50 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  alt="Manufacturing Facility"
                  className="w-full aspect-square object-cover"
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop"
                />

                <div className="absolute top-8 left-8 p-6 bg-white/90 backdrop-blur rounded-2xl shadow-xl">
                  <span className="block text-3xl font-black text-primary">
                    Mohali
                  </span>

                  <span className="text-sm font-bold uppercase tracking-widest text-slate-500">
                    State-of-the-art Hub
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-extrabold mb-8 leading-tight">
                Advanced R&D and Manufacturing Prowess
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our Mohali facility represents the pinnacle of modern Ayurvedic
                production. Equipped with automated production lines and
                ISO-certified labs, we ensure every batch meets international
                purity standards.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-secondary">
                    <Microscope className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      Cutting-Edge Labs
                    </h4>

                    <p className="text-slate-600">
                      In-house quality control labs for rigorous testing of raw
                      materials and finished products.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                    <Leaf className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      Sustainable Sourcing
                    </h4>

                    <p className="text-slate-600">
                      Ethically sourced raw herbs processed under sterile
                      conditions to preserve potency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business CTA */}
        <section className="py-28 bg-primary text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              Start a Profitable Herbal Pharma Business
            </h2>

            <p className="text-lg text-white/80 leading-relaxed mb-10">
              The Ayurvedic and herbal healthcare industry in India is growing
              rapidly due to increasing health awareness and demand for natural
              healthcare products.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-12 text-left">
              {[
                "Medical Representative",
                "Distributor",
                "Pharmacist",
                "Ayurvedic Practitioner",
                "Entrepreneur",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/10 rounded-2xl px-5 py-4"
                >
                  <CheckCircle className="w-5 h-5 text-secondary-light" />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all"
            >
              Get Product & Price List
            </button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl font-extrabold">
              Trusted by Herbal Pharma Professionals Across India
            </h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <p className="text-slate-600 italic mb-8">"{t.text}"</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary">
                    {t.name[0]}
                  </div>

                  <div className="text-left">
                    <p className="font-bold">{t.name}</p>

                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What is a Herbal PCD Pharma Franchise?",
                  a: "A Herbal PCD Pharma Franchise is a business model where a company grants rights to distribute and market herbal and Ayurvedic products in a specific area.",
                },
                {
                  q: "Do you provide Herbal Third Party Manufacturing?",
                  a: "Yes, Zoic Pharma provides Herbal Third Party Manufacturing services with quality-focused production standards.",
                },
                {
                  q: "Do you provide monopoly rights?",
                  a: "Yes, monopoly rights are offered based on area availability.",
                },
                {
                  q: "What documents are required?",
                  a: "Drug License and GST Number are generally required.",
                },
                {
                  q: "Do you provide promotional support?",
                  a: "Yes, we provide complete marketing and promotional support materials.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-3">{item.q}</h3>

                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-32 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-primary/5 border border-slate-100"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold mb-4">
                  Get Herbal Pharma Franchise & Manufacturing Details
                </h2>

                <p className="text-slate-600">
                  Fill out the form below to get product catalogue, price list,
                  monopoly details and manufacturing information.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">
                    Full Name
                  </label>

                  <input
                    name="name"
                    required
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">
                    Email Address
                  </label>

                  <input
                    name="email"
                    required
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="email@example.com"
                    type="email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">
                    Phone Number
                  </label>

                  <input
                    name="phone"
                    required
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="+91 99xxx xxx08"
                    type="tel"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">
                    City
                  </label>

                  <input
                    name="city"
                    required
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="Enter your city"
                    type="text"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">
                    Inquiry Type & Message
                  </label>

                  <textarea
                    name="message"
                    required
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="Tell us about your business requirement"
                    rows={4}
                  ></textarea>
                </div>

                <div className="md:col-span-2 mt-4">
                  <button
                    disabled={loading}
                    className="w-full bg-primary text-white font-bold py-5 rounded-xl text-lg hover:bg-primary-dark active:scale-[0.98] transition-all disabled:opacity-50 shadow-xl shadow-primary/20"
                  >
                    {loading ? "Submitting..." : "Get Product Catalogue"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Sticky Mobile Buttons */}
      <div className="fixed bottom-4 left-4 right-4 z-50 flex md:hidden gap-3">
        <a
          href="tel:+919815846085"
          className="flex-1 bg-primary text-white py-4 rounded-2xl text-center font-bold shadow-2xl flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>

        <a
          href="https://wa.me/919815846085"
          target="_blank"
          className="flex-1 bg-green-500 text-white py-4 rounded-2xl text-center font-bold shadow-2xl flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full px-6 py-16 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="text-2xl font-black text-primary">
              Zoic Pharmaceuticals
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Pioneering the herbal industry since 1990. Committed to excellence
              in Ayurvedic manufacturing and PCD franchise solutions.
            </p>

            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all">
                <Globe className="w-5 h-5" />
              </span>

              <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all">
                <Share2 className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">
              Pharma Franchise
            </h5>

            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-600 hover:text-primary transition-all"
                >
                  PCD Franchise
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-600 hover:text-primary transition-all"
                >
                  Monopoly Rights
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-slate-600 hover:text-primary transition-all"
                >
                  Product List
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-600 hover:text-primary transition-all"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">
              Categories
            </h5>

            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-slate-600 hover:text-primary transition-all"
                >
                  Herbal Syrups
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-slate-600 hover:text-primary transition-all"
                >
                  Herbal Capsules
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-slate-600 hover:text-primary transition-all"
                >
                  Nutraceutical Products
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-slate-600 hover:text-primary transition-all"
                >
                  Ayurvedic Packaging
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">
              Support
            </h5>

            <ul className="space-y-4 text-sm">
              <li>
                <button className="text-slate-600 hover:text-primary transition-all">
                  Privacy Policy
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-600 hover:text-primary transition-all"
                >
                  Third Party Manufacturing
                </button>
              </li>

              <li>
                <button className="text-slate-600 hover:text-primary transition-all">
                  Terms of Service
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-600 hover:text-primary transition-all"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © 1990-2026 Zoic Pharmaceuticals. All Rights Reserved.
            WHO-GMP-ISO Certified Unit.
          </p>

          <p>Made with Science & Heritage.</p>
        </div>
      </footer>
    </div>
  );
}