'use client';
import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const formik = useFormik({
    initialValues: {
      fullName: '',
      emailAddress: '',
      subjectMessage: '',
      message: '',
    },

    validationSchema: Yup.object({
      fullName: Yup.string().trim().min(2, '').required('Name is required'),
      emailAddress: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      subjectMessage: Yup.string().required('Message subject is required'),
      message: Yup.string()
        .max(250, 'Message must be 250 characters or less')
        .required('Message is required'),
    }),

    onSubmit: async (formData) => {
      await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      router.push(
        '/success' + '?' + createQueryString('name', `${formData.fullName}`)
      );
    },
  });

  return (
    <section>
      <h1 className="font-bold text-3xl">Contact Me</h1>
      <p className="my-5">
        Have a project, idea or opportunity you&apos;d like to discuss? Or just
        want to connect?
      </p>
      <form method="POST" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-5 mt-12 text-base">
          <div className="flex gap-5">
            <label
              className={clsx(
                'basis-1/2 flex flex-col font-medium text-neutral-500 focus-within:text-neutral-800 transition-all',
                {
                  'text-red-500 focus-within:text-red-500':
                    formik.touched.fullName && formik.errors.fullName,
                }
              )}
            >
              {formik.touched.fullName && formik.errors.fullName
                ? formik.errors.fullName
                : 'Name'}
              <input
                id="fullName"
                type="text"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Your entire name"
                autoComplete="off"
                className={clsx(
                  'max-h-12 mt-1 p-4 text-sm text-neutral-800 border border-neutral-500 rounded-lg focus:outline-none focus:ring-0 focus:ring-neutral-500 transition-all',
                  {
                    'border-red-500 focus:ring-red-500':
                      formik.touched.fullName && formik.errors.fullName,
                  }
                )}
              />
            </label>
            <label
              className={clsx(
                'basis-1/2 flex flex-col font-medium text-neutral-500 focus-within:text-neutral-800 transition-all',
                {
                  'text-red-500 focus-within:text-red-500':
                    formik.touched.emailAddress && formik.errors.emailAddress,
                }
              )}
            >
              {formik.touched.emailAddress && formik.errors.emailAddress
                ? formik.errors.emailAddress
                : 'Email'}
              <input
                id="emailAddress"
                type="email"
                value={formik.values.emailAddress}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Your email address"
                autoComplete="off"
                className={clsx(
                  'max-h-12 mt-1 p-4 text-sm text-neutral-800 border border-neutral-500 rounded-lg focus:outline-none focus:ring-0 focus:ring-neutral-500 transition-all',
                  {
                    'border-red-500 focus:ring-red-500':
                      formik.touched.emailAddress && formik.errors.emailAddress,
                  }
                )}
              />
            </label>
          </div>
          <label
            className={clsx(
              'basis-1/2 flex flex-col font-medium text-neutral-500 focus-within:text-neutral-800 transition-all',
              {
                'text-red-500 focus-within:text-red-500':
                  formik.touched.subjectMessage && formik.errors.subjectMessage,
              }
            )}
          >
            {formik.touched.subjectMessage && formik.errors.subjectMessage
              ? formik.errors.subjectMessage
              : 'Subject'}
            <input
              id="subjectMessage"
              type="text"
              value={formik.values.subjectMessage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Subject"
              autoComplete="off"
              className={clsx(
                'max-h-12 mt-1 p-4 text-sm text-neutral-800 border border-neutral-500 rounded-lg focus:outline-none focus:ring-0 focus:ring-neutral-500 transition-all',
                {
                  'border-red-500 focus:ring-red-500':
                    formik.touched.subjectMessage &&
                    formik.errors.subjectMessage,
                }
              )}
            />
          </label>
          <label
            className={clsx(
              'flex flex-col font-medium text-neutral-500 focus-within:text-neutral-800 transition-all',
              {
                'text-red-500 focus-within:text-red-500':
                  formik.touched.message && formik.errors.message,
              }
            )}
          >
            {formik.touched.message && formik.errors.message
              ? formik.errors.message
              : 'Message'}
            <textarea
              id="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Your message..."
              autoComplete="off"
              rows="10"
              className={clsx(
                'max-h-48 mt-1 p-4 rounded-lg border border-neutral-500 focus:outline-none focus:ring-0 focus:ring-neutral-500 transition-all',
                {
                  'border-red-500 focus:ring-red-500':
                    formik.touched.message && formik.errors.message,
                }
              )}
            />
          </label>
          <motion.button
            type="submit"
            className="w-1/3 mt-5 px-2.5 py-3.5 self-center rounded-lg text-white bg-neutral-800 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            Send
          </motion.button>
        </div>
      </form>
    </section>
  );
}
