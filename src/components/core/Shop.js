import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

const ShopDiv = styled.div`
    position: relative;
    border-bottom-style: solid;
    border-color: #fb9fa4;
    border-width: 1px;
    padding-bottom: 2px;
    margin-bottom: 5px;
    width: 35px;
    -webkit-transition: width 1s;
    &:hover{
        width: 40px;
    }
`

const ShopLink = styled.a`
    
    color: #fb9fa4;
    font-family: 'Lato', sans-serif;
    text-align: right;
    &:hover{
        color: #fb9fa4;
        text-decoration: none;
    }  
`

export default class Shop extends Component {
    render() {
        return (
            <div className="row">
                <ShopDiv className="offset-md-11">
                    <ShopLink href="#">shop</ShopLink>
                </ShopDiv>
            </div>
        )
    }
}
