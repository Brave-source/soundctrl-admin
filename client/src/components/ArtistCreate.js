import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const ArtistCreate = (props) => {
  return (
    <Create title='Create an Artist' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' />
      </SimpleForm>
    </Create>
  )
}

export default ArtistCreate
