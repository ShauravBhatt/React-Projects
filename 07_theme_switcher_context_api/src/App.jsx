import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard.jsx";
import ThemeButton from "./components/ThemeButton.jsx";
import { ThemeContextProvider } from "./context/themeContext.js";

function App() {
  const [user, setUser] = useState(null);
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    fetch("https://api.github.com/users/ShauravBhatt")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div
        className="   min-h-screen bg-slate-100
 dark:bg-slate-900
  text-black
  dark:text-white
  flex flex-col
  items-center
  justify-center
  gap-4
  p-4
  transition-colors
  duration-300
"
      >
        <ThemeButton />

        <ProfileCard user={user} />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
