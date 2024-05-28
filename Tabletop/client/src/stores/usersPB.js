import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');


// example create data

export async function login(identity, password) {
    try {
        const authData = await pb.collection('users').authWithPassword(identity, password);
        return authData;
    } catch (error) {
        console.error('Failed to authenticate:', error);
        throw error;
    }
}
export async function signUp(email,username, password) {
    try {
        const data = {
            email: email,
            username: username,
            password: password,
            passwordConfirm: password
        };
        const userData = await pb.collection('users').create(data);
        login(email, password);
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

