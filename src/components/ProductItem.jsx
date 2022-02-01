import React from 'react';
// Atentie! avem si un fisier css
import './ProductItem.css';
import { addToCart } from '../redux/actions/cart';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    // extragem props-urile de interes
    const {id, name, price, currency, image} = props;

    return(
        // Momentan, preview-ul produsului contine imagine, nume si pret
        <div className="product-item col-12 col-md-4 d-flex mb-3 flex-column align-items-center">
            <Link to={`/product/${id}`} className='text-dark d-flex flex-column align-items-center'>
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>


            <button
                className='btn btn-outline-dark'
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adauga in cos
            </button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);