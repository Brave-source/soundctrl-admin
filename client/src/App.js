import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import ArtistList from './components/ArtistList'
import ArtistCreate from './components/ArtistCreate'
import ArtistEdit from './components/ArtistEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='posts'
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name='artists'
        list={ArtistList}
        create={ArtistCreate}
        edit={ArtistEdit}
      />
    </Admin>
  )
}

export default App
