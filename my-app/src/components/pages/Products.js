// import React, {useState, useEffect} from 'react';
// import Axios from 'axios';
import React, {useState} from 'react';
import '../styles/products.css';

function Products() {

    const products = [
        {
            "id": 1,
            "image": "https://m.media-amazon.com/images/I/81AHoE-QgFL._AC_SX679_.jpg",
            "alt": "BLUEAIR Bedroom Air Purifier",
            "product_name": "BLUEAIR Bedroom Air Purifier, Air Cleaner Dust Pet Dander Smoke Mold Pollen Allergen, Odor Removal, for Home Office Nursery Kitchen, Washable Pre Filter, HEPASilent, Medium Room, Blue 311 (Non-Auto)",
            "price": 229.99,
            "product_description": "SIMPLE ONE-BUTTON CONTROL, CLEAN AIR IN MINUTES, ONE OF THE QUIETEST AIR PURIFIERS, COMBAT ALLERGENS, REMOVES ODOR & PARTICLES, INDEPENDENTLY TESTED FOR PERFORMANCE & SAFETY, ZERO OZONE, GENUINE FILTERS FOR OPTIMAL PERFORMANCE"
        },
        {
            "id": 2,
            "image": "https://m.media-amazon.com/images/I/71tpOZEW0eL._AC_SX679_.jpg",
            "alt": "LEVOIT Air Purifiers for Bedroom Home",
            "product_name": "LEVOIT Air Purifiers for Bedroom Home, HEPA Filter Cleaner with Fragrance Sponge for Better Sleep, Filters Smoke, Allergies, Pet Dander, Odor, Dust, Office, Desktop, Portable, Core Mini, White",
            "price": 49.99, 
            "product_description": "REFRESH & RELAX, QUIET OPERATION, AROMATHERAPY, SAVE SPACE"
        },
        {
            "id": 3,
            "image": "https://m.media-amazon.com/images/I/71Ddlp2VLbL._AC_SX679_.jpg",
            "alt": "AROEVE Air Purifiers for Home",
            "product_name": "AROEVE Air Purifiers for Home, H13 HEPA Air Purifiers Air Cleaner For Smoke Pollen Dander Hair Smell Portable Air Purifier with Sleep Mode Speed Control For Bedroom Office Living Room, MK01- White",
            "price": 48.99, 
            "product_description": "Efficient Particle Filtration, High Circulation Rate, Low Decibel Operation, Enjoy Fragrant Air with an aroma pad"
        },
        {
            "id": 4,
            "image": "https://m.media-amazon.com/images/I/71WDOhMarhL._AC_SX679_.jpg",
            "alt": "LEVOIT Air Purifier for Home Allergies Pets Hair in Bedroom",
            "product_name": "LEVOIT Air Purifier for Home Allergies Pets Hair in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Ozone Free, Remove 99.97% Dust Smoke Mold Pollen, Core 300, White",
            "price": 99.99, 
            "product_description": "OZONE FREE, HIGH PERFORMANCE, FIND RELIEF: Ease sneezing, congestion, and other allergy symptoms caused by airborne contaminants,OFFICIAL LEVOIT FILTERS, MULTIPLE FILTER CHOICES, WHISPER QUIET AIR CLEANER, SLEEK DESIGN, UNDISTURBED OPERATION"
        },
        {
            "id": 5,
            "image": "https://m.media-amazon.com/images/I/61JH9UVpujL._AC_SX679_.jpg",
            "alt": "Slevoo Air Purifiers for Bedroom Pets in Home",
            "product_name": "Slevoo Air Purifiers for Bedroom Pets in Home, 2022 New Upgrade H13 True HEPA Air Purifier with Fragrance Sponge, 100% Ozone Free, Effectively Clean 99.97% of Dust, Smoke, Pets Dander, Pollen, Odors",
            "price": 39.99, 
            "product_description": "HIGHER-EFFICIENCY 3 STAGE FILTRATION SYSTEM, ADD FRAGRANCE DESIGN SPONGE: AROMATHERAPY ADD-ON, CIRCULAR DESIGN FOR 360° COVERAGE, 2022 NEW UPDATED-ENERGY EFFICIENT, USER-FRIENDLY"
        },
        {
            "id": 6,
            "image": "https://m.media-amazon.com/images/I/71v3pvtmG8L._AC_SX679_.jpg",
            "alt": "AROEVE Air Purifiers for Bedroom",
            "product_name": "AROEVE Air Purifiers for Bedroom H13 True HEPA Air Purifier With Aromatherapy Function For Pet Smoke Pollen Dander Hair Smell 20dB Air Cleaner For Bedroom Office Living Room Kitchen, MK06- White",
            "price": 39.98, 
            "product_description": "FILTERS 0.3 MICRON PARTICLES, ENJOY FRAGRANT AIR, 20dB LOW NOISE OPERATION, HIGH CIRCULATION RATE"
        },
        {
            "id": 7,
            "image": "https://m.media-amazon.com/images/I/71H5IWsuetL._AC_SX679_.jpg",
            "alt": "Afloia Air Purifier for Home",
            "product_name": "Afloia Air Purifiers for Home Large Room Up to 1076 Ft², H13 True HEPA Air Purifiers for Bedroom 22 dB, Air Cleaners Dust Remover for Pet Mold Pollen, Odor Smoke Eliminator, Kilo White, 7 Color Light",
            "price": 99.99, 
            "product_description": "360° AIR INTAKE FOR SMOKE, MEDICAL GRADE AIR PURIFIER RELIEVES ALLERGIES, UNIQUE COLOR-CHANGING LIGHT DESIGN, FIVE-YEAR WARRANTY"
        
        },
        {
            "id": 8,
            "image": "https://m.media-amazon.com/images/I/61PYRO1Do8L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            "alt": "Slevoo Air Purifier for Bedroom",
            "product_name": "Slevoo Air Purifier for Bedroom Pets Smokers in Home, H13 True HEPA Filter Air Cleaner with Fragrance Sponge, Night Light, Timer, Effectively Clean 99.97% Smoke, Dust, Pollen, Pet Dander, Odors, BS-01 Black",
            "price": 47.49, 
            "product_description": "ADVANCED 3 STAGES FILTRATION, EFFICIENT AND 20dB OPERATING QUIETLY, AROMATHERAPY DESIGN, USER-FRIENDLY, FULLY CERTIFIED FOR SAFETY"
        
        },
        {
            "id": 9,
            "image": "https://m.media-amazon.com/images/I/61JLsR9ymYL._AC_SX679_.jpg",
            "alt": "MOOKA B-D02L AIR PURIFIER FOR LARGE ROOM",
            "product_name": "MOOKA Air Purifiers for Home Large Room up to 860ft², H13 True HEPA Air Filter Cleaner, Odor Eliminator, Remove Allergies Smoke Dust Pollen Pet Dander, Night Light",
            "price": 89.97, 
            "product_description": "MOOKA B-D02L AIR PURIFIER FOR LARGE ROOM, high-efficiency filtration system, covers an area up to 860ft²(80m²), HIGH-EFFICIENCY ACTIVATED CARBON FILTER CAPTURE ALLERGENS, ULTRA-QUIET, ENERGY-SAVING & SAFE, 4 TIMER SETTINGS, 4 FAN MODES, AND NIGHT LIGHT, WORRY-FREE FOR LONG USE"
        
        },
        {
            "id": 10,
            "image": "https://m.media-amazon.com/images/I/71d-nRh8paL._AC_SX679_.jpg",
            "alt": "TCL Air Purifier for Home, Room, Bedroom",
            "product_name": "TCL Air Purifier for Home Room Bedroom True H13 HEPA Air Filter Remove 99.97% Smoke Odor Pet Dander Dust Pollen Mold Air Cleaner Metal Design with Night Light",
            "price": 47.10, 
            "product_description": "CLEANER AIR IN ONLY 15 MINUTES, BREEVA 3-STAGE FILTRATION SYSTEM, 360-DEGREE CLEAN, SLEEP SOUNDLY, WAKE UP REFRESHED, CLEAN AIR ON YOUR TIME,MINIMALIST DESIGN"
        
        },
        {
            "id": 11,
            "image": "https://m.media-amazon.com/images/I/71UoENKnfkL._AC_SX679_.jpg",
            "alt": "Fulminare Air Purifier for Bedroom",
            "product_name": "Air Purifiers for Bedroom, FULMINARE H13 True HEPA Air Filter, Quiet Air Cleaner With Night Light, Portable Small Air Purifier for Office Living Room, Remove 99.97% 0.01 Microns Dust, Smoke, Pollen",
            "price": 39.99, 
            "product_description": "LIGHTWEIGHT AIR PURIFIER EQUIPPED WITH A 4-LAYER FILTER, QUIET FOR SLEEP WITH ADJUSTABLE NIGHT LIGHT, 3-SPEED CHOICES(LOW-MEDIUM-HIGH), 5 TIMERS & SMART REMINDER"
        
        },
        {
            "id": 12,
            "image": "https://m.media-amazon.com/images/I/71Q4+Xt-jHL._AC_SX679_.jpg",
            "alt": "POMORON Air Purifier for Bedroom",
            "product_name": "Air Purifiers POMORON Air Purifier for Bedroom HEPA Air Filter for Smoke Pollen Dander Hair 22dB Quiet Air Cleaner for Home, Bedroom, Living Room, Kitchen - Black",
            "price": 59.99, 
            "product_description": "MULTI-FILTERED AIR, IDEAL LIFE PARTNER, QUIET OPERATION, SMART DETECTION, ENERGY SAVING"
        
        }
    ];

    // For database
    // useEffect(() => {
    //     Axios.get("http://localhost:3001/api/get").then((response) => {
    //         setProducts(response.data);
    //     });
    // }, []);

    // const [products, setProducts] = useState([]);
    // console.log(products);

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