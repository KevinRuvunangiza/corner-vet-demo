import React, { useState } from "react";
import { Link } from "react-router";
import { FaPaw, FaBars, FaTimes, FaPhone } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 py-4">
        <div className="container-custom flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 text-teal-900 hover:opacity-80 transition-opacity"
          >
            <FaPaw className="text-2xl text-orange-500" />
            <span className="font-bold text-xl tracking-tight">
              The Corner Vet[DEMO]
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {["About", "Services", "Staff", "Specials", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-stone-600 font-medium hover:text-orange-500 transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
            <a href="tel:0117062184" className="btn-primary text-sm px-6 py-2">
              <FaPhone className="mr-2 text-xs" /> Call Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-stone-600 text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[70px] bg-white z-40 lg:hidden p-6"
          >
            <div className="flex flex-col gap-6 text-center">
              {["About", "Services", "Staff", "Specials", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold text-stone-800"
                  >
                    {item}
                  </Link>
                ),
              )}
              <a
                href="tel:0117062184"
                className="btn-primary w-full justify-center"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
