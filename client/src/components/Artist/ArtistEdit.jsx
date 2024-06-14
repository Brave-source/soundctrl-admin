import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const ArtistEdit = (props) => {
  return (
    <Edit title='Edit Artist' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='username' />
        <TextInput source='email' />
        <TextInput source='password' />
        <TextInput source='fandom' />
      </SimpleForm>
    </Edit>
  )
}

export default ArtistEdit
