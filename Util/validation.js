import {body} from 'express-validator';

export const forgotpasswordValidation=[
    body("email","Email is required").not().isEmpty(),
];

export const resetPasswordValidation=[

    body("password","password is required").not().isEmpty(),
    body("password","Password  should contain atleast 8 characters,uppercase and lower case letters,numbers and symbols").isStrongPassword(),
    body("confirmPassword","confirmPassword is required ").not().isEmpty()
];
export const otpValidation=[

    body("otp","otp is required").not().isEmpty()
];

export const signUpValidation=[
    body("name","name is required").not().isEmpty(),
    body("email","Email is required").not().isEmpty(),
    body("continent","continent is required").not().isEmpty(),
    body("country","country is required").not().isEmpty(),
    body("city","city is required").not().isEmpty(),
    body("idcard","idcard is required").not().isEmpty(),
    body("telephone","telephone is required").not().isEmpty(),
    body("email","Invalid email").isEmail(),
    body("password","password is required").not().isEmpty(),
    body("password","Password  should contain atleast 8 characters,uppercase and lower case letters,numbers and symbols").isStrongPassword(),
    body("confirmPassword","confirmPassword is required ").not().isEmpty(),
  //  body("confirmpassword","confirmPassword  should contain atleast 8 characters,uppercase and lower case letters,numbers and symbols").isStrongPassword(),
];

export const signInValidation=[
    
    body("email","Email is required").not().isEmpty(),
    body("email","Invalid email").isEmail(),
    body("password","password is required").not().isEmpty(),
    body("password","Invalid password").isStrongPassword()
];

export const addAgricultureDataValidation=[
    body("year","data is required").not().isEmpty(),
    body("crop","crops is required").not().isEmpty(),
    body("quantity","quantity is required").not().isEmpty,
    body("yield","yield is required").not().isEmpty
]