import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin';
import CustomVerificationToggle from './CustomVerificationToggle'; 

const ArtistList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='username' />
        <TextField source='password' />
        <EmailField source='email' />
        <TextField source='fandom' />
        <CustomVerificationToggle source="verified" label="Verified" />
        <EditButton basePath='/artists' />
        <DeleteButton basePath='/artists' />
      </Datagrid>
    </List>
  );
}

export default ArtistList;
