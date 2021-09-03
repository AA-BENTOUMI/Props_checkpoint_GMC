import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function ModalMovies({ addItem }) {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = useState({});
  /*********** add movie component   **********************/
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{
          backgroundColor: "lightblue",
          position: "fixed",
          margin: "5% 30%",
        }}
      >
        Add New Movie
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            please enter your Movie information
          </DialogContentText>
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="name"
            label="Movie Name"
            type="name"
            fullWidth
            name="name"
          />
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="Date"
            label="Date"
            type="number"
            fullWidth
            name="date"
          />
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="Type"
            label="Type"
            type="text"
            fullWidth
            name="type"
          />
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="image"
            label="image"
            type="text"
            fullWidth
            name="image"
          />
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="trailer"
            label="trailer"
            type="text"
            fullWidth
            name="trailer"
          />
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            name="description"
          />
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="Rating"
            label="Rating"
            type="number"
            fullWidth
            name="rating"
            InputProps={{ inputProps: { min: 0, max: 5 } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => {
              addItem(item);
              handleClose();
            }}
          >
            Add Movie
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ModalMovies;
