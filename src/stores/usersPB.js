import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');


// example create data

export async function oneItem(itemId){
    try {
        const item = await pb.collection('items').getOne(itemId);
        return item;
    } catch (error) {
        console.error('Failed to get item:', error);
        throw error;
    }
}

export async function getItems(){
    try {
        const items = await pb.collection('items').getList();
        return items;
    } catch (error) {
        console.error('Failed to get items:', error);
        throw error;
    }
}

export async function login(identity, password) {
    try {
        const authData = await pb.collection('users').authWithPassword(identity, password);
        return authData;
    } catch (error) {
        
        console.error('Failed to authenticate:', error);
        throw error;
    }
}
export async function signUp(username, password) {
    try {
        const data = {
            username: username,
            password: password,
            passwordConfirm: password
        };
        const userData = await pb.collection('users').create(data);
        console.log(userData);
        login(username, password);
        return userData;
    } catch (error) {
        console.error('Failed to sign up:', error);
        throw error;
    }
}

export function isUserLoggedIn(){
    return pb.authStore.isValid;
}
export async function getUserData(){
    if(!pb.authStore.isValid){
        return null;
    } else {
        try { 
            const userName = pb.authStore.model;
            return userName;
        } catch (error) {
            console.error('Failed to get username:', error);
            throw error;
        }
    }
}

export async function logout(){
    try {
        pb.authStore.clear();
    } catch (error) {
        console.error('Failed to log out:', error);
        throw error;
    }
} 

// export function signOut() {
//     pb.authStore.clear();
//     console.log('Signed out successfully');
//     // Verify local storage is cleared
//     const token = localStorage.getItem('pocketbase_auth_token');
//     if (!token) {
//         console.log('Local storage is cleared');
//     } else {
//         console.error('Failed to clear local storage');
//     }
// }

