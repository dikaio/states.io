import { Link } from 'remix'
import { motion } from 'framer-motion'

export default function Index() {
  return (
    <>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.15 }}
        className="flex items-center justify-center h-full mx-auto prose prose-slate lg:prose-lg dark:prose-invert">
        <Link to="/">
          <h1>States</h1>
        </Link>
      </motion.div>
    </>
  )
}
