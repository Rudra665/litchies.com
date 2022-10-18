import * as React from "react";
import Button from "@mui/material/Button";

export default function CustomButton(props) {
  return (
    <Button
      variant={props.variant}
      sx={{
        "&:hover": {
          background: "#db8686",
          border: "#db8686",
          color: "aliceblue",
        },
        marginInline: 1,
        borderRadius: "14px",
        width: "123px",
        height: "40px",
        boxShadow: 3,
        background: "#ec5858",
        color: "white",
        paddingX: "2%",
      }}
    >
      {props.lable}
    </Button>
  );
}
