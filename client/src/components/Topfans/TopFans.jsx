import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SelectFansModal from './SelectFansModal';

// Dummy data for testing
const dummyFans = [
  { id: 1, username: 'Fan One', email: 'fanone@example.com' },
  { id: 2, username: 'Fan Two', email: 'fantwo@example.com' },
  { id: 3, username: 'Fan Three', email: 'fanthree@example.com' },
  { id: 4, username: 'Fan Four', email: 'fanfour@example.com' },
  { id: 5, username: 'Fan Five', email: 'fanfive@example.com' },
];

const TopFans = () => {
  const [open, setOpen] = useState(false);
  const [topFans, setTopFans] = useState([]);

  // Load topFans from localStorage on component mount
  useEffect(() => {
    const storedTopFans = JSON.parse(localStorage.getItem('topFans')) || [];
    setTopFans(storedTopFans);
  }, []);

  // Save topFans to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('topFans', JSON.stringify(topFans));
  }, [topFans]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = (selectedFans) => {
    const newTopFans = selectedFans.map(id => dummyFans.find(fan => fan.id === id));
    setTopFans(newTopFans);
  };

  const handleDeleteFan = (id) => {
    const updatedFans = topFans.filter(fan => fan.id !== id);
    setTopFans(updatedFans);
  };

  return (
    <>
      <Button onClick={handleOpen} color="primary">
        Select Top Fans
      </Button>
      <SelectFansModal open={open} onClose={handleClose} onSave={handleSave} />
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
            {topFans.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No Top Fans Selected
                </TableCell>
              </TableRow>
            ) : (
              topFans.map(fan => (
                <TableRow key={fan.id}>
                  <TableCell>{fan.id}</TableCell>
                  <TableCell>{fan.username}</TableCell>
                  <TableCell>{fan.email}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDeleteFan(fan.id)} aria-label="delete">
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

export default TopFans;
