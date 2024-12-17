export const transformFirebaseToApi = (firebaseUser) => {
    return {
      userId: firebaseUser.uid,         // Mapea `uid` a `userID`
      username: firebaseUser.displayName, // Mapea `displayName` a `username`
      email: firebaseUser.email,         // Mismo nombre, sin cambios
      password: "encrypted_password",    // Aquí debes manejar la contraseña si la envías (usualmente no la envías en texto claro)
    };
  };