
export const Hero = () => {
  return (
    <section className="h-full w-full flex flex-col md:flex-row items-center justify-center overflow-hidden">
      <div className="w-full h-full md:w-1/2 flex flex-col justify-center items-start pl-6 md:pl-20 md:pb-32 mt-28">
      <h1 className="text-4xl text-left font-extrabold md:text-5xl">Find, book, rent a car-quick and super easy!</h1>
      <p className="text-left mt-6 font-thin md:text-xl">Streamline your car rental experience with our effortless booking process.</p>
      <button className="w-[110px] h-[35px] ring-1 rounded-full bg-primary-blue mt-6 text-white text-sm">Explore cars</button>
      </div>
      <div className="w-full h-full md:w-1/2 flex items-start justify-end flex-row md:flex-col md:overflow-hidden relative">
        <img src='/hero.png' className="w-[450px] sm:w-[550px] md:min-w-[50vw]" ></img>
        <div className="bg-hero-bg bg-repeat-round h-[300px] w-[450px] md:w-[1000px] md:h-[600px] absolute -z-30 -right-20 -top-8 md:-top-14 md:left-10"></div>
      </div>
    </section>
  )
}
``