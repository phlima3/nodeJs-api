import baseError from "./baseError.js";

class badRequest extends baseError {
  constructor() {
    super("Um ou mais campos inválidos", 400);
  }
}
export default badRequest;
