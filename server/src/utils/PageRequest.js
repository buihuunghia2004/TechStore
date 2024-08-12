export const PageRequest = ({
  isPagination = true,
  page = 1,
  size = 20,
  sort = '_id-asc'
}) => {
  let [sortBy, sortOrder] = sort.split('-')

  if (!isPagination) {
    return {
      isPagination,
      sort: {
        [sortBy]: sortOrder === 'asc' ? 1 : -1
      }
    }
  }

  return {
    isPagination,
    skip: (page - 1) * size,
    limit: Number.parseInt(size),
    sort: {
      [sortBy]: sortOrder === 'asc' ? 1 : -1
    }
  }
}