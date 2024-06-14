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
const dummyArtists = [
  { id: 1, username: 'Artist One', email: 'Artistone@example.com' },
  { id: 2, username: 'Artist Two', email: 'Artisttwo@example.com' },
  { id: 3, username: 'Artist Three', email: 'Artistthree@example.com' },
  { id: 4, username: 'Artist Four', email: 'Artistfour@example.com' },
  { id: 5, username: 'Artist Five', email: 'Artistfive@example.com' },
];

const SelectArtistsModal = ({ open, onClose, onSave }) => {
  const [selectedArtists, setSelectedArtists] = useState([]);

  const handleToggle = (Artist) => {
    setSelectedArtists(prevSelectedArtists =>
      prevSelectedArtists.includes(Artist.id)
        ? prevSelectedArtists.filter(id => id !== Artist.id)
        : [...prevSelectedArtists, Artist.id]
    );
  };

  const handleSave = () => {
    onSave(selectedArtists);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Select Top Artists</DialogTitle>
      <DialogContent>
        <List>
          {dummyArtists.map(Artist => (
            <ListItem key={Artist.id} button onClick={() => handleToggle(Artist)}>
              <FormControlLabel
                control={<Checkbox checked={selectedArtists.includes(Artist.id)} />}
                label={<ListItemText primary={Artist.name} secondary={Artist.email} />}
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

export default SelectArtistsModal;
