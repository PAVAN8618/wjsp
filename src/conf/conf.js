const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

export default conf


// VITE_APPWRITE_URL = 'https://cloud.appwrite.io/v1'
// VITE_APPWRITE_PROJECT_ID = '657d3e56ea38707a0099'
// VITE_APPWRITE_DATABASE_ID = '657d941b784a76d090f8'
// VITE_APPWRITE_COLLECTION_ID = '657d9447d9dedc8bcada'
// VITE_APPWRITE_BUCKET_ID = '657d97522476fbf89f60'
