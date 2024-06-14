import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

// Dummy data for testing
const dummyFans = [
  { id: 1, username: 'Fan One', email: 'fanone@example.com' },
  { id: 2, username: 'Fan Two', email: 'fantwo@example.com' },
  { id: 3, username: 'Fan Three', email: 'fanthree@example.com' },
  { id: 4, username: 'Fan Four', email: 'fanfour@example.com' },
  { id: 5, username: 'Fan Five', email: 'fanfive@example.com' },
];

const SelectFansModal = ({ open, onClose, onSave }) => {
  const [selectedFans, setSelectedFans] = useState([]);

  const handleToggle = (fan) => {
    setSelectedFans(prevSelectedFans =>
      prevSelectedFans.includes(fan.id)
        ? prevSelectedFans.filter(id => id !== fan.id)
        : [...prevSelectedFans, fan.id]
    );
  };

  const handleSave = () => {
    onSave(selectedFans);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Select Top Fans</DialogTitle>
      <DialogContent>
        <List>
          {dummyFans.map(fan => (
            <ListItem key={fan.id} button onClick={() => handleToggle(fan)}>
              <FormControlLabel
                control={<Checkbox checked={selectedFans.includes(fan.id)} />}
                label={<ListItemText primary={fan.name} secondary={fan.email} />}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectFansModal;
