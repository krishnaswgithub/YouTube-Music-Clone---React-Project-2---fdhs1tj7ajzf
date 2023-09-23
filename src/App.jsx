import "./App.css";
import HomeCont from "./container/HomeCont";
import ExploreCont from "./container/ExploreCont";
import LibraryCont from "./container/LibraryCont";
import UpgradeCont from "./container/UpgradeCont";
import AlbumMusicPage from "./container/AlbumPage";
import Musicplay from "./container/Musicplay";
import SingleMusicPlayer from "./container/SinglePlay";
import LikedPlaylist from "./container/LikedPlayList";
import Premium from "./container/Premium";
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
