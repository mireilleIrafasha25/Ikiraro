import UserRoute from './UserRoute.js';
import ContactRoute from "./ContactRoute.js"
import GraphRoute from "./GraphRoute.js"
import express from 'express';
const route = express.Router();
route.use("/user", UserRoute);
route.use("/contact",ContactRoute)
route.use("/graph", GraphRoute)

export default route;