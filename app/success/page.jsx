'use client';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function SuccessPage() {
  const searchParams = useSearchParams();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-8 rounded-lg  bg-neutral-100">
        <h1 className="text-lg pb-4 font-bold">
          Thank you for contacting me {searchParams.get('name')} ✨
        </h1>
        <p className="text-base text-neutral-700">
          I really appreciate you taking the time to write to me. I will get in
          touch with you as soon as possible. Have an excellent day!
        </p>
      </div>
    </motion.section>
  );
}
