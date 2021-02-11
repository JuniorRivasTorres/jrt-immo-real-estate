import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#000000CC' : '#CD853F')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({round}) => (round ? '50px' : 'none')};
    font-family: Roboto Slab, sans-serif;

    &:hover {
        background: ${({ primary }) => (primary ?  '#CD853F' : '#F26A2E')};
        transform: translateY(-2px);

    }
    `