import { CarCard } from './CarCard'
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Catalogue = () => {
  const [company, setCompany] = useState<string>('toyota');
  const [model, setModel] = useState<string>('prius');

  useEffect(()=>{
    let cars : unknown = axios.get(`http://localhost:8080/cars?limit=2&model=${model}`).then(response=>{
      console.log(response.data)
    }).catch(error=>{
      console.log(error)
    })
  }, [])

  return (
    <section className='h-auto w-screen flex flex-row justify-center items-center mt-28'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28'>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        </div>
    </section>
  )
}
