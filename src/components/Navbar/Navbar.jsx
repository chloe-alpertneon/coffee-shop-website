import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { motion } from 'framer-motion';
const Navbar = ({sidebar, setSidebar}) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
<div className="flex justify-between items-center">
    {/* Logo Section */}
    <h1 className="text-2xl font-semibold uppercase"><span className="text-primary">Coders</span>Cafes.</h1>
    {/* Hamburger Menu Section */}
    <motion.div
    initial={{ opacity : 0, y:-100 }}
    animate={{ opacity: 1, y:0 }}
    transition={{ type: "spring",
      stiffness: 100,
      damping:10,
      delay:0.2,
    }}
    onClick={() => setSidebar(!sidebar)}
    >
        <GiHamburgerMenu className="text-3xl cursor-pointer"></GiHamburgerMenu>
    </motion.div>
</div>
      </div>
    </nav>
  )
}

export default Navbar
