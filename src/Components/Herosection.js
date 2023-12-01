import React from 'react';
import { Typography, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const StyledHeroSection = styled('div')(({ theme }) => ({
  paddingTop: '80px',
  paddingLeft: '112px',
  color: 'white',
  minHeight: '70vh',
  overflow: 'hidden',
}));

const StyledHeroContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '120px 10px 0 20px',
  
});

const StyledHeroHeading = styled(Typography)({
  fontSize: '80px',
  fontWeight: '600',
  marginBottom: '30px', 
  paddingTop: '90px',
  letterSpacing: '1px',
});

const StyledHeroParagraph = styled(Typography)({
  fontSize: '26px',
  fontWeight: '300',
  textAlign: 'justify',
  width: '78%',
  lineHeight: '1.6',

  '@media (max-width: 768px)': {
    width: '100%', 
    marginLeft: '0', 
  },
});

const StyledHeroImage = styled('img')({
  width: '120%',
  height: 'auto',
  marginLeft: '-40%',
});



const HeroSection = () => {
  const theme = useTheme();

  return (
    <StyledHeroSection theme={theme}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <StyledHeroContent>
            <StyledHeroHeading variant="h1">Sentiment Analysis Microservice</StyledHeroHeading>
            <StyledHeroParagraph>
            Explore the power of Mindtrack's sentiment analysis microservice, providing granular insights with precision. Enhance decision-making and elevate your understanding of sentiments in various contexts.
  </StyledHeroParagraph>
          </StyledHeroContent>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledHeroImage
            src="/images/image1.png"
            alt="Sentiment Analysis"
          />
        </Grid>
      </Grid>
    </StyledHeroSection>
  
  );
};

export default HeroSection;
