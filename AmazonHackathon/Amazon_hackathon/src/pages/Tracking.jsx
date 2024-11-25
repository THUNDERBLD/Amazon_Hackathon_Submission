// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
// import { 
//   ChevronDown, 
//   Shield, 
//   ShieldAlert, 
//   Clock, 
//   AlertTriangle,
//   Map,
//   PackageCheck,
//   Truck 
// } from "lucide-react";

// const Dashboard = () => {
//   const [deliveries, setDeliveries] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [metrics, setMetrics] = useState(null);
//   const [exceptions, setExceptions] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const [deliveriesRes, metricsRes, exceptionsRes] = await Promise.all([
//         fetch('http://localhost:3000/api/deliveries'),
//         fetch('http://localhost:3000/api/deliveries/performance-metrics'),
//         fetch('http://localhost:3000/api/deliveries/exceptions')
//       ]);
  
//       if (!deliveriesRes.ok || !metricsRes.ok || !exceptionsRes.ok) {
//         throw new Error('Failed to fetch data');
//       }
  
//       const [deliveriesData, metricsData, exceptionsData] = await Promise.all([
//         deliveriesRes.json(),
//         metricsRes.json(),
//         exceptionsRes.json()
//       ]);
  
//       setDeliveries(deliveriesData);
//       setMetrics(metricsData);
//       setExceptions(exceptionsData);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filteredDeliveries = deliveries.filter((delivery) =>
//     delivery.orderNumber.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const getStatusColor = (status, delayStatus) => {
//     if (delayStatus === 'Delayed') return "text-yellow-600";
//     if (status === "Delivered") return "text-green-600";
//     return "text-blue-600";
//   };

//   const DeliveryCard = ({ delivery }) => (
//     <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
//       <div className="flex justify-between items-center">
//         <h3 className="text-lg font-medium">Order: {delivery.orderNumber}</h3>
//         <div className="flex items-center gap-2">
//           {delivery.delayStatus === "Delayed" && (
//             <AlertTriangle className="h-5 w-5 text-yellow-500" />
//           )}
          

//           <ChevronDown className="h-5 w-5 text-gray-500" />
//         </div>
//       </div>

//       <div className="mt-4 space-y-3">
//         <div className="flex items-center gap-2">
//           <Map className="h-4 w-4 text-gray-500" />
//           <p className="text-sm text-gray-600">
//             <span className="font-medium">Current Location:</span> {delivery.currentLocation}
//           </p>
//         </div>

//         <div className="flex items-center gap-2">
//           <Clock className="h-4 w-4 text-gray-500" />
//           <p className="text-sm text-gray-600">
//             <span className="font-medium">Estimated Delivery:</span> {delivery.estimatedDeliveryTime}
//             {delivery.delayStatus === "Delayed" && (
//               <span className="ml-2 text-yellow-600">(Delayed due to weather)</span>
//             )}
//           </p>
//         </div>

//         <div className="flex items-center gap-2">
//           <Truck className="h-4 w-4 text-gray-500" />
//           <p className="text-sm">
//             <span className="font-medium">Status:</span>{" "}
//             <span className={getStatusColor(delivery.status, delivery.delayStatus)}>
//               {delivery.status}
//             </span>
//           </p>
//         </div>

//         <div className="flex items-center gap-2">
//           {delivery.blockchainVerified ? (
//             <div className="flex items-center text-green-600">
//               <Shield className="h-4 w-4 mr-1" />
//               <span className="text-sm">Secure</span>
//             </div>
//           ) : (
//             <div className="flex items-center text-red-600">
//               <ShieldAlert className="h-4 w-4 mr-1" />
//               <span className="text-sm">Compromised</span>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   // PropTypes validation for DeliveryCard
//   DeliveryCard.propTypes = {
//     delivery: PropTypes.shape({
//       orderNumber: PropTypes.string.isRequired,
//       currentLocation: PropTypes.string.isRequired,
//       estimatedDeliveryTime: PropTypes.string.isRequired,
//       delayStatus: PropTypes.string,
//       status: PropTypes.string.isRequired,
//       blockchainVerified: PropTypes.bool.isRequired,
//     }).isRequired,
//   };

//   const MetricsCard = ({ metrics }) => (
//     <div className="mb-6 border rounded-lg p-4 shadow-md">
//       <h2 className="text-xl font-semibold">Delivery Metrics</h2>
//       {metrics && (
//         <div className="grid grid-cols-2 gap-4">
//           <div className="text-center p-4 bg-green-50 rounded-lg">
//             <p className="text-2xl font-bold text-green-600">
//               {metrics.onTimeDeliveryRate}%
//             </p>
//             <p className="text-sm text-gray-600">On-Time Delivery Rate</p>
//           </div>
//           <div className="text-center p-4 bg-blue-50 rounded-lg">
//             <p className="text-2xl font-bold text-blue-600">
//               {metrics.averageDeliveryTime}
//             </p>
//             <p className="text-sm text-gray-600">Average Delivery Time</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   // PropTypes validation for MetricsCard
//   MetricsCard.propTypes = {
//     metrics: PropTypes.shape({
//       onTimeDeliveryRate: PropTypes.number.isRequired,
//       averageDeliveryTime: PropTypes.string.isRequired,
//     }),
//   };

//   const ExceptionsCard = ({ exceptions }) => (
//     <div className="border rounded-lg p-4 shadow-md">
//       <h2 className="text-xl font-semibold">Active Exceptions</h2>
//       {exceptions &&
//         exceptions.map((exception, index) => (
//           <div key={index} className="flex items-center justify-between mb-2 p-2 bg-gray-50 rounded">
//             <div className="flex items-center gap-2">
//               <AlertTriangle
//                 className={
//                   exception.type === "Delayed"
//                     ? "text-yellow-500"
//                     : exception.type === "Rerouted"
//                     ? "text-blue-500"
//                     : "text-red-500"
//                 }
//               />
//               <span>{exception.type}</span>
//             </div>
//             <span className="font-semibold">{exception.count}</span>
//           </div>
//         ))}
//     </div>
//   );

//   // PropTypes validation for ExceptionsCard
//   ExceptionsCard.propTypes = {
//     exceptions: PropTypes.arrayOf(
//       PropTypes.shape({
//         type: PropTypes.string.isRequired,
//         count: PropTypes.number.isRequired,
//       })
//     ),
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <ResponsiveAppBar />

//       <div className="px-6 py-4">
//         <h1 className="text-2xl font-bold text-gray-900">Active Delivery Tracking</h1>
//       </div>

//       <div className="px-6 py-2">
//         <input
//           type="text"
//           placeholder="Search by Order ID"
//           className="w-full max-w-md px-4 py-2 border rounded-lg"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {error && (
//         <div className="mx-6 my-4 bg-red-500 text-white p-4 rounded-lg">
//           <p>{error}</p>
//         </div>
//       )}

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
//         <div className="lg:col-span-2">
//           <div className="border rounded-lg p-4 shadow-md">
//             <h2 className="text-xl font-semibold">Delivery Details</h2>
//             <div>
//               {loading ? (
//                 <div className="flex justify-center p-4">
//                   <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//                 </div>
//               ) : filteredDeliveries.length > 0 ? (
//                 <div className="space-y-4">
//                   {filteredDeliveries.map((delivery) => (
//                     <DeliveryCard key={delivery.id} delivery={delivery} />
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-center text-gray-500 py-4">
//                   No deliveries found for the given Order ID.
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <MetricsCard metrics={metrics} />
//           <ExceptionsCard exceptions={exceptions} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from "react";
import PropTypes from "prop-types";
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx";
import { ChevronDown, Shield, ShieldAlert, Clock, AlertTriangle, Map, Truck } from "lucide-react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Example data for deliveries, metrics, and exceptions
  const deliveries = [
    {
      id: 1,
      orderNumber: "ORD-20241124-X7K4Q9",
      currentLocation: "Japan",
      estimatedDeliveryTime: "2024-12-01",
      delayStatus: "Delayed",
      status: "In Transit",
      blockchainVerified: true,
    },
    {
      id: 2,
      orderNumber: "ORD-20241124-Z8J5M2",
      currentLocation: "Munich",
      estimatedDeliveryTime: "2024-12-05",
      delayStatus: "",
      status: "Delivered",
      blockchainVerified: false,
    },
  ];

  const metrics = {
    onTimeDeliveryRate: 85,
    averageDeliveryTime: "3 Days",
  };

  const exceptions = [
    { type: "Delayed", count: 5 },
    { type: "Rerouted", count: 2 },
  ];

  const filteredDeliveries = deliveries.filter((delivery) =>
    delivery.orderNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status, delayStatus) => {
    if (delayStatus === "Delayed") return "text-yellow-600";
    if (status === "Delivered") return "text-green-600";
    return "text-blue-600";
  };

  const DeliveryCard = ({ delivery }) => (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Order: {delivery.orderNumber}</h3>
        <div className="flex items-center gap-2">
          {delivery.delayStatus === "Delayed" && (
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
          )}
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-2">
          <Map className="h-4 w-4 text-gray-500" />
          <p className="text-sm text-gray-600">
            <span className="font-medium">Current Location:</span> {delivery.currentLocation}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <p className="text-sm text-gray-600">
            <span className="font-medium">Estimated Delivery:</span> {delivery.estimatedDeliveryTime}
            {delivery.delayStatus === "Delayed" && (
              <span className="ml-2 text-yellow-600">(Delayed due to weather)</span>
            )}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-gray-500" />
          <p className="text-sm">
            <span className="font-medium">Status:</span>{" "}
            <span className={getStatusColor(delivery.status, delivery.delayStatus)}>
              {delivery.status}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          {delivery.blockchainVerified ? (
            <div className="flex items-center text-green-600">
              <Shield className="h-4 w-4 mr-1" />
              <span className="text-sm">Secure</span>
            </div>
          ) : (
            <div className="flex items-center text-red-600">
              <ShieldAlert className="h-4 w-4 mr-1" />
              <span className="text-sm">Compromised</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  DeliveryCard.propTypes = {
    delivery: PropTypes.shape({
      orderNumber: PropTypes.string.isRequired,
      currentLocation: PropTypes.string.isRequired,
      estimatedDeliveryTime: PropTypes.string.isRequired,
      delayStatus: PropTypes.string,
      status: PropTypes.string.isRequired,
      blockchainVerified: PropTypes.bool.isRequired,
    }).isRequired,
  };

  const MetricsCard = ({ metrics }) => (
    <div className="mb-6 border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold">Delivery Metrics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <p className="text-2xl font-bold text-green-600">{metrics.onTimeDeliveryRate}%</p>
          <p className="text-sm text-gray-600">On-Time Delivery Rate</p>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">{metrics.averageDeliveryTime}</p>
          <p className="text-sm text-gray-600">Average Delivery Time</p>
        </div>
      </div>
    </div>
  );

  MetricsCard.propTypes = {
    metrics: PropTypes.shape({
      onTimeDeliveryRate: PropTypes.number.isRequired,
      averageDeliveryTime: PropTypes.string.isRequired,
    }),
  };

  const ExceptionsCard = ({ exceptions }) => (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold">Active Exceptions</h2>
      {exceptions.map((exception, index) => (
        <div key={index} className="flex items-center justify-between mb-2 p-2 bg-gray-50 rounded">
          <div className="flex items-center gap-2">
            <AlertTriangle
              className={
                exception.type === "Delayed"
                  ? "text-yellow-500"
                  : exception.type === "Rerouted"
                  ? "text-blue-500"
                  : "text-red-500"
              }
            />
            <span>{exception.type}</span>
          </div>
          <span className="font-semibold">{exception.count}</span>
        </div>
      ))}
    </div>
  );

  ExceptionsCard.propTypes = {
    exceptions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
      })
    ),
  };

  return (
    <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh" }}>
    <div className="min-h-screen" style={{ backgroundColor: "#f2f2f2" }}>
      <ResponsiveAppBar />

      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Active Delivery Tracking</h1>
      </div>

      <div className="px-6 py-2">
        <input
          type="text"
          placeholder="Search by Order ID"
          className="w-full max-w-md px-4 py-2 border rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        <div className="lg:col-span-2">
          <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">Delivery Details</h2>
            <div>
              {filteredDeliveries.length > 0 ? (
                <div className="space-y-4">
                  {filteredDeliveries.map((delivery) => (
                    <DeliveryCard key={delivery.id} delivery={delivery} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-4">
                  No deliveries found for the given Order ID.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <MetricsCard metrics={metrics} />
          <ExceptionsCard exceptions={exceptions} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
