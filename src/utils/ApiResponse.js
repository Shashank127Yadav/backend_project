// Provide consistent and structured responses across the API
class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode; // representing the result of the API request
    this.data = data; // The actual response data to be sent back to the client. This could be any data resulting from the API request, like user details, list items, etc
    this.message = message; //  An optional message describing the result of the request
    this.success = statusCode < 400;
  }
}

export { ApiResponse };

// The ApiResponse class provides a consistent structure for API responses, which is especially useful in a RESTful API. Instead of manually creating response objects each time, you can create an ApiResponse instance and send it as the response.
