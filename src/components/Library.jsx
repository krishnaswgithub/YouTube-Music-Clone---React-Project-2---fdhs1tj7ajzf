import '../styles/library.css';
import LikedIcon from "../assets/likedmusic.jpg";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlayIcon from "../assets/play (3).png";
import AlbumCard from "./AlbumCard";
import { useNavigate } from "react-router";

const Library = () => {
  const navigate = useNavigate();

  const arr = JSON.parse(localStorage.getItem("libraryAlbum"));

  const handleLikePlayList = () => {
    navigate("/LikePlaylist/songplay");
  };

  return (
    <div className="library">
      <h2>All albums you have liked are here...</h2>
      <div className="likedSong">
        <div className="likeMusicCard" onClick={handleLikePlayList} >
          <img src={LikedIcon} alt="liked album" />
          <img className="icon4" src={PlayIcon} alt="icon" />
          <h5>Your Favourites</h5>
          <p>
            <PlayCircleOutlineIcon /> Auto playlist
          </p>
        </div>

        {arr &&
          arr.map((e, index) => (
            <AlbumCard key={index} details={e} onClick={handleLikePlayList} />
          ))}
      </div>
    </div>
  );
};

export default Library;
