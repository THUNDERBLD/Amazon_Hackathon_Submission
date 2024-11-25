import React from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx";
import Chatbot from "../Components/Chatbot.jsx";

function Analytics() {
  // Current metrics data
  const currentMetrics = {
    "Booked": 1247,
    "To be Packed": 326,
    "Ready to Ship": 158,
    "Shipped": 892,
    "Delivered": 3864,
    "Total Sales": "₹24.8M"
  };

  // Top 5 products data
  const topProducts = [
    { name: "Smartphone X Pro", sales: 458, revenue: "₹6.87M" },
    { name: "Wireless Earbuds", sales: 312, revenue: "₹1.56M" },
    { name: "Smart Watch Series 4", sales: 287, revenue: "₹2.87M" },
    { name: "Laptop Ultra", sales: 245, revenue: "₹7.35M" },
    { name: "Tablet Mini", sales: 198, revenue: "₹1.98M" }
  ];

  // Top 5 categories data
  const topCategories = [
    { name: "Electronics", sales: 1842, revenue: "₹18.42M" },
    { name: "Fashion", sales: 1456, revenue: "₹7.28M" },
    { name: "Home & Living", sales: 987, revenue: "₹4.94M" },
    { name: "Books", sales: 765, revenue: "₹1.53M" },
    { name: "Sports", sales: 654, revenue: "₹3.27M" }
  ];

  // Pie chart data for products
  const productPieData = [
    { name: "Smartphone X Pro", value: 458 },
    { name: "Wireless Earbuds", value: 312 },
    { name: "Smart Watch Series 4", value: 287 },
    { name: "Laptop Ultra", value: 245 },
    { name: "Tablet Mini", value: 198 }
  ];

  // Pie chart data for categories
  const categoryPieData = [
    { name: "Electronics", value: 1842 },
    { name: "Fashion", value: 1456 },
    { name: "Home & Living", value: 987 },
    { name: "Books", value: 765 },
    { name: "Sports", value: 654 }
  ];

  // Year wise sales trend data
  const yearWiseSales = [
    { year: '2020', sales: 12.4 },
    { year: '2021', sales: 15.8 },
    { year: '2022', sales: 19.2 },
    { year: '2023', sales: 22.6 },
    { year: '2024', sales: 24.8 }
  ];

  // Monthly sales trend data
  const monthlySales = [
    { month: 'Dec', sales: 2.4 },
    { month: 'Jan', sales: 2.1 },
    { month: 'Feb', sales: 2.3 },
    { month: 'Mar', sales: 2.8 },
    { month: 'Apr', sales: 2.6 },
    { month: 'May', sales: 2.9 },
    { month: 'Jun', sales: 3.1 },
    { month: 'Jul', sales: 2.8 },
    { month: 'Aug', sales: 3.2 },
    { month: 'Sep', sales: 3.4 },
    { month: 'Oct', sales: 3.6 },
    { month: 'Nov', sales: 3.8 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <>
    <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh", color: "#ffffff" }}>
      <ResponsiveAppBar />

      {/* Metrics Row */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '2rem 0' }}>
        {/* Year Selector */}
        <Box sx={{
          width: '180px',
          height: '100px',
          backgroundColor: 'primary.main',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '0.5rem',
        }}>
          <Typography variant="h6" sx={{ textAlign: 'center', fontSize: '0.875rem', fontWeight: 'bold', color: 'white' }}>
            Sales Review
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="year-select-label" sx={{ color: 'white' }}>Select Year</InputLabel>
            <Select
              labelId="year-select-label"
              label="Select Year"
              defaultValue={2024}
              size="small"
              sx={{
                color: 'white',
                '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
              }}
            >
              <MenuItem value={2024}>2024</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Metric Cards */}
        {Object.entries(currentMetrics).map(([heading, value], index) => (
          <Box key={index} sx={{
            width: '180px',
            height: '100px',
            backgroundColor: 'primary.main',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Typography sx={{
              fontSize: '0.75rem',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '0.5rem',
            }}>
              {heading}
            </Typography>
            <Typography sx={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'white',
            }}>
              {value}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Middle Section */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '2rem',
        padding: '2rem 0',
        minHeight: '300px', // Adjusted height
      }}>
        {/* Top Products Table */}
        <Box sx={{
          width: '790px',
          height: '300px', // Increased height
          backgroundColor: 'primary.main',
          borderRadius: '8px',
          padding: '1rem',
          color: 'white',
        }}>
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Top 5 Product Performance
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {topProducts.map((product, index) => (
              <Box key={index} sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
              }}>
                <Typography sx={{ flex: 2 }}>{product.name}</Typography>
                <Typography sx={{ flex: 1, textAlign: 'right' }}>{product.sales} units</Typography>
                <Typography sx={{ flex: 1, textAlign: 'right' }}>{product.revenue}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Top Categories Table */}
        <Box sx={{
          width: '790px',
          height: '300px', // Increased height
          backgroundColor: 'primary.main',
          borderRadius: '8px',
          padding: '1rem',
          color: 'white',
        }}>
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Top 5 Category Performance
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {topCategories.map((category, index) => (
              <Box key={index} sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
              }}>
                <Typography sx={{ flex: 2 }}>{category.name}</Typography>
                <Typography sx={{ flex: 1, textAlign: 'right' }}>{category.sales} units</Typography>
                <Typography sx={{ flex: 1, textAlign: 'right' }}>{category.revenue}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Pie Charts */}
        <Box sx={{
          width: '380px',
          height: '300px', // Increased height
          backgroundColor: 'primary.main',
          borderRadius: '8px',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Top 5 Product Distribution
          </Typography>
          <PieChart width={300} height={250}> {/* Increased chart size */}
            <Pie
              data={productPieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100} // Increased radius
              fill="#8884d8"
            >
              {productPieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
        </Box>

        <Box sx={{
          width: '380px',
          height: '300px', // Increased height
          backgroundColor: 'primary.main',
          borderRadius: '8px',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Category Distribution
          </Typography>
          <PieChart width={300} height={250}> {/* Increased chart size */}
            <Pie
              data={categoryPieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100} // Increased radius
              fill="#82ca9d"
            >
              {categoryPieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
        </Box>
      </Box>

      {/* Bottom Charts */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '2rem',
        paddingTop: '2rem', // Reduced padding
        marginBottom: '2rem', // Added margin bottom
      }}>
        {/* Year Wise Trend */}
        <Box sx={{
          width: '50%',
          height: '300px', // Increased height
          backgroundColor: 'primary.main',
          borderRadius: '8px',
          padding: '1rem',
        }}>
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Year Wise Sales Trend (in ₹B)
          </Typography>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={yearWiseSales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* Monthly Trend */}
        <Box sx={{
          width: '50%',
          height: '300px', // Increased height
          backgroundColor: 'primary.main',
          borderRadius: '8px',
          padding: '1rem',
        }}>
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Last 12 Months Sales Trend (in ₹B)
          </Typography>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={monthlySales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      <Chatbot />
      </div>
    </>
  );
}

export default Analytics;