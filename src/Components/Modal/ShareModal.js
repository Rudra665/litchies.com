import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
// import Facebook2 from "./facebook2.png";
import CopyBox from "../CopyBox/CopyBox";
// import Insta2 from "./Insta2.svg";
// import Linked2 from "./Linked2.svg";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { IconButton } from "@mui/joy";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ShareModal(props) {
  const shareUrl =
    "https://play.google.com/store/apps/details?id=com.litchies";
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} align="center">
          <Typography variant="h5">Invite Friends to join</Typography>
          <Box m={3}>
            <IconButton>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} round />
              </FacebookShareButton>
            </IconButton>
            <IconButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={40} round />
              </LinkedinShareButton>
            </IconButton>
            <IconButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
            </IconButton>
          </Box>
          <Divider />
          <Typography mt={2}>or copy the link</Typography>
          <Box>
            <CopyBox />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
