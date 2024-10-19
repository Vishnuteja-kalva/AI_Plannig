import React from "react";
import { Routes, Route } from "react-router-dom"; 
import "./App.css";
import { Login_c } from "./Login_Page";
import { Telugu } from "./Telugu";
import { Hindi } from "./Hindi";
import { Tamil } from "./Tamil";
import { Malayalam } from "./Malayalam";
import { FoodieIntro } from "./Intro";
import { SignupForm } from "./Sign up";
import { ForgotPassword } from "./Forgot_pass";
import { NutritionFetcher } from "./Food nutrition";
import { GeminiChatbot } from "./food_chatbot";
import { Interface } from "./Success";
import { Video } from "./Play Videos";

export function New_react() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FoodieIntro />} />
        <Route path="/Intro" element={<Login_c />} />
        <Route path="/telugu" element={<Telugu />} />
        <Route path="/hindi" element={<Hindi />} />
        <Route path="/tamil" element={<Tamil />} />
        <Route path="/malayalam" element={<Malayalam />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/nutrition-fetch" element={<NutritionFetcher />} />
        <Route path="/food-chat-bot" element={<GeminiChatbot />} />
        <Route path="/success-interface" element={<Interface />} />
        <Route path="/cooking-videos" element={<Video />} />
      </Routes>
    </div>
  );
}
