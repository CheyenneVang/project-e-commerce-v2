import React, {useState, useEffect} from 'react';
import '../styles/products.css';
import Axios from 'axios';

function Products() {

    useEffect(() => {
        Axios.get("mongodb+srv://ecommerce-vercel:rb4DLpchVqaK1ovp@ecommerce-vercel.ju3npfb.mongodb.net/?retryWrites=true&w=majority").then((response) => {
            setProducts(response.data);
        });
    }, []);

    const [products, setProducts] = useState([]);
    console.log(products);

    const [price, setPrice] = useState(20);

    const handleInput = (e) => {
        setPrice(e.target.value);
    };

    return (
        <>  
            <section className="main">
                <input type="range" onInput={handleInput} min="0" max="300" />
                <h1>Price: ${price}</h1>
                {products.filter(product => {return product.price > parseInt(price, 10)}).map(product => {
                    return(
                        <div className="product">
                            <img src={product.image} alt={product.alt} className="image" />
                            <h2>{product.product_name}</h2> 
                            <p>${product.price}</p>
                            <p>{product.product_description}</p>
                            <button type="submit" className="buyButton">Buy Now</button>
                            <button type="submit" className="addCart">Add To Cart</button>
                        </div>
                );
                })}
            </section>
        </>
    );
}

export default Products;