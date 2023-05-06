import PocketBase from 'pocketbase';

import {writable} from "svelte/store";

export const pb = new PocketBase(import.meta.env.VITE_PB_ADMIN_URL);

export const currentUser = writable(pb.authStore.model);

// listen to pocketbase user events, pocketbase user model changes when users signs in or logout
// we can listen to these events and update our svelte store
pb.authStore.onChange((auth) => {
    currentUser.set(pb.authStore.model)
});

