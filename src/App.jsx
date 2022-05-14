import { useEffect, useState } from 'react';
import { getItems } from './api/itemApi';
import ItemList from './components/ItemList';
import SearchBar from './components/Searchbar';
function App() {
  const [loadStatus, setLoadStatus] = useState(null)
  const [items, setItems] = useState([])
  const [itemListFilteredItems, setItemListFilteredItems] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      setLoadStatus('pending')

      const items = await getItems()

      setItems(items);
      setLoadStatus('success');
    }
    fetchItems()
  }, [])

  return (
    <div className=' text-slate-200 max-w-screen-lg m-auto p-6'>
      <SearchBar items={items} setItemListFilteredItems={setItemListFilteredItems} />
      {loadStatus === 'success' ?
        <ItemList items={itemListFilteredItems ? itemListFilteredItems : items} /> :
        <p className="text-lg mt-4 text-center text-slate-400">'loading...'</p>}
    </div>
  )
}

export default App;
