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
  border: "none",   
  boxShadow: 24,
  overflow: "hidden",
  outline: "none",           
};
export default function DefaultModal({ children, open, setOpen }) {
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
        className={`transition-all duration-500 ease-in-out`}
      >
        {children}
      </Box>
    </Modal>
  );
}
