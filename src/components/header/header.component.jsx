import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
            </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
    {
        currentUser ? // if it's true, it renders the sign out buttom
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :  //if it's null(false), it shows the sign in buttom
        <Link className='option' to='/signin'>SIGN IN</Link>
    }
    </div>
    </div>
)
export default Header;