import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import React, { Component } from 'react'

const NavbarDiv = styled.div`
    color: #fb9fa4;
    position: fixed;
    pointer-events: all;
    line-height: 1.2;
    z-index: 2;
`

const Textdiv = styled.div`
    padding: 3.75rem;
    text-align: center;
    margin: 0.5rem;
    font-size: 0.75rem;
`

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavbarDiv className="container">
                    <Textdiv>
                    <div>Online boutique</div>
                    </Textdiv>
                </NavbarDiv>
            </div>
        )
    }
}
