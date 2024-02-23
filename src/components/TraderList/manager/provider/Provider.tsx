import React from 'react';
import './provider.scss';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch } from '@mui/material';

const Provider = () => {
    const [copier, setCopier] = React.useState("");
      const [facebook, setFacebook] = React.useState({ state: false, url: "" });


    const handleCopier = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCopier(event.target.value);
  };
  return (
      <div id='Provider'>
          <h3>About Strategy</h3>
          <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur. Venenatis malesuada proin morbi arcu purus. Ipsum arcu egestas proin et in. Mi quisque integer morbi fringilla fermentum pharetra. Urna viverra orci eu sed sit elementum ipsum. Dictumst suspendisse purus mauris malesuada. Mollis ac id parturient elementum. Auctor ut tincidunt vitae elit lobortis gravida ante. Sed nulla eget.</p>
          </div>
          <div className="line1">
              <span className="label">What  percentage commission do you want to charge copiers</span>
               <FormControlLabel
                  value="Facebook"
                  className={`${facebook.state ? "facebook" : "not-active"}`}
                  control={
                    <Switch
                      checked={facebook.state}
                      onChange={(e) => {
                        setFacebook({ state: e.target.checked, url: "" });
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label=" Setting . "
                  labelPlacement="start"
                />
          </div>
          <div className="line2">
        <FormControl>
          <FormLabel id="trading-copier">
            {/* What percentage commission do you want to charge copiers */}
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
          <div className="btns">
              <button>Save Changes</button>
          </div>
    </div>
  )
}

export default Provider