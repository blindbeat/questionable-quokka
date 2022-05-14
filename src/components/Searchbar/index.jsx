import { useState, useRef } from "react";
import DropList from "./DropList";

function SearchBar({ items, setItemListFilteredItems }) {
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState([])
  const [activeFilteredItem, setActiveFilteredItem] = useState(null)
  const [searchBarActive, setSearchBarActive] = useState(false)
  const searchBar = useRef(null)

  const resetFilteredItems = () => {
    setItemListFilteredItems(null)
  }

  const handleChange = (event) => {
    setSearchText(event.target.value);
    setActiveFilteredItem(null)
    setFilteredItems(items.filter(item => {
      return item.name.toLowerCase().includes(event.target.value.toLowerCase());
    }))
  }

  const handleKeyDown = (event) => {
    switch (event.code) {
      case 'Enter': {
        event.preventDefault()
        handleFiltered(activeFilteredItem === null ? filteredItems : [activeFilteredItem])
        break
      }
      case 'ArrowDown': {
        event.preventDefault()
        if (filteredItems.length === 0) break
        if (activeFilteredItem === null || (filteredItems.indexOf(activeFilteredItem) === filteredItems.length) || filteredItems.indexOf(activeFilteredItem) >= 9) {
          setActiveFilteredItem(filteredItems[0]);
        } else {
          setActiveFilteredItem(filteredItems[filteredItems.indexOf(activeFilteredItem) + 1])
        }
        break
      }
      case 'ArrowUp': {
        event.preventDefault()
        if (filteredItems.length === 0) break
        if (activeFilteredItem === null || (filteredItems.indexOf(activeFilteredItem) === 0)) {
          setActiveFilteredItem((filteredItems[filteredItems.length - 1] < 10) ? filteredItems[filteredItems.length - 1] : filteredItems[9]);
        } else {
          setActiveFilteredItem(filteredItems[filteredItems.indexOf(activeFilteredItem) - 1])
        }
        break
      }

      default: {
        return
      }
    }
  }

  const handleFiltered = (items) => {
    setItemListFilteredItems(items)
    setSearchText('')
  }

  return (
    <>
      <div className="relative">
        <input
          className="bg-transparent w-5/6 p-4  border rounded-l-xl hover:bg-slate-700 transition"
          autoComplete="off"
          ref={searchBar}
          name='searchbar'
          type='search'
          placeholder='Search Fortnite items'
          value={searchText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setSearchBarActive(true)}
          onBlur={() => {
            setSearchBarActive(false)
            setActiveFilteredItem(null)
          }}
        />
        <button className="w-1/6 p-4 border rounded-r-xl  hover:bg-slate-700 transition" onClick={resetFilteredItems}>
          Reset
        </button>
        {(searchText === '' || !searchBarActive) ?
          null :
          <DropList
            setActiveFilteredItem={setActiveFilteredItem}
            handleFiltered={handleFiltered}
            searchText={searchText}
            items={filteredItems}
            activeFilteredItem={activeFilteredItem}
          />}
      </div>
    </>
  )
}

export default SearchBar