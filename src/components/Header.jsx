import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/user';

function Header(props) {
    const { user, numberOfProducts } = props;

    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div>
                    { user
                        ? <p>Salut, { user.displayName }!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        {/* Daca avem user, afisam textul "delogare", altfel altfel afisam "logare" */}
                        { user
                            // La click pe buton se va apela metoda handleSignOut.
                            ? <p className="logout h5" onClick={() => props.signOut()}>Delogare</p>
                            : <Link to="/login" className="h5">Logare</Link>
                        }
                        <div className='d-flex align-items-center'>
                            <Link to='/cart' className='d-flex'>
                                <ShoppingCart className="ml-2"/>
                                <p className='ml-1 mb-0'>{ numberOfProducts }</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);