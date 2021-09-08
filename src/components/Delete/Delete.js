import React from "react";
import Delete1 from '../../Assests/delete.png';
import './delete.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';

const Delete = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const [state, setState] = React.useState({
        open1:false,
        open2:false,
        vertical: 'top',
        horizontal: 'center',
      });
    
      const { vertical, horizontal, open1 ,open2} = state;
    
      const handleClick = (newState) => () => {
        setState({ open1: true, ...newState });
        setOpen(false);
      };
      const handleClick1 = (newState) => () => {
        setState({ open2: true, ...newState });
        setOpen(false);
      };
    
      const handleClose = () => {
        setState({ ...state, open1: false ,open2:false});
      };


    return <div>
        <button onClick={handleClickOpen} className='deletebutton'><img className="deleteimg"src={Delete1}></img></button>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do You Want To Delete?"}</DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
           
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClick1({ vertical: 'bottom', horizontal: 'right' })} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <div>
      <Snackbar autoHideDuration={1500}
        anchorOrigin={{ vertical, horizontal }}
        open={open1}
        onClose={handleClose}
        message="Unable to delete assessment!!"
        key={vertical + horizontal}
      />
      <Snackbar autoHideDuration={1500}
        anchorOrigin={{ vertical, horizontal }}
        open={open2}
        onClose={handleClose}
        message="Element Deleted Successfully!!"
        key={vertical + horizontal}
      />
      </div>
    </div>
    

}
export default Delete;