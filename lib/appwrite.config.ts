

// import * as sdk from "node-appwrite";

// export const {
//   NEXT_PUBLIC_ENDPOINT: ENDPOINT,
//   PROJECT_ID,
//   API_KEY,
//   DATABASE_ID,
//   PATIENT_COLLECTION_ID,
//   DOCTOR_COLLECTION_ID,
//   APPOINTMENT_COLLECTION_ID,
//   NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
// } = process.env;

// const client = new sdk.Client();

// client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

// export const databases = new sdk.Databases(client);
// export const users = new sdk.Users(client);
// export const messaging = new sdk.Messaging(client);
// export const storage = new sdk.Storage(client);


import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('67027a0d0026d2cc58d3')
.setKey('standard_9556f68015123d5a619283bc59be453df8eb9c6e9514d7b4352dabdb84a8e54fee979f4eaecd60f2bcf3ddd91587d829ef89033785e40236c7a1556d521b5c81ae520c638be3174b0b47a46a4923376225dea202ba25a6f08b6ac81903654aaeeeb2099db5bde998b1a8a5679af5bbbb45f39cb89ff54d9029b019edbf88d595');

console.log('Appwrite Endpoint:', client.config.endpoint);  // Check if endpoint is correctly set
console.log('Project ID:', client.config.project);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);