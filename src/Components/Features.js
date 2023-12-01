import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { ShoppingBag,Globe, PieChart, Heart } from 'react-feather';

const StyledFeatures = styled('div')({
  padding: '120px 0 100px 0',
});

const StyledTitle = styled(Typography)({
  fontSize: '45px',
  color: '#211F8D',
  fontWeight: '600',
  textAlign: 'center',
  marginBottom: '30px',
});

const StyledSubtitle = styled(Typography)({
    fontSize: '24px',
    color: '#415EB6',
    textAlign: 'center',
    marginBottom: '100px',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
});

const StyledCard = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  background: 'white', 
  padding: '30px', 
  borderRadius: '11px', 
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1)', 
});

const StyledIcon = styled('div')({
  marginLeft: '20px',
  marginRight: '35px',
  marginTop: '-15px',
});

const StyledCardContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  color: '#525252',
});

const StyledCardTitle = styled(Typography)({
  fontSize: '26px',
  fontWeight: '600',
  marginBottom: '10px',
});

const StyledCardSubtitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: '400',
  width: '90%',
});

const Features = () => {
  return (
    <StyledFeatures>
      <Container>
        <StyledTitle variant="h2">Precision, insightful, and actionable data</StyledTitle>
        <StyledSubtitle variant="body1">
          Mindtrack enables efficient and precise sentiment capture, improving both operational efficiency and user experience.
        </StyledSubtitle>

        <Grid container spacing={3}>
          {/* Card 1 */}
          <Grid item xs={12} md={6}>
            <StyledCard>
            <StyledIcon>
                <ShoppingBag color="#525252" stroke-width= "1" size={65} />
              </StyledIcon>
              <StyledCardContent>
                <StyledCardTitle variant="h3">Empower Choices</StyledCardTitle>
                <StyledCardSubtitle variant="body2">Enable consumer decisions with sentiment analysis for informed choices.</StyledCardSubtitle>
              </StyledCardContent>
            </StyledCard>
          </Grid>


          {/* Card 2 */}
          <Grid item xs={12} md={6}>
            <StyledCard>
            <StyledIcon>
                <Globe color="#525252" stroke-width= "1" size={65} />
              </StyledIcon>
              <StyledCardContent>
                <StyledCardTitle variant="h3">Enhance Reputation</StyledCardTitle>
                <StyledCardSubtitle variant="body2">Gain valuable online reputation insights for organizational understanding</StyledCardSubtitle>
              </StyledCardContent>
            </StyledCard>
          </Grid>


          {/* Card 3 */}
          <Grid item xs={12} md={6}>
            <StyledCard>
            <StyledIcon>
                <PieChart color="#525252" stroke-width= "1" size={65} />
              </StyledIcon>
              <StyledCardContent>
                <StyledCardTitle variant="h3">Maximize Marketing</StyledCardTitle>
                <StyledCardSubtitle variant="body2">Optimize marketing impact with tailored insights for strategic efficiency.</StyledCardSubtitle>
              </StyledCardContent>
            </StyledCard>
          </Grid>


          {/* Card 4 */}
          <Grid item xs={12} md={6}>
            <StyledCard>
            <StyledIcon>
                <Heart color="#525252" stroke-width= "1" size={60} />
              </StyledIcon>
              <StyledCardContent>
                <StyledCardTitle variant="h3">Mind Wellness</StyledCardTitle>
                <StyledCardSubtitle variant="body2">Provide crisis helplines and contribute to NLP progress for mental health.</StyledCardSubtitle>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </StyledFeatures>
  );
};

export default Features;
