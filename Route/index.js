import UserRoute from './UserRoute.js';
import ContactRoute from "./ContactRoute.js"
import express from 'express';
const route = express.Router();
route.use("/user", UserRoute);
route.use("/contact",ContactRoute)

export default route;