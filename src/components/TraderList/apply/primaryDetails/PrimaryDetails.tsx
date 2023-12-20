import React, { useState } from "react";
import "./primarydetails.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { red } from "@mui/material/colors";
import { useRecoilState } from "recoil";
import { applyLevel } from "../../../atoms/apply";

const PrimaryDetails = () => {
  const [experience, setExperience] = React.useState("");
  const [profit, setProfit] = React.useState("");
  const [strategy, setStrategy] = React.useState("");
  const [copier, setCopier] = React.useState("");
  const [facebook, setFacebook] = React.useState({state: false, url: ''});
  const [instagram, setInstagram] = React.useState({state: false, url: ''});
  const [telegram, setTelegram] = React.useState({state: false, url: ''});
  const [discord, setDiscord] = React.useState({state: false, url: ''});
  const [youtube, setYoutube] = React.useState({ state: false, url: '' });
  const [myRatingScale,setMyRatingScale] = useState(0)
  const [applyStage, setApplyStage] = useRecoilState(applyLevel);

  const AccordionStyle = {
    "&:before": {
      backgroundColor: "transparent !important",
    },
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleExperience = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExperience((event.target as HTMLInputElement).value);
  };
  const handleProfit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfit(event.target.value);
  };
  const handleStrategy = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrategy(event.target.value);
  };
  const handleCopier = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCopier(event.target.value);
  };
  function handleNext() {
    let upd = {
      experience,
      profit,
      strategy,
      copier,
      facebook,
      instagram,
      telegram,
      discord,
      youtube,
      myRatingScale
    };
    console.log(upd);
    setApplyStage(applyStage + 1);
  }
  return (
    <div id="PrimaryDetails">
      <h3>Strategy Provider</h3>
      <div className="pri_line1">
        <FormControl>
          <FormLabel id="trading-experience">
            How long have you been trading?
          </FormLabel>
          <RadioGroup
            aria-labelledby="trading-experience"
            name="tradint-experience"
            value={experience}
            onChange={handleExperience}
          >
            <FormControlLabel
              value="Within 6 months"
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
              label="Within 6 months"
            />
            <FormControlLabel
              value="1 - 2 years"
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
              label="1 - 2 years"
            />
            <FormControlLabel
              value="3 - 5 years"
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
              label="3 - 5 years"
            />
            <FormControlLabel
              value="More than 5 years"
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
              label="More than 5 years"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="pri_line2">
        <h4>Rate your trading from 1 - 10 </h4>
        <Slider
          sx={{ color: "#003D2B" }}
          max={10}
          min={0}
          onChange={(e:any)=> {setMyRatingScale(e.target.value)}}
          valueLabelDisplay="on"
        />
      </div>
      <div className="pri_line3">
        <FormControl>
          <FormLabel id="trading-profit">
            What is your average monthly profit %?
          </FormLabel>
          <RadioGroup
            aria-labelledby="trading-profit"
            name="tradint-profit"
            value={profit}
            onChange={handleProfit}
          >
            <FormControlLabel
              value="Below 10%"
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
              label="Below 10%"
            />
            <FormControlLabel
              value="10 - 49%"
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
              label="10 - 49%"
            />
            <FormControlLabel
              value="50 - 100%"
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
              label="50 - 100%"
            />
            <FormControlLabel
              value="Above 100%"
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
              label="Above 100%"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="pri_line4">
        <fieldset>
          <label htmlFor="phone">Enter your Phone Number</label>
          <input type="number" name="phone" id="phone" />
        </fieldset>
      </div>
      <div className={`pri_line5 `}>
        <FormControl>
          <FormLabel id="trading-social">Enable social media</FormLabel>
          <Accordion
            sx={AccordionStyle}
            expanded={expanded === `${facebook ? "panel1" : ""}`}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <FormControlLabel
                  value="Facebook"
                  className={`${facebook.state ? "facebook" : "not-active"}`}
                  control={
                    <Switch
                      checked={facebook.state}
                      onChange={(e) => {
                        setFacebook({state:e.target.checked,url:''});
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Facebook"
                  labelPlacement="end"
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className="fieldset">
                  <label htmlFor="facebook">Username/Link</label>
                  <input value={facebook.url} onChange={(e)=> setFacebook({...facebook,url: e.target.value})} type="text" name="facebook" id="facebook" />
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={AccordionStyle}
            expanded={expanded === `${instagram.state ? "panel2" : ""}`}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <FormControlLabel
                  value="Instagram"
                  className={`${instagram.state ? "instagram" : "not-active"}`}
                  control={
                    <Switch
                      checked={instagram.state}
                      onChange={(e) => {
                        setInstagram({state: e.target.checked, url: ''});
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Instagram"
                  labelPlacement="end"
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className="fieldset">
                  <label htmlFor="instagram">Username/Link</label>
                  <input onChange={(e)=> setInstagram({...instagram,url: e.target.value})} type="text" name="instagram" id="instagram" />
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={AccordionStyle}
            expanded={expanded === `${telegram .state? "panel3" : ""}`}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>
                <FormControlLabel
                  value="Telegram"
                  className={`${telegram.state ? "telegram" : "not-active"}`}
                  control={
                    <Switch
                      checked={telegram.state}
                      onChange={(e) => {
                        setTelegram({state:e.target.checked, url: ''});
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Telegram"
                  labelPlacement="end"
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className="fieldset">
                  <label htmlFor="telegram">Username/Link</label>
                  <input onChange={(e)=> setTelegram({...telegram,url: e.target.value})} type="text" name="telegram" id="telegram" />
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={AccordionStyle}
            expanded={expanded === `${discord.state ? "panel4" : ""}`}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>
                <FormControlLabel
                  value="Discord"
                  className={`${discord.state ? "discord" : "not-active"}`}
                  control={
                    <Switch
                      checked={discord.state}
                      onChange={(e) => {
                        setDiscord({state:e.target.checked,url: ''});
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Discord"
                  labelPlacement="end"
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className="fieldset">
                  <label htmlFor="discord">Username/Link</label>
                  <input onChange={(e)=> setDiscord({...discord,url: e.target.value})} type="text" name="discord" id="discord" />
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={AccordionStyle}
            expanded={expanded === `${youtube.state ? "panel5" : ""}`}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography>
                <FormControlLabel
                  value="Youtube"
                  className={`${youtube.state ? "youtube" : "not-active"}`}
                  control={
                    <Switch
                      checked={youtube.state}
                      onChange={(e) => {
                        setYoutube({state:e.target.checked,url: ''});
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Youtube"
                  labelPlacement="end"
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className="fieldset">
                  <label htmlFor="youtube">Username/Link </label>
                  <input onChange={(e)=> setYoutube({...youtube,url: e.target.value})} type="text" name="youtube" id="youtube" />
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </FormControl>
      </div>
      <div className="pri_line6">
        <FormControl>
          <FormLabel id="trading-strategy">Choose Strategy</FormLabel>
          <RadioGroup
            aria-labelledby="trading-stragegy"
            name="tradint-stragegy"
            value={strategy}
            onChange={handleStrategy}
          >
            <FormControlLabel
              value="Spot Manual"
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
              label="Spot Manual"
            />
            <FormControlLabel
              value="Centurion Robot"
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
              label="Centurion Robot"
            />
            <FormControlLabel
              value="Knight Robot"
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
              label="Knight Robot"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="pri_line7">
        <FormControl>
          <FormLabel id="trading-copier">
            What percentage commission do you want to charge copiers
          </FormLabel>
          <RadioGroup
            aria-labelledby="trading-copier"
            name="tradint-copier"
            value={copier}
            onChange={handleCopier}
          >
            <FormControlLabel
              value="5%"
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
              label="5%"
            />
            <FormControlLabel
              value="10%"
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
              label="10%"
            />
            <FormControlLabel
              value="15%"
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
              label="15%"
            />
            <FormControlLabel
              value="20%"
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
              label="20%"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="pri_line8">
        <button onClick={(e) => handleNext()}>Next</button>
      </div>
      <div className="pri_line9">
        <div className={applyStage === 1 ? "level" : "not-level"}></div>
        <div className={applyStage === 2 ? "level" : "not-level"}></div>
        <div className={applyStage === 3 ? "level" : "not-level"}></div>
        <div className={applyStage === 4 ? "level" : "not-level"}></div>
      </div>
    </div>
  );
};

export default PrimaryDetails;
