import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Dialog } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import "./Dialog.css"
const style = {

  width: 400,
  height: "200px",
  border: "3px solid green",
  p: 4,
};

export default function WebsitePopup({ Popup }) {
  //   const [open, setOpen] = React.useState(false);
  const handleOpen = () => Popup(true);
  const handleClose = () => Popup(false);

  return (
    <div style={{ outline: "none" }}>
      <Dialog
        open={Popup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <div className='dialog_box'>
          <DialogContent sx={{ alignItems: "center", width: "100%", display: "flex", flexDirection: "column" }}>
            <div className='img_div' >
              <img src="images/home/webdevimg.png" className='dialog_img' alt="" srcset="" />
            </div>
            <div className='dialog_divider'>
              <div className='divider_div'></div>
              <ArrowDropDownCircleIcon sx={{ color: "#557097" }} />
              <div className='divider_div'></div>
            </div>
            <h4 className='web_popup'>Website Developement</h4>
            <p className='web_desc'>We provides end-to-end Web development solutions for emerging
              markets &amp; companies based on the technology of mobile-centric web to meet your business needs. We have an excellent team of web developers, who are constantly
              experimenting &amp; implementing new ideas that will transform your web application into a gold mine for your business.</p>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
