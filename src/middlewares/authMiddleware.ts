// import "dotenv/config"; // To read CLERK_API_KEY
// import {
// ClerkExpressRequireAuth,
// RequireAuthProp,
// StrictAuthProp,
// } from '@clerk/clerk-sdk-node';
// import express, { Application, Request, Response } from 'express';
 
// const port = process.env.PORT || 3000;
// const app: Application = express();
 
// declare global {
// namespace Express {
//   interface Request extends StrictAuthProp {}
// }
// }
 
// // Use the strict middleware that raises an error when unauthenticated
// app.get(
// '/protected-route',
// ClerkExpressRequireAuth({
//   // ...options
// }),
// (req: RequireAuthProp<Request>, res) => {
//   res.json(req.auth);
// }
// );
 
// app.use((err, req, res, next) => {
// console.error(err.stack);
// res.status(401).send('Unauthenticated!');
// });
 
// app.listen(port, () => {
// console.log(`Example app listening at http://localhost:${port}`);
// });
 