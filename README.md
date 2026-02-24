# 🍃 Orgado: Purely Organic, Truly Fresh

Orgado is a modern, fully responsive e-commerce web application designed to connect health-conscious families with sustainable, premium-quality organic farms. Sourced from the heart of Wayanad, Kerala, this platform offers a seamless shopping experience for fresh vegetables, dairy, meat, and fruits.

## ✨ Key Features
* **Dynamic Shopping Cart & Wishlist:** Real-time state management for carts and favorites using React's Context API.
* **Responsive Navigation:** A custom-built, mobile-friendly navbar featuring a smooth offcanvas sidebar for smaller screens.
* **Product Categorization:** Easily browse through categorized sections like "Meat & Milk", "Fresh Vegetables", and "Trending Products".
* **User Accounts:** Dedicated UI components for User Registration and Login.
* **Order Tracking:** A built-in tracking interface to check order statuses.
* **Blog & Contact Integration:** Dedicated pages for farm news, organic living tips, and customer support.

## 🛠️ Tech Stack
* **Frontend Framework:** React.js (Bootstrapped with Vite for fast performance)
* **Routing:** React Router DOM for seamless Single Page Application (SPA) navigation
* **State Management:** React Context API (`CartContext`, `FavoriteContext`)
* **Styling:** Custom CSS and Bootstrap for responsive grid layouts and utility classes
* **Icons:** SVG-based inline icons

## 📂 Project Structure Highlights
* `src/components/` - Contains modular UI components divided by page context (Homepage, Cart, Shop, Common).
* `src/context/` - Houses the global state logic for the Cart and Wishlist.
* `src/pages/` - Core routing pages including `Home`, `Shop`, `Blog`, `Cart`, `TrackOrder`, and `ContactPage`.
* `src/data/` - Mock data files (`productDatas.js`, `reviewDatas.js`) used to populate the frontend.
