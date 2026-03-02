// import React from 'react'
// import { motion } from 'framer-motion'

// interface AnimatedTextProps {
//   text: string
//   className?: string
//   delay?: number
// }

// const AnimatedText: React.FC<AnimatedTextProps> = ({
//   text,
//   className,
//   delay = 0
// }) => {
//   const words = text.split(' ')

//   const container = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.05,
//         delayChildren: delay
//       }
//     }
//   }

//   const child = {
//     hidden: {
//       opacity: 0,
//       y: 20
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.4,
//         ease: 'easeOut'
//       }
//     }
//   }

//   return (
//     <motion.span
//       variants={container}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       className={`inline-block ${className}`}
//     >
//       {words.map((word, index) => (
//         <motion.span
//           key={index}
//           variants={child}
//           className="inline-block mr-2"
//         >
//           {word}
//         </motion.span>
//       ))}
//     </motion.span>
//   )
// }

// export default AnimatedText