// sanity.js 
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'YOUR_PROJECT_ID',
    dataset: 'YOUR_DATASET_NAME',
    useCdn: true, 
});

export default client;
