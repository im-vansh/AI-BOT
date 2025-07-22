# 🤖 Smart AI Bot

**Smart AI Bot** is an intelligent, responsive web application that allows users to:
- 🔍 **Ask questions** and receive AI-generated answers
- 🖼️ **Upload images** and get insights or answers about their content
- ✏️ **Generate images** from descriptive text prompts

Built with the power of **React.js**, this project leverages cutting-edge AI technologies to deliver a seamless, interactive experience.

---
## 🚀 Features

- 🧠 **Natural Language Understanding**  
  Ask complex or simple questions — get accurate, context-aware answers using advanced AI.

- 📸 **Image Q&A**  
  Upload an image and ask questions about its contents. The bot analyzes and responds intelligently.

- 🎨 **Text-to-Image Generation**  
  Describe a scene or concept, and the bot generates a unique image for you.

- 💻 **Responsive UI**  
  Fully responsive design ensures a smooth experience on desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

| Technology            | Purpose                                 |
|------------------------|-----------------------------------------|
| **React.js**           | Frontend framework                      |
| **Gemini API**         | Natural language question answering     |
| **Hugging Face API**   | Text-to-image generation                |
| **Vite**               | Build tool and development server       |

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/smart-ai-bot.git
   cd smart-ai-bot/AI-BOT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file and add your API tokens:
   ```env
   # Hugging Face API Token for image generation
   VITE_HUGGINGFACE_TOKEN=your_huggingface_token_here
   
   # Add your Gemini API token if needed
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Get Your API Tokens**
   
   **For Hugging Face (Image Generation):**
   - Visit [Hugging Face Settings](https://huggingface.co/settings/tokens)
   - Create a new token with "Read" permissions
   - Copy the token to your `.env` file
   
   **For Gemini (Text Generation):**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key to your `.env` file

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173` to use the application.

---

## 🎯 Usage

### Text-to-Image Generation
1. Click on "Generate Image" from the main interface
2. Enter a descriptive text prompt (e.g., "A beautiful sunset over mountains")
3. Click the submit button or press Enter
4. Wait for the AI to generate your custom image

### Image Q&A
1. Click on "Upload Image" 
2. Select an image from your device
3. Ask questions about the image
4. Get AI-powered insights and answers

### General Chat
1. Click on "Let's Chat"
2. Ask any questions
3. Get intelligent responses powered by AI

---

## 🔧 Troubleshooting

**Image Generation Not Working?**
- Ensure your Hugging Face token is correctly set in the `.env` file
- Check your internet connection
- Verify the token has proper permissions
- Try with a different, more descriptive prompt

**Build Issues?**
- Run `npm install` to ensure all dependencies are installed
- Check that Node.js version is compatible (Node 16+ recommended)
- Clear cache with `npm run build --force`

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- [Hugging Face](https://huggingface.co/) for the amazing text-to-image models
- [Google Gemini](https://ai.google.dev/) for natural language processing
- [React](https://react.dev/) for the powerful frontend framework
