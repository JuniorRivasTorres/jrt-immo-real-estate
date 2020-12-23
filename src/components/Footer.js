import React from "react"
import  './Footer.css'
import SocialLinks from "../constants/socialLinks"
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {IoMdArrowRoundForward} from 'react-icons/io'
import {Button} from './Button'


const Section = styled.section`
    background: #000d1a;
    color: #fff;
    width: 100%;
    min-height: 600px;
    padding: 3rem;
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`;

const FooterTop = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;

    }    
    `;


const Quote = styled.div`
    flex: 1;
    padding: 2rem 0rem;

    h3 {
        font-size: clamp(2rem, 8vw, 5rem)
    }
`
const FooterInfo = styled.div`
    padding: 2rem;
    line-height: 3;
    display: flex;
    flex-direction: column;

    a {
        color: #fff;
        text-decoration: none;
    }
    @media screen and (max-width: 768px) {
        padding: 1rem 0rem;
    }
    `
const Contact = styled.div``


const Footer = () => {
  return (
      <Section>
          <Container>
            <FooterTop>
                <Quote>
                    <h3>Lets find <br />your dream home</h3>
                </Quote>
                <FooterInfo>
                    <h4>Contactez-moi</h4>
                    <Link to='/homes'>FAQ</Link>
                    <Link to='/homes'>Support</Link>
                    <Link to='/homes'>Questions</Link>
                </FooterInfo>
                <FooterInfo>
                    <h4>Offices</h4>
                    <Link to='/homes'>United States</Link>
                    <Link to='/homes'>Europe</Link>
                    <Link to='/homes'>Canada</Link>
                </FooterInfo>
        </FooterTop>  
        <Contact>
            <Button to='/homes'>
                Lets' talk <IoMdArrowRoundForward/>
            </Button>
        </Contact>
        <footer className="footer">
            <div>
                <SocialLinks styleClass="footer-links">
                </SocialLinks>
                <h4>copyright&copy;{new Date().getFullYear()}
                <span>JRT</span> tous droits réservé
                </h4>
            </div>
        </footer>
    </Container>
   
  </Section>
 
  )
}
export default Footer

