import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const ArtistEdit = (props) => {
  return (
    <Edit title='Edit Artist' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='username' label='Username' />
        <TextInput source='email' label='Email' />
        <TextInput source='password' label='Password' />
        <TextInput source='fandom' label='Fandom' />
      </SimpleForm>
    </Edit>
  );
};

export default ArtistEdit;
