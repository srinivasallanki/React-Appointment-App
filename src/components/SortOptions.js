import React from 'react'
import { BsCheck2 } from 'react-icons/bs'
const SortOptions = ({ orderBy, onOrderByChange, sortBy, onSortByChange }) => {
  return (
    <div className='menu'>
      <div
        className='item'
        data-text='this week'
        onClick={() => onSortByChange('petName')}
      >
        Pet Name {sortBy === 'petName' && <BsCheck2 />}
      </div>
      <div
        className='item'
        data-text='this month'
        onClick={() => onSortByChange('ownerName')}
      >
        Owner Name {sortBy === 'ownerName' && <BsCheck2 />}
      </div>
      <div
        className='item'
        data-text='this month'
        onClick={() => onSortByChange('aptDate')}
      >
        Date {sortBy === 'aptDate' && <BsCheck2 />}
      </div>
      <div className='divider'></div>
      <div className='item' onClick={() => onOrderByChange('asc')}>
        Ascending {orderBy === 'asc' && <BsCheck2 />}
      </div>
      <div className='item' onClick={() => onOrderByChange('desc')}>
        Descending {orderBy === 'desc' && <BsCheck2 />}
      </div>
    </div>
  )
}

export default SortOptions
