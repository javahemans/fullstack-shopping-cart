import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TDialog } from '@typings/dialogs';
import '@styles/Dialog.css';

interface Props {
  openDialog: TDialog;
  setOpen: (dialog: TDialog) => void;
}

class LoginDialog extends React.Component<Props> {
  render() {
    const {
      openDialog,
      setOpen,
    } = this.props;

    return (
      <Dialog
        open={openDialog === 'login'}
        onClose={() => setOpen(null)}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
      >
        <form action="/auth/login" method="POST">
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText className="dialog-text">
              Enter your username and password to login, or
              <span className="dialog-link" onClick={() => setOpen('register')}> register </span>
              if you don't have an account yet.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Username"
              name="username"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              label="Password"
              name="password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(null)} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Login
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    )
  }
}

export default LoginDialog;
