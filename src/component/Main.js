import { useEffect, useState } from "react";
import Header from "./Header";
import Product from "./product/Product";
import Debug from "../util/Deburg";
import './Main.css'

export default function Main() {
    //API Call (네트워크요청) -> useEffect
    const [products, setProducts] = useState([])
    // const bottom = useRef(null);무한스크롤할때쓰는거

    useEffect(() => {
       // 브라우저의 Web API의 하나로 Fetch API가 있다
       // 브라우저 내장 기능

       fetch(`http://cozshopping.codestates-seb.link/api/v1/products`
       ).then(res => res.json())
        .then(json => setProducts(json))

    }, [])



    return(
        
        <section className="Main-container">
            <h3 className="Main-name">상품 리스트</h3>
            <div className="Main-picture">
                {products.map((product) => {
                return <Product key={product.id} title={product.title} brand_name={product.brand_name} image_url={product.image_url} brand_image_url={product.brand_image_url}></Product>
                }).slice(0,4)}
            </div>
            <h3 className="Main-name">상품 리스트</h3>

        </section>
        
    )
}