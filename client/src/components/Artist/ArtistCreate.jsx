import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const ArtistCreate = (props) => {
  return (
    <Create title='Create an Artist' {...props}>
      <SimpleForm>
        <TextInput source='username' />
        <TextInput source='email' />
        <TextInput source='password' />
        <TextInput source='fandom' />
      </SimpleForm>
    </Create>
  )
}

export default ArtistCreate
