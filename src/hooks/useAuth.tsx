import { useState } from 'react';
import { firebase, auth } from '../services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
}

export default function useAuth() {
  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await auth.signInWithPopup(provider);
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from GoogleAccount.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    } catch (err) {
      // console.log(err);
    }
  }
  return { user, signInWithGoogle };
}

export type { User };
