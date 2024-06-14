import React, { useState } from "react";
import { Admin, Resource } from "react-admin";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import restProvider from "ra-data-simple-rest";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";
import ArtistList from "./components/Artist/ArtistList";
import ArtistCreate from "./components/Artist/ArtistCreate";
import ArtistEdit from "./components/Artist/ArtistEdit";
import TopFans from "./components/Topfans/TopFans";
import Login from "./components/Login"; 


const theme = createTheme();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = (username, password) => {
    // Emmy Implement your authentication logic here
    // For demo purposes, Emmy use this hardcoded credentials
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login login={handleLogin} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Admin dataProvider={restProvider("http://localhost:3000")}>
        <Resource
          name="posts"
          list={PostList}
          create={PostCreate}
          edit={PostEdit}
        />
        <Resource
          name="artists"
          list={ArtistList}
          create={ArtistCreate}
          edit={ArtistEdit}
        />
        <Resource
          name="Topfans"
          list={TopFans}
        />
      </Admin>
    </ThemeProvider>
  );
}

export default App;
