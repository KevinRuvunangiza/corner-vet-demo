import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPercent, FaSyringe, FaDog, FaCat } from 'react-icons/fa';
import { LuRabbit } from "react-icons/lu";
import { GiScalpel } from "react-icons/gi";

const Specials = () => {
  const [activeTab, setActiveTab] = useState('vaccines');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const vaccinations = {
    dogs: [
      { category: 'Adult Dogs', items: [
        { desc: 'Annual (5in1 and Rabies)', price: 'R847' },
        { desc: 'Annual + Kennel Cough', price: 'R1145' },
        { desc: 'Kennel Cough Only', price: 'R657' },
        { desc: 'Rabies Only', price: 'R393' }
      ]},
      { category: 'Puppies', items: [
        { desc: '1st (5in1)', price: 'R818' },
        { desc: '2nd (5in1)', price: 'R818' },
        { desc: '3rd (5in1 and Rabies)', price: 'R847' },
        { desc: 'Rabies Booster', price: 'R393' }
      ]}
    ],
    cats: [
      { category: 'Adult Cats', items: [
        { desc: 'Annual (3in1 and Rabies)', price: 'R855' },
        { desc: 'Annual + Leukemia', price: 'R1290' },
        { desc: 'Leukemia Only', price: 'R797' }
      ]},
      { category: 'Kittens', items: [
        { desc: 'First (3in1)', price: 'R826' },
        { desc: 'First + Leukemia', price: 'R1261' },
        { desc: 'Second (3in1 and Rabies)', price: 'R855' },
        { desc: 'Second + Leukemia', price: 'R1290' },
        { desc: 'Rabies Booster', price: 'R393' }
      ]}
    ]
  };

  const surgeries = {
    spay: [
      { breed: 'Cats', price: 'R1941' },
      { breed: 'Small Breed Dogs', price: 'R2756' },
      { breed: 'Medium Breed Dogs', price: 'R2918' },
      { breed: 'Large Breed Dogs', price: 'R3080' },
      { breed: 'Giant Breed Dogs', price: 'R3280' }
    ],
    castration: [
      { breed: 'Cats', price: 'R1199' },
      { breed: 'Small Breed Dogs', price: 'R1945' },
      { breed: 'Medium Breed Dogs', price: 'R2108' },
      { breed: 'Large Breed Dogs', price: 'R2270' },
      { breed: 'Giant Breed Dogs', price: 'R2430' },
      { breed: 'Rabbits', price: 'R1297' }
    ]
  };

  const surgeryIncludes = [
    'Pre-surgical exam',
    'Pre and post-surgery pain medication',
    'Dispensed pain medication',
    'High quality suture material',
    'Surgical expertise',
    'Sterile environment',
    'Wound care',
    'Anaesthetic monitoring by qualified veterinary nurse',
    'Post-surgical check up',
    'Suture removal'
  ];

  return (
    <div className="min-h-screen font-sans text-stone-800 pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-50 to-teal-50 py-16 lg:py-24 mb-16">
        <div className="container-custom">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6"
          >
            Pricing & Specials
          </motion.h1>
        </div>
      </section>

      <div className="container-custom">
        {/* Food Discount Promo */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 lg:p-12 text-white mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaPercent className="text-5xl" />
            <h2 className="text-4xl font-bold">5-10% Off ALL Foods</h2>
          </div>
          <p className="text-lg opacity-90 mb-4">ALL THE TIME!!</p>
          <div className="space-y-3 text-white">
            <p>✓ All our foods are permanently discounted by 5%</p>
            <p>✓ Full 10% discount for active clients (consultation or wellness exam/vaccination within 1 year)</p>
          </div>
        </motion.section>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button
            onClick={() => setActiveTab('vaccines')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'vaccines'
                ? 'bg-orange-500 text-white'
                : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
            }`}
          >
            <FaSyringe className="inline mr-2" /> Vaccinations
          </button>
          <button
            onClick={() => setActiveTab('surgery')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'surgery'
                ? 'bg-orange-500 text-white'
                : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
            }`}
          >
            <GiScalpel className="inline mr-2" /> Surgery
          </button>
        </div>

        {/* Vaccinations */}
        {activeTab === 'vaccines' && (
          <motion.section
            initial="hidden" animate="visible" variants={fadeIn}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Dogs */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <FaDog className="text-4xl text-orange-500" />
                  <h2 className="text-3xl font-bold text-stone-900">Dogs</h2>
                </div>
                
                <div className="space-y-8">
                  {vaccinations.dogs.map((section, i) => (
                    <div key={i}>
                      <h3 className="text-xl font-bold text-stone-900 mb-4">{section.category}</h3>
                      <div className="space-y-3 bg-stone-50 rounded-lg p-6">
                        {section.items.map((item, j) => (
                          <div key={j} className="flex justify-between items-center border-b border-stone-200 pb-3 last:border-0">
                            <span className="text-stone-700">{item.desc}</span>
                            <span className="font-bold text-teal-900">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cats */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <FaCat className="text-4xl text-orange-500" />
                  <h2 className="text-3xl font-bold text-stone-900">Cats</h2>
                </div>
                
                <div className="space-y-8">
                  {vaccinations.cats.map((section, i) => (
                    <div key={i}>
                      <h3 className="text-xl font-bold text-stone-900 mb-4">{section.category}</h3>
                      <div className="space-y-3 bg-stone-50 rounded-lg p-6">
                        {section.items.map((item, j) => (
                          <div key={j} className="flex justify-between items-center border-b border-stone-200 pb-3 last:border-0">
                            <span className="text-stone-700">{item.desc}</span>
                            <span className="font-bold text-teal-900">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-6 mt-8 text-sm text-stone-700">
              <p className="mb-2"><strong>* 3in1:</strong> Calici Virus, Panleukopaenia Virus, Rhinotracheitis Virus</p>
              <p><strong>* 5in1:</strong> Distemper, Hepatitis, Parvovirus, Para-influenza Virus 1&2</p>
            </div>
          </motion.section>
        )}

        {/* Surgery */}
        {activeTab === 'surgery' && (
          <motion.section
            initial="hidden" animate="visible" variants={fadeIn}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Spay */}
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-8">Spay (Female)</h2>
                <div className="space-y-3 bg-stone-50 rounded-lg p-6">
                  {surgeries.spay.map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-stone-200 pb-3 last:border-0">
                      <span className="text-stone-700">{item.breed}</span>
                      <span className="font-bold text-orange-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Castration */}
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-8">Castration (Male)</h2>
                <div className="space-y-3 bg-stone-50 rounded-lg p-6">
                  {surgeries.castration.map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-stone-200 pb-3 last:border-0">
                      <span className="text-stone-700">{item.breed}</span>
                      <span className="font-bold text-orange-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-stone-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {surgeryIncludes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg mt-1">✓</span>
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* CTA */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-12 text-white text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4">Book Your Appointment</h2>
          <p className="text-lg mb-6 opacity-90">Contact us for more information or to schedule your visit</p>
          <a href="tel:0117062184" className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
            Call 011 706 2184
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default Specials;
