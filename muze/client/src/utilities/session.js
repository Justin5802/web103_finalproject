import { useState } from 'react'
import { request } from './API'

export function useSession() {
    const [ session, setSession ] = useState({
        user: {
            id: '',
            username: '',
            password: '',
            //token for oauth
        }
    })

    return { session, setSession }
}

export async function useLogin(username, password, setSession) {
    const userData = {
        username: username,
        password: password
    }

    const response = await request("POST", 'users/login', userData)
    setSession({user: response.data.user}) //update the user
    return response
}

export function useLogout(setSession) {
    setSession({
        user: {
            id: '',
            username: '',
            password: '',
    }})
}

export async function createUser(username, password, setSession) {
    const userData = {
        username: username,
        password: password
    }

    const response = await request("POST", 'users/register', userData)
                     await useLogin(username, password, setSession)
    return response
}

export async function useDeleteUser(id) {
    const response = await request("DELETE", `users/${id}`)
    return response
}


