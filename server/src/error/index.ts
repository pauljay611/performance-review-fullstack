class Exception extends Error {
  constructor(public status?: number, message?: string) {
    super(message);
    this.status = status || 500;
    this.message = message || "Something Wrong";
  }
}

export default Exception;
