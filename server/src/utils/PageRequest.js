export const PageRequest = (req) => {
  const { pagination = true, page = 0, size = 20, sort = "+_id" } = req;
  let sortOrder = sort.slice(0, 1);
  let sortBy = sort.slice(1);
  if (!pagination) {
    return {
      pagination,
      sort: {
        [sortBy]: sortOrder === "+" ? 1 : -1,
      },
    };
  }

  return {
    pagination,
    skip: page * size,
    limit: Number.parseInt(size),
    sort: {
      [sortBy]: sortOrder === "+" ? 1 : -1,
    },
  };
};
