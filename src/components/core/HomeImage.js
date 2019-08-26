import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

const Img = styled.img`
    width: 100%;
    height: auto;
    max-width: 100%;
    padding: 12px;
`
const TransformImg = styled.div`
      transform: matrix(1, 0, 0, 1, 0, 0);
`

export default class HomeImage extends Component {
    render() {
        return (
            <div className="row">
                <Img src="./images/home1.jpg"></Img>
            </div>
        )
    }
}
