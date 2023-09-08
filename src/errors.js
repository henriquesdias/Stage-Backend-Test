function notFound(message) {
  throw { message, name: "notFound" };
}

const errors = {
  notFound,
};

export default errors;
