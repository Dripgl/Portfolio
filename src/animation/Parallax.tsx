// import { useState } from "react";
// import { motion } from "framer-motion";
// import React from "react";

// const Parallax = ({ children }: { children: React.ReactNode }) => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent) => {
//     setMousePosition({
//       x: (e.clientX / window.innerWidth) * 2 - 1, // Normalizza da -1 a 1
//       y: (e.clientY / window.innerHeight) * 2 - 1,
//     });
//   };

//   return (
//     <div onMouseMove={handleMouseMove} className="relative overflow-hidden">
//       <motion.div
//         animate={{
//           x: mousePosition.x * 30, // Sposta l'elemento lateralmente
//           y: mousePosition.y * 20, // Sposta l'elemento verticalmente
//         }}
//         transition={{ type: "spring", stiffness: 100, damping: 10 }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// export default Parallax;
