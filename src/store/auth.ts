import {pb} from "../lib/pocketbase";
import {writable} from "svelte/store";
import {navigate} from "svelte-navigator";


export const currentUser = writable(pb.authStore.model);

// listen to pocketbase user events, pocketbase user model changes when users signs in or logout
// we can listen to these events and update our svelte store
pb.authStore.onChange(() => currentUser.set(pb.authStore.model));

async function login(req) {
    await pb.collection('users').authWithPassword(req.username, req.password)
    window.location.href = "/"
    navigate("/", {replace: true})
}

async function signup(req) {
    try {
        const data = {
            "username": req.username,
            "email": req.email,
            "emailVisibility": true,
            "password": req.password,
            "passwordConfirm": req.passwordConfirm,
            "name": req.username
        };
        const createdUser = await pb.collection('users').create(data);
        if (createdUser) {
            const {username, password} = req
            await login({username, password})
        }
    } catch (e) {
        console.error(e)
    }
}

function logout() {
    pb.authStore.clear()
}

export default {
    login,
    signup,
    logout
}