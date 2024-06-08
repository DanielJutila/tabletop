import {create} from 'zustand';

let username = '';

const useUserDataStore = create((set) => ({
    username: username,
    setUserData: (newData) => set({username: newData}),
}));


export default useUserDataStore;