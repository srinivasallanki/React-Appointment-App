import React, { useState, useRef, useEffect } from 'react'
import SortOptions from './SortOptions'

const AppointmentSearch = ({
  appointments,
  query,
  onQueryChange,
  orderBy,
  onOrderByChange,
  sortBy,
  onSortByChange,
}) => {
  const ref = useRef()

  const [showSort, setShowSort] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showSort && !ref.current.contains(e.target)) {
        setShowSort(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [showSort])

  if (appointments.length === 0) {
    return
  }
  return (
    <>
      <div className='ui fluid search'>
        <div className='ui fluid icon input'>
          <input
            className='prompt'
            type='text'
            placeholder='Search'
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />
          <i className='search icon'></i>
        </div>
        <div className='ui inline sort-dropdown dropdown' ref={ref}>
          <button
            className='ui primary button'
            type='button'
            onClick={() => setShowSort(!showSort)}
          >
            Sort By <i className='dropdown icon'></i>
          </button>
          {showSort && (
            <SortOptions
              orderBy={orderBy}
              onOrderByChange={onOrderByChange}
              sortBy={sortBy}
              onSortByChange={onSortByChange}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default AppointmentSearch
