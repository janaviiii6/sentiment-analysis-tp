import React from 'react';
import { Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledSection = styled('div')({
  padding: '100px 0', 
  color: '#ffffff', 
  paddingLeft: '185px', 
});

const StyledTitle = styled(Typography)({
    fontSize: '48px',
    fontWeight: '600',
    marginBottom: '20px',
    letterSpacing: '1px',
    paddingTop: '70px',
    width: '60%',
});

const StyledUnderline = styled('hr')({
    width: '150px',
    height: '5px',
    background: 'white',
    marginBottom: '80px',
  });

const StyledDescription = styled(Typography)({
    fontSize: '28px',
    lineHeight: '1.9',
});

const StyledImage = styled('img')({
    marginLeft: '20px',
    width: '90%',
    height: '110vh',
});

const SentimentWorkSection = () => {
  return (
    <StyledSection>
      <Grid container spacing={3}>
        {/* Text Column */}
        <Grid item xs={12} md={6}>
          <div>
            <StyledTitle variant="h2">How Does Sentiment Analysis Work?</StyledTitle>
            <StyledUnderline style={{ marginLeft: '0' }} />
            <StyledDescription variant="body1">
            A powerful blend of cutting-edge algorithms and advanced machine-learning models is at the core of this sentiment analysis process. 
            The platform excels at handling diverse textual data from a variety of sources, such as YouTube comments, news articles, and product reviews, providing real-time and comprehensive insights via meticulous categorization tailored to each context.
            <div>
                <p style={{ marginTop: '20px'}}>The platform features user-friendly interfaces and organizational-specific features to ensure a seamless experience. </p>
                <p style={{ marginTop: '20px'}}>Data protection is a priority, and dynamic visualizations aid in understanding sentiments. 
                This adaptable and powerful approach elevates sentiment analysis to the status of a valuable business tool, providing meaningful and actionable insights.           </p>
            </div>
 </StyledDescription>
          </div>
        </Grid>

        {/* Image Column */}
        <Grid item xs={12} md={6}>
          <StyledImage
            src="/images/image of sentiment analysis.png" // Replace with your image path
            alt="Sentiment Analysis"
          />
        </Grid>
      </Grid>
    </StyledSection>
  );
};

export default SentimentWorkSection;
