import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SelectArtistsModal from './SelectArtistsModal';

// Dummy data for testing
const dummyArtists = [
  { id: 1, username: 'Artists One', email: 'Artistsone@example.com' },
  { id: 2, username: 'Artists Two', email: 'Artiststwo@example.com' },
  { id: 3, username: 'Artists Three', email: 'Artiststhree@example.com' },
  { id: 4, username: 'Artists Four', email: 'Artistsfour@example.com' },
  { id: 5, username: 'Artists Five', email: 'Artistsfive@example.com' },
];

const TopArtists = () => {
  const [open, setOpen] = useState(false);
  const [topArtists, setTopArtists] = useState([]);

  // Load topArtists from localStorage on component mount
  useEffect(() => {
    const storedTopArtists = JSON.parse(localStorage.getItem('topArtists')) || [];
    setTopArtists(storedTopArtists);
  }, []);

  // Save topArtists to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('topArtists', JSON.stringify(topArtists));
  }, [topArtists]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = (selectedArtists) => {
    const newTopArtists = selectedArtists.map(id => dummyArtists.find(Artists => Artists.id === id));
    setTopArtists(newTopArtists);
  };

  const handleDeleteArtists = (id) => {
    const updatedArtists = topArtists.filter(Artists => Artists.id !== id);
    setTopArtists(updatedArtists);
  };

  return (
    <>
      <Button onClick={handleOpen} color="primary">
        Select Top Artists
      </Button>
      <SelectArtistsModal open={open} onClose={handleClose} onSave={handleSave} />
      <Paper style={{ marginTop: 20, padding: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topArtists.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No Top Artists Selected
                </TableCell>
              </TableRow>
            ) : (
              topArtists.map(artist => (
                <TableRow key={artist.id}>
                  <TableCell>{artist.id}</TableCell>
                  <TableCell>{artist.username}</TableCell>
                  <TableCell>{artist.email}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDeleteArtists(artist.id)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default TopArtists;
