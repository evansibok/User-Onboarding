import React, { useEffect } from 'react'
import axios from 'axios'

const UserList = ({ users, setUsers }) => {
 // Axios request to get the initial users list from the backend
  useEffect(() => {
    axios.get("https://reqres.in/api/users/")
    .then(res => setUsers(res.data.data))
    .catch(err => err.message)
  }, [setUsers])
  
  console.log(users)

  return (
    <div>
     {/* Mapping over the users and populating the list to the screen. */}
      {users && users.map(user => {
        return (
          <div key={user.id}>
            <h3>{user.id}</h3>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default UserList
