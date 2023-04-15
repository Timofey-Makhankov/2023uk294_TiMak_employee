import React from 'react'
import UserLogin from '../UserLogin'
import { Auth } from '../../Types/Auth'

export default function Register() {
  const register: Auth = {
    title: "Register",
    link: "Log in",
    linkDescription: "Already Registered? ",
    route: "/login"
  }
  return (
    <UserLogin prop={register}/>
  )
}
