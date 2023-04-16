import React from 'react'
import { Employee } from '../Types/Employee'

export default function EmployeeCard({ prop }: { prop: Employee }) {
  return (
    <div>{prop.last_name}</div>
  )
}
