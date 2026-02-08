import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaPaw } from 'react-icons/fa';

const Staff = () => {
  const vets = [
    {
      name: 'Dr Jessica Lane',
      qualification: 'BVSc',
      role: 'Vet and Practice Owner',
      bio: 'With a passion for animal care and a commitment to excellence, Dr. Jessica Lane founded The Corner Vet to provide personalized veterinary care with a personal touch.'
    },
    {
      name: 'Dr Andrew Henning',
      qualification: 'BVSc',
      role: 'Vet and Practice Owner',
      bio: 'Dr. Andrew Henning brings years of veterinary expertise and a compassionate approach to animal care, working alongside Jessica to ensure the best outcomes for our patients.'
    }
  ];

  const staff = [
    {
      name: 'Elick Phiri',
      role: 'Kennel Hand'
    },
    {
      name: 'Overseer Phiri',
      role: 'Kennel Hand'
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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
            Meet Our Team
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.1 } }}
            className="text-lg text-stone-700"
          >
            The dedicated professionals caring for your pets
          </motion.p>
        </div>
      </section>

      <div className="container-custom">
        {/* Veterinarians */}
        <motion.section 
          initial="hidden" animate="visible" variants={containerVariants}
          className="mb-20"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-stone-900 mb-12 text-center"
          >
            Our Veterinarians
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {vets.map((vet, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-teal-500 to-orange-500 h-32 flex items-center justify-center">
                  <FaUserMd className="text-6xl text-white opacity-30" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">
                    {vet.name} ({vet.qualification})
                  </h3>
                  <p className="text-orange-600 font-semibold mb-4">{vet.role}</p>
                  <p className="text-stone-600 leading-relaxed">{vet.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Support Staff */}
        <motion.section 
          initial="hidden" animate="visible" variants={containerVariants}
          className="mb-20"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-stone-900 mb-12 text-center"
          >
            Kennel Hands
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-stone-50 rounded-lg p-8 text-center border border-stone-200 hover:border-orange-300 transition-colors"
              >
                <FaPaw className="text-4xl text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-stone-900 mb-2">{member.name}</h3>
                <p className="text-stone-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Message */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="bg-teal-50 rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Our Commitment</h2>
          <p className="text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto">
            Every member of our team is dedicated to providing the highest standard of care for your pets. We're committed to making both you and your furry friends feel like part of the Corner Vet family.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default Staff;
