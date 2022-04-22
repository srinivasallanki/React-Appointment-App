import React from 'react'
import { BsTrash } from 'react-icons/bs'
const AppointmentItem = ({ appointment, onDelAppointment }) => {
  const { id, petName, ownerName, aptNotes, aptDate } = appointment
  return (
    <>
      <div className='ui feed'>
        <div className='event'>
          <div className='label'>
            <button
              className='ui red button'
              onClick={() => onDelAppointment(id)}
            >
              <BsTrash />
            </button>
          </div>
          <div className='content'>
            <div className='summary'>
              <h3>{petName}</h3>
            </div>
            <div className='extra text'>
              <p>
                <span className='redBold'>{ownerName}</span> <span className='date'>{aptDate}</span>
              </p>
              <p>{aptNotes}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppointmentItem
