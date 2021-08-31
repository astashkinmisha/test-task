import React from "react";
import {useEffect} from "react";

import {setProducts, setProductsLoading, resetProductsLoading} from "./redux"
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    return (
        <>
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: "center"
        }}>
            <h3>Our nice shop!</h3>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
                >
                 <h3 style={{marginRight: "20px"}}>cart: {0}</h3>
                 <h3>wishlist: {0}</h3>

                </div>
        </header>
            <hr/>
        </>
    )
}

const Products = () => {
    const {products} = useSelector(({products}) => products)
    const dispatch = useDispatch()
    const fetchProducts = async () => {
try {
    dispatch(setProductsLoading())
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json;
    dispatch(setProducts(data))
    console.log(data);
} catch (e) {
    console.log(e) 
} finally {
    dispatch(resetProductsLoading())

};
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
    fetchProducts();
}, [])
console.log(products)
 if (setProductsLoading)
     return <div>LOADING!</div>
 }
    return (
        <div>
            {products.map(product => {
        <div key={product.id} style={{
         width: '70%',
         margin: '20px auto'
        }} >
            <h4>{product.title}</h4>
            <p>product.description</p>
            <img style={{width: '100%'}} src={product.image}/>
        </div>
        })}
</div>)
    return <div>products</div>
};

export default function App() {
    return (
        <div>
        <Header />
        <Products />
        </div>
    );
}
