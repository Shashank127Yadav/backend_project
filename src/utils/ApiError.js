// ApiError class is useful for handling API errors and extends built in Error class in js
class ApiError extends Error {
  // constructor is a special method in a class that initializes an instance of that class. Here, it takes four parameters:
  constructor(
    statusCode, // representing error
    message = "Something went wrong", // custom error
    errors = [], // additonal detail about the error
    stack = "" // the error stack trace, which shows where error is occured
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
