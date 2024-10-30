import UserRoute from './UserRoute.js';
import express from 'express';
const route = express.Router();
route.use("/user", UserRoute);

export default route;