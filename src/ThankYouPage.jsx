import { motion } from "motion/react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYouPage() {

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg w-full bg-white rounded-[2.5rem] p-12 text-center shadow-2xl shadow-primary/5 border border-slate-100"
      >
        <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-8">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Thank You!</h1>
        <p className="text-lg text-slate-600 mb-10">
          Your inquiry has been successfully submitted. Our business development team will review your requirements and get back to you within 24 hours.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark active:scale-95 transition-all shadow-xl shadow-primary/20"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
