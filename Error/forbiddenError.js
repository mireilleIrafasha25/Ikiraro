class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = "UnauthorizedError";
        this.statusCode = 401;
    }
}

class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.name = "ForbiddenError";
        this.statusCode = 403;
    }
}
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
        this.statusCode = 404;
    }
}

export { UnauthorizedError, ForbiddenError,NotFoundError};
