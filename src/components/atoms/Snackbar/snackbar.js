import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackAlert = ({ children, type, open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={4500}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type || 'success'}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export default SnackAlert;
