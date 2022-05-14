import React from 'react'

function DropList({ searchText, items, activeFilteredItem, handleFiltered }) {

  return (
    <div className='absolute w-full bg-slate-900'>
      <ul className='border rounded-b-xl rounded-t-md mt-2 drop-shadow-xl'>
        <li className='p-2 pb-4 hover:bg-slate-700 transition duration-75' key={'searchText'} onMouseDown={() => handleFiltered(items)} >
          {searchText}
        </li>
        {
          items.slice(0, 10).map(item => {
            return (
              <li className={`p-2 hover:bg-slate-700 transition duration-75 ${item === activeFilteredItem ? `bg-slate-700` : null}`} key={item.id} onMouseDown={() => handleFiltered([item])}>
                {item.name}
              </li>
            )
          })
        }
      </ul >
    </div>
  )
}

export default DropList