
export const CarCard = () => {
  return (
    <div className="w-60 h-80  flex flex-col justify-between p-4 hover:shadow-lg">
      <div className="w-full h-4 flex flex-col gap-3">
        <p className="text-left font-semibold">Kia Stinger</p>
        <p className='text-left ml-2 relative font-bold text-xl'>
          <span className="text-xs absolute -left-[8px] -top-[2px] font-normal">$</span>
          52
          <span className="text-xs absolute -bottom-[2px] left-[24px] font-normal">/Day</span>
          </p>
      </div>
      
      <div className="w-full mt-8 flex flex-row items-center justify-center">
      <img src='/toyota/toyota-fortuner.jpg' />
      </div>

      <div className='w-full h-10 flex flex-row items-center justify-between'>
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <img src='/steering-wheel.svg' className="h-[20px] w-[20px]" />
          <span className='text-[12px]'>Automatic</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <img src='/tire.svg' className="h-[20px] w-[20px]" />
          <span className='text-[12px]'>AWD</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <img src='/gas.svg' className="h-[20px] w-[20px]" />
          <span className='text-[12px]'>17 KML</span>
        </div>
      </div>
    </div>
  )
}
