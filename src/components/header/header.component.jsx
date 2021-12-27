import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
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
    <CartIcon />
    </div>
    {
        hidden ? null : <CartDropdown />
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
export default connect(mapStateToProps)(Header);