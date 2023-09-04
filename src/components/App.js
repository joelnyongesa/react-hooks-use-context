import React, {  useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeProvider } from "../context/theme";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      <UserProvider>
        {/* Wraps the compnents that need access to context dat in the provider */}
        <ThemeProvider>
          <Header theme={theme} setTheme={setTheme} user={user} setUser={setUser} />
          <Profile theme={theme} />
        </ThemeProvider>
      </UserProvider>

    </main>
  );
}

export default App;
