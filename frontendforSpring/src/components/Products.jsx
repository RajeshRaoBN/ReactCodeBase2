import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Make GET request to fetch data
        axios
            .get("http://localhost:8080/allproducts")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {data.map((product) => (
                    <li key={product.id}>{product.prodName} {product.prodDesc}    ${product.prodPrice}</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;