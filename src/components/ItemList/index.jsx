import Item from "./Item"

const ItemList = ({ items }) => {

  if (items.length === 0) {
    return <p className="text-lg mt-4 text-center text-slate-400">Sorry, nothing found</p>
  }

  return (
    <ul className="mt-4 flex flex-wrap gap-4 text-slate-300" >
      {items.map(item => {
        return (
          <Item key={item.id} {...item} />
        )
      })}
    </ul>
  )
}

export default ItemList