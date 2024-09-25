
export const Navbar = () => {
  return (
    <div className='h-14 w-full absolute'>
        <nav className="h-full w-full flex flex-row justify-center items-center">
            <ul className="h-full w-full flex flex-row items-center justify-around">
                <li>
                    <img className="w-28" src='/logo.svg' />
                </li>
                <li>
                    <button className="ring-1 rounded-full bg-transparent w-24 h-8 flex items-center justify-center text-primary-blue">Login</button>
                </li>
            </ul>
        </nav>
    </div>
  )
}
