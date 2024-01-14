import {Link} from 'react-router-dom';
// import {FaHome} from 'react-icons/fa'

export const Navbar = ()=>{


    return(

    <nav className='mainnav'>
        <ul className='mainul'>
        
        <>
        <Link to ="/login">Login</Link>
        <Link to ="/register">Register</Link>
        <Link to ="/alloffers">All Offers</Link>
        <Link to="/contactus">Contact Us</Link>   
        </>  

        </ul>
    </nav>

    )
}