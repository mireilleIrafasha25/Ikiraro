import GraphModel from "../Model/graphModel.js";
import asyncWrapper from "../MiddleWare/async.js";
import { BadRequestError } from "../Error/index.js";
import { NotFoundError } from "../Error/forbiddenError.js";
import { validationResult } from "express-validator";
export const addAgricultureData = asyncWrapper(async (req, res, next) => {
    console.log("Received request to add data");  // Log the start

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Validation error:", errors.array());  // Log validation errors
        return next(new BadRequestError(errors.array()[0].msg));
    }

    // Record graph data in the database
    const graphData = new GraphModel({
        year: req.body.year,
        cropType: req.body.cropType,
        quantity: req.body.quantity,
        yield: req.body.yield,
    });

    console.log("Saving graph data:", graphData);  // Log before saving

    const savedGraphData = await graphData.save();

    if (savedGraphData) {
        console.log("Data saved successfully");  // Confirm save
        res.status(201).json({
            message: "Data recorded successfully",
            data: savedGraphData,
        });
    } else {
        console.log("Failed to save data");  // Log failure if no save
        return next(new Error("Failed to save data"));
    }
});


export const GetData = asyncWrapper(async (req, res, next) => {
    const year = req.params.year;
    const data = await GraphModel.find({ year });
    console.log("Reached addAgricultureData controller");


    if (!data || data.length === 0) {
        return next(new NotFoundError("Data not found"));
    }

    res.status(200).json({ message: "Data retrieved successfully", data });
});
