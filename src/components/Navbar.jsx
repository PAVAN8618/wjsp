

import { NavLink } from 'react-router-dom'

function Navbar() {

    const navLinkStyles= ( { isActive })=>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textdecoration : isActive ? 'none' : 'underline'
        }
    }
  return (
    <nav className='w-full h-10 flex-wrap bg-slate-500'>
            <NavLink to='/' style={navLinkStyles}>
                Home
            </NavLink>
            <NavLink to='/about' style={navLinkStyles}>
                About
            </NavLink>
            <NavLink to='/product' style={navLinkStyles}>
                Product
            </NavLink>
    </nav>
  )
}

export default Navbar