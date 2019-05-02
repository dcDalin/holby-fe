import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: relative;
  height: 300px;
  background-color: #02537f;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #ffffff;
  font-family: 'Poiret One', cursive;
  padding: 30px;
  text-align: center;
`;

const FooterSection = styled.div``;

const SectionHeaders = styled.div`
  position: relative;
  font-size: 17px;
  margin-top: 20px;
  margin-bottom: 60px;
  border-bottom: 1px solid #607d8b;
  width: 200px;
  left: 50%;
  transform: translate(-50%, 0%);
  font-family: 'Raleway', sans-serif;
`;

const SectionLink = styled.div`
  font-size: 14px;
  margin-top: 30px;
  font-family: 'Raleway', sans-serif;
`;

const Footer = () => (
  <FooterContainer>
    <FooterSection>
      <SectionHeaders>Explore</SectionHeaders>
      <SectionLink>FAQs</SectionLink>
      <SectionLink>About Us</SectionLink>
      <SectionLink>Book Training</SectionLink>
    </FooterSection>
    <FooterSection>
      <SectionHeaders>Contact Info</SectionHeaders>
      <SectionLink>
        Address:<font color="#ff8a80"> client offices, opposite road x.</font>
      </SectionLink>
      <SectionLink>
        Email: <font color="#ff8a80">johndoe@gmail.com </font>
      </SectionLink>
      <SectionLink>
        Telephone Number: <font color="#ff8a80"> +123 45665 54345 </font>
      </SectionLink>
    </FooterSection>
    <FooterSection>
      <SectionHeaders>Send Us A Message</SectionHeaders>
      <SectionLink>FAQs</SectionLink>
      <SectionLink>About Us</SectionLink>
      <SectionLink>Book Training</SectionLink>
    </FooterSection>
  </FooterContainer>
);

export default Footer;
