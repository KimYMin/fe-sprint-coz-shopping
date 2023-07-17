import React from "react"
import { useState } from "react"
import './Listpage.css'
import All from "./tab/All"
import ProductList from "./tab/Productlist"
import CategoryList from "./tab/Categorylist"
import ExhibitionList from "./tab/Exhibitionlist"
import BrandList from "./tab/Brandlist"

export default function Listpage() {

    const [currentTab, setCurrentTab] = useState(0)

    

    const menu = [
        {name : '전체', content : 'all', icon:'allmenu.png'},
        {name : '상품', content : 'product', icon:'productmenu.png'},
        {name : '카테고리', content : 'category', icon:'categorymenu.png'},
        {name : '기획전', content : 'Exhibition', icon:'Exhibitionmenu.png'},
        {name : '브랜드', content : 'brand', icon:'brandmenu.png'},
    ]

    const selectMenuHandler = (index) => {
        setCurrentTab(index)
    }

    return(
        <div className="listdiv">
            <ul className="listul">
                {menu.map((el, index)=>{
                    return (
                        <li className="listpagemenu">
                            <img 
                            key={index}
                            src={el.icon}
                            alt={el.content}
                            onClick={() => selectMenuHandler(index)}/>
                            <p className="listpagep">{el.name}</p>
                        </li>
                    )
                })}
            </ul>
            
            {currentTab === 0 ? <All/> : 
            currentTab === 1 ? <ProductList/> : 
            currentTab === 2 ? <CategoryList/> : 
            currentTab === 3 ? <ExhibitionList/> : <BrandList/>}
        </div>
    )
}
