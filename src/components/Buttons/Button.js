import React from 'react'
import styled from 'styled-components'


function Button({name, icon, onclick, bg, bPad, color, bRad}) {
  return (
    <ButtonStyled style ={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color

    }} onClick={onclick}>
        {icon}
        {name}

    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    user-select: none;
    transition: all .4s ease-in-out;

`;

export default Button