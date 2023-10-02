import "../styles/avatarPopup.css";

import { useRef, useState } from "react";
import LoginButt from "./LoginButt";
import { Button } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SecurityIcon from "@mui/icons-material/Security";
import HelpIcon from "@mui/icons-material/Help";
import { useNavigate } from "react-router";

export const AvatarPopup = () => {
  const menuSt = useRef(false);
  const [main_router_val, setMainVal] = useState("Home");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col dropDownProfile">
      <div>
        <Button
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <AccountBoxIcon />
          Your channel
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            setMainVal("Upgrade");
            navigate("/upgrade");
          }}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <YouTubeIcon />
          Get Premium
        </Button>
      </div>
      <div>
        <Button
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <SecurityIcon />
          Privecy Policy
        </Button>
      </div>
      <div>
        <Button
        
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <HelpIcon />
          Help
        </Button>
      </div>
      <hr />
      <div>
        <LoginButt st={menuSt} />
      </div>
    </div>
  );
};
