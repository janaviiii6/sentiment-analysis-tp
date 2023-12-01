import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledSection = styled('div')({
  color: 'white',
  paddingTop: '50px',
  paddingBottom: '100px',
  paddingLeft: '185px', 
});

const StyledTitle = styled(Typography)({
  fontSize: '48px',
  fontWeight: '600',
  marginBottom: '20px',
  letterSpacing: '1px',
});

const StyledUnderline = styled('hr')({
  width: '150px',
  height: '5px',
  background: 'white',
  marginBottom: '30px',
});

const StyledParagraph = styled(Typography)({
  fontSize: '28px',
  // textAlign: 'justify',
  lineHeight: '1.9',
  width: '90%',
});

const StyledImage = styled('img')({
  marginLeft: '-38px',
  height: '150px',
  marginBottom: '10px',
});

const SentimentInfo = () => {
  return (
    <StyledSection>
      <StyledImage src="/images/sentimentinfo.png" alt="Image Alt Text" />
      <StyledTitle variant="h2">What is Sentiment Analysis?</StyledTitle>
      <StyledUnderline style={{ marginLeft: '0' }} />
      <StyledParagraph>
      Sentiment analysis, powered by natural language processing, deciphers emotions in text, categorizing sentiments into positive, negative, or neutral. 
      This provides businesses with real-time insights, enabling swift adaptation of strategies to align with customer perceptions and market trends. 
      It serves as an early warning system, helping detect issues, and contributes to effective crisis communication, fostering continuous improvement in products, services, and communication strategies over time.      
      </StyledParagraph>
    </StyledSection>
  );
};

export default SentimentInfo;
