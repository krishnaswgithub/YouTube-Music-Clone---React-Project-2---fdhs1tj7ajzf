import '../styles/library.css';
import LikedIcon from "../assets/likedmusic.png";
import SavedIcon from "../assets/saved-episodes.png";
import PushPinIcon from '@mui/icons-material/PushPin';
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
      <div className="likedSong">
        <div className="likeMusicCard" onClick={handleLikePlayList} >
          <img src={LikedIcon} alt="liked album" />
          <img className="icon4" src={PlayIcon} alt="icon" />
          <h5>Liked music</h5>
          <p>
            <PushPinIcon /> Auto playlist
          </p>
        </div>
        <div className="likeMusicCard" onClick={handleLikePlayList} >
          <img src={SavedIcon} alt="liked album" />
          <img className="icon4" src={PlayIcon} alt="icon" />
          <h5>Episodes for later</h5>
          <p>
            Episodes that you save for later
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
