import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <main style={bgImage} className="bgImage">
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/*Navbar Section*/}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/*Hero Section*/}
          <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/*Text content Section*/}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Black Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    hic reiciendis voluptatem ut officiis, nihil dolorem natus
                    at enim quisquam, mollitia, necessitatibus quibusdam tempore
                    officia.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[210px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/*Hero Image Section*/}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackCoffee}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* Orange Circle Ring */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute  top-24 -right-20 border-primary border-[20px] rounded-full z-10"
              ></motion.div>
              {/* Big Text Section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-14 left-[200px] z-[1]"
              >
                <h1 className="text-darkGray/40 text-[110px] scale-150 font-bold leading-none">
                  Black Tumbler
                </h1>
              </motion.div>
            </div>
            {/*Third div Section*/}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Black Tumbler
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Tumbler</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    hic reiciendis voluptatem ut officiis, nihil dolorem natus{" "}
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[210px] bg-darkGray/50"></div>
              </motion.div>
            </div>
            <div></div>
          </div>
        </div>
        {/* Sidbar Menu Section */}
        {sidebar && (
          <motion.div initial = {{ X: "100%" }}
            whileInView = {{ x: 0 }} 
            className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10 "
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* Line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                {/* Social Icons */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
