import { useCallback, useEffect, useState, useRef } from "react"
import Product from "../product/Product"
import './List.css'

export default function All(){

    const [products, setProducts] = useState([]);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const bottom = useRef(null)

    useEffect(() => {
        // 브라우저의 Web API의 하나로 Fetch API가 있다
        // 브라우저 내장 기능
 
        fetch(`http://cozshopping.codestates-seb.link/api/v1/products`
        ).then(res => res.json())
         .then(json => {
            setProducts(json);
            setCurrentProducts(json.slice(0, 10 * page));
            setIsLoading(false);
         })
     }, [])

     const renderNextPage = useCallback(() => {
        setIsLoading(true);
        if (page < 10) {
          setCurrentProducts(products.slice(0, 10 * (page + 1)));
          setPage(page + 1);
        }
        setIsLoading(false);
      }, [page, products]);

      useEffect(() => {
        if (bottom.current) {
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                console.log(entries);
                console.log(currentProducts);
                renderNextPage();
              }
            },
            {
              threshold: 1,
            }
          );
          observer.observe(bottom.current);
          return () => observer.disconnect();
        }
      }, [renderNextPage]);

    return(
        <div className="List">
            {currentProducts.map((product) => {
                return <Product key={product.id}
                title={product.title} 
                brand_name={product.brand_name} 
                image_url={product.image_url} 
                brand_image_url={product.brand_image_url}>
                </Product>
            })}
            {isLoading ? 'loading...' : <div ref={bottom}></div>}
        </div>
    )

}
