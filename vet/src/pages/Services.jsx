import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSyringe, FaStethoscope, FaPills, FaHandScissors, FaDog, FaHeartbeat, FaPhone,FaPaw } from 'react-icons/fa';

const Services = () => {
  const [activeTab, setActiveTab] = useState('general');

  const services = [
    {
      id: 'general',
      title: 'General Care',
      icon: FaStethoscope,
      items: [
        { name: 'Wellness Exams', price: 'R530 (Consultation), R265 (Follow up)' },
        { name: 'Vaccinations', price: 'See pricing page for details' },
        { name: 'Microchipping', price: 'R315' }
      ]
    },
    {
      id: 'parasite',
      title: 'Parasite Control',
      icon: FaPills,
      items: [
        { name: 'Tick/Flea Control', price: 'Contact for pricing' },
        { name: 'Deworming', price: 'Contact for pricing' },
        { name: 'Medicated Baths', price: 'Contact for pricing' }
      ]
    },
    {
      id: 'dental',
      title: 'Dental Care',
      icon: FaHeartbeat,
      items: [
        { name: 'Free Dental Exam', price: 'Complimentary' },
        { name: 'Dental Cleaning', price: 'Quote upon consultation' }
      ]
    },
    {
      id: 'surgery',
      title: 'Surgery',
      icon: FaHandScissors,
      items: [
        { name: 'Soft Tissue Surgery', price: 'See pricing page' },
        { name: 'Orthopaedic Surgery', price: 'Surgeon available' }
      ]
    },
    {
      id: 'senior',
      title: 'Senior Health Checks',
      icon: FaHeartbeat,
      items: [
        { name: 'Full Health Assessment', price: 'Included' },
        { name: 'Urine Tests', price: 'Included' },
        { name: 'Fecal Tests', price: 'Included' },
        { name: 'Blood Tests', price: 'Included' }
      ]
    },
    {
      id: 'extras',
      title: 'Extras',
      icon: FaPaw,
      items: [
        { name: 'Anal Gland Expression', price: 'Contact for pricing' },
        { name: 'Pedicures', price: 'Contact for pricing' },
        { name: 'Food Deliveries', price: 'Free within 5km radius' }
      ]
    }
  ];

  const specialServices = [
    { name: 'Puppy Classes', desc: 'Held on Saturday Mornings (Arranged privately through Smart Puppy)' },
    { name: 'Emergency Care', desc: 'First aid and stabilisation available' },
    { name: 'Boarding', price: 'For clients with pets needing daily medication' }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen font-sans text-stone-800 pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-50 to-orange-50 py-16 lg:py-24 mb-16">
        <div className="container-custom">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.1 } }}
            className="text-lg text-stone-700"
          >
            Comprehensive care for all your pet's needs
          </motion.p>
        </div>
      </section>

      <div className="container-custom">
        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial="hidden" animate="visible" variants={fadeIn}
                className="bg-white rounded-lg border border-stone-200 p-8 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setActiveTab(service.id)}
              >
                <Icon className="text-4xl text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-stone-900 mb-4">{service.title}</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  {service.items.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                  {service.items.length > 2 && (
                    <li className="text-stone-500 italic">+ more...</li>
                  )}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Special Services */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="bg-teal-50 rounded-lg p-8 lg:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Special Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specialServices.map((service, i) => (
              <div key={i} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-stone-900 mb-3">{service.name}</h3>
                <p className="text-sm text-stone-600">{service.desc || service.price}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg mb-6 opacity-90">Contact us to book an appointment or ask about any of our services</p>
          <a href="tel:0117062184" className="inline-flex items-center gap-3 bg-white text-orange-600 font-bold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
            <FaPhone /> Call 011 706 2184
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;
