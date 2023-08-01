import baseError from "./baseError.js";

class NotFound extends baseError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

export default NotFound;
