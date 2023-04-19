import React from 'react'
import UserLogin from '../Organisms/UserLogin'
import { Auth } from '../../Types/Auth'

/**
 * This shows the login page
 * @returns The Login page (component)
 */
export default function Login() {

  const login: Auth = {
    title: "Login",
    link: "Sign Up",
    linkDescription: "Do you need an Account? ",
    route: "/register"
  }
  return (
    <UserLogin prop={login} />
  )
}
