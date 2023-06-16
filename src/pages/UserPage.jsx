import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../store/userSlice";

const UserPage = () => {
    const {users} = useSelector(state => state.storeUser)

    const dispatch = useDispatch();

    const handleUser = () => {
        dispatch(getAllUsers({name: 'Nikola', age: 25}))
    }

    return (
        <div>UserPage

        <button onClick={handleUser}>Add user</button>

            {users.map((el, i) => {
                return (
                    <div key={i}>
                        <h3>{el.name}</h3>
                        <h3>{el.age}</h3>
                    </div>
                )
            })}
        </div>
    )
}
export default UserPage
