import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Express server configuration
const app = express();
const port = 5000;

// Middleware configuration
app.use(cors());
app.use(express.json());

// Google Generative AI API key configuration
const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);

// API endpoint for generating nutrition plan
app.post("/generate-nutrition-plan", async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const {
      name,
      age,
      weight,
      height,
      medicalInfo,
      vegetarian,
      activityLevel,
      goal,
      dietaryRestrictions,
      preferredMeals,
    } = req.body;

    // Prompt template
    const prompt = `
      Generate a detailed, simple Indian home-style nutrition plan based on the following details:
      Name: ${name}
      Age: ${age} years
      Weight: ${weight} kg
      Height: ${height} cm
      Medical Information: ${medicalInfo}
      Vegetarian: ${vegetarian ? "Yes" : "No"}
      Activity Level: ${activityLevel}
      Goal: ${goal}
      Dietary Restrictions: ${dietaryRestrictions}
      Preferred Meals: ${preferredMeals}
      Focus on using everyday Indian ingredients that are easily available at home.
      Keep the plan healthy, balanced, and suitable for Indian tastes.
      Add some random Indian-style emojis to make it more relatable.
    `;

    // Generate the nutrition plan
    const result = await model.generateContent(prompt);

    // Get the response
    const response = await result.response;

    // Extract the generated plan
    const text = await response.text();

    // Send the generated plan back to the client
    res.json({ text });
  } catch (error) {
    console.error("Error generating nutrition plan:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
