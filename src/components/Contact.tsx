
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-portfolio-card/30">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-portfolio-muted max-w-2xl mb-12">
          Have a project in mind or just want to say hi? Feel free to reach out.
          I'm always open to discussing new projects or opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-portfolio-card border border-portfolio-border focus:border-portfolio-accent focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-portfolio-card border border-portfolio-border focus:border-portfolio-accent focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-portfolio-card border border-portfolio-border focus:border-portfolio-accent focus:outline-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-portfolio-card border border-portfolio-border">
                  <Mail className="h-5 w-5 text-portfolio-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-portfolio-muted">manvendersharma412@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-portfolio-card border border-portfolio-border">
                  <Phone className="h-5 w-5 text-portfolio-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-portfolio-muted">+91 9639111134</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-portfolio-card border border-portfolio-border">
                  <MapPin className="h-5 w-5 text-portfolio-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-portfolio-muted">Meerut, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-lg font-medium mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent transition-all"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/manvendra-sharma-66a503253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent transition-all"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent transition-all"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
