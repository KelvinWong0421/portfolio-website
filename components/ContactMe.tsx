import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {}

const ContactMe = (props: Props) => {

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href =`mailto:kelvinwong159357@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message}`
  };

  return (
    <div className='flex flex-col pt-20 pb-10 justify-center items-center max-w-7xl px-10 mx-auto mb-40'>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl text-center mb-2 w-full'>
        Contact 
        </h3>

        <div className='flex top-36 tracking-[3px] text-sm flex text-gray-500 mb-10'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 animate-pulse'/>
            <p className=' text-xl'>kelvinwong159357@gmail.com</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-fit mx-auto'>
            <div className='flex space-x-4'>
                <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                 <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
            </div>

            <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
            <textarea {...register('message')} placeholder='Message' className='contactInput'/>

            <button type='submit'className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>

    </div>
  )
}

export default ContactMe