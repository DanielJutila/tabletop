import {create} from 'zustand';

const userData = {
    username: '',
    email: '',
}

const useUserDataStore = create((set) => ({
    userData: userData,
    setUserData: (newData) => set({userData: newData}),
}));


export default useUserDataStore;