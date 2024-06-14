import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import ArtistList from './components/Artist/ArtistList'
import ArtistCreate from './components/Artist/ArtistCreate'
import ArtistEdit from './components/Artist/ArtistEdit'

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
      {/* <Resource
        name='Top Fans'
        list={ArtistList}
        create={ArtistCreate}
        edit={ArtistEdit}
      /> */}
    </Admin>
  )
}

export default App
