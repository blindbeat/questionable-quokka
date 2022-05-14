function Item({ name, description, images }) {
  return (
    // width calculation for flex-gap compensation
    <li className='md:w-[calc(33.333333333%_-_10.6666666px)] w-full border rounded-lg overflow-hidden'>
      <img alt="name" className="w-full" src={images.icon} />
      <p className="p-2 text-lg">{name}</p>
      <p className="p-2">{description}</p>
    </li>
  )
}

export default Item