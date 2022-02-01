import React from "react";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import { addToCart } from "../redux/actions/cart";
import products from '../utils/products.json';
import './Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;

        const categoryValues = Object.values(products);

        let product;

        categoryValues.forEach((category) => {
            const result = category.items.find(product => product.id === Number(productId));
        
            if (result) {
                product = result;
            }
        });

        this.setState({product});
    }

    render() {
        const { product } = this.state;

        return(
            <Layout>
                <div className="product-page content-min-height container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>

                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product alt" />
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button className="btn btn-dark mb-4 font-weight-bold"
                                    onClick={() => this.props.addToCart({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    })}
                            >
                                Adauga in cos
                            </button>
                            <p><span className="font-weight-bold">Marime</span>: {product.size}</p>
                            <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
                            <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    };
}

export default connect(null, mapDispatchToProps)(Product);