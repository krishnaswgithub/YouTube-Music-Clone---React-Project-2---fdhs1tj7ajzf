import "./App.css";
import HomeCont from "./pages/HomeCont";
import ExploreCont from "./pages/ExploreCont";
import LibraryCont from "./pages/LibraryCont";
import UpgradeCont from "./pages/UpgradeCont";
import AlbumMusicPage from "./pages/AlbumPage";
import Musicplay from "./pages/Musicplay";
import SingleMusicPlayer from "./pages/SinglePlay";
import LikedPlaylist from "./pages/LikedPlayList";
import Premium from "./pages/Premium";
import Login from "./components/LoginPage";
import Signup from "./components/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const likedSongArray = [];
  const libraryAlbum = [];
  localStorage.setItem("likedSongArrayUp", JSON.stringify(likedSongArray));
  localStorage.setItem("libraryAlbum", JSON.stringify(libraryAlbum));

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <HomeCont />
        </>
      ),
    },
    {
      path: "/explore",
      element: (
        <>
          <ExploreCont />
        </>
      ),
    },
    {
      path: "/library",
      element: (
        <>
          <LibraryCont />
        </>
      ),
    },
    {
      path: "/upgrade",
      element: (
        <>
          <UpgradeCont />
        </>
      ),
    },
    {
      path: "/musiclist",
      element: (
        <>
          <AlbumMusicPage />
        </>
      ),
    },
    {
      path: "/musiclist/songplay",
      element: (
        <>
          <Musicplay />
        </>
      ),
    },
    {
      path: "/explore/songplay",
      element: (
        <>
          <SingleMusicPlayer />
        </>
      ),
    },
    {
      path: "/LikePlaylist/songplay",
      element: (
        <>
          <LikedPlaylist />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Signup />
        </>
      ),
    },
    {
      path: "/premium",
      element: (
        <>
          <Premium />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
