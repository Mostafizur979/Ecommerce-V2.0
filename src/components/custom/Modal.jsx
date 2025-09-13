import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography'; 


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: "10px",
  border: "none",   // your border
  boxShadow: 24,
  overflow: "hidden",
  outline: "none",            // 👈 prevent focus outline
};
export default function CustomModal({ title, children, open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <Box
        sx={style}
        className={`transition-all duration-500 ease-in-out 
          ${open ? "w-[800px] h-[600px]" : "w-0 h-0"}`}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description">
         <div className='mt-10'> {children}</div>
        </Typography>

      </Box>
    </Modal>
  );
}
