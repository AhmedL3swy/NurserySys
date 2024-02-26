const { body ,validationResult } = require('express-validator');

const generateValidation = (baseValidation, idField) => [
    body(idField).isNumeric().withMessage(`${idField} is not valid`),
    ...baseValidation.map((validation) => validation.optional()),
];

const classPostValidation = [
    body('name').notEmpty().withMessage('Name is required').isAlpha().withMessage('Name must contain only alphabetical characters'),
    body('supervisor').notEmpty().withMessage('Supervisor is required').isNumeric().withMessage('Supervisor must be a number'),
    body('children').notEmpty().withMessage('Children are required').isArray().withMessage('Children must be an array'),
    body('children.*').isNumeric().withMessage('Each child ID must be a number'),
];

const childPostValidation = [
    body('fullname').notEmpty().withMessage('Fullname is required').isAlpha().withMessage('Name must contain only alphabetical characters'),
    body('city').notEmpty().withMessage('City is required').isString().withMessage('City must be a string'),
    body('street').notEmpty().withMessage('Street is required').isString().withMessage('Street must be a string'),
    body('building').notEmpty().withMessage('Building is required').isNumeric().withMessage('Building must be a number'),
    body('age').isNumeric({ min: 1, max: 10 }).withMessage('Age must be a number'),
    body('level').isIn(['PreKG', 'KG1', 'KG2']).withMessage('Level is not valid'),
];

const teacherPostValidation = [
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email is not valid'),
    body('role').notEmpty().withMessage('Role is required').isIn(['teacher', 'admin']).withMessage('Role is not valid'),
    body('password').notEmpty().withMessage('Password is required').isString({ min: 8, max: 50 }).withMessage('Password must be between 8 and 50 characters'),
    body('fullName').notEmpty().withMessage('Fullname is required').isAlpha('en-US', { ignore: ' ' }).withMessage('Teacher name should be characters'),
];

const classUpdateValidation = generateValidation(classPostValidation, 'id');

const childUpdateValidation = generateValidation(childPostValidation, 'id');

const teacherUpdateValidation = generateValidation(teacherPostValidation, 'id');

const validate = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const message = result.errors.reduce((current, error) => current + error.msg + ' ', '');
        const error = new Error(message);
        res.status(422);
        throw error;
    } else {
        next();
    }
};

module.exports = {
    validate,
    classPostValidation,
    classUpdateValidation,
    childPostValidation,
    childUpdateValidation,
    teacherPostValidation,
    teacherUpdateValidation,
};
