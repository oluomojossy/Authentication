import React, { useState } from 'react'
import "./App.css"
import axios from 'axios'



const Authentication = () => {

    const [Username,setUserName]=useState()
    const [email,setEmail]=useState()
    const [ConfirmEmail,setConfirmEmail]=useState()
    const [phoneNumber,setphoneNumber]=useState()
    const [password,setPassword]=useState()
    const [confirmPassword,setConfirmPassword]=useState()

    const handleUserName=(e)=>{
        const newUserName = e.target.value
        setUserName(newUserName)
    }
    const handleEmail=(e)=>{
        const newEmail= e.target.value
        setEmail(newEmail)
    }
    const handleConfirmEmail=(e)=>{
        const newConfirmEmail = e.target.value
        setConfirmEmail(newConfirmEmail)
    }
    const handlephoneNumber=(e)=>{
        const newphoneNumber = e.target.value
        setphoneNumber(newphoneNumber)
    }
    const handlePassword=(e)=>{
        const newPassword = e.target.value
        setPassword(newPassword)
    }
    const handleConfirmPassword=(e)=>{
        const newConfirmPassword = e.target.value
        setConfirmPassword(newConfirmPassword)
    }



    const data ={fullName:Username, phoneNumber, email, password}
    const url = 'https://chowfinder.onrender.com/api/sign-up'

    const HandleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const res = await axios.post(url,data)
            console.log(res.data)
        }
        catch(error){
            console.log(error.message)
        }
    }


  return (
    <>
     <form onSubmit={HandleSubmit} >
        <h1 className='grace'>Registration Form</h1>
      <div>
        <label htmlFor="fullname">Username:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          onChange={handleUserName}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleEmail}
        />
      </div>

      <div>
        <label htmlFor="email">Confirm Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleConfirmEmail}
        />
      </div>

      <div>
        <label htmlFor="address">Phone Number</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handlephoneNumber}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={handlePassword}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleConfirmPassword}
        />
      </div>
     
      <button type="submit">Sign Up</button>
    </form>
    </>
  )
}

export default Authentication