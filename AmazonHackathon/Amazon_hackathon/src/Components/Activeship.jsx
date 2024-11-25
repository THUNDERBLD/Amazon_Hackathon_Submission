import React, { useState, useRef } from 'react';
import { Button, Popper, Fade, Paper, Typography } from '@mui/material';

export default function Aciveship() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <Button
        ref={anchorRef}
        variant="contained"
        onClick={handleToggle}
        sx={{
          fontSize: '1rem',
          padding: '0.75rem 2rem',
          backgroundColor: 'white',
          color: '#333',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#f1f1f1',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        View Active Shipments
      </Button>

      <Popper open={open} anchorEl={anchorRef.current} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ p: 2 }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                Active Shipments
              </Typography>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'no repeat',
                  gap: '1rem',
                  marginTop: '-30px',
                }}
              >
                <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Canada Shipment</div>
                <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>USA Shipment</div>
                <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Africa Shipment</div>
                <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Brazil Shipment</div>
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
