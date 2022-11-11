import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Aos from "aos";
import { ForkRight } from "@mui/icons-material";
import { Grid } from "semantic-ui-react";

export default function SimplePaper(props) {
  return (
    <Box
      onClick={() => props.handleChange(props.value)}
      sx={{
        mx: 2,
        my: 3,

        "& > :not(style)": {
          width: 220,
          cursor: "pointer",
          height: "auto",
          borderRadius: "12px",
          boxShadow: props.isShadow && "0px 14px 12px rgba(116, 115, 128, 0.1)",
          border: "2px solid rgba(243, 243, 243, 0.5)",
        },
      }}
    >
      {/* <CardActionArea> */}
      <Paper>
        <Grid container spacing="true">
          <Grid item>
            <Box paddingTop={3}>
              <img width="100%" src={props.imgUrl}></img>
            </Box>
          </Grid>
          <Grid item>
            <Box marginBlock="35px">
              <Typography margin fontWeight={600} >
                {props.name}
              </Typography>

              <Typography paddingBottom={2} color="#656464">
                {props.name2}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      {/* </CardActionArea> */}
    </Box>
  );
}
