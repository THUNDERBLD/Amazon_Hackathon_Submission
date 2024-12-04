import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { Link } from "react-router-dom";

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
                  <CardContent className="flex">
                    <div className="flex-col">
                      <Typography variant="subtitle1">
                        Order Number: {card.orderNumber}
                      </Typography>
                      <Typography variant="body2" sx={{ color: card.status === "Paid" ? "green" : "red" }}>
                        Status: {card.status}
                      </Typography>
                      <Typography variant="body2">Order Date: {card.orderDate}</Typography>
                      <Typography variant="body2">Total: {card.totalAmount}</Typography>
                    </div>
                    <div className="flex-col ml-40 translate-x-32">
                      {/* Chats */}
                      <div className="my-2">
                        <button type="button"
                          className="bg-blue-500 mx-2 translate-y-1 px-4 py-2 rounded-lg text-white">
                          <Link to="/chatinterface">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#ffffff" fill="none">
                              <path d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                              <path d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        </button>
                      </div>
                      <div>
                        <button type="button"
                          className="bg-blue-500 mx-2 translate-y-1 px-4 py-2 rounded-lg text-white">
                          <a href="https://www.flightradar24.com/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                              <path d="M15.8667 3.7804C16.7931 3.03188 17.8307 2.98644 18.9644 3.00233C19.5508 3.01055 19.844 3.01467 20.0792 3.10588C20.4524 3.2506 20.7494 3.54764 20.8941 3.92081C20.9853 4.15601 20.9894 4.4492 20.9977 5.03557C21.0136 6.16926 20.9681 7.20686 20.2196 8.13326C19.5893 8.91337 18.5059 9.32101 17.9846 10.1821C17.5866 10.8395 17.772 11.5203 17.943 12.2209L19.2228 17.4662C19.4779 18.5115 19.2838 19.1815 18.5529 19.9124C18.164 20.3013 17.8405 20.2816 17.5251 19.779L13.6627 13.6249L11.8181 15.0911C11.1493 15.6228 10.8149 15.8886 10.6392 16.2627C10.2276 17.1388 10.4889 18.4547 10.5022 19.4046C10.5096 19.9296 10.0559 20.9644 9.41391 20.9993C9.01756 21.0209 8.88283 20.5468 8.75481 20.2558L7.52234 17.4544C7.2276 16.7845 7.21552 16.7724 6.54556 16.4777L3.74415 15.2452C3.45318 15.1172 2.97914 14.9824 3.00071 14.5861C3.03565 13.9441 4.07036 13.4904 4.59536 13.4978C5.54532 13.5111 6.86122 13.7724 7.73734 13.3608C8.11142 13.1851 8.37724 12.8507 8.90888 12.1819L10.3751 10.3373L4.22103 6.47489C3.71845 6.15946 3.69872 5.83597 4.08755 5.44715C4.8185 4.7162 5.48851 4.52214 6.53377 4.77718L11.7791 6.05703C12.4797 6.22798 13.1605 6.41343 13.8179 6.0154C14.679 5.49411 15.0866 4.41074 15.8667 3.7804Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </a>
                        </button>
                      </div>
                    </div>
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
