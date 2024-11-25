import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx";
import Chatbot from "../Components/Chatbot.jsx";
import { Link } from "react-router-dom";
import ChatInterface from "./ChatInterface.jsx";

const Agents = () => {
  // Sample routes data
  const routesData = [
    {
      id: 1,
      fromLocation: "Odisa",
      toLocation: "Japan",
      category: "Cotton",
      quantity: "1000",
      date: "2024-12-01",
      vendors: [
        { name: "Express Logistics", rating: 4.5, price: "₹45,000", deliveryDays: 3, success: "98%" },
        { name: "Swift Cargo", rating: 4.2, price: "₹42,000", deliveryDays: 4, success: "95%" }
      ]
    },
    {
      id: 2,
      fromLocation: "Bangalore",
      toLocation: "France",
      category: "Automotive",
      quantity: "500",
      date: "2024-12-05",
      vendors: [
        { name: "South Movers", rating: 4.7, price: "₹28,000", deliveryDays: 2, success: "99%" },
        { name: "Prime Transport", rating: 4.4, price: "₹25,000", deliveryDays: 3, success: "96%" }
      ]
    },
    {
      id: 3,
      fromLocation: "Delhi",
      toLocation: "China",
      category: "Furniture",
      quantity: "200",
      date: "2024-12-10",
      vendors: [
        { name: "Safe Shifters", rating: 4.6, price: "₹35,000", deliveryDays: 4, success: "97%" },
        { name: "Reliable Cargo", rating: 4.3, price: "₹32,000", deliveryDays: 5, success: "94%" }
      ]
    },
    {
      id: 4,
      fromLocation: "Kolkata",
      toLocation: "USA",
      category: "Textiles",
      quantity: "1500",
      date: "2024-12-15",
      vendors: [
        { name: "Fast Track Logistics", rating: 4.8, price: "₹52,000", deliveryDays: 3, success: "99%" },
        { name: "Economy Movers", rating: 4.4, price: "₹48,000", deliveryDays: 4, success: "95%" }
      ]
    },
    {
      id: 5,
      fromLocation: "Surat",
      toLocation: "Iran",
      category: "Chemicals",
      quantity: "800",
      date: "2024-12-20",
      vendors: [
        { name: "Industrial Transit", rating: 4.9, price: "₹38,000", deliveryDays: 2, success: "100%" },
        { name: "Safe Chemical Transport", rating: 4.5, price: "₹35,000", deliveryDays: 3, success: "97%" }
      ]
    }
  ];

  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [displayedVendors, setDisplayedVendors] = useState([]);

  // Handle from location input changes
  const handleFromLocationChange = (e) => {
    const value = e.target.value;
    setFromLocation(value);
    
    // Filter suggestions based on input
    if (value) {
      const filtered = routesData.filter(route => 
        route.fromLocation.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion selection
  const handleSuggestionSelect = (route) => {
    setFromLocation(route.fromLocation);
    setToLocation(route.toLocation);
    setCategory(route.category);
    setQuantity(route.quantity);
    setDate(route.date);
    setDisplayedVendors(route.vendors);
    setSuggestions([]);
  };

  const openPopup = (vendor) => {
    setSelectedVendor(vendor);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const commonStyle = {
    width: "200px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  return (
    <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh", color: "#ffffff" }}>
    <div>
      <ResponsiveAppBar />
      <div style={{
        textAlign: "center",
        marginTop: "30px",
        fontSize: "24px",
        fontWeight: "bold",
        color : "#000000",
      }}>
        Millions of Vendors at One Simple Search
      </div>

      {/* Interactive Form */}
      <div style={{ position: "relative", color : "#000000", }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const matchedRoute = routesData.find(
              route => route.fromLocation.toLowerCase() === fromLocation.toLowerCase()
            );
            if (matchedRoute) {
              setDisplayedVendors(matchedRoute.vendors);
            }
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            maxWidth: "90%",
            margin: "30px auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {/* From Location with Suggestions */}
          <div style={{ position: "relative" }}>
            <input
              type="text"
              value={fromLocation}
              onChange={handleFromLocationChange}
              placeholder="From..."
              style={commonStyle}
            />
            {suggestions.length > 0 && (
              <div style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "200px",
                maxHeight: "200px",
                overflowY: "auto",
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "4px",
                zIndex: 1000,
              }}>
                {suggestions.map((route, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionSelect(route)}
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                      borderBottom: "1px solid #eee",
                      hover: {
                        backgroundColor: "#f5f5f5"
                      }
                    }}
                  >
                    {route.fromLocation} → {route.toLocation}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            placeholder="To..."
            style={commonStyle}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={commonStyle}
          >
            <option value="" disabled>Select category...</option>
            <option value="Electronics">Cotton</option>
            <option value="Automotive">Automotive</option>
            <option value="Furniture">Furniture</option>
            <option value="Textiles">Textiles</option>
            <option value="Chemicals">Chemicals</option>
          </select>

          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity..."
            style={commonStyle}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={commonStyle}
          />

          <button
            type="submit"
            style={{
              ...commonStyle,
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
              border: "none",
            }}
          >
            Search Vendors
          </button>
        </form>
      </div>

      {/* Vendor Table */}
      {displayedVendors.length > 0 && (
        <div>
          <div style={{
            textAlign: "center",
            marginTop: "40px",
            fontSize: "20px",
            fontWeight: "bold",
            color : "#000000",
          }}>
            Available Vendors
          </div>

          <div style={{
            width: "90%",
            margin: "40px auto",
          }}>
  <table style={{
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "8px",
            borderCollapse: "collapse",
            marginTop: "20px",
            color : "#000000",
          }}>
    <thead>
      <tr>
        <th style={{
              padding: "16px", 
              borderBottom: "2px solid #ddd", 
              textAlign: "left", 
              backgroundColor: "#f9f9f9"
            }}>
          Vendor Name
        </th>
        <th style={{
              padding: "16px", 
              borderBottom: "2px solid #ddd", 
              textAlign: "left", 
              backgroundColor: "#f9f9f9"
            }}>
          Rating
        </th>
        <th style={{
              padding: "16px", 
              borderBottom: "2px solid #ddd", 
              textAlign: "left", 
              backgroundColor: "#f9f9f9"
            }}>
          Price
        </th>
        <th style={{
              padding: "16px", 
              borderBottom: "2px solid #ddd", 
              textAlign: "left", 
              backgroundColor: "#f9f9f9"
            }}>
          Delivery Time
        </th>
        <th style={{
              padding: "16px", 
              borderBottom: "2px solid #ddd", 
              textAlign: "left", 
              backgroundColor: "#f9f9f9"
            }}>
          Success Rate
        </th>
        <th style={{
              padding: "16px", 
              borderBottom: "2px solid #ddd", 
              textAlign: "center", 
              backgroundColor: "#f9f9f9"
            }}>
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {displayedVendors.map((vendor, index) => (
        <tr key={index}>
          <td
            style={{
              padding: "12px 16px", 
              borderBottom: "1px solid #ddd", 
              cursor: "pointer",
              color : "#000000",
            }}
            onClick={() => openPopup(vendor)}
          >
            {vendor.name}
          </td>
          <td style={{ padding: "12px 16px", borderBottom: "1px solid #ddd", color : "#000000", }}>{vendor.rating} ⭐</td>
          <td style={{ padding: "12px 16px", borderBottom: "1px solid #ddd", color : "#000000", }}>{vendor.price}</td>
          <td style={{ padding: "12px 16px", borderBottom: "1px solid #ddd", color : "#000000", }}>{vendor.deliveryDays} days</td>
          <td style={{ padding: "12px 16px", borderBottom: "1px solid #ddd", color : "#000000", }}>{vendor.success}</td>
          <td style={{
                padding: "12px 8px",
                borderBottom: "1px solid #ddd",
                textAlign: "center"
              }}>
            <a href="https://docs.google.com/document/d/1hrFAx6PLsgVjj7A5FMStQiaFuG7sOUxlomJ0GBso5P0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <button type="button" className="bg-blue-500 px-4 py-2 rounded-lg text-white">
    Select
  </button>
</a>

            <button type="button"
              className="bg-blue-500 mx-2 translate-y-1 px-4 py-2 rounded-lg text-white">
                <Link to="/chatinterface">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#ffffff" fill="none">
                    <path d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
            </button>

          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </div>
      )}

      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
            color : "#000000",
          }}
          onClick={closePopup}
        >
          <div
            style={{
              width: "80%",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "20px",
              boxSizing: "border-box",
              color : "#000000",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{color : "#000000",}}>{selectedVendor.name}</h2>
            <div style={{ marginTop: "20px", color : "#000000", }}>
              <p><strong>Rating:</strong> {selectedVendor.rating} ⭐</p>
              <p><strong>Price:</strong> {selectedVendor.price}</p>
              <p><strong>Delivery Time:</strong> {selectedVendor.deliveryDays} days</p>
              <p><strong>Success Rate:</strong> {selectedVendor.success}</p>
              <p><strong>Additional Services:</strong> GPS Tracking, 24/7 Support, Insurance Coverage</p>
              <p><strong>Description:</strong> Specialized in safe and timely delivery with real-time tracking and professional handling.</p>
            </div>
            <button
              onClick={closePopup}
              style={{
                padding: "10px 20px",
                marginTop: "20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Chatbot />
    </div>
    </div>
  );
};

export default Agents;