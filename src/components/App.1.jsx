// import React, { useState, useEffect, useRef } from 'react';
// import Grid from '@mui/material/Grid';
// import { useSelector } from 'react-redux';
// import playIcon from '../assets/play (4).png';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import { Alert } from "@mui/material";
// import CheckIcon from '@mui/icons-material/Check';

// export default function App() {
//   const musicIND = localStorage.getItem("songIndex");
//   const [likeStatus, setLikeStatus] = useState(false);
//   //const [dislike, setDisLikeStatus] = useState(false);
//   const [currentPage, setCurrentPage] = useState(Number(musicIND));
//   const allData = useSelector((store) => store);
//   const id = localStorage.getItem("albumID");
//   const url = `https://academics.newtonschool.co/api/v1/music/album/${id}`;
//   const headers = {
//     'projectId': 'z5civ6ptecws',
//   };

//   const [post, setData] = useState([]);
//   const [alertSt, setAlertSt] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(url, { headers });
//       if (response.ok) {
//         const data = await response.json();
//         return data;
//       } else {
//         throw new Error(response.statusText);
//       }
//     };
//     fetchData().then((d) => {
//       setData(d.data.songs);
//     });
//   }, [url]);

//   const handlePrev = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < post.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleSongSelection = (e) => {
//     let songname = `${e.target.innerText}`;
//     let index = post.findIndex(e => e.title === songname);
//     setCurrentPage(index);
//   };

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const audioRef = useRef(null);

//   const togglePlay = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   const handleSliderChange = (e) => {
//     const newTime = parseFloat(e.target.value);
//     setCurrentTime(newTime);
//     audioRef.current.currentTime = newTime;
//   };

//   const handleLikePlaylist = () => {
//     const arr3 = JSON.parse(localStorage.getItem("loginStatus"));
//     if (!arr3 || arr3.status !== 'success') {
//       alert("You are not logged in");
//     } else {
//       setAlertSt(true);
//       setTimeout(() => {
//         setAlertSt(false);
//       }, 1500);

//       const jwtToken = arr3.token;
//       const projectId = 'z5civ6ptecws';
//       const apiUrl = 'https://academics.newtonschool.co/api/v1/music/favorites/like';
//       const songId = post[currentPage]._id;

//       const requestBody = {
//         songId: songId,
//       };

//       fetch(apiUrl, {
//         method: 'PATCH',
//         headers: {
//           'Authorization': `Bearer ${jwtToken}`,
//           'projectID': projectId,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       })
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           } else {
//             throw new Error('Request failed');
//           }
//         })
//         .then(data => {
//           setLikeStatus(data.message === 'song added to favorites successfully.');
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     }
//   };

//   return (
//     <>
//       {alertSt &&
//         <Alert
//           sx={{ position: 'fixed', top: 0, left: 0, zIndex: '11111', width: '100%', fontSize: '1.5rem', fontWeight: '700', display: alertSt ? "block" : "none", height: 'max-content' }}
//           icon={<CheckIcon fontSize="inherit" />}
//           severity="success"
//         >
//           Song added to favorites successfully.
//         </Alert>
//       }

//       <div className="musicbar">
//         <input
//           type="range"
//           value={currentTime}
//           min={0}
//           max={audioRef.current ? audioRef.current.duration : 0}
//           step={0.01}
//           onChange={handleSliderChange}
//           className="custom-seek-bar"
//         />

//         <audio
//           ref={audioRef}
//           onTimeUpdate={handleTimeUpdate}
//         >
//           <source src={post[currentPage]?.audio_url} type="audio/mpeg" />
//         </audio>

//         <SkipPreviousIcon onClick={handlePrev} className="icon" sx={{ height: '2.5rem', width: "2.5rem" }}></SkipPreviousIcon>
//         {!isPlaying ? <PlayArrowIcon sx={{ height: '2.5rem', width: "2.5rem" }} onClick={togglePlay}></PlayArrowIcon> : <PauseIcon sx={{ height: '2.5rem', width: "2.5rem" }} onClick={togglePlay}></PauseIcon>}
//         <SkipNextIcon onClick={handleNext} className="icon" sx={{ height: '2.5rem', width: "2.5rem" }}></SkipNextIcon>
//       </div>

//       <Grid container spacing={2} className='albumpage'>
//         <Grid className='imagebox' item md={7} sm={7} sx={{ background: 'black', height: '80vh' }} xs={12}>
//           <img src={post[currentPage]?.thumbnail} alt="Album Cover" />
//         </Grid>
//         <Grid item className='detailbox' md={5} sm={5} sx={{ background: 'black', color: 'white', height: '80vh' }} xs={12}>
//           <h2>Album songs</h2>
//           <ol>
//             {post.map((e, index) => (
//               <li
//                 key={index}
//                 className={currentPage === index ? 'selected' : null}
//                 onClick={handleSongSelection}
//               >
//                 {e.title}
//                 <img
//                   src={playIcon}
//                   className={currentPage === index ? 'playsm3' : "playy"}
//                   alt="Play Icon"
//                 />
//               </li>
//             ))}
//           </ol>
//         </Grid>
//       </Grid>
//     </>
//   );
// }
