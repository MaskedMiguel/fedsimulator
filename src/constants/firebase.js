export const firebase = {
  apiKey: "AIzaSyBIOZ26_IpUNUdoC-wSQVQiXkuHZKfN2wY",
  authDomain: "fedsimulator.firebaseapp.com",
  databaseURL: "https://fedsimulator.firebaseio.com",
  projectId: "fedsimulator",
  storageBucket: "fedsimulator.appspot.com",
  messagingSenderId: "45213094977",
}

export const reduxFirebase = {
  userProfile: "federation", // root that user profiles are written to
  // updateProfileOnLogin: false, // enable/disable updating of profile on login
  enableLogging: true, // enable/disable Firebase Database Logging
  // presence: 'presence',
  // autoPopulateProfile: true, // keep auto population of profile from v1
  // profileParamsToPopulate: [
  //   // create queries for profile population (remember to use populate)
  //   { child: 'cars', root: 'cars' }
  // ],
  // useFirestoreForProfile: true, // Use Firestore to store profile
  // profileParamsToPopulate: [{ child: 'cars', root: 'cars' }] // gather data for populating profile params
  // profileDecorator: (userData) => ({ email: userData.email }) // customize format of user profile
}

export default { firebase, reduxFirebase, }
