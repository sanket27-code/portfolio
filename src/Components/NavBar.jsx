import React from 'react';
// import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className="navBar">
                <h3>portfolio</h3>
                <ul className='navBarContainer'>
                    <li className='navBarItem' onClick={()=>{window.scrollTo({top:0, behavior:"smooth"})}}>home</li>
                    <li className='navBarItem' onClick={()=>{window.scrollTo({top:600, behavior:"smooth"})}}>about</li>
                    <li className='navBarItem' onClick={()=>{window.scrollTo({top:1300, behavior:"smooth"})}}>services</li>
                    <li className='navBarItem' onClick={()=>{window.scrollTo({top:2000, behavior:"smooth"})}}>contact</li>
                </ul>
            </div>
        </>
    )
}
export default NavBar;