import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Icon } from 'semantic-ui-react'
import { PokemonCard as NavigationCard } from '../Card/PokemonCard'

const CardBody = styled.div`
    width: 100%;
    height: 100%;
    border: 2px dashed #E5CEDC;
    transition: all .2s ease-in-out;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 40px 0;
    h2 {
        margin-top: 10px;
    }
    color: #E5CEDC;
    text-transform: uppercase;
    &:hover{
        border-color: #EF5350;
        color: #EF5350;
    }

    &.disabled {
        cursor: auto;
        &:hover {
            color: #E5CEDC;
            border-color: #E5CEDC;
        }
    }
`

const NavCard = ({ type, functionality, disabled }) => (
  <NavigationCard onClick={functionality} shadowed={!disabled}>
    <CardBody className={disabled ? 'disabled' : ''}>
      {
                    type === 'next' ? (
                      <>
                        <Icon className="card-icon" name="arrow right" size="huge" />
                        <br />
                        <h2>Next Pokémons</h2>
                      </>
                    )
                      : (
                        <>
                          <Icon className="card-icon" name="arrow left" size="huge" />
                          <br />
                          <h2>Prev Pokémons</h2>
                        </>
                      )
                }
    </CardBody>
  </NavigationCard>
)
NavCard.defaultProps = {
  disabled: false
}

NavCard.propTypes = {
  type: PropTypes.string.isRequired,
  functionality: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}
export default NavCard
