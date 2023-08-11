import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcumb(props) {
  return (
    <div class="breadcumb-wrapper " data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg">
        <div class="container z-index-common">
            <div class="breadcumb-content">
                <h1 class="breadcumb-title">{props.label}</h1>
                <div class="breadcumb-menu-wrap">
                    <ul class="breadcumb-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">contact us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
