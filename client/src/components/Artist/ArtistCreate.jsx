import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const ArtistCreate = (props) => {
  return (
    <Create title='Create an Artist' {...props}>
      <SimpleForm>
        <TextInput source='username' label='Username' />
        <TextInput source='email' label='Email' />
        <TextInput source='password' label='Password' type='password' />
        <TextInput source='fandom' label='Fandom' />
      </SimpleForm>
    </Create>
  );
};

export default ArtistCreate;
