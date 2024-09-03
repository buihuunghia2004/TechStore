const OffsetPaginate = (data, pageRequest) => {  
  const currentPage = pageRequest.skip / pageRequest.limit
  return {
    data: data[0],
    pagination: {
      limit: pageRequest.limit,
      currentPage: currentPage,
      nextPage: currentPage < Math.ceil(data[1] / pageRequest.limit) - 1 ? currentPage + 1 : currentPage,
      previousPage: currentPage > 0 ? currentPage - 1 : currentPage,
      totalPage: Math.ceil(data[1] / pageRequest.limit),
      totalRecord: data[1],
    }
  }
};

export default OffsetPaginate