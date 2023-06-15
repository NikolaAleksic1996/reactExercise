import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/blog'}>Blog</NavLink>
        </div>
    )
}

export default Navbar;