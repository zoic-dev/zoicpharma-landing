import { motion } from "motion/react";
import { CheckCircle, ArrowRight, Store, Factory, Microscope, Leaf, Star, Globe, Share2 } from "lucide-react";
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
      const res = await fetch("https://script.google.com/macros/s/AKfycbxM7MO9hUhQL4GCncQ5zof0ZDrxfFywV96ixX2h2nnIO-zwpWUFWq_-P1sTacgHBK3s/exec", {
        method: "POST",
        body: JSON.stringify(data),
      });

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

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <a href="/">
            <img src="https://www.zoicpharmaceuticals.com/wp-content/uploads/2025/02/zoicnew.png" className="w-50 h-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8 font-headline text-sm font-semibold">
            <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-primary transition-colors">PCD Franchise</button>
            <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-primary transition-colors">Third Party</button>
            <button onClick={() => scrollToSection('products')} className="text-slate-600 hover:text-primary transition-colors">Products</button>
            <button onClick={() => scrollToSection('manufacturing')} className="text-slate-600 hover:text-primary transition-colors">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-primary transition-colors">Certifications</button>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-primary-dark active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            Contact Now
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-surface-container">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container via-surface-container/60 to-transparent z-10"></div>
            <img
              alt="Botanical Ingredients"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUwzOHs12UokeFMhc7jMY1jUc14pPziJ4zkm25B0TrJB5MUWiwJdIlAKlAEYV2JHUQwhi0W5FrJkEFL0ojkrNfD0SnTAPGVYitrn5P5joGgJf2-CTnJlx3oy_IuCUCKjPYzEOpwv9Hb-0G4LtIxa76WJkhspEG3De9BRgv4Pq6HNd2QndyY1FJN0YWME6tFYHg9hQHvbThp2xtW46GnAMkJQCmGXNjVneWNPTrmwgV_Bg19WAxjNjtcC_EBY43P5xhMjBG_e9inPi3"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-20 w-full py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center px-4 py-1.5 bg-secondary-light text-secondary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Established 1990
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Leading the <span className="text-primary">Herbal Revolution</span> for 36+ Years
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                India's Trusted Partner for PCD Franchise & Third-Party Ayurvedic Manufacturing. WHO-GMP-ISO Certified quality at the intersection of science and tradition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/30"
                >
                  Enquire Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="bg-white text-secondary font-bold px-10 py-4 rounded-xl hover:bg-slate-50 transition-all border border-slate-100 shadow-sm"
                >
                  View Product Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-16 border-y border-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { label: "Years Expertise", value: "36+" },
                { label: "Quality Products", value: "2000+" },
                { label: "India Presence", value: "PAN" },
                { label: "GMP-ISO Certified", value: "WHO" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</span>
                  <p className="font-headline font-semibold text-slate-500 uppercase tracking-tighter text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* PCD Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl bg-surface-container p-12 transition-all hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="mb-8 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary">
                  <Store className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4">PCD Pharma Franchise</h3>
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
                <button onClick={() => scrollToSection('contact')} className="inline-flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all">
                  Partner With Us <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>

              {/* Third-Party Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl bg-surface-container p-12 transition-all hover:shadow-2xl hover:shadow-secondary/5 border border-transparent hover:border-secondary/10"
              >
                <div className="mb-8 bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-secondary">
                  <Factory className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Third-Party Manufacturing</h3>
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
                <button onClick={() => scrollToSection('contact')} className="inline-flex items-center text-secondary font-bold gap-2 group-hover:gap-4 transition-all">
                  Start Manufacturing <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Holistic Wellness Range</h2>
                <p className="text-slate-600">Exploring the synergy of ancient Ayurvedic wisdom and modern science through our diverse product categories.</p>
              </div>
              <a href="https://www.zoicpharmaceuticals.com/product/" target="_blank">
                <button className="bg-white text-slate-900 border border-slate-200 font-bold px-8 py-3 rounded-xl hover:bg-slate-50 transition-all">View All Products</button>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[800px]">
              {/* Tablets */}
              <div className="md:row-span-2 group relative overflow-hidden rounded-3xl shadow-lg">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkr8f-WABkeCtNjd8I3WwBeQ9qgXfUzV4nR4iBgDH6NXa4Z1kpElftSu3n0E01RTUHlzJ9td8ZgM7bJJ4_nXpN-0STBxW7ysOWI3-4KQDarS-GwfrqIoDNlRuZSCl21_bjCG1dgkFnCWVSxfFLo04u_gj9FaQAu56jc7_8NO_dQ-AjhNj0mRt4s1ahJN8FHBjsL4oCcifWBOBRdnB0w32ahUuV0P0l4W8SpekJA7VOhnO9xbTV7KwdqfXjTVvQxtpEt8w2EqSWg9kH" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white text-2xl font-bold">Herbal Tablets</h4>
                </div>
              </div>
              {/* Capsules */}
              <div className="group relative overflow-hidden rounded-3xl shadow-lg">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy7RGMbV5m-DXtjTRERzoE33DfExsRUMZxUGVoifDeGYDCrF2bajlr1fyHJeGXD9wMQCBaLTX2LagDO08moFQ1SNKjWOvmzeuGj2tAkVTQApwY80q1I5DYxwPrS_i-gexoobv325KulcjX7KZsdUL5Mv1tVGd32ZBAPcAne5Vy0w3Brd1BmeqjtQSLuKcct96_WpCKREV_gSVy5IVrgFieA0xJ3VeQ32wZowjPe4JZosVBB7ukRk6dHRKX3K3uHxKyo0LdlynLD-AT" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white text-2xl font-bold">Ayurvedic Capsules</h4>
                </div>
              </div>
              {/* Syrups */}
              <div className="group relative overflow-hidden rounded-3xl shadow-lg">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzY_Has0jwOMkdW9acdjZesirfA2IU4vicDY-mDVTMOzO5ImQ8JYI2AzzB4jz1_4l2Q7IbZc6CvhioydkfYzVJf4fZO2tWAIe92v4bU7Whe5pk_vMOt_6wHyXYKkLMYG4Px_FDH5B_d9YLzwtlFlQEBACa5q7WV72lqaJELC6RLYkn2wBdsuFTcGFUFnDOu8Ers5bGMhlUb4c8V-sWNHQCUJljWVb7IuGY7LORyAlks28nssQRG9IIuRtXC2OjEzsNoAyqGk79GtzI" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white text-2xl font-bold">Syrups & Oils</h4>
                </div>
              </div>
              {/* Personal Care */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-3xl shadow-lg">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEzVPktgIs7I7h-X3r_fGr74moZlY8LrACW1-T_3jDIyfIry-T3XOiResDzagKNEDEmC5a2skO6knIEjFbzEkTSodWWdSg6sMoHbeS74HhQyYg304u0InOl5T6A_LIzbpm4I2-wmNzm1E-ZNUfxeWxSDgW0S0Sg9nvyPm9obRIUug0KC-tBv3vtMPgSWBZcBclr_RMiZtOJ5e0j0FrA1WiZKFAF1LZ4sYrKPz4n8DPk15kv6X-rA2Axr4SL2xHAoOGRdamj2RjmlG3" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white text-2xl font-bold">Personal & Hair Care</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Authority */}
        <section id="manufacturing" className="py-32 bg-white overflow-hidden">
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVcL9UmwtTGlWQRZdZRu7irz0D2E8WdNgXlVSNQVmshL0fNrgoVPVVd2CCTIbUHy1peMa8jQwbNtMEi0iv5fbSErkSSbTte55rjFDKDgjQRZvht-upqxCb_qsQg7YXzI5SplDgqAfSb7Wh06_rsvTRxCriuSmWrg5YwiQOL1rEKEZ59S0OCpFZi1khYepc509vAw0Vv7h18YUyY9vWyqNL0eLj-sE9lfZUEkCKXUCWGYZChb0OcmR3EaQJbLv95UI3Aml0vtFLEbs-"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 left-8 p-6 bg-white/90 backdrop-blur rounded-2xl shadow-xl">
                  <span className="block text-3xl font-black text-primary">Mohali</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-500">State-of-the-art Hub</span>
                </div>
              </div>
            </motion.div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-extrabold mb-8 leading-tight">Advanced R&D and Manufacturing Prowess</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our Mohali facility represents the pinnacle of modern Ayurvedic production. Equipped with automated production lines and ISO-certified labs, we ensure every batch meets international purity standards.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-secondary">
                    <Microscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Cutting-Edge Labs</h4>
                    <p className="text-slate-600">In-house quality control labs for rigorous testing of raw materials and finished products.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Sustainable Sourcing</h4>
                    <p className="text-slate-600">Ethically sourced raw herbs processed under sterile conditions to preserve potency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl font-extrabold">Voices of Our Partners</h2>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Rajesh Khanna", role: "Franchise Partner, Punjab", text: "The product quality from Zoic is unmatched in the Ayurvedic market. Our franchise has grown 300% in just two years." },
              { name: "Ananya Sharma", role: "Wellness Brand CEO", text: "Their third-party manufacturing process is seamless. Timely delivery and excellent packaging have helped our brand scale." },
              { name: "Vikram Mehta", role: "Franchise Owner, Kerala", text: "The marketing support and monopoly rights provided by Zoic are exactly what a new entrepreneur needs to succeed." }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
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

        {/* PAN India Reach */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-8">Empowering Health Across the Nation</h2>
              <p className="text-slate-400 text-lg mb-10">With a robust distribution network and thousands of franchise partners, Zoic Pharmaceuticals ensures that premium herbal healthcare reaches every corner of India.</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-3xl font-bold text-secondary-light">22+</span>
                  <span className="text-sm text-slate-500 uppercase font-bold tracking-widest">States Reached</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-secondary-light">250+</span>
                  <span className="text-sm text-slate-500 uppercase font-bold tracking-widest">Active Franchisees</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="India Connectivity"
                className="rounded-3xl opacity-60 grayscale hover:grayscale-0 transition-all duration-700 w-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZspmhZ8mUEZTJhI1tEiwfYukL9Ya-APTsLSwcv55fI7PsjFzmjyT1i1YrOLUfn-yrh8glwFZPLoXqTkxqGy2lF1BiYV37Fh-BILFXp2PIkKv94GA_8Wl0e5ovMr6iuS9I0hAlGb0vQm_6s7elw_iauDY5getdXnHo83Nt3xyn0xmkxwKYpqbwHgn-M7p9KBgrPyPBpT7APjq7Z9OEUAV_8N9lkEzYfTW_v4F008Dzg2yZsTQmxyXfRP7sTO3K1iy-420_YY7wY-y0"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Lead Generation Form */}
        <section id="contact" className="py-32 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-primary/5 border border-slate-100"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold mb-4">Start Your Journey with Zoic</h2>
                <p className="text-slate-600">Fill out the form below and our business development team will contact you within 24 hours.</p>
              </div>
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">Full Name</label>
                  <input name="name" required className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Enter your name" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">Email Address</label>
                  <input name="email" required className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="email@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">Phone Number</label>
                  <input name="phone" required className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="+91 00000 00000" type="tel" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">City</label>
                  <input name="city" required className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Enter your city" type="text" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">Inquiry Type & Message</label>
                  <textarea name="message" required className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Tell us about your business requirement" rows={4}></textarea>
                </div>
                <div className="md:col-span-2 mt-4">
                  <button
                    disabled={loading}
                    className="w-full bg-primary text-white font-bold py-5 rounded-xl text-lg hover:bg-primary-dark active:scale-[0.98] transition-all disabled:opacity-50 shadow-xl shadow-primary/20"
                  >
                    {loading ? "Submitting..." : "Submit Business Inquiry"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full px-6 py-16 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="text-2xl font-black text-primary">Zoic Pharmaceuticals</div>
            <p className="text-slate-600 text-sm leading-relaxed">Pioneering the herbal industry since 1990. Committed to excellence in Ayurvedic manufacturing and PCD franchise solutions.</p>
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
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Pharma Franchise</h5>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-primary transition-all">PCD Franchise</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-primary transition-all">Monopoly Rights</button></li>
              <li><button onClick={() => scrollToSection('products')} className="text-slate-600 hover:text-primary transition-all">Product List</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-primary transition-all">Certifications</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Categories</h5>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => scrollToSection('products')} className="text-slate-600 hover:text-primary transition-all">Herbal Tablets</button></li>
              <li><button onClick={() => scrollToSection('products')} className="text-slate-600 hover:text-primary transition-all">Ayurvedic Capsules</button></li>
              <li><button onClick={() => scrollToSection('products')} className="text-slate-600 hover:text-primary transition-all">Syrups & Oils</button></li>
              <li><button onClick={() => scrollToSection('products')} className="text-slate-600 hover:text-primary transition-all">Personal Care</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Support</h5>
            <ul className="space-y-4 text-sm">
              <li><button className="text-slate-600 hover:text-primary transition-all">Privacy Policy</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-primary transition-all">Third Party Manufacturing</button></li>
              <li><button className="text-slate-600 hover:text-primary transition-all">Terms of Service</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-primary transition-all">Contact Us</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 1990-2026 Zoic Pharmaceuticals. All Rights Reserved. WHO-GMP-ISO Certified Unit.</p>
          <p>Made with Science & Heritage.</p>
        </div>
      </footer>
    </div>
  );
}
