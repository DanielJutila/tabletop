import {create} from 'zustand';

const userData = {
    username: ''
};

const useUserDataStore = create((set) => ({
    username: userData.username,
    setUserData: (newData) => set({username: newData}),
}));


export default useUserDataStore;