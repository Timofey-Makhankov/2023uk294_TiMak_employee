import React from 'react'
import UserLogin from '../Organisms/UserLogin'
import { Auth } from '../../Types/Auth'

/**
 * This Page shows the registration Page
 * @returns A Register Page (Component)
 */
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
