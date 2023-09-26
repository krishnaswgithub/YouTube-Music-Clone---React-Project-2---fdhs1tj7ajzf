import { useState, useEffect } from "react";
import '../styles/likedPlaylist.css';
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import Playlist from './likedMusicPlay';

const TryLikedPlayList = () => {
  const navigate = useNavigate();

  const arr3 = JSON.parse(localStorage.getItem("loginStatus"));
  const jwtToken = arr3?.token;
  const url = 'https://academics.newtonschool.co/api/v1/music/favorites/like';
  const headers = {
    'projectId': 'z5civ6ptecws',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwtToken}`,
  };

  const [likedSong, setLikedSong] = useState([]);
  const [likedStatus, setLikedStatus] = useState({});
  const [dislikedStatus, setDislikedStatus] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, { headers });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(response.statusText);
      }
    };
    fetchData().then((d) => {
      setLikedSong(d.data.songs);
      const initialLikedStatus = {};
      const initialDislikedStatus = {};
      d.data.songs.forEach((song) => {
        initialLikedStatus[song._id] = false;
        initialDislikedStatus[song._id] = false;
      });
      setLikedStatus(initialLikedStatus);
      setDislikedStatus(initialDislikedStatus);
    });
  }, []);

  const handleLike = (songId) => {
    // Toggle like status for the song
    const updatedLikedStatus = { ...likedStatus };
    updatedLikedStatus[songId] = !updatedLikedStatus[songId];

    // If like is clicked, set dislike status to false
    if (updatedLikedStatus[songId]) {
      const updatedDislikedStatus = { ...dislikedStatus };
      updatedDislikedStatus[songId] = false;
      setDislikedStatus(updatedDislikedStatus);
    }

    setLikedStatus(updatedLikedStatus);
  };

  const handleDislike = (songId) => {
    // Toggle dislike status for the song
    const updatedDislikedStatus = { ...dislikedStatus };
    updatedDislikedStatus[songId] = !updatedDislikedStatus[songId];

    // If dislike is clicked, set like status to false
    if (updatedDislikedStatus[songId]) {
      const updatedLikedStatus = { ...likedStatus };
      updatedLikedStatus[songId] = false;
      setLikedStatus(updatedLikedStatus);
    }

    setDislikedStatus(updatedDislikedStatus);
  };

  return (
    <div className="playlist">
      {likedSong.length > 0 ? (
        <Playlist
          songlist={likedSong}
          likedStatus={likedStatus}
          dislikedStatus={dislikedStatus}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      ) : (
        <div className="EmptyErr">
          <Button variant="contained" className="backBtn" onClick={() => navigate(-1)} color="primary">Back</Button>
          <span className="loader2">Empty</span>
        </div>
      )}
    </div>
  );
};

export default TryLikedPlayList;
