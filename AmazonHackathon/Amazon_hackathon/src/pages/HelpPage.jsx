import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TextField, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Button, 
  Box,
  Container,
  Grid,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatIcon from '@mui/icons-material/Chat';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How to start exporting?",
      answer: "Create an account, complete your business profile, and use our AI-powered carrier matching to begin."
    },
    {
      question: "Payment security?", 
      answer: "We use blockchain-backed smart contracts to ensure secure transactions."
    },
    {
      question: "Language support?",
      answer: "Real-time translation for multiple languages is available."
    }
  ];

  const supportChannels = [
    {
      icon: <ChatIcon />,
      title: 'Live Chat',
      description: 'Instant support from our AI assistant'
    },
    {
      icon: <HelpOutlineIcon />,
      title: 'Email Support',
      description: 'support@amaztrade.com'
    }
  ];

  return (
    <Container maxWidth="md" sx={{ position: 'relative' }}>
        <div className='absolute left-0 top-0 -translate-x-[370px] -translate-y-[40px]'>

      <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
        <Link to="/Dashboard">
          <IconButton 
            color="primary" 
            sx={{ 
                backgroundColor: 'blue', 
                color: 'white',
                '&:hover': { 
                    backgroundColor: 'darkblue' 
              }
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Link>
      </Box>
                    </div>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          AmazTrade Help Center
        </Typography>

        <TextField 
          fullWidth 
          variant="outlined" 
          placeholder="Search help topics" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Typography variant="h6" sx={{ mb: 2 }}>Frequently Asked Questions</Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>Support Channels</Typography>
        <Grid container spacing={2}>
          {supportChannels.map((channel, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box 
                sx={{ 
                  border: 1, 
                  borderColor: 'grey.300', 
                  p: 2, 
                  textAlign: 'center',
                  borderRadius: 2 
                }}
              >
                {channel.icon}
                <Typography variant="h6">{channel.title}</Typography>
                <Typography>{channel.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button 
            variant="contained" 
            color="primary"
          >
            Submit Feedback
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HelpPage;