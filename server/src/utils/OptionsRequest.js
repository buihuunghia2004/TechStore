const optionsRequest = (query) => {

  let projection;
  if (query.only) {
    projection = query.only.split(",").reduce((prev, curr) => {
      prev[curr] = 1;
      return prev;
    }, {});
  }

  return {
    projection,
  };
};
export default optionsRequest;
