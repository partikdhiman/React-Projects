# React Context API Example

A simple React project demonstrating how to use the **Context API** to share data between components without passing props manually through every component.

## 🚀 What is Context API?

The **Context API** in React is used to share data between multiple components without passing props from parent to child at every level.

For example, we can share:

- User information
- Login status
- Theme
- Language
- Global settings

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Login.jsx
│   └── Profile.jsx
│
├── context/
│   ├── UserContext.js
│   └── UserContextProvider.jsx
│
├── App.jsx
└── main.jsx