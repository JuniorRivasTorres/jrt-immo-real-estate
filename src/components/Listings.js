import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {IoMdArrowRoundForward} from 'react-icons/io'
import HomeOne from '../images/house.jpg'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 10rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div``;
const Heading = styled.div``;
const InfoRow = styled.div``;
const InfoWrap = styled.div``;
const Image = styled.img``;
const InfoLink = styled(Link)``;
const Arrow = styled(IoMdArrowRoundForward)``;



const Listings = () => {
    return (
        <Section>
            <Container>
                <Heading>

                </Heading>
                <InfoRow>   
                    <InfoWrap>
                        <Image src={HomeOne} alt='home' />
                        <h2>8 Bed 10 bath House in Venice, California</h2>
                        <InfoLink to='/home'>
                            <p>View Details</p>
                            <Arrow/>
                        </InfoLink>
                    </InfoWrap>
                    <InfoWrap>
                        <Image src='HomeTwo' alt='home' />
                        <h2>4 Bed 2 bath House in Venice, CMiami</h2>
                        <InfoLink to='/homes'>
                            <p>View Details</p>
                            <Arrow/>
                        </InfoLink>
                    </InfoWrap>
                </InfoRow>
            </Container>
        </Section>
    );
};

export default Listings
