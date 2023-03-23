import './login.css';

import { useState } from 'react';

import axios from 'axios';

export default function Login(props){
    const [phone, setPhone] = useState('')
    const [otpSent, setOtpSent] = useState(false)
    const [otp, setOtp] = useState('')
    let sendOtp = async(e) => {
        e.preventDefault()
        let number = "+91" + phone
        let res = await axios.post(`http://localhost:8000/setup`,{
            setupStep: 1,
            phoneNumber: number
        })
        console.log(res)
        if(res.data.status == 'ok'){
            setOtpSent(true)
        }
    }

    const signIn = async(e) => {
        e.preventDefault()
        let number = "+91" + phone
        let res = await axios.post(`http://localhost:8000/setup`,{
            setupStep: 2,
            phoneNumber: number,
            code: otp
        })
        if(Object.keys(res.data.message).length === 0){
            props.redirect('welcome')
        }

    }
    return(
        <div className='container'>
            <div className='header'>
                <div className='title'>
                    <span>TeleSQL</span>
                </div>
            </div>
            <div className='main'>
                <div className='box'>
                    <div className='welcome'>
                        <span>Welcome</span>
                    </div>
                    {!otpSent ? <div className='subtitle'>
                        <span>Signin using phone number</span>
                    </div> : <div className='subtitle'>
                        <span>Enter OTP</span>
                    </div>}
                    <form onSubmit={(e) => !otpSent ? sendOtp(e) : signIn(e)}>
                    {!otpSent ? <div>
                        <input className='phone' value={phone} placeholder='Phone number' onChange={(i) => setPhone(i.target.value)}/>
                    </div> : <div>
                        <input className='phone' value={otp} placeholder='OTP' onChange={(i) => setOtp(i.target.value)}/>
                    </div>}
                    {!otpSent ? 
                    <button  type='submit' className='submit' >
                        <span>
                            Send OTP
                        </span>
                    </button> : <button  type='submit' className='submit'>
                        <span>
                            Sign In
                        </span>
                    </button>}
                    </form>
                </div>
            </div>
        </div>
    )
}