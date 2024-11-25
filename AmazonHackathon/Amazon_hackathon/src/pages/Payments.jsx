import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx";
import CardContainer from "../Components/CardContainers.jsx";
import { Card, CardContent } from "@mui/material";
import { ArrowUpRight, ArrowDownRight, ExternalLink, TrendingUp, Send, Wallet, RefreshCw, PieChart } from "lucide-react";


function Dashboard() {
  // Exchange rate data for the past 7 days
  const exchangeRateData = [
    { date: 'Nov 18', USD: 83.34, EUR: 90.82, GBP: 104.12, JPY: 0.55 },
    { date: 'Nov 19', USD: 83.28, EUR: 90.75, GBP: 104.05, JPY: 0.56 },
    { date: 'Nov 20', USD: 83.31, EUR: 90.88, GBP: 104.18, JPY: 0.55 },
    { date: 'Nov 21', USD: 83.37, EUR: 90.92, GBP: 104.25, JPY: 0.56 },
    { date: 'Nov 22', USD: 83.35, EUR: 90.85, GBP: 104.15, JPY: 0.55 },
    { date: 'Nov 23', USD: 83.32, EUR: 90.78, GBP: 104.08, JPY: 0.56 },
    { date: 'Nov 24', USD: 83.30, EUR: 90.80, GBP: 104.10, JPY: 0.55 },
  ];

  // Quick links data
  const quickLinks = [
    { title: "New Transfer", icon: Send, color: "text-blue-500" },
    { title: "Currency Exchange", icon: RefreshCw, color: "text-green-500" },
    { title: "Payment History", icon: PieChart, color: "text-purple-500" },
    { title: "Wallet Balance", icon: Wallet, color: "text-orange-500" },
  ];

  // Current exchange rates with trends
  const currentRates = [
    { 
      currency: "USD",
      rate: 83.30,
      trend: -0.02,
      isUp: false
    },
    {
      currency: "EUR",
      rate: 90.80,
      trend: 0.02,
      isUp: true
    },
    {
      currency: "GBP",
      rate: 104.10,
      trend: -0.05,
      isUp: false
    },
    {
      currency: "JPY",
      rate: 0.55,
      trend: 0.01,
      isUp: true
    }
  ];

  return (
    <>
    <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh", color: "#ffffff" }}>
      <ResponsiveAppBar />

      {/* Dashboard Heading */}
      <div className="mt-6 flex justify-between items-center px-16">
        <h1 className="text-xl font-bold">Payments</h1>
        <div className="flex gap-4">
        {currentRates.map((rate) => (
  <div key={rate.currency} className="flex items-center gap-2 bg-white p-2 rounded-lg shadow">
    <span className="font-semibold text-black">{rate.currency}/INR:</span>
    <span className="text-black">{rate.rate}</span>
    <span className={`flex items-center ${rate.isUp ? 'text-green-500' : 'text-red-500'}`}>
      {rate.isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
      {Math.abs(rate.trend)}%
    </span>
  </div>
))}

        </div>
      </div>

      {/* Card Container Section */}
      <div className="mt-8 px-16 ">
        <CardContainer />
      </div>

      {/* Exchange Rate Chart */}
      <div className="mt-8 px-16">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-semibold mb-4">Currency Exchange Trends</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={exchangeRateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="USD" stroke="#8884d8" />
                  <Line type="monotone" dataKey="EUR" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="GBP" stroke="#ffc658" />
                  <Line type="monotone" dataKey="JPY" stroke="#ff7300" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links Section */}
      <div className="mt-8 px-16 mb-8">
        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-4 gap-4">
          {quickLinks.map((link) => (
            <Card key={link.title} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex items-center gap-4 p-4">
                <div className={`p-2 rounded-lg ${link.color} bg-opacity-10`}>
                  <link.icon className={link.color} size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{link.title}</h3>
                  <p className="text-sm text-gray-500">Click to access</p>
                </div>
                <ExternalLink className="ml-auto text-gray-400" size={16} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Dashboard;