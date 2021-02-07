import React from "react"
import SocialLinks from "../constants/socialLinks"
import Video from "../videos/video.mp4"
import styled from "styled-components"
import { Link } from "react-router-dom"
import './Herone.css'

const Herone = () => {

    return (
        <heroneContainer>
          <HeroneBg>
            <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
          </HeroneBg>
         <header className="herone">
          <div className="section-center herone-center">
            <article className="herone-info">
              <div>
                <div className="underline"></div>
                <h1> Junior Rivas-Torres</h1>
                <h4>freelance web et mobile</h4>
                <Link to='/contact' className="btn">
                  contactez-moi
                </Link>
                <SocialLinks/>
              </div>
            </article>
           
          </div>
        </header>
        </heroneContainer>
        )
      }
      
      export default Herone
      
      const HeroneBg = styled.div`
       position: absolute;
       top: 0;
       bottom: 0;
       right: 0;
       left: 0;
       width: 100%;
       height: 100%100vh;
       overflow: hidden;
       `
       const VideoBg = styled.video`
       width: 100%;
       height: 100%;
       -o-object-fit: cover;
       object-fit: cover;
       `