import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import {
  Card,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputAdornment,
} from "@mui/material";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Let's discuss our Contract", sender: "Delivery Agent" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [translateText, setTranslateText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("es");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: inputMessage, sender: "user" },
      ]);
      setInputMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleTranslate = async () => {
    try {
      const options = {
        method: "POST",
        url: "https://rapid-translate-multi-traduction.p.rapidapi.com/t",
        headers: {
          "x-rapidapi-key": "748e9ba193msh42232c28e7e6f30p1ed209jsn7d18c87fd355",
          "x-rapidapi-host": "rapid-translate-multi-traduction.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          from: sourceLanguage,
          to: targetLanguage,
          q: translateText,
        },
      };

      const response = await axios.request(options);
      setTranslatedText(response.data.data.translatedText);
    } catch (error) {
      console.error("Translation Error:", error.response || error);
      setTranslatedText("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div className="absolute top-2 left-2">
        <button className="border bg-blue-400 hover:bg-blue-700 px-5 py-1 rounded-lg text-white">
          <Link to="/agents">
            Back
          </Link>
        </button>
      </div>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg">
        {/* Header */}

        <div className="p-4 bg-blue-500 text-white rounded-t-xl text-center">
          <Typography variant="h5" className="font-bold">
            Chat-Space for Vendors
          </Typography>
        </div>

        {/* Chat Messages Area */}
        <div className="h-80 overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 text-sm ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 flex gap-2 items-center bg-gray-50 border-t">
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Send
                    className="cursor-pointer text-blue-500"
                    onClick={handleSendMessage}
                  />
                </InputAdornment>
              ),
            }}
          />
        </div>

        {/* Translation Section */}
        <Card className="p-4 m-4 shadow-sm border">
          <Typography variant="h6" gutterBottom>
            Translate Text
          </Typography>
          <TextField
            label="Enter text to translate"
            fullWidth
            multiline
            rows={3}
            value={translateText}
            onChange={(e) => setTranslateText(e.target.value)}
            margin="normal"
          />
          <div className="flex gap-4 items-center mt-2">
            <Select
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
              className="w-1/2"
              displayEmpty
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
              <MenuItem value="de">German</MenuItem>
              <MenuItem value="zh">Chinese</MenuItem>
              <MenuItem value="hi">Hindi</MenuItem>
            </Select>
            <Select
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
              className="w-1/2"
              displayEmpty
            >
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
              <MenuItem value="de">German</MenuItem>
              <MenuItem value="zh">Chinese</MenuItem>
              <MenuItem value="hi">Hindi</MenuItem>
            </Select>
          </div>
          <Button
            className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
            variant="contained"
            fullWidth
            onClick={handleTranslate}
          >
            Translate
          </Button>
          <Typography variant="subtitle1" className="mt-4">
            Translation:
          </Typography>
          <div className="p-2 mt-1 bg-gray-100 rounded-md">
            <Typography variant="body2">
              {translatedText || "Your translation will appear here."}
            </Typography>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChatInterface;