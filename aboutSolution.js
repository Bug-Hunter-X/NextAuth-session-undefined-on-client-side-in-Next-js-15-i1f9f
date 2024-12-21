```javascript
// pages/aboutSolution.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function About() {
  const session = await getSession();

  return (
    <div>
      <h1>About Page</h1>
      {session ? (
        <p>Logged in as {session.user.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}

async function getSession() {
  const res = await fetch('/api/session');
  const session = await res.json();
  return session;
}
```
```javascript
// pages/api/session.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  res.status(200).json(session);
}
```