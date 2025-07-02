import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email().required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  company: Yup.string().required('Company is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert('Form submitted successfully! (Stub)');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-4">
      {isSubmitSuccessful && <p className="text-green-600">Thank you! We'll get back soon.</p>}
      <div>
        <input {...register('name')} placeholder="Name" className="w-full border p-3 rounded" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>
      <div>
        <input {...register('email')} placeholder="Email" className="w-full border p-3 rounded" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <input {...register('phone')} placeholder="Phone" className="w-full border p-3 rounded" />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>
      <div>
        <input {...register('company')} placeholder="Company" className="w-full border p-3 rounded" />
        {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}
      </div>
      <div>
        <textarea {...register('message')} placeholder="Message" className="w-full border p-3 rounded" rows={5} />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>
      <button type="submit" className="w-full bg-primary text-white py-3 rounded hover:bg-blue-700">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
