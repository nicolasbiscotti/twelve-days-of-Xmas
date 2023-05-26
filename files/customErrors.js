class InvalidArgument extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidArgument";
  }
}

class MissingArgument extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingArgument";
  }
}

class OutOfRange extends Error {
  constructor(message) {
    super(message);
    this.name = "OutOfRange";
  }
}

module.exports = {
  InvalidArgument,
  MissingArgument,
  OutOfRange,
};
