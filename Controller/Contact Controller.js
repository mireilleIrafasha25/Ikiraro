import contactModel from "../Model/ContactModel.js"
import asyncWrapper from "../MiddleWare/async.js";
import {BadRequestError} from "../Error/index.js";
import { validationResult } from "express-validator";


export const addNewContact = asyncWrapper(async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
    };
    const newContact = await contactModel.create(req.body)
    return res.status(201).json({message:"new message sent successfully",Contact:newContact});
});

export const ListContact = asyncWrapper(async (req, res, next) => {
        const foundContact = await contactModel.find();
        return res.status(200).json({foundContact});
        next();
});

export const findbyUser= asyncWrapper(async (req, res, next) => {
        const foundContact = await contactModel.findById(req.params.id);
        if(!foundContact)
            {
                return next(new NotFoundError(`Message not found`))
            }
        return res.status(200).json({foundContact});
        next();
});


export const updateContact = asyncWrapper(async (req, res, next) => {
    const Contactowner = req.params.id;
        const foundContact = await contactModel.findbyIdAndUpdate(Contactowner,req.body,{new:true});
        if(!foundContact)
            {
                return next(new NotFoundError(`Message not found`))
            }
        return res.status(200).json({foundContact});
        next();
});

export const deleteContact = asyncWrapper(async (req, res, next) => {
    const Contactowner = req.params.id;
        const foundContact = await contactModel.findByIdAndDelete(Contactowner);
        return res.status(200).json({foundContact});
        next();
});



