
# nworksinc - Corporate Web Application

A modern, responsive corporate website for nworksinc, featuring a product catalog, service portfolio, AI assistant, and shopping cart functionality. Built with React, TypeScript, Tailwind CSS, and the Gemini API.

## Features

- 🎨 **Modern UI/UX**: Built with Tailwind CSS for a clean, responsive design.
- 🤖 **AI Assistant**: Integrated Gemini API chatbot for customer support.
- 🛒 **Shopping Cart**: Functional cart with "Request Quote" and "Checkout" flows.
- 📱 **Responsive**: Fully optimized for mobile, tablet, and desktop.
- ⚡ **Fast**: Powered by Vite.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/nworksinc.git
    cd nworksinc
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory:
    ```bash
    cp .env.example .env
    ```
    Open `.env` and add your Google Gemini API key:
    ```env
    API_KEY=your_actual_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist` directory.

## Images

This project uses cloud-hosted images from Unsplash. No local image assets are required for the build process.

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Google GenAI SDK
