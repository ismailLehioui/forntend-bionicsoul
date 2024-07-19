import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import image from './black.jpg';

// Styles pour les conteneurs
const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f5f5f5;
`;

// Styles pour l'image avec effet d'animation au survol
const ImageContainer = styled(motion.div)`
  flex: 1;
  max-width: 400px;
  margin-right: 30px;
  overflow: hidden; /* Assure que l'image ne dépasse pas son conteneur */
  
  img {
    width: 100%;
    transition: transform 0.3s ease; /* Transition pour l'effet de zoom */
  }
  
  &:hover img {
    transform: scale(1.1); /* Zoom de l'image au survol */
  }
`;

// Styles pour le contenu avec animation au survol
const ContentContainer = styled(motion.div)`
  flex: 2;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #555;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #777;
  line-height: 1.5;
`;

const About = () => {
    return (
        <AboutContainer>
            <ImageContainer 
                initial={{ scale: 1 }} 
                whileHover={{ scale: 1.1 }} 
                transition={{ duration: 0.3 }}
            >
                <img src={image} alt="Bionic Prosthetic" />
            </ImageContainer>
            <ContentContainer 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05 }} // Animation au survol pour le texte
            >
                <Title>About Us</Title>
                <Subtitle>Company Description</Subtitle>
                <Description>
                    Bionic Soul is a pioneering startup dedicated to developing and manufacturing advanced bionic prosthetics that enhance the mobility and quality of life for amputees. Our cutting-edge products, including BioniLeg, ErgoLeg, and Bionic Arm, leverage the latest in biomechanical engineering and user-centered design to provide high-quality, affordable, and customizable solutions. We are committed to achieving both commercial success and making a significant social impact by making advanced prosthetic technology accessible to all.
                </Description>
            </ContentContainer>
        </AboutContainer>
    );
};

export default About;
