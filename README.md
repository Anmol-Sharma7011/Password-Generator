# 🗂️ React Todo Application

A clean, responsive, and high-performance **Todo App** built with **React**, using the **Context API** for state management, complete **CRUD operations**, and **localStorage** for data persistence. This project demonstrates modular architecture, component reusability, and modern React practices.

🌐 **Live Demo** → [todo-react-app-by-anmol-sharma.vercel.app](https://todo-react-app-by-anmol-sharma.vercel.app/)

---

## 📌 Key Features

- ✅ Add, edit, delete, and mark todos as completed
- ⚙️ Global state managed with **React Context API**
- 💾 Persistent storage using **localStorage**
- 🧠 Smart UI updates based on state
- 💡 Clean code structure & reusable components
- ⚡ Fully responsive & accessible
- 🚀 Deployed using **Vercel**

---

## 📁 Project Structure

src/
├── components/
│ ├── TodoForm.jsx # Input and form handling
│ ├── TodoItem.jsx # Single todo item UI
│ └── TodoList.jsx # Renders list of todos
├── context/
│ └── TodoContext.jsx # Context API logic
├── App.jsx # Root component
└── index.js # Entry point


---

## 🛠️ Tech Stack

| Technology     | Role                          |
|----------------|-------------------------------|
| React          | UI Library                    |
| Context API    | Global state management       |
| localStorage   | Persistent data storage       |
| CSS / Tailwind | Styling (optional)            |
| Vercel         | Deployment                    |

---

## 🚀 Getting Started

Clone the repository and run the app locally:

```bash
git clone https://github.com/your-username/todo-react-app.git
cd todo-react-app
npm install
npm start
```

🧠 How It Works
TodoContext provides a global state for all components.

State updates are handled via context provider functions.

All todos are saved to and retrieved from localStorage automatically.

📄 License
This project is open-source and available under the MIT License.

🙋‍♂️ Author
Developed by Anmol Sharma
🔗 Live App

⭐️ Feedback & Contributions
If you find this project useful, consider giving it a ⭐️.
Contributions, issues, and feature requests are welcome!

Made with ❤️ love by Anmol Sharma!
