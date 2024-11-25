import React, { useState } from "react";
import { Slider, Button, Box, Typography, Link } from "@mui/material";
import PropTypes from "prop-types";

const NegotiationCard = ({ selectedVendor, onClose }) => {
  const initialPrice = Number(
    selectedVendor?.price?.replace(/[₹,]/g, "") || 0
  );

  const [negotiatedPrice, setNegotiatedPrice] = useState(initialPrice);

  const handleSliderChange = (event, newValue) => {
    setNegotiatedPrice(newValue);
  };

  if (!selectedVendor) {
    return null; // Handle case where selectedVendor is not provided
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        bgcolor: "background.paper",
        borderRadius: "8px",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Price Negotiation
      </Typography>
      <Typography variant="body1">
        Current Price: <strong>{selectedVendor.price}</strong>
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Negotiated Price: <strong>₹{negotiatedPrice.toLocaleString()}</strong>
      </Typography>
      <Slider
        value={negotiatedPrice}
        min={0.8 * initialPrice}
        max={1.2 * initialPrice}
        step={100}
        onChange={handleSliderChange}
        aria-labelledby="negotiation-slider"
        sx={{ mt: 2 }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert(`Negotiation Confirmed at ₹${negotiatedPrice.toLocaleString()}`)}
        >
          Negotiation Contract
        </Button>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Close
        </Button>
      </Box>
      <Typography sx={{ mt: 3, textAlign: "center" }}>
        <Link
          href="https://docs.google.com/document/d/1hrFAx6PLsgVjj7A5FMStQiaFuG7sOUxlomJ0GBso5P0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Related Document
        </Link>
      </Typography>
    </Box>
  );
};

NegotiationCard.propTypes = {
  selectedVendor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    deliveryDays: PropTypes.number.isRequired,
    success: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NegotiationCard;
