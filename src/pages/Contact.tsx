import React from "react";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import US from "../images/Office/US.jpg";
import England from  "../images/Office/England.webp";
import California from "../images/Office/California.jpg";
import UAE from "../images/Office/UAE.webp";
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Contact form submitted:", formData);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <Mail className="h-16 w-16 text-lime-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 text-white">
            Contact <span className="text-lime-400">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to scale your ecommerce brand? Let's discuss how we can help
            you achieve explosive growth with precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">
              Get in Touch
            </h2>

            {[
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Phone",
                content: "+1 (555) SHARK-01",
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email",
                content: "scale@ecommerceshark.com",
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Address",
                content:
                  "123 Commerce Street, Digital District, Tech City 12345",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-colors duration-300"
              >
                <div className="text-lime-400 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </div>
            ))}

            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">
              Ready to Scale?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                  placeholder="your@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                  placeholder="How can we help scale your brand?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your brand and growth goals..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-green-900"
                style={{ backgroundColor: "#a3e635" }}
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                Let's Scale Together
              </button>
            </form>
          </div>
        </div>
        {/* Global Office  */}
       <div className="py-12 px-4">
  <h1 className="text-3xl font-bold text-center text-white">
    Our Global Office Locations
  </h1>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
    {/* California */}
    <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img
        className="w-full h-72 object-cover"
        src={California}
        alt="California"
      />
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-white mb-2">
          California Office
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          925 N La Brea Ave 4th floor, West Hollywood, CA-90038, United States
        </p>
      </div>
    </div>

    {/* United States */}
    <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img
        className="w-full h-72 object-cover"
        src={US}
        alt="United States"
      />
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-white mb-2">
          United States
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          9100 Wilshire Blvd. East Tower Suite 333 Beverly Hills, CA-90212,
          United States
        </p>
      </div>
    </div>

    {/* UAE */}
    <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img
        className="w-full h-72 object-cover"
        src={UAE}
        alt="United Arab Emirates"
      />
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-white mb-2">
          United Arab Emirates
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          4 King Square, Bridgwater, England-TA6 3YF, United Kingdom
        </p>
      </div>
    </div>

    {/* England */}
    <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img
        className="w-full h-72 object-cover"
        src={England}
        alt="England"
      />
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-white mb-2">
          England
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          30 Churchill Pl, Canary Wharf, London-E14 5RE, United Kingdom
        </p>
      </div>
    </div>
  </div>
</div>


        {/* Additional Info Section */}
        <div
          className={`mt-20 max-w-4xl mx-auto text-center transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Partner with Ecommerce Shark?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-lime-400 mb-2">
                  24/7
                </div>
                <p className="text-gray-300">Expert Support</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime-400 mb-2">
                  300%
                </div>
                <p className="text-gray-300">Average Growth</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime-400 mb-2">
                  10K+
                </div>
                <p className="text-gray-300">Success Stories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
