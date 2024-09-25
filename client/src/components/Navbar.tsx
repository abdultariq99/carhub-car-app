
export const Navbar = () => {
  return (
    <div className='h-14 w-full absolute top-0'>
        <nav className="h-full w-full flex flex-row justify-center items-center">
            <ul className="h-full w-full flex flex-row items-center justify-between pl-6 pr-10 md:p-[75px]">
                <li>
                    <img className="w-24" src='/logo.svg' />
                </li>
                <li>
                    <button className="ring-1 ring-primary-blue rounded-full bg-[#f2f2f2] w-24 h-8 flex items-center justify-center text-primary-blue">Sign in</button>
                </li>
            </ul>
        </nav>
    </div>
  )
}
