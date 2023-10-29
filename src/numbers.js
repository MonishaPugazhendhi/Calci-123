import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";

import "./calci.css";
import { grey } from "@mui/material/colors";

export default function Numbers() {
  const [numbers, setNumbers] = useState(false);
  const [characters, setcharacters] = useState("");
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()_-+=* /.?.>,<|1234567890ABC";

  // const randomNumbers = () => {
  //   setNumbers([Math.floor(Math.random() * 100)]);
  //   // setNumbers([...numbers, t])
  //   const t = chars.split("");
  //   setacharacters([...characters, t[numbers], ...characters]);
  //   console.log(t);
  // };

  const randomNumbers2 = () => {
    let u = "";

    // console.log(v,'vvv')
    for (let i = 0; i <= 10000; i++) {
      let v = Math.floor(Math.random() * chars.length);
      u += chars[v];
      // if(i%3===0) {setNumbers(true);console.log(numbers, "truee") }else {setNumbers(false)}
    }
    setcharacters(u);
  };

  // console.log(characters, "ugy");
  return (
    <Box
      onMouseMove={randomNumbers2}
      // className='box'
      sx={{
        height: "100%",
        width: "100vw",
        fontSize: 15,
        overflow: "hidden",
        overflowWrap: "break-word",
        wordBreak: "break-all",
        position: "absolute",
        opacity: 0.9,
        color:  grey[500],
        cursor:'crosshair',
        // background:'linear-gradient(to top, black , #0c9299)',
        zIndex: 0,
        backgroundImage: 'linear-gradient(to top, #0d2b30, #0d2b30, #0d2b30, #24374c, #0f4d5f, #045c69, #046b71, #228681, #2b938d)',
      }}
    >
      {characters}
    </Box>
  );
}
