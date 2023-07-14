import './Product.css'

export default function Product({title, image_url, brand_image_url, brand_name}) {
    //API Call (네트워크요청) -> useEffect

    // useEffect(() => {
    // })

    return(
        <div className="product-container">
            <img src={image_url === null ? brand_image_url : image_url} alt='product picture' className="picture" />
            <h3>{title === null ? brand_name : title}</h3>
            <span className="product-detail">product detail</span>
        </div>
    )

 

    
}