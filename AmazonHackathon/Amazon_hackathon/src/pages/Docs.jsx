import React from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx"; // Navbar component
import Chatbot from "../Components/Chatbot.jsx"; // Chatbot component
import SearchBar from "../Components/Searchbar.jsx"; // Search bar component
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box, Card, CardContent, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

function Docs() {
  return (
    <>
    <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh", color: "#ffffff" }}>
      <ResponsiveAppBar /> {/* Navbar */}

      {/* Active Delivery Request Heading */}
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-between", // Added space between heading and button
          paddingLeft: "4rem",
          paddingRight: "4rem", // Ensures button stays on the right side
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Active Delivery Request</h1>
        
        {/* Upload Documents Button */}
        <Button
          variant="contained"
          color="primary"
          component="a"
          href="https://forms.gle/gZStc6swY7gF5NCL9"
          target="_blank"
          style={{
            backgroundColor: "#3f51b5",
            color: "#fff",
            textTransform: "none",
            fontSize: "1rem",
            height: "fit-content",
            alignSelf: "center",
          }}
        >
          Upload Documents
        </Button>
      </div>

      {/* Search Bar with Filter Function */}
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <SearchBar placeholder="Search from your Active Delivery Requests by country or document type..." />
        
        {/* Dropdown Filters for Item Type and Country */}
        <FormControl style={{ minWidth: "150px" }}>
          <InputLabel>Item Type</InputLabel>
          <Select label="Item Type">
            <MenuItem value="Cotton">Cotton</MenuItem>
            {/* Add other item types as needed */}
          </Select>
        </FormControl>

        <FormControl style={{ minWidth: "150px" }}>
          <InputLabel>Country</InputLabel>
          <Select label="Country">
            <MenuItem value="Japan">Japan</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
            {/* Add other countries as needed */}
          </Select>
        </FormControl>
      </div>

      {/* Card for Recent Order Related Documents */}
      <Box
        sx={{
          marginTop: "2rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
        }}
      >
        <Card sx={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
              Recent Order Related Documents
            </Typography>
            
            {/* First Accordion - Cotton (Japan) */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Order ID : ORD-20241124-X7K4Q9  ||  Item Type: Cotton &nbsp;&nbsp; Country: Japan   
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1i-xelJMTISIMcEJMBmdtl90qchlcpui1/view?usp=drive_link" target="_blank">
                      Airway Bill
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1kKnqRGsDSKpqUiDoVQuNiiS3m_igu4Nz/view?usp=drive_link" target="_blank">
                      Insurance Certificate
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1DLt56AMX-KP_yaORw84f6LUTRArF3RX2/view?usp=drive_link" target="_blank">
                      Commercial Invoice
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1xKBvNbGQ-mmnMwUNe9TESPURgyrCZ31o/view?usp=drive_link" target="_blank">
                      Custom Declaration
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1bbbZieQSfj0KbpMvfRI6SG_AvzNiT-U6/view?usp=drive_link" target="_blank">
                      Export Declaration
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1TwCDMSqS6Hbamd32d1UE-apQZPfm1PCk/view?usp=drive_link" target="_blank">
                      Packing List
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1MeRKVirv9RlAEjosmAIFz_67yfzyhlTt/view?usp=drive_link" target="_blank">
                      Proforma Invoice
                    </Link>
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>

            {/* Second Accordion - Cotton (Australia) */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Order ID : ORD-20241124-Z8J5M2  ||  Item Type: Cotton &nbsp;&nbsp; Country: Australia
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1Uv4RbLumS4hIhKtmeatLjCt0MvYDl7ET/view?usp=drive_link" target="_blank">
                      Quality Bill
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1kKnqRGsDSKpqUiDoVQuNiiS3m_igu4Nz/view?usp=drive_link" target="_blank">
                      Insurance Certificate
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1DLt56AMX-KP_yaORw84f6LUTRArF3RX2/view?usp=drive_link" target="_blank">
                      Commercial Invoice
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1i-xelJMTISIMcEJMBmdtl90qchlcpui1/view?usp=drive_link" target="_blank">
                      Airway Bill
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1TwCDMSqS6Hbamd32d1UE-apQZPfm1PCk/view?usp=drive_link" target="_blank">
                      Packing List
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1bbbZieQSfj0KbpMvfRI6SG_AvzNiT-U6/view?usp=drive_link" target="_blank">
                      Export Declaration
                    </Link>
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>

            {/* Third Accordion - Cotton (Germany) */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Order ID : ORD-20241124-L4X9T7  ||  Item Type: Cotton &nbsp;&nbsp; Country: Germany
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1Uv4RbLumS4hIhKtmeatLjCt0MvYDl7ET/view?usp=drive_link" target="_blank">
                      Quality Bill
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1U4y0lTk1KDuDr-e5i61rnm_Y4IW2Pojw/view?usp=drive_link" target="_blank">
                      Conformance Certificate
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1DLt56AMX-KP_yaORw84f6LUTRArF3RX2/view?usp=drive_link" target="_blank">
                      Commercial Invoice
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1i-xelJMTISIMcEJMBmdtl90qchlcpui1/view?usp=drive_link" target="_blank">
                      Airway Bill
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1TwCDMSqS6Hbamd32d1UE-apQZPfm1PCk/view?usp=drive_link" target="_blank">
                      Packing List
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link to="https://drive.google.com/file/d/1bbbZieQSfj0KbpMvfRI6SG_AvzNiT-U6/view?usp=drive_link" target="_blank">
                      Export Declaration
                    </Link>
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      </Box>

      {/* Layout below the search bar */}
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          padding: "0 4rem",
        }}
      >
        {/* Left Section */}
<div
  style={{
    backgroundColor: "white",
    width: "55%",
    height: "17rem",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "0.5rem",
  }}
>
  <div style={{ width: "100%", height: "2rem", marginBottom: "3rem" }}>
    <SearchBar placeholder="Search for Regulations..." />
  </div>
  <button
    onClick={() => window.open("https://custada.in/CUSTADA-Online/document/document/Hazardous_Waste_Rules.htm", "_blank")}
    style={{
      marginBottom: "2rem",
      paddingLeft: "10px",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#333",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      width: "100%",
    }}
  >
    Hazardous Goods
  </button>
  <button
    onClick={() => window.open("https://www.immihelp.com/prohibited-restricted-goods-to-and-from-india/", "_blank")}
    style={{
      marginBottom: "2rem",
      paddingLeft: "10px",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#333",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      width: "100%",
    }}
  >
    Banned Commodities
  </button>
  <button
    onClick={() => window.open("https://www.wto.org/english/res_e/booksp_e/international_exp_regs_e.pdf", "_blank")}
    style={{
      margin: "0",
      paddingLeft: "10px",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#333",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      width: "100%",
    }}
  >
    International Laws
  </button>
</div>


        {/* Right Section */}
        <div style={{ width: "55%", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Upper Rectangle */}
          <div
            style={{
              backgroundColor: "white",
              height: "8rem",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "0.5rem",
            }}
          >
            <div style={{ width: "100%", height: "2rem", marginBottom: "2rem" }}>
              <SearchBar placeholder="Search from your Completed Deliveries..." />
            </div>
            <p style={{ margin: "0", paddingLeft: "10px", fontSize: "1rem", fontWeight: "bold", color: "#333" }}>
              View Reports
            </p>
          </div>

          {/* Lower Rectangle */}
          <div
            style={{
              backgroundColor: "white",
              height: "8rem",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "0.5rem",
            }}
          >
            <p style={{ marginBottom: "2rem", paddingLeft: "10px", fontSize: "1rem", fontWeight: "bold", color: "#333" }}>
              Shipment Status
            </p>
            <p style={{ margin: "0", paddingLeft: "10px", fontSize: "1rem", fontWeight: "bold", color: "#333" }}>
              Schedule Meetings
            </p>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot />
      </div>
    </>
  );
}

export default Docs;