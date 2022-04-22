import { useState, useEffect } from 'react'
import AddAppointment from './components/AddAppointment'
import AppointmentList from './components/AppointmentList'
import AppointmentSearch from './components/AppointmentSearch'

const App = () => {
  const [appointments, setAppointments] = useState([])
  const [query, setQuery] = useState('')
  let [sortBy, setSortBy] = useState('petName')
  let [orderBy, setOrderBy] = useState('asc')

  //Get Data from local server
  const getAppointments = async () => {
    const response = fetch('http://localhost:5000/appointments')
    const data = await (await response).json()
    setAppointments(data)
  }
  useEffect(() => {
    getAppointments()
  }, [appointments])

  // Add New Appointment
  const handleNewAppointment = async (newApp) => {
    const response = await fetch('http://localhost:5000/appointments', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newApp),
    })
    const data = await response.json()
    setAppointments([data, ...appointments])
  }

  //Delete Appointment
  const handleDelAppointment = async (id) => {
    await fetch(`http://localhost:5000/appointments/${id}`, {
      method: 'DELETE',
    })
    setAppointments(appointments.filter((item) => item.id !== id))
  }

  //Filtered Appointments
  const filteredAppointments = appointments
    .filter((item) => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptDate.toLowerCase().includes(query.toLowerCase())
      )
    })
    .sort((a, b) => {
      let order = orderBy === 'asc' ? 1 : -1
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order
    })
  return (
    <>
      <div className='ui container  mt-40'>
        <div className='ui grid'>
          <div className='six wide column'>
            <AddAppointment onNewAppointment={handleNewAppointment} />
          </div>
          <div className='ten wide column'>
            <AppointmentSearch
              appointments={filteredAppointments}
              query={query}
              onQueryChange={(myQuery) => setQuery(myQuery)}
              orderBy={orderBy}
              onOrderByChange={(mySort) => setOrderBy(mySort)}
              sortBy={sortBy}
              onSortByChange={(mySort) => setSortBy(mySort)}
            />
            <AppointmentList
              appointments={filteredAppointments}
              onDelAppointment={handleDelAppointment}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
