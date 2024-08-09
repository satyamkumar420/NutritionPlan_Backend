# 🍎 Nutrition Plan Backend

This is the backend service for the Nutrition Plan application. It is built using Node.js and Express, with integration of Google Generative AI to create personalized nutrition plans.

## 🚀 Features

- **Generate Nutrition Plans**: Personalized plans based on user input.
- **Google Generative AI Integration**: Utilizes AI to create custom plans.

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/satyamkumar420/NutritionPlan_Backend.git
   cd NutritionPlan_Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add your Google Generative AI API key:

   ```
   AI_API_KEY=your_google_ai_api_key
   ```

4. Start the server:

   ```bash
   npm start
   ```

## 📄 API Endpoints

- **POST `/generate-nutrition-plan`**: Generate a personalized nutrition plan.

  **Request Body:**

  ```json
  {
    "name": "John Doe",
    "age": 25,
    "weight": 70,
    "height": 175,
    "medicalInfo": "Diabetic",
    "vegetarian": true,
    "activityLevel": "moderate",
    "goal": "weight-loss",
    "dietaryRestrictions": "gluten-free",
    "preferredMeals": "Indian"
  }
  ```

  **Response:**

  ```json
  {
    "text": "Generated nutrition plan text..."
  }
  ```

## 📚 Technologies Used

- Node.js
- Express.js
- Google Generative AI

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

---

Made with ❤️ by Satyam Kumar

```

```
