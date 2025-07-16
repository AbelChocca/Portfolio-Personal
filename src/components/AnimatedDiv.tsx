import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimatedDiv = ({ children }: { children: React.ReactNode}) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

  return (
    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, x: -50}}
        animate={ inView ? { opacity: 1, y: 0, x: 0} : {}}
        transition={{ duration: 0.6, ease: "easeOut"}}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedDiv
