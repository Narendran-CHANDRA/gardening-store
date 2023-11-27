import React from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer = styled('footer')({
  backgroundColor: '#222',
  color: '#fff',
  padding: '50px 0',
  maxWidth: '1200px', // Set the maximum width
  margin: 'auto', // Center the container
});

const FooterContent = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const FooterGrid = styled(Grid)({
  marginTop: '20px',
});

const FooterLink = styled('a')({
  color: '#fff',
  textDecoration: 'none',
  margin: '0 15px',
  '&:hover': {
    color: '#3498db', // Change color on hover
    textDecoration: 'underline',
  },
});

const SocialIcons = styled('div')({
  marginTop: '20px',
});

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  margin: '0 10px',
  '&:hover': {
    color: '#3498db', // Change color on hover
    backgroundColor: 'transparent',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Typography variant="h5" gutterBottom>
          Your Company
        </Typography>
        <FooterGrid container justifyContent="center">
          <Grid item>
            <FooterLink href="/">Home</FooterLink>
          </Grid>
          <Grid item>
            <FooterLink href="/about">About</FooterLink>
          </Grid>
          <Grid item>
            <FooterLink href="/services">Services</FooterLink>
          </Grid>
          <Grid item>
            <FooterLink href="/contact">Contact</FooterLink>
          </Grid>
        </FooterGrid>
        <Typography variant="body2" gutterBottom>
          © 2023 Your Company. All rights reserved.
        </Typography>
        <SocialIcons>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon>
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
