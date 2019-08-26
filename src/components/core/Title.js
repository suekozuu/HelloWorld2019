import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

const TitleText = styled.header`
      font-size: 9.00em;
      color: #fb9fa4;
      display: block;
      line-height: 0.8;
      font-family: 'Lato', sans-serif;
      padding-top: 9.375rem;
`

export default class Title extends Component {
    render() {
        return (
            <div className="row">
                <div>
                    <TitleText>
                        PRODUCT<br/>DESIGN
                    </TitleText>
                </div>
            </div>
        )
    }
}
