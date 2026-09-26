# 📝 Todo List App

A simple and elegant Todo List application built with **React** and **Tailwind CSS**, featuring persistent storage using the browser's **localStorage**. Add, edit, complete, and delete your todos — and they'll still be there when you refresh the page!

---

## 🚀 Features

- ✅ Add new todos
- ✏️ Edit existing todos
- ☑️ Mark todos as complete/incomplete
- ❌ Delete todos
- 💾 Persistent storage using `localStorage` (your todos survive page refresh)
- 🎨 Clean, responsive UI styled with Tailwind CSS
- ⚛️ Built with React Context API for global state management

---

## 🛠️ Tech Stack

- **React** – UI library
- **Vite** – Build tool / dev server
- **Tailwind CSS** – Styling
- **Context API** – State management (no external state library needed)
- **localStorage** – Client-side data persistence

---

## 📂 Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx      # Form to add new todos
│   ├── TodoItems.jsx      # Individual todo item (edit/delete/toggle)
│   └── index.js           # Component exports
├── contexts/
│   ├── TodoContext.js     # Context definition + useTodo hook
│   └── index.js           # Context exports
├── App.jsx                # Main app logic (state, localStorage sync)
├── App.css
└── main.jsx
```

---

## ⚙️ How It Works

1. **State Management**
   All todos are stored in a `todos` state array inside `App.jsx` and shared across components using `TodoContext` and the `useTodo()` hook.

2. **CRUD Operations**
   - `addTodo(todo)` – adds a new todo to the top of the list
   - `updateTodo(id, todo)` – updates the text of an existing todo
   - `deleteTodo(id)` – removes a todo by id
   - `toggleComplete(id)` – toggles the completed status of a todo

3. **Persisting Data with localStorage**
   - On initial load, a `useEffect` reads saved todos from `localStorage` and populates the state.
   - Another `useEffect` watches the `todos` state and writes it back to `localStorage` every time it changes.

   ```js
   // Load todos on first render
   useEffect(() => {
     const todos = JSON.parse(localStorage.getItem("todos"));
     if (todos && todos.length > 0) {
       setTodos(todos);
     }
   }, []);

   // Save todos whenever they change
   useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);
   ```

---

## 🖱️ Usage

1. Type your task in the **"Write Todo..."** input box.
2. Click **Add** (or press Enter) to add it to the list.
3. Click the **checkbox** to mark a todo as complete (it turns green with a strikethrough).
4. Click the **✏️ pencil icon** to edit a todo, then click again (📁) to save.
5. Click the **❌ icon** to delete a todo.
6. Refresh the page — your todos will still be there, thanks to `localStorage`.

---

## 📌 Notes

- Todos are stored **only in your browser** (per-browser, per-device). Clearing browser storage/cache will remove them.
- No backend or database is used — everything runs client-side.
