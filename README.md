# 🔐 Password Generator App (React)

A fast, secure, and responsive **Password Generator** built with **React** that allows users to generate strong passwords with customizable options such as length, numbers, and special characters.

🚀 **Live Demo**: [Click to View](https://password-generator-hateswkej-anmol-sharma7011s-projects.vercel.app/)

---

## ✨ Features

- 🔢 Set password length using a slider (8–25 characters)
- 🔁 Choose to include **numbers** and/or **special characters**
- 📋 Copy password to clipboard with a single click
- 💡 Auto-generates new password on every change
- 🎨 Beautiful and responsive UI using **Tailwind CSS**
- ⚡ Instant password updates with `useEffect` and `useCallback`

---

## 🛠 Tech Stack

| Tech            | Description                  |
|-----------------|------------------------------|
| React           | Front-end library             |
| Hooks (`useState`, `useEffect`, `useCallback`, `useRef`) | For state & DOM logic |
| Tailwind CSS    | Utility-first styling         |
| Vercel          | Hosting platform              |

---

## 🧠 Code Highlights

```jsx
useEffect(() => {
  passwordGenerator();
}, [length, numberAllowed, charAllowed, passwordGenerator]);
const copyPasswordToClipboard = () => {
  passwordRef.current?.select();
  navigator.clipboard.writeText(password);
};
```
Copies password directly to user's clipboard.

📂 Project Structure
src/
├── App.jsx           # Main component with logic
├── App.css           # Tailwind & custom styling
└── index.js          # Entry point

🧑‍💻 Author
Anmol Sharma
🔗 Live Project

📄 License
This project is licensed under the MIT License.

🙌 Feedback
If you find this project useful or cool, leave a ⭐ on GitHub!
Contributions, ideas, and improvements are always welcome.
