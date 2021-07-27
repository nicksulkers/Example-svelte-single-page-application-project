import { writable } from 'svelte/store';
import persistentStore from 'svelte-persistent-store';

export const authToken = persistentStore.local.writable('auth_token', null);
export const activeUser = writable(null);