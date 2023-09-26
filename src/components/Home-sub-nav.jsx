import Button from "@mui/material/Button";
import { useState } from "react";

const Subnav = () => {
  const [moodVal, setMoodVal] = useState("");
  const handleClick = (e) => {
    e.target.value && setMoodVal(e.target.value);
  };
  const mood = { value: moodVal };

  const relax = () => {
    return alert("This functionality will added further...")
  }

  const workout = () => {
    return alert("This functionality will added further...")
  }

  const energize = () => {
    return alert("This functionality will added further...")
  }

  const commute = () => {
    return alert("This functionality will added further...")
  }

  const focus = () => {
    return alert("This functionality will added further...")
  }
  return (
    <>
      <div className="subnav" onClick={handleClick}>
        <Button
          variant="outlined"
          value="relax"
          style={{ textTransform: "capitalize" }}
          onClick={relax}
        >
          Relax
        </Button>
        <Button
          variant="outlined"
          value="work"
          style={{ textTransform: "capitalize" }}
          onClick={workout}
        >
          Workout
        </Button>
        <Button
          variant="outlined"
          value="energy"
          style={{ textTransform: "capitalize" }}
          onClick={energize}
        >
          Energize
        </Button>
        <Button
          variant="outlined"
          value="commute"
          style={{ textTransform: "capitalize" }}
          onClick={commute}
        >
          Commute
        </Button>
        <Button
          variant="outlined"
          value="focus"
          style={{ textTransform: "capitalize" }}
          onClick={focus}
        >
          Focus
        </Button>
      </div>
    </>
  );
};
export default Subnav;
