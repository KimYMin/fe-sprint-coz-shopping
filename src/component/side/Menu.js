import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'


export default function Menu(){

    return (
        <nav className="menu">
            <ul>
              <li>
                <p>김용민님, 안녕하세요!</p>
              </li>
              <li>
                <Link to="/listpage">
                    <img src='listpage.png' alt='listpage'/>상품리스트
                </Link>
              </li>
              <li>
                <Link to="/bookmarkpage">
                    <img src='bookmark.png' alt='bookmark'/>북마크페이지
                </Link>
              </li>
            </ul>
        </nav>
        
    );

}