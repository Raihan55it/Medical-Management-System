import { useMemo, useState } from "react";

const usePagination = <T>(items: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  return { currentPage, setCurrentPage, paginatedItems, totalPages };
};
export default usePagination;
