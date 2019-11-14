import React, { useEffect } from 'react'
import axios from 'axios'

const UserList = ({ users, setUsers }) => {

  useEffect(() => {
    axios.get("https://reqres.in/api/users/")
    .then(res => setUsers(res.data.data))
    .catch(err => err.message)
  }, [])
  
  console.log(users)

  return (
    <div>
      {users && users.map(user => {
        return (
          <div key={user.id}>
            <h3>{user.id}</h3>
            <h3>{user.email}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default UserList
