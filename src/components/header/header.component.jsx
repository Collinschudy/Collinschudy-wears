import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon";
import DropDown from "../cart-dropdown/dropdown";

import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';

import { ReactComponent as Logo } from "../../assets/crown.svg";

import './header.styles.css'

const handleSignOut = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error.message)
    }
}

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
            
                <Link className="option" to='/shop'>
                    CONTACT
                </Link>
                {
                    
                        currentUser ?
                        (<div className="option"
                            onClick={handleSignOut}>
                            SIGN OUT
                        </div>)
                        :
                        <Link className="option" to='/signin'>
                            SIGN IN
                        </Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : 
            <DropDown/>
}
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: { hidden }}) => ({
    currentUser, hidden
})

export default connect(mapStateToProps)(Header);