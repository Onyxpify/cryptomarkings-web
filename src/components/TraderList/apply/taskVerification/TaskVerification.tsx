import React from "react";
import "./taskverification.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useRecoilState } from "recoil";
import { applyLevel } from "../../../atoms/apply";

const TaskVerification = () => {
  const [experience, setExperience] = React.useState("");
  const [applyStage, setApplyStage] = useRecoilState(applyLevel);


  const handleExperience = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExperience((event.target as HTMLInputElement).value);
  };
  function handleNext() {
    setApplyStage(applyStage + 1);
  }
  return (
    <div id="TaskVerification">
      <h3>Strategy Provider</h3>
      <div className="pri_line1">
        <FormControl>
          <FormLabel id="trading-experience">
            In order to be approved as a strategy provider, please satisfy one
            of the following options
          </FormLabel>
          <RadioGroup
            aria-labelledby="trading-experience"
            name="tradint-experience"
            value={experience}
            onChange={handleExperience}
          >
            <FormControlLabel
              value="Complete a minimum of 20 trades in 3 weeks using Cryptomarkings"
              control={
                <Radio
                  sx={{
                    color: "#000000E5",
                    "&.Mui-checked": {
                      color: "#003D2B",
                    },
                  }}
                />
              }
              label="Complete a minimum of 20 trades in 3 weeks using Cryptomarkings"
            />
            <FormControlLabel
              value="Manually record  a screen video of any exchange account you
                trade with showing your name on the account and showing your
                trading successes. Forward the video to videos@cryptomarkings.net
                use your username as title of the email."
              control={
                <Radio
                  sx={{
                    color: "#000000E5",
                    "&.Mui-checked": {
                      color: "#003D2B",
                    },
                  }}
                />
              }
              label="Manually record  a screen video of any exchange account you
              trade with showing your name on the account and showing your
              trading successes. Forward the video to videos@cryptomarkings.net
              use your username as title of the email."
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="pri_line8">
        <button onClick={(e) => handleNext()}>Submit</button>
      </div>
      <div className="pri_line9">
        <div className={applyStage > 1 ? "level" : "not-level"}></div>
        <div className={applyStage === 2 ? "level" : "not-level"}></div>
        <div className={applyStage === 3 ? "level" : "not-level"}></div>
        <div className={applyStage === 4 ? "level" : "not-level"}></div>
      </div>
    </div>
  );
};

export default TaskVerification;
