import React, { useState, useEffect } from 'react'
import AppointmentForm from './AppointmentForm'
import { BsCalendar3 } from 'react-icons/bs'

const AddAppointment = ({ onNewAppointment }) => {
  const [showFrom, SetShowFrom] = useState(false)

  useEffect(() => {
    const isFormOpen = JSON.parse(localStorage.getItem('isOpen'))
    if (isFormOpen) {
      SetShowFrom(isFormOpen)
    }
  }, [])

  const handleShowForm = () => {
    SetShowFrom(!showFrom)
    localStorage.setItem('isOpen', JSON.stringify(!showFrom))
  }

  return (
    <>
      <button className='ui primary fluid button' onClick={handleShowForm}>
        <BsCalendar3 />
        Add New Appointment
      </button>
      {showFrom && <AppointmentForm onNewAppointment={onNewAppointment} />}
    </>
  )
}

export default AddAppointment
