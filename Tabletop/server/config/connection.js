import PocketBase from 'pocketbase';

// Replace these with your actual details
const POCKETBASE_URL = 'http://127.0.0.1:8090/api';


// const POCKETBASE_API_KEY = 'your-pocketbase-api-key';

// Create a new PocketBase instance
const pocketbase = new PocketBase(POCKETBASE_URL);

// If you have an API key, you can set it like this
// const pocketbase = new PocketBase(POCKETBASE_URL, POCKETBASE_API_KEY);


// Export the PocketBase instance so you can use it in other files
export default pocketbase;