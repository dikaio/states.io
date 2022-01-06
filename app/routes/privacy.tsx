import { motion } from 'framer-motion'

export default function Privacy() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };
  return (
    <motion.article
      className='py-8 mx-auto prose prose-slate lg:prose-lg dark:prose-invert'
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.15 }}

    >
      <h1 className='prose-h4'>Privacy Policy</h1>

      <motion.nav
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2, 3].map((index) => (
          <motion.li key={index} className="inline-block w-10 h-10 m-2 list-none rounded-md bg-brand item" variants={item} />
        ))}
      </motion.nav>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget neque lacinia, rutrum velit eget, aliquam sapien. Duis arcu massa, pulvinar eget risus nec, blandit blandit augue. In ut velit ligula. Praesent iaculis ullamcorper lobortis. Nunc porttitor sit amet magna vel hendrerit. In id sodales justo, eu blandit nisi. Aenean varius felis in interdum tempus. Vestibulum accumsan, nunc ut imperdiet scelerisque, nisl tellus aliquam sem, ut rutrum elit libero eu eros.</p>
    </motion.article >
  );
}
