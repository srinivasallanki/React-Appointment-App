import React from 'react'
import AppointmentItem from './AppointmentItem'

const AppointmentList = ({ appointments, onDelAppointment }) => {
  if (appointments.length === 0) {
    return <h2 className='text-center'>No Appointments</h2>
  }

  return (
    <>
      {appointments.map((app) => {
        return (
          <AppointmentItem
            key={app.id}
            appointment={app}
            onDelAppointment={onDelAppointment}
          />
        )
      })}
    </>
  )
}

export default AppointmentList
