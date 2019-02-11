import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { TDialog } from '@typings/dialogs';
import '@styles/Dialog.css';

interface Props {
  openDialog: TDialog;
  setOpen: (dialog: TDialog) => void;
  emptyCart: () => void;
}

const EmptyCartDialog = ({ openDialog, setOpen, emptyCart }: Props) => (
  <Dialog open={openDialog === 'emptyCart'}>
    <DialogTitle>Are you sure that you want to empty your cart?</DialogTitle>
    <DialogContent>
      <DialogContentText className="dialog-text">
        All items will be removed.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(null)} color="primary">
        Cancel
      </Button>
      <Button onClick={emptyCart} color="primary">
        Yes
      </Button>
    </DialogActions>
  </Dialog>
);

export default EmptyCartDialog;
