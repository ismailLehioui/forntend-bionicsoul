import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import image from './black.jpg';

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f5f5f5;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
  margin-right: 30px;
`;

const ContentContainer = styled.div`
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
            <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                <ImageContainer>
                    <img src={image} alt="Bionic Prosthetic" style={{ width: '100%' }} />
                </ImageContainer>
            </motion.div>
            <motion.div initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                <ContentContainer>
                    <Title>About Us</Title>
                    <Subtitle>Company Description</Subtitle>
                    <Description>
                        Bionic Soul is a pioneering startup dedicated to developing and manufacturing advanced bionic prosthetics that enhance the mobility and quality of life for amputees. Our cutting-edge products, including BioniLeg, ErgoLeg, and Bionic Arm, leverage the latest in biomechanical engineering and user-centered design to provide high-quality, affordable, and customizable solutions. We are committed to achieving both commercial success and making a significant social impact by making advanced prosthetic technology accessible to all.
                    </Description>
                </ContentContainer>
            </motion.div>
        </AboutContainer>
    );
};

export default About;
