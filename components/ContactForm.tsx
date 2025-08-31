"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/aswinguvvala", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/aswinguvvala", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:aswinabd17@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-purple via-cyan-500 to-purple bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your data into intelligent solutions? Let&apos;s discuss your AI/ML project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m always interested in new AI/ML opportunities and data science projects. 
                Whether you have a question about machine learning, need help with data analysis, or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Find me on</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 bg-gradient-to-br from-black-100 to-black-200 border border-white/[0.1] rounded-full flex items-center justify-center hover:border-purple/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor="pointer"
                    data-cursor-text={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple transition-colors duration-300" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-black-100 to-black-200 border border-white/[0.1] rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black-100 border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:border-purple/50 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black-100 border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:border-purple/50 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black-100 border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:border-purple/50 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your data science or AI/ML project..."
                />
              </div>

              <MagneticButton className="w-full">
                <motion.span
                  animate={isSubmitting ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
                  transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.span>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;