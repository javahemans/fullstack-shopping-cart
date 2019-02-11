import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TDialog } from '@typings/dialogs';
import { IUser } from '@typings/state/index';
import '@styles/Dialog.css';

interface Props {
  user: IUser;
  openDialog: TDialog;
  setOpen: (dialog: TDialog) => void;
}

interface State {
  email: string;
  address: string;
  phone: string;
}

class AccountDialog extends React.Component<Props, State> {
  state = {
    email: this.props.user.email,
    address: this.props.user.address,
    phone: this.props.user.phone
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const key = e.currentTarget.name;

    this.setState((prevState: State) => ({
      ...prevState,
      [key]: value
    }));
  }

  render() {
    const {
      openDialog,
      setOpen,
    } = this.props;

    return (
      <Dialog
        open={openDialog === 'account'}
        onClose={() => setOpen(null)}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
      >
        <form action="/api/user" method="POST">
          <DialogTitle id="form-dialog-title">Account</DialogTitle>
          <DialogContent>
            <DialogContentText className="dialog-text">
              Edit your account info.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="E-mail"
              name="email"
              type="email"
              value={this.state.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onInputChange(e)}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Address"
              name="address"
              type="text"
              value={this.state.address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onInputChange(e)}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Phone"
              name="phone"
              type="text"
              value={this.state.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onInputChange(e)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(null)} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Sumbit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}

export default AccountDialog;
