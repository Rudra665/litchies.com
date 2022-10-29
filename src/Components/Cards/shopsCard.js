import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { Avatar, Typography } from "@mui/material";
export default function SimplePaper(props) {
  return (
    <Box
      sx={{
        mx: 2,
        my: 3,

        "& > :not(style)": {
          width: 200,
          //   height: 300,
          borderRadius: "12px",
          boxShadow: "0px 34px 68px rgba(116, 115, 128, 0.1)",
        },
      }}
    >
      <Paper elevation={2}>
        <img src={props.imgUrl}></img>
        <Typography margin fontWeight={600}>
          {props.name}
        </Typography>
        <Typography paddingBottom={2} color="#656464">
          {props.name2}
        </Typography>
      </Paper>
    </Box>
  );
}
