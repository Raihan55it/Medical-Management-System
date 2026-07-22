import { memo } from "react";
type Props = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};
const Pagination = memo(
  ({ currentPage, totalPages, setCurrentPage }: Props) => {
    const buttonClass =
      "rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400";
    const pageButtonClass = "rounded px-3 py-2";
    console.log("Rendering Pagination");
    return (
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className={buttonClass}
        >
          {"<<"}
        </button>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={buttonClass}
        >
          Previous
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`${pageButtonClass} ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
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
          className={buttonClass}
        >
          Next
        </button>
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          className={buttonClass}
        >
          {">>"}
        </button>
      </div>
    );
  },
);
export default Pagination;
