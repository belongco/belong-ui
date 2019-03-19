export function Paginator(perPage, length, totalResults, currentPage) {
  const totalPages = Math.ceil(totalResults / perPage);

  let firstPage = Math.max(1, currentPage - Math.floor(length / 2));

  let lastPage = Math.min(
    totalPages,
    currentPage + Math.floor(length / 2),
  );

  if (lastPage - firstPage + 1 < length) {
    if (currentPage < totalPages / 2) {
      lastPage = Math.min(
        totalPages,
        lastPage + (length - (lastPage - firstPage)),
      );
    } else {
      firstPage = Math.max(
        1,
        firstPage - (length - (lastPage - firstPage)),
      );
    }
  }

  if (lastPage - firstPage + 1 > length) {
    if (currentPage > totalPages / 2) {
      firstPage++;
    } else {
      lastPage--;
    }
  }

  return {
    totalPages,
    pages: Math.min(lastPage - firstPage + 1, totalPages),
    currentPage,
    firstPage,
    lastPage,
    previousPage: currentPage - 1,
    nextPage: currentPage + 1,
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < totalPages,
    totalResults,
  };
}
