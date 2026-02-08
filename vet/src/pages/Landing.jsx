import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { 
  FaPaw, FaUserMd, FaSyringe, FaCut, FaTruck, FaNotesMedical, 
  FaPhone, FaMapMarkerAlt, FaClock, FaCheck, FaArrowRight, FaBone
} from 'react-icons/fa';

const Landing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [pricingTab, setPricingTab] = useState('vaccines'); // 'vaccines' or 'surgery'

  return (
    <div className="min-h-screen font-sans text-stone-800">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-50">
        {/* Warm Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#78716c12_1px,transparent_1px),linear-gradient(to_bottom,#78716c12_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100 rounded-full blur-[120px] opacity-50"></div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white border border-stone-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                <FaPaw className="text-orange-500" />
                <span className="text-sm font-bold text-stone-600 tracking-wide uppercase">The Corner Vet</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 mb-6 leading-tight">
                In your pet's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  corner.
                </span>
              </h1>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-lg">
                We strive to take your pet’s best interests at heart. Not a large practice that loses the personal touch, but a family that welcomes you in.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:0117062184" className="btn-primary">
                  <FaPhone className="mr-2" /> 011 706 2184
                </a>
                <Link to="/contact" className="btn-secondary">
                  Book Consultation
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            >
               {/* Hero Image Frame */}
               <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=2069" 
                    alt="Happy Dog" 
                    className="w-full h-auto object-cover"
                  />
                  {/* Floating Badge */}
                  <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-lg border border-stone-100 flex items-center gap-4 max-w-xs">
                     <div className="bg-green-100 p-3 rounded-full text-green-600">
                        <FaTruck />
                     </div>
                     <div>
                        <p className="text-xs font-bold uppercase text-stone-400">Special Offer</p>
                        <p className="text-sm font-bold text-stone-900">Free Food Delivery (5km radius)</p>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ABOUT / INTRO --- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6">Small practice, big heart.</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Our aim is to provide consistently high standards of care without losing that personal touch. 
              We want you and your pets to feel like part of the Corner Vet family. 
              We specialize in dogs and cats, but also perform basic procedures for birds and rabbits.
            </p>
          </div>

          {/* Diagnostic Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Digital X-Ray", icon: <FaNotesMedical /> },
              { label: "Ultrasound", icon: <FaNotesMedical /> },
              { label: "Dental Suite", icon: <FaNotesMedical /> },
              { label: "Blood Lab", icon: <FaNotesMedical /> },
            ].map((item, i) => (
              <div key={i} className="bg-stone-50 p-6 rounded-2xl text-center border border-stone-100 hover:border-orange-200 transition-colors">
                <div className="text-orange-500 text-2xl mb-3 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-stone-800">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES BENTO --- */}
      <section className="section-padding bg-stone-50 border-t border-stone-200">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            
            {/* Food Shop Card (Large) */}
            <motion.div 
              className="md:col-span-2 bg-teal-900 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            >
               <div className="relative z-10 max-w-lg">
                  <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Discount Policy
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">5% - 10% Off All Foods, All The Time</h3>
                  <p className="text-teal-100 mb-6">
                    Active clients (seen within 1 year) get a full 10% discount. 
                    Plus, we deliver for free within a 5km radius to beat the Bryanston traffic!
                  </p>
                  <div className="flex gap-4">
                    <span className="flex items-center text-sm font-semibold"><FaCheck className="mr-2"/> Top Vet Brands</span>
                    <span className="flex items-center text-sm font-semibold"><FaCheck className="mr-2"/> Online Ordering (Code: CVC2)</span>
                  </div>
               </div>
               <div className="absolute right-0 bottom-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-50 -mr-16 -mb-16"></div>
            </motion.div>

            {/* Standard Services */}
            <motion.div className="bg-white p-8 rounded-3xl border border-stone-200" variants={fadeIn}>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                <FaSyringe className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Wellness & Vax</h3>
              <p className="text-sm text-stone-500">Nose to tail exams, annual vaccinations, and senior health checks.</p>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-3xl border border-stone-200" variants={fadeIn}>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <FaCut className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Surgery</h3>
              <p className="text-sm text-stone-500">Soft tissue surgeries and access to orthopedic specialists. Fully equipped theatre.</p>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-3xl border border-stone-200" variants={fadeIn}>
               <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                <FaPaw className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Puppy Classes</h3>
              <p className="text-sm text-stone-500">Held on Saturday mornings. Arranged privately through 'Smart Puppy'.</p>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-3xl border border-stone-200" variants={fadeIn}>
               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                <FaBone className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Dental Care</h3>
              <p className="text-sm text-stone-500">Free dental exams to determine if a procedure is necessary.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRICING TABS --- */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Transparent Pricing</h2>
            <p className="text-stone-500">No hidden costs. We believe in honest care.</p>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={() => setPricingTab('vaccines')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${pricingTab === 'vaccines' ? 'bg-teal-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
              >
                Vaccinations
              </button>
              <button 
                onClick={() => setPricingTab('surgery')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${pricingTab === 'surgery' ? 'bg-teal-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
              >
                Surgery (Spay/Neuter)
              </button>
            </div>
          </div>

          <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200">
            {pricingTab === 'vaccines' && (
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center"><FaPaw className="mr-2"/> Dogs</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Annual (5in1 + Rabies)</span> <span className="font-bold">R847</span></li>
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Annual + Kennel Cough</span> <span className="font-bold">R1145</span></li>
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Puppy 1st (5in1)</span> <span className="font-bold">R818</span></li>
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Rabies Only</span> <span className="font-bold">R393</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center"><FaPaw className="mr-2"/> Cats</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Annual (3in1 + Rabies)</span> <span className="font-bold">R855</span></li>
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Annual + Leukemia</span> <span className="font-bold">R1290</span></li>
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Kitten 1st (3in1)</span> <span className="font-bold">R826</span></li>
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Rabies Booster</span> <span className="font-bold">R393</span></li>
                  </ul>
                </div>
              </div>
            )}

            {pricingTab === 'surgery' && (
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-teal-800 mb-4">Spay (Female)</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Cats</span> <span className="font-bold">R1941</span></li>
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Small Dog</span> <span className="font-bold">R2756</span></li>
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Medium Dog</span> <span className="font-bold">R2918</span></li>
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Large Dog</span> <span className="font-bold">R3080</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-800 mb-4">Castration (Male)</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Cats</span> <span className="font-bold">R1199</span></li>
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Small Dog</span> <span className="font-bold">R1945</span></li>
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Medium Dog</span> <span className="font-bold">R2108</span></li>
                    <li className="flex justify-between border-b border-stone-200 pb-2"><span>Rabbit</span> <span className="font-bold">R1297</span></li>
                  </ul>
                </div>
                <div className="col-span-full mt-6 bg-teal-50 p-4 rounded-xl text-sm text-teal-800">
                  <strong>Includes:</strong> Pre-surgical exam, pain medication (pre/post/dispensed), high quality sutures, sterile environment, anaesthetic monitoring by qualified nurse, and post-surgical check up.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- STAFF --- */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Meet the Family</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr Jessica Lane", role: "Vet & Practice Owner", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000" },
              { name: "Dr Andrew Henning", role: "Vet & Practice Owner", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000" },
              { name: "Elick Phiri", role: "Kennel Hand", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1000" },
              { name: "Overseer Phiri", role: "Kennel Hand", img: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&q=80&w=1000" },
            ].map((staff, i) => (
              <div key={i} className="bg-white p-4 rounded-3xl border border-stone-200 text-center hover:shadow-lg transition-shadow">
                <div className="h-48 w-full rounded-2xl overflow-hidden mb-4">
                  <img src={staff.img} alt={staff.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-stone-900">{staff.name}</h3>
                <p className="text-stone-500 text-sm">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT / FOOTER --- */}
      <footer className="bg-teal-900 text-teal-50 pt-20 pb-10">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Address */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <FaPaw className="text-orange-400 text-2xl" />
              <span className="text-2xl font-bold text-white">The Corner Vet</span>
            </div>
            <p className="leading-relaxed text-teal-200 mb-6">
              251 Bryanston Drive, Bryanston 2021<br/>
              (Corner of Bryanston & Mount Street)<br/>
              Entrance on Mount Street.
            </p>
            <div className="flex gap-4">
               <a href="mailto:info@thecornervet.co.za" className="text-white hover:text-orange-400 transition-colors">info@thecornervet.co.za</a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-teal-200">
              <li className="flex justify-between border-b border-teal-800 pb-2">
                <span>Monday - Friday</span>
                <span>7:30am - 6:00pm</span>
              </li>
              <li className="flex justify-between border-b border-teal-800 pb-2">
                <span>Saturday</span>
                <span>8:00am - 12:00pm</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sun & Public Holidays</span>
                <span>Closed</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-teal-400">
              *Appointments preferred to decrease stress. Walk-ins accommodated where possible.
            </p>
          </div>

          {/* Emergency / Contact */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:0117062184" className="bg-orange-500 text-white py-3 px-6 rounded-xl font-bold text-center hover:bg-orange-600 transition-colors">
                011 706 2184
              </a>
              <a href="tel:0631494716" className="bg-teal-800 text-white py-3 px-6 rounded-xl font-bold text-center hover:bg-teal-700 transition-colors">
                063 149 4716
              </a>
            </div>
            <p className="mt-6 text-sm text-teal-300">
              Note: We are equipped for emergency first aid and stabilisation, but do not offer 24hr monitoring.
            </p>
          </div>
        </div>
        
        <div className="container-custom border-t border-teal-800 pt-8 text-center text-teal-400 text-sm">
          &copy; {new Date().getFullYear()} The Corner Vet. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default Landing;