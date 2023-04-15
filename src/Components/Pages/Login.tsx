import React from 'react'
import UserLogin from '../UserLogin'
import { Auth } from '../../Types/Auth'

export default function Login() {
  const login: Auth = {
    title: "Login",
    link: "Sign Up",
    linkDescription: "Do you need an Account? ",
    route: "/register"
  }
  return (
    <UserLogin prop={login}/>
  )
}
