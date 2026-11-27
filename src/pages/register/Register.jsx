import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router'
import registerSchema from './schemas/register-schema'

const Register = () => {

    const {register, handleSubmit, formState : {error}} = 
    useForm({
        resolver : zodResolver(registerSchema)})

    return (
        <div className='flex w-full items-center justify-center'>
        <div className="card card-border card-md min-w-md" >
            <div className="card-body">
                <h2 className="card-title">Welcome slay</h2>
                <p>Silakan lengkapi form dibawah ini</p>

                <form onSubmit={handleSubmit(console.log)} className='space-y-5'>
                    <label className="floating-label">
                        <span>Your Name</span>
                        <input type="text" placeholder="drop your name" className="input input-md" {...register('username')}/>
                        </label>
                        <label className="floating-label">
                        <span>Your Email</span>
                        <input type="text" placeholder="drop your Email" className="input input-md" />
                        </label>
                        <label className="floating-label">
                        <span>Your Password</span>
                        <input type="text" placeholder="drop your password" className="input input-md" />
                        </label>

                        <button type='submit' className='btn btn-primary'>create account</button>
                            
                </form>
            </div>
        </div>
        </div>
    
    )
}

export default Register