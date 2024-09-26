
export const CarCard = () => {
  return (
    <div className="w-56 h-64 bg-red-400 flex flex-col justify-between p-2">
      <div className="w-full h-4">
        <p className="text-left font-extrabold">Kia Stinger</p>
        <p className='text-left'>52$ Per Day</p>
      </div>
      <img src='/toyota.jpg' />
      <div>Other images</div>
    </div>
  )
}
