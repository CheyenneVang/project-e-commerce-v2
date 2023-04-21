import React, {useState, useEffect} from 'react';
import Axios from 'axios';
// Axios allows to make API requests
// import React, {useState} from 'react';
import '../styles/products.css';
// import products from '../products.json';

function Products() {
    const [filteredData, setFilteredData] = useState("");

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        const newFilter = products.filter((value) => {
            return value.product_name.toLowerCase().includes(searchWord.toLowerCase())
        });
        if(searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    // For database
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setProducts(response.data);
        });
    }, []);

    const [products, setProducts] = useState([]);
    console.log(products);


    // async version for database
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //           try {
    //               const response = await Axios.get("http://localhost:3001/api/get")
    //               setProducts(response.data)
    //           } catch(err) {
    //               console.log(err)
    //           }
    //       }
    //       fetchProducts()
    //     }, [])
    // const [products, setProducts] = useState([]);


    const [price, setPrice] = useState(20);

    const handleInput = (e) => {
        setPrice(e.target.value);
    };

    return (
        <>  
                <section className="searchInput">
                    <label className="searchLabel" for="search">Search here:</label>
                    <input className="searchField" type="search" id="search" placeholder="Enter here" onChange={handleFilter} />
                    {filteredData.length !== 0 && (
                        <div>
                            {filteredData.map((value, key) => {
                                return <p className="filteredResults">{value.product_name}</p>; 
                            })}
                        </div>
                    )}
                </section>
                
                <input className="priceRange" type="range" onInput={handleInput} min="0" max="300" />
                <h3>Price: ${price}</h3>

                <section className="main">

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