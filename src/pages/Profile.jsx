import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

function Profile() {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return (
    <div>
      <h1>{user ? user.displayName : 'User Not Found'}</h1>
    </div>
  );
}

export default Profile;
