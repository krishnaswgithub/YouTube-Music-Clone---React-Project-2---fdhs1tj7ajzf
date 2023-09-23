import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import Spinner2 from './Spinner2';
import Songcard from './Card';
import { Pagination } from '@mui/material';

const Explore = () => {
  const [page, setPage] = useState(1);
  const [catVal, setCatVal] = useState('');
  const [moodVal, setMoodVal] = useState('');
  const [url, setUrl] = useState(`https://academics.newtonschool.co/api/v1/music/song?page=${page}&limit=10`);
  const [exploreData, setExploreData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            'projectId': 'z5civ6ptecws',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setExploreData(data);
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [page, url]);

  const handleChange = (event, value) => {
    setPage(value);
    setUrl(`https://academics.newtonschool.co/api/v1/music/song?page=${value}&limit=10`);
  };

  const handleNewRelease = () => {
    setCatVal('newrelease');
    setPage(1);
    setUrl(`https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}&page=1&limit=10`);
  };

  const handleMood = (mood) => {
    setCatVal('moods');
    setPage(1);
    setMoodVal(mood);
    setUrl(`https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"${mood}"}&page=1&limit=10`);
  };

  return (
    <div className="explore">
      <div className="subnavigation">
        <Grid container spacing={2}>
          <Grid item className='explore_category' xs={12} sm={12} md={6}>
            <Button
              variant="contained"
              sx={{
                color: catVal === 'newrelease' ? 'red' : null,
                borderBottom: catVal === 'newrelease' ? '3px solid red' : null,
              }}
              onClick={handleNewRelease}
              startIcon={<NewReleasesIcon />}
              activeColor="red"
            >
              New releases
            </Button>
          </Grid>
          <Grid item className='explore_category' xs={12} sm={12} md={6}>
            <Button
              variant="contained"
              sx={{
                color: catVal === 'moods' ? 'red' : null,
                borderBottom: catVal === 'moods' ? '3px solid red' : null,
              }}
              onClick={() => handleMood('mood')}
              startIcon={<SentimentSatisfiedIcon />}
            >
              Mood and genres
            </Button>
          </Grid>
        </Grid>
        <hr/>
        {catVal === 'moods' && (
          <Grid container spacing={2} sx={{ color: 'white', margin: '2vh 0', display: catVal === 'moods' ? 'block' : 'none' }}>
            <Grid container sx={{ margin: '2vh 0' }}>
              <Grid item className='mood_category' xs={12} sm={3}>
                <Button
                  variant="outlined"
                  sx={{ backgroundColor: moodVal === 'happy' ? 'rgb(0, 132, 255)' : null }}
                  onClick={() => handleMood('happy')}
                >
                  Happy
                </Button>
              </Grid>
              <Grid item className='mood_category' xs={12} sm={3}>
                <Button
                  variant="outlined"
                  sx={{ backgroundColor: moodVal === 'romantic' ? 'rgb(0, 132, 255)' : null }}
                  onClick={() => handleMood('romantic')}
                >
                  Romantic
                </Button>
              </Grid>
              <Grid item className='mood_category' xs={12} sm={3}>
                <Button
                  variant="outlined"
                  sx={{ backgroundColor: moodVal === 'excited' ? 'rgb(0, 132, 255)' : null }}
                  onClick={() => handleMood('excited')}
                >
                  Excited
                </Button>
              </Grid>
              <Grid item className='mood_category' xs={12} sm={3}>
                <Button
                  variant="outlined"
                  sx={{ backgroundColor: moodVal === 'sad' ? 'rgb(0, 132, 255)' : null }}
                  onClick={() => handleMood('sad')}
                >
                  Sad
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
      <div className="explore_mainContainer">
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }} spacing={2}>
          {!exploreData.data ? <Spinner2 /> : null}
          {exploreData.data && exploreData.data.map((e) => (
            <Grid item lg={2.4} key={e._id}>
              <Songcard details={e} />
            </Grid>
          ))}
          {exploreData.data && (
            <Pagination
              sx={{ display: 'flex', justifyContent: 'center', width: '100%', color: 'white', margin: '50px 0' }}
              count={10}
              page={page}
              color="primary"
              onChange={handleChange}
            />
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Explore;
