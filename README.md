# NextAuth Session Issue in Next.js 15

This repository demonstrates a common issue encountered when using NextAuth.js for authentication in Next.js 15 applications.  After successful server-side authentication, the session object is undefined on the client-side.  This leads to unexpected behavior and prevents accessing user information after login.

The issue primarily arises from the way NextAuth's `unstable_getServerSession` interacts with client-side rendering. This reproduction demonstrates the problem and a potential solution involving a custom API route for fetching session data.

## Reproduction Steps
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.  The session object will initially be undefined, even after successful login.

## Solution
The solution uses a custom API route to fetch the session on the client-side, ensuring data availability after authentication.  See the `aboutSolution.js` file for a corrected implementation.