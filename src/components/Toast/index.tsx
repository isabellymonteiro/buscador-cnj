import { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={4} ref={ref} variant='outlined' {...props} />
})

interface ToastProps {
  open: boolean
  onClose: () => void
  severity: AlertColor | undefined
  message: string
}

const Toast = ({ open, onClose, severity, message }: ToastProps) => {
  return (
    <>
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={onClose}
        anchorOrigin={{ vertical:'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={onClose} 
          severity={severity} 
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Toast