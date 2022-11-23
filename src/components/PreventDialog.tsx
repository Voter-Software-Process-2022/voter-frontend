import React from 'react'
import {
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material'
import { makeStyles, Dialog } from '@material-ui/core'

const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    top: 50,
    backgroundColor: '#242424',
    color: '#fff',
    border: '1px solid #434343',
    width: '375px',
  },
})

interface PreventDialogProps {
  isActive: boolean
  onConfirm: (value: unknown) => void
  onCancel: (value: unknown) => void
}

const PreventDialog: React.FC<PreventDialogProps> = ({
  isActive,
  onConfirm,
  onCancel,
}) => {
  const classes = useStyles()

  return (
    <Dialog
      open={isActive}
      keepMounted
      onClose={onCancel}
      aria-describedby='alert-dialog-slide-description'
      classes={{
        paper: classes.dialog,
      }}
    >
      <DialogTitle
        style={{
          textAlign: 'center',
          fontSize: '15px',
          fontWeight: 700,
        }}
      >
        Leaving site?
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id='alert-dialog-slide-description'
          style={{
            color: '#fff',
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          <p>The voting process has not yet been completed.</p>
          <p>If you leave this page, your ballot will automatically be void.</p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onCancel}
          style={{
            backgroundColor: '#575757',
            color: '#fff',
            fontSize: '10px',
            fontWeight: 500,
            border: '1px solid #1f1f1f',
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          style={{
            backgroundColor: '#1976d2',
            color: '#fff',
            fontSize: '10px',
            fontWeight: 500,
            border: '1px solid #3986d2',
          }}
          color='primary'
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PreventDialog
