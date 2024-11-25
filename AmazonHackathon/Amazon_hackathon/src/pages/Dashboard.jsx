import React from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx";
import Activeship from "../Components/Activeship.jsx";
import Chatbot from "../Components/Chatbot.jsx"; // Import the chatbot component
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

{/* Sample data for graphs */}
const sampleData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
];

function Dashboard() {
  return (
    <>
    <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh", color: "#ffffff" }}>
      <div className="w-[100%]">
        <ResponsiveAppBar />
      </div>

      {/* Dashboard Heading */}
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "4rem",
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Dashboard</h1>
      </div>

      {/* Rectangles */}
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-around",
          gap: "2rem",
          flexWrap: "wrap",
          color : "#000000"
        }}
      >
        {["Active Shipments", "Pending Documents", "Available Carriers", "Monthly Revenue"].map(
          (title, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                width: "22rem", // Increased width for larger cards
                height: "14rem", // Increased height for larger cards
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s ease",
                flex: "1 1 40%", // Adjusted to occupy more space in each row
                maxWidth: "22rem", // Ensures consistent max width
                textAlign: "center",
                overflowY: title === "Pending Documents" ? "auto" : "visible", // Enables scroll for Pending Documents
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              <h2 style={{ fontSize: "1.1rem", fontWeight: "600" }}>{title}</h2>
              {title === "Pending Documents" ? (
                <div style={{ marginTop: "0.5rem" }}>
                  <div style={{ maxHeight: "6rem", overflowY: "auto", marginTop: "0.5rem" }}>
                    {[
                      { name: "Airway Bill", url: "https://drive.google.com/file/d/1i-xelJMTISIMcEJMBmdtl90qchlcpui1/view?usp=drive_link" },
                      { name: "Insurance Certificate", url: "https://drive.google.com/file/d/1kKnqRGsDSKpqUiDoVQuNiiS3m_igu4Nz/view?usp=drive_link" },
                      { name: "Commercial Invoice", url: "https://drive.google.com/file/d/1DLt56AMX-KP_yaORw84f6LUTRArF3RX2/view?usp=drive_link" },
                      { name: "Custom Declaration", url: "https://drive.google.com/file/d/1xKBvNbGQ-mmnMwUNe9TESPURgyrCZ31o/view?usp=drive_link" },
                      { name: "Export Declaration", url: "https://drive.google.com/file/d/1bbbZieQSfj0KbpMvfRI6SG_AvzNiT-U6/view?usp=drive_link" },
                      { name: "Packing List", url: "https://drive.google.com/file/d/1TwCDMSqS6Hbamd32d1UE-apQZPfm1PCk/view?usp=drive_link" },
                      { name: "Proforma Invoice", url: "https://drive.google.com/file/d/1MeRKVirv9RlAEjosmAIFz_67yfzyhlTt/view?usp=drive_link" },
                    ].map((doc, idx) => (
                      <Button
                        key={idx}
                        variant="outlined"
                        style={{
                          marginTop: "0.5rem",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Link
                          to={doc.url}
                          target="_blank"
                          style={{ textDecoration: "none", color: "#3f51b5" }}
                        >
                          {doc.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              ) : title === "Monthly Revenue" ? (
                <div style={{ marginTop: "0.5rem" }}>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: "600", color: "#333" }}>
                    Total Revenue: ₹1,20,00,000
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.5rem" }}>
                    Gross Profit: ₹40,00,000
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.5rem" }}>
                    Net Profit: ₹30,00,000
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.5rem" }}>
                    Expenses: ₹10,00,000
                  </p>
                </div>
              ) : (
                <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.5rem" }}>
                  [Data]
                </p>
              )}
            </div>
          )
        )}
      </div>

      {/* Graph Heading */}
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "82px",
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Graph</h1>
      </div>

      {/* Graph Layout - 2x2 Matrix */}
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {["Graph 1", "Graph 2", "Graph 3", "Graph 4"].map((graph, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "1rem",
              width: "45%",
              height: "20rem",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h2 style={{ fontSize: "1rem", fontWeight: "600" }}>{graph}</h2>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>


      {/* Active Shipments Heading */}
      <div
        style={{
          marginTop: "3rem", // Add some space below the graphs
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "4rem", // Same padding as Dashboard and Graph heading
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Active Shipments</h1>
      </div>

      {/* Active Shipments Rectangle with Button */}
      <div
        style={{
          width: "100%", // Makes the rectangle take full width of the screen
          height: "10rem", // Height of the rectangle
          backgroundColor: "#ffffff", // Light grey background color
          display: "flex",
          justifyContent: "center", // Centers the button horizontally
          alignItems: "center", // Centers the button vertically
          marginTop: "-20px", // Adds space below the active shipments heading
        }}
      >
        <Activeship />
      </div>

{/* Quick Links Heading */}
<div
  style={{
    marginTop: "3rem", // Adds some space below the Active Shipments section
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "4rem", // Same padding as the other headings
  }}
>
  <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Quick Links</h1>
</div>

{/* Quick Links Rectangles */}
<div
  style={{
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
    color : "#000000"
  }}
>
  {["New Shipment", "Upload Docs", "Find Carrier", "Generate Report"].map((title, index) => (
    <div
      className="my-8"
      key={index}
      style={{
        backgroundColor: "white",
        padding: "1rem",
        width: "12rem",
        height: "5rem",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: title === "Upload Docs" ? "pointer" : "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
      }}
    >
      {title === "Upload Docs" ? (
        <a
          href="https://forms.gle/sYbVFuX58cXyhjSo8"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#000",
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          {title}
        </a>
      ) : (
        <h2 style={{ fontSize: "1rem", fontWeight: "600" }}>{title}</h2>
      )}
    </div>
  ))}
</div>







      {/* Chatbot in the bottom-right corner */}
      <Chatbot />
      </div>
    </>
  );
}

export default Dashboard;
