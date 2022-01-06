import { motion } from "framer-motion"

export default function Terms() {
  return (
    <motion.article
      className='py-8 mx-auto prose prose-slate lg:prose-lg dark:prose-invert'
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.15 }}
    >
      <h1>Terms of Service</h1>
      <p>These Terms of Service (the  “Terms”) describe your rights and responsibilities when using our online workplace productivity tools and platform (the “Services”). Please read them carefully. If you are a Customer (defined below), these Terms govern your access and use of our Services. If you are being invited to a team set up by a Customer, the User Terms of Service (the “User Terms” ) govern your access and use of the Services.</p>
    </motion.article>
  );
}
