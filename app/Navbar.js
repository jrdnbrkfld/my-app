"use client";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useCycle(false, true);
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="sticky top-0 inset-0 p-6 bg-black">
      <nav className="container mx-auto">
        {/* NAVBAR TOGGLER 
        BUTTON FOR SMALL 
        SCREENS */}
        <motion.button
          animate={mobileNav ? "open" : "closed"}
          whileHover={{ rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-1 relative z-10"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 },
            }}
            className="w-5 h-0.5 bg-white block"
          ></motion.span>
          <motion.span
            variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
            className="w-5 h-0.5 bg-white block"
          ></motion.span>
          <motion.span
            variants={{
              closed: { rotate: 0 },
              open: { rotate: -45, y: -6 },
            }}
            className="w-5 h-0.5 bg-white block"
          ></motion.span>
        </motion.button>
        {/* NAVBAR CONTENT 
        FOR SMALL SCREENS */}
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  open: {
                    x: "0%",
                  },
                  closed: {
                    x: "-100%",
                  },
                }}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed inset-0 bg-red-500 space-y-10 flex flex-col justify-center"
              >
                <motion.div
                  transition={{
                    open: {
                      y: "0%",
                      opacity: 1,
                    },
                    closed: {
                      y: "25%",
                      opacity: 0,
                    },
                  }}
                  className="flex flex-col container mx-auto p-6 space-y-5"
                >
                  <Link href="/" className="text-4xl font-bold">
                    <p>Link #1</p>
                  </Link>
                  <Link href="/" className="text-4xl font-bold">
                    <p>Link #2</p>
                  </Link>
                  <Link href="/" className="text-4xl font-bold">
                    <p>Link #3</p>
                  </Link>
                  <Link href="/" className="text-4xl font-bold">
                    <p>Link #4</p>
                  </Link>
                  <Link href="/" className="text-4xl font-bold">
                    <p>Link #5</p>
                  </Link>
                </motion.div>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
