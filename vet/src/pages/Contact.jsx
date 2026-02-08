import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      items: ['011 706 2184', '063 149 4716']
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      items: ['info@thecornervet.co.za']
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      items: ['251 Bryanston Drive', 'Bryanston 2021', 'Corner of Bryanston and Mount Street', 'Entrance on Mount Street']
    },
    {
      icon: FaClock,
      title: 'Hours',
      items: [
        'Monday to Friday: 7:30 AM - 6 PM',
        'Saturdays: 8 AM - 12 PM'
      ]
    }
  ];

  return (
    <div className="min-h-screen font-sans text-stone-800 pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-50 to-orange-50 py-16 lg:py-24 mb-16">
        <div className="container-custom">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.1 } }}
            className="text-lg text-stone-700"
          >
            We'd love to hear from you. Contact us today!
          </motion.p>
        </div>
      </section>

      <div className="container-custom">
        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: index * 0.1 } }}
                className="bg-white rounded-lg border border-stone-200 p-8 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <Icon className="text-4xl text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-stone-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.items.map((item, i) => (
                    <p key={i} className="text-stone-600 text-sm leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Appointment Info */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="bg-teal-50 rounded-lg p-8 lg:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Appointment Policy</h2>
          <p className="text-stone-700 leading-relaxed mb-6">
            We work on an appointment basis as we find that this decreases the stress of the animals in the waiting room as well as helping our vets and our clients with their time management.
          </p>
          <p className="text-stone-700 leading-relaxed">
            We understand that appointments are not always possible so we will make a plan to see any walk-in's. <span className="font-semibold">Emergencies will always take preference.</span>
          </p>
        </motion.section>

        {/* Google Map */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Find Us</h2>
          <div className="w-full rounded-lg overflow-hidden shadow-lg border border-stone-200 h-96">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.801203937897!2d28.02506!3d-25.95436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee61b3f6a4c4c4d%3A0x6a6a6a6a6a6a6a!2s251%20Bryanston%20Drive%2C%20Bryanston%202021!5e0!3m2!1sen!2sza!4v1234567890"
            ></iframe>
          </div>
          <p className="text-stone-600 text-sm mt-4 text-center">
            251 Bryanston Drive, Bryanston 2021 • Corner of Bryanston and Mount Street
          </p>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-12 text-white text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Schedule?</h2>
          <p className="text-lg mb-8 opacity-90">Give us a call or email us to book your pet's appointment</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0117062184" className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
              <FaPhone /> Call Now
            </a>
            <a href="mailto:info@thecornervet.co.za" className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
              <FaEnvelope /> Email Us
            </a>
          </div>
        </motion.section>

        {/* Social & Map Section */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="bg-stone-50 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Follow Us</h2>
          <p className="text-stone-700 mb-6">Stay updated with our latest news and specials</p>
          <a 
            href="https://www.facebook.com/thecornervet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaFacebook /> Follow on Facebook
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
