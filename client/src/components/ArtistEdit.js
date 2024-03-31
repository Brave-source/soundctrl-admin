import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const ArtistEdit = (props) => {
  return (
    <Edit title='Edit Artist' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  )
}

export default ArtistEdit
