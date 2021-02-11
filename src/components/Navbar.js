import React, {useState, useEffect} from 'react'
import styled, {css} from 'styled-components/macro'
import { Link, useLocation } from 'react-router-dom'
import {menuData} from '../data/MenuData'
import { Button } from './Button';
import { GoThreeBars } from 'react-icons/go';
import  jrt from '../images/jrt.png'


const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 3rem 4rem;
    z-index: 100;
    position: fixed;
    width: 100%;

    @media screen and (max-width: 768px) {
    padding: 2rem 4rem;
    }
 
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1.7;
    cursor: pointer;
    text-decoration: none;
    font: Montserrat, sans-serif;
    margin: 0px 10px;
`


const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;  
    
    img {
        width: 110px;
        height: 95px;
        object-fit: cover;
        margin-top: 15px;

        @media screen and (max-width: 768px) {
          
           margin-left: -75px;
           width: 95px;
           height: 80px;
           position: absolute;
        }

    }
   
`;

const MenuBars = styled(GoThreeBars)`
    display: none;
    margin-top: 10px;
    
    

    @media screen and (max-width: 768px) {
        display: block;
        color: white;
        background-size: contain;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px; 
   

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navbar = ({toggle}) => {
    const [navbar, setNavbar] = useState(false)
    const location = useLocation()

    const changeBackground = () => {
        if(window.pageYOffset >= 60) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect (() => {
        const watchSCroll = () => {
            window.addEventListener('scroll', changeBackground)
        }

        watchSCroll()
            return () => {
            window.removeEventListener('scroll', changeBackground)
    }
    }, [])

    let style = {
        backgroundColor: navbar || location.pathname !== "/" ? '#000000CC' : 'transparent',
         transition: '0.4s'
    }

    return (
        <Nav style={style}>
            <Logo to='/'>
               <img src={jrt} alt="jrt"/></Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary='true'>Contactez-moi</Button>
            </NavBtn>
        </Nav>
    );
};

export default Navbar

