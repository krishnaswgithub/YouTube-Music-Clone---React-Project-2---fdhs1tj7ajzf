import { useState, useEffect } from "react";
//import { useDispatch } from 'react-redux';
import { Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Spinner from "./Spinner";
import ActionAreaCard from "./AlbumCard";

const Home = (prop) => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  //const dispatch = useDispatch();
  const albumsUrl = `https://academics.newtonschool.co/api/v1/music/album?page=${page}&limit=10`;
  const headers = {
    projectId: "z5civ6ptecws",
  };
  const [albumData, setAlbumData] = useState([]);
  const [allAlbums, setAllAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url, { headers });

        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData(albumsUrl).then((d) => {
      setAlbumData(d);
      setAllAlbums(d.data);
    });
  }, [page, albumsUrl]);

  useEffect(() => {
    if (prop.searchValue) {
      const filteredAlbums = allAlbums.filter((element) =>
        element.title.toLowerCase().includes(prop.searchValue.toLowerCase())
      );
      setAlbumData({ data: filteredAlbums });
    } else {
      setAlbumData({ data: allAlbums });
    }
  }, [prop.searchValue, allAlbums]);

  return (
    <>
      {!prop.searchValue ? (
        <h1 className="mix">Mix for you</h1>
      ) : (
        <h1 className="mix">Your search</h1>
      )}
      <div className="Home-sub-container">
        {!albumData.data ? <Spinner /> : null}
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center" }}
          spacing={2}
        >
          {albumData.data &&
            albumData.data.map((e, ind) => (
              <Grid key={ind} item lg={2.4}>
                <ActionAreaCard details={e} />
              </Grid>
            ))}
          {albumData.data && !prop.searchValue ? (
            <Pagination
              className="pagination"
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                color: "white",
                margin: "50px 0",
              }}
              count={10}
              page={page}
              color={"primary"}
              onChange={handleChange}
            />
          ) : null}
        </Grid>
      </div>
    </>
  );
};

export default Home;
