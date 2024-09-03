export const PageRequest = ({
  isPagination = true,
  page = 0,
  limit = 20,
  sorts = "createdBy-asc",
}) => {
  const sortListString = sorts.split(",");
  const sortsQuery = {}
  sortListString.map((item) => {
    const sortBy = item.split("-")[0];
    const sortOrder = item.split("-")[1] === "desc" ? -1 : 1;
    sortsQuery[sortBy] = sortOrder
  })
  return {
    isPagination : isPagination === "false" ? false : true,
    limit: (Number.parseInt(limit) || 20) < 0 ? 20 : Number.parseInt(limit),
    skip: ((Number.parseInt(limit) || 20) < 0 ? 20 : Number.parseInt(limit)) * ((Number.parseInt(page) || 0) < 0 ? 0 : Number.parseInt(page)),
    sorts:sortsQuery
  };
};
