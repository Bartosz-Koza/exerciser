'use client'

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { login } from '@/lib/api';
import { useRouter } from 'next/navigation';

const Signin = () => {

  const router = useRouter()

  const { register, handleSubmit } = useForm<any>()
  const onSubmit: SubmitHandler<any> = (data) => {mutation.mutate(data)}

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => router.push('/')
  })

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.5, delay: 0.2 }}
        className="bg-gray-100 rounded-md p-8 shadow-lg max-w-md w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          Sign in
        </motion.h1>
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5, delay: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col"
        >
          <label className="mb-2 text-sm">Email:</label>
          <input
            {...register('email')}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          />
          <label className="mb-2 text-sm">Password:</label>
          <input
            {...register('password')}
            type='password'
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-all duration-300"
          >
            Sign in
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default Signin