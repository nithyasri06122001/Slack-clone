import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import db from "../firebase";
import SidebarOption from "./SidebarOption";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "90%",
  bgcolor: "background.paper",
  borderRadius: 1,
  boxShadow: 24,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const [channel, setChannel] = React.useState("");
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    if (channel) {
      db.collection("rooms").add({
        name: channel,
      });
      navigate("/");
    }
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  const addChannel = (e) => {
    setChannel(e.target.value);
  };
  console.log(channel);
  const cancelHandle = (e) => {
    navigate("/");
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="addChannel_form">
            <h3>Add Channel</h3>
            <input
              placeholder="Enter channel name"
              onChange={addChannel}
              value={channel}
              className="addInput"
            />
            <div className="buttonDiv">
              <button
                className="actionBtn submitButton"
                onClick={submitHandle}
                type="submit"
              >
                submit
              </button>
              <button
                className="actionBtn cancelButton"
                onClick={cancelHandle}
                type="submit"
              >
                cancel
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
