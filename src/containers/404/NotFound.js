import React from 'react'
import Container from '@components/UI/Container'
import styled from 'styled-components'
import pikachuImg from '@assets/pokemon_404.svg'
import { Link } from 'react-router-dom'
import device from '@utils/responsive_helper'

const ContentWrapper = styled.div`
    background: white;
    height: 500px;
    padding: 20px;
    border-radius: 3px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .not-found {
        font-size: 8em;
        @media only ${device.mobile} {
            font-size: 4em;
        }
    }
    p {
        font-size: 18px;
        @media only screen and (max-width: 600px) {
            font-size: 15px;
        }
    }
    .image {
        display: flex;
        flex-direction: row;
        h2 {
            margin: 0;
            font-size: 10em;
            @media only screen and (max-width: 600px) {
                font-size: 5em;
            }
        }
        img {
            width: 90px;
            @media only screen and (max-width: 600px) {
                width: 60px
            }
        }
    }
`
const NotFound = () => (
  <Container>
    <ContentWrapper className="not-found-container">
      <div className="image">
        <h2>4</h2>
        <img src={pikachuImg} alt="pikachu" />
        <h2>4</h2>
      </div>
      <h2 className="not-found">Pika Pika :(</h2>
      <p>
        The page you are requesting is not found. Return to
        <Link to="/">Home</Link>
        ?
      </p>
    </ContentWrapper>
  </Container>
)

export default NotFound
