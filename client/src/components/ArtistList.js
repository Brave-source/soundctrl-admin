import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const ArtistList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <EditButton basePath='/artists' />
        <DeleteButton basePath='/artists' />
      </Datagrid>
    </List>
  )
}

export default ArtistList
