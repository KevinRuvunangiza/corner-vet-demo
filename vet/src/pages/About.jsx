import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaPaw, FaStethoscope, FaXRay } from 'react-icons/fa';
import { GiScalpel } from "react-icons/gi";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen font-sans text-stone-800 pt-32">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-50 to-orange-50 py-16 lg:py-24">
        <div className="container-custom">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6"
          >
            About Our Clinic
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.1 } }}
            className="text-lg text-stone-700 max-w-3xl"
          >
            Here at the Corner Vet we strive to take your pet's best interests at heart.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial="hidden" animate="visible" variants={fadeIn}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-stone-900">Our Mission</h2>
              <p className="text-stone-700 leading-relaxed">
                Our aim is to provide you and your pets with the consistently high standards of care and attention that you deserve. Our aim is not to become a large practice that loses the personal touch, but rather to make you and your pets feel like part of the Corner Vet family.
              </p>
            </motion.div>
            <motion.div 
              initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.2 } }}
              className="bg-orange-100/30 rounded-lg p-8"
            >
              <FaPaw className="text-5xl text-orange-500 mb-4" />
            </motion.div>
          </div>

          {/* Specialties */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Our Specialties</h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              Our specialities lie with both dog's and cat's although we can also perform basic avian procedures such as wing, beak and nail clips as well as rabbit neuters.
            </p>
          </motion.div>

          {/* Diagnostic Tools */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Diagnostic Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FaXRay, title: 'Digital X-Ray', desc: 'Advanced imaging' },
                { icon: FaStethoscope, title: 'Ultrasound', desc: 'Detailed diagnostics' },
                { icon: GiScalpel, title: 'Dental Equipment', desc: 'Full dental care' },
                { icon: FaPaw, title: 'Blood Machine', desc: 'Lab tests' }
              ].map((tool, i) => (
                <div key={i} className="bg-stone-50 rounded-lg p-6 text-center">
                  <tool.icon className="text-4xl text-orange-500 mx-auto mb-4" />
                  <h3 className="font-bold text-stone-900 mb-2">{tool.title}</h3>
                  <p className="text-sm text-stone-600">{tool.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-stone-700 leading-relaxed mt-8">
              We also have a fully equipped surgery at our practice.
            </p>
          </motion.div>

          {/* Shop */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="bg-stone-50 rounded-lg p-8 lg:p-12"
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Our Shop</h2>
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Pet Supplies</h3>
              <p className="text-stone-700 leading-relaxed">
                Our front shop includes some of the latest toys and accessories for your pets. We stock over the counter dewormers and tick/flea control as well as joint/skin supplements and our friendly receptionists or vet nurse, can help you decide what is needed.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Pet Food</h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                Our food shop includes all the top veterinary brands and don't worry if we don't have the exact food you want, we can always order and have it for you as soon as possible.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                If the heavy Bryanston Drive morning and afternoon traffic is getting you down, just ask us and we will arrange to bring your pet's food to your front door (free of charge if you live within a 5km radius)!
              </p>
              <p className="text-stone-700 leading-relaxed">
                We also have access to the E-pet Store for online orders and deliveries of many pet foods, toys and accessories. Go to www.epetstore.com and enter the code CVC2 and you are ready to roll.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-stone-900 mb-6">Ready to Meet Us?</h2>
        <Link to="/contact" className="btn-primary inline-block">
          Contact Us Today
        </Link>
      </section>
    </div>
  );
};

export default About;
