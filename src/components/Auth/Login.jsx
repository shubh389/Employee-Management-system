import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const handleSubmit = (e) => {

  console.log('Email:', email)
  console.log('Password:', password)

  setEmail('')
  setPassword('')

}

  return (
    <div className="flex h-screen w-screen justify-center items-center ">
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
         className='flex flex-col items-center justify-center '>
          <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5' type="email" placeholder='Enter your email'/>
          <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5' type="password" placeholder='Enter your password'/>
          <button className='mt-5 text-white border-none outline-none bg-emerald-600 rounded-full text-xl py-3 px-5'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login 
