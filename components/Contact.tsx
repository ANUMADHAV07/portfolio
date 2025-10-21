"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client with pre-filled data
    const mailtoLink = `mailto:anumadhavan7@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: "www.linkedin.com/in/anu-madhav-7158621a6",
    },
    { name: "Twitter", icon: "🐦", url: "https://x.com/anu_madhav7" },
    { name: "Email", icon: "✉️", url: "mailto:anumadhavan7@gmail.com" },
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-4 relative"
      id="contact"
    >
      <div className="max-w-6xl mx-auto w-full relative z-20">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-gojo mb-4">
            Let's Connect
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--gojo-cyan)] to-[var(--gojo-purple)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got a project in mind? Want to collaborate? Or just want to chat
            about anime, cricket, or tech? I'm always open to interesting
            conversations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="limitless-card relative z-30"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[var(--gojo-cyan)] mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-30">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--gojo-midnight)] border-2 border-[var(--gojo-dark)] 
                           rounded-lg text-white focus:border-[var(--gojo-cyan)] focus:outline-none 
                           transition-colors relative z-30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--gojo-midnight)] border-2 border-[var(--gojo-dark)] 
                           rounded-lg text-white focus:border-[var(--gojo-cyan)] focus:outline-none 
                           transition-colors relative z-30"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--gojo-midnight)] border-2 border-[var(--gojo-dark)] 
                           rounded-lg text-white focus:border-[var(--gojo-cyan)] focus:outline-none 
                           transition-colors resize-none relative z-30"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-hollow-purple relative z-30"
              >
                <span className="relative z-10">Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            className="space-y-8 relative z-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--gojo-lavender)] mb-6">
                Find Me Online
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-[var(--gojo-dark)] rounded-lg
                             border-2 border-[var(--gojo-midnight)] hover:border-[var(--gojo-cyan)]
                             transition-all group relative z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <span className="text-3xl">{link.icon}</span>
                    <span className="text-gray-300 font-medium group-hover:text-[var(--gojo-cyan)] transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <motion.div
              className="limitless-card relative z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-[var(--gojo-cyan)] mb-4">
                Quick Info
              </h3>

              <div className="space-y-3 text-gray-300">
                <p className="flex items-center gap-2">
                  <span className="text-[var(--gojo-cyan)]">📍</span>
                  <span>Based in India</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[var(--gojo-electric)]">💼</span>
                  <span>Open to opportunities</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[var(--gojo-purple)]">⏰</span>
                  <span>Usually responds within 24 hours</span>
                </p>
              </div>
            </motion.div>

            {/* Fun Fact */}
            <motion.div
              className="p-6 bg-gradient-to-br from-[var(--gojo-dark)] to-[var(--gojo-midnight)] 
                       rounded-lg border-l-4 border-[var(--gojo-cyan)] relative z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-gray-300 italic">
                "Let's build something amazing together. Whether it's a complex
                backend system, a sleek frontend, or discussing the latest One
                Piece chapter — I'm all ears! 🎌"
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Quote */}
        <motion.div
          className="mt-20 text-center relative z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-500 text-sm font-mono">
            Made with ∞ (Limitless) by Anu Madhav • Inspired by Satoru Gojo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
