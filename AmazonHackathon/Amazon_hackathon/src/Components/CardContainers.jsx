import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
``

function CardContainer() {
  const [selectedCard, setSelectedCard] = useState(null); // State to hold the selected card details
  const [cardData, setCardData] = useState([]); // State for card data fetched from backend
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false); // State to manage payment dialog visibility

  // Simulating backend data fetch
  useEffect(() => {
    // Mocked backend data
    const fetchedData = [
      {
        id: 1,
        orderNumber: "ORD-20241124-X7K4Q9",
        status: "Unpaid",
        orderDate: "2024-11-20",
        totalAmount: "₹1200000.00",
        items: [
          { name: "Item 1", amount: "₹600000.00" },
          { name: "Item 2", amount: "₹545060.00" },
        ],
        taxes: "₹54940.00",
      },
      {
        id: 2,
        orderNumber: "ORD-20241124-Z8J5M2",
        status: "Unpaid",
        orderDate: "2024-11-19",
        totalAmount: "₹2500000.00",
        items: [
          { name: "Item A", amount: "₹1000000.00" },
          { name: "Item B", amount: "₹1350000.00" },
        ],
        taxes: "₹150000.00",
      },
      {
        id: 3,
        orderNumber: "ORD-20241124-L4X9T7",
        status: "Paid",
        orderDate: "2024-11-18",
        totalAmount: "₹600000.00",
        items: [
          { name: "Item X", amount: "₹400000.00" },
          { name: "Item Y", amount: "₹187000.00" },
        ],
        taxes: "₹1300000.00",
      },
    ];
    setCardData(fetchedData); // Update state with fetched data
  }, []);

  // Handle "Pay Now" button click
  const handlePaymentClick = () => {
    setPaymentDialogOpen(true); // Open the payment dialog
  };

  // Handle closing the payment dialog
  const handlePaymentClose = () => {
    setPaymentDialogOpen(false); // Close the payment dialog
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={2}>
        {/* Card 1 - Master (Left Half) */}
        <Grid item xs={12} md={6}>
          <Card sx={{ maxHeight: "400px", overflowY: "auto" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                My Orders
              </Typography>
              {cardData.map((card) => (
                <Card
                  key={card.id}
                  sx={{
                    marginBottom: 2,
                    cursor: "pointer",
                    backgroundColor: selectedCard?.id === card.id ? "#f0f0f0" : "white",
                  }}
                  onClick={() => setSelectedCard(card)}
                >
                  <CardContent>
                    <Typography variant="subtitle1">
                      Order Number: {card.orderNumber}
                    </Typography>
                    <Typography variant="body2" sx={{ color: card.status === "Paid" ? "green" : "red" }}>
                      Status: {card.status}
                    </Typography>
                    <Typography variant="body2">Order Date: {card.orderDate}</Typography>
                    <Typography variant="body2">Total: {card.totalAmount}</Typography>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 - Detail (Right Half) */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              {selectedCard ? (
                <>
                  {/* Subcard Details */}
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Order Number: {selectedCard.orderNumber}
                  </Typography>
                  <Typography variant="body2">
                    Status:{" "}
                    <span style={{ color: selectedCard.status === "Paid" ? "green" : "red" }}>
                      {selectedCard.status}
                    </span>
                  </Typography>
                  <Typography variant="body2">Order Date: {selectedCard.orderDate}</Typography>
                  <Typography variant="body2">Total: {selectedCard.totalAmount}</Typography>

                  {/* Order Items */}
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    Order Items:
                  </Typography>
                  {selectedCard.items.map((item, index) => (
                    <Typography key={index} variant="body2">
                      {item.name}: {item.amount}
                    </Typography>
                  ))}

                  {/* Total Taxes and Amount */}
                  <Typography variant="body2" sx={{ marginTop: 2 }}>
                    <strong>Total Taxes:</strong> {selectedCard.taxes}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Total Amount:</strong> {selectedCard.totalAmount}
                  </Typography>

                  {/* Pay Button */}
                  {selectedCard.status === "Unpaid" && (
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: 2 }}
                      onClick={handlePaymentClick}
                    >
                      Pay Now
                    </Button>
                  )}
                </>
              ) : (
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Select an order from the left to view details here.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Payment Dialog */}
<Dialog open={paymentDialogOpen} onClose={handlePaymentClose}>
  <DialogTitle>Payment Gateway</DialogTitle>
  <DialogContent>
    <Typography variant="body1" sx={{ marginBottom: 2 }}>
      You are about to pay for Order: {selectedCard?.orderNumber}
    </Typography>
    <Typography variant="body2" sx={{ marginBottom: 2 }}>
      Total Amount: {selectedCard?.totalAmount}
    </Typography>
    <Typography variant="body2" sx={{ color: "gray", marginBottom: 2 }}>
      Please fill in your payment details below to proceed.
    </Typography>

    {/* Payment Form */}
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Card Number"
        variant="outlined"
        fullWidth
        placeholder="1234 5678 9012 3456"
      />
      <TextField
        label="Cardholder Name"
        variant="outlined"
        fullWidth
        placeholder="John Doe"
      />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="Expiration Date"
          variant="outlined"
          placeholder="MM/YY"
          fullWidth
        />
        <TextField
          label="CVV"
          variant="outlined"
          placeholder="123"
          type="password"
          fullWidth
        />
      </Box>
    </Box>
  </DialogContent>
  <DialogActions>
    <Button onClick={handlePaymentClose} color="secondary">
      Cancel
    </Button>
    <Button onClick={() => alert("Payment Successful!")} color="primary" variant="contained">
      Confirm Payment
    </Button>
  </DialogActions>
</Dialog>

    </Box>
  );
}

export default CardContainer;
