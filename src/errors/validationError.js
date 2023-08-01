import baseError from "./baseError.js";

class validationError extends baseError {
  constructor(err) {
    const errorMessage = Object.values(err.errors)
      .map((err) => err.message)
      .join("; ");
    super(`Os seguintes erros foram encontrados: ${errorMessage}`, 400);
  }
}
export default validationError;
