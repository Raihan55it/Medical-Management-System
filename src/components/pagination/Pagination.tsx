type Props = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};
const Pagination = ({ currentPage, totalPages, setCurrentPage }: Props) => {
  return (
    <div>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Previous
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`rounded px-3 py-2 ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
