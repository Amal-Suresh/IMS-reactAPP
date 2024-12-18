
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  // Helper function to calculate page numbers with ellipses
  const getPageNumbers = () => {
    const pagesToShow = 3;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      if (currentPage > 1) pageNumbers.push(1);
      if (currentPage > pagesToShow + 1) pageNumbers.push("...");

      for (
        let i = Math.max(2, currentPage - pagesToShow);
        i <= Math.min(totalPages - 1, currentPage + pagesToShow);
        i++
      ) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - pagesToShow) pageNumbers.push("...");
      if (currentPage < totalPages) pageNumbers.push(totalPages);
    }
  };

  getPageNumbers();

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
      {/* Previous Button */}
      <button
        className={`px-3 py-1 text-sm border border-black rounded ${
          currentPage === 1
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-white text-black hover:bg-black hover:text-white"
        }`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) => (
        <button
          key={index}
          className={`px-3 py-1 text-sm border border-black rounded ${
            page === currentPage
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-black hover:text-white"
          } ${page === "..." && "cursor-default bg-transparent border-none"}`}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`px-3 py-1 text-sm border border-black rounded ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-white text-black hover:bg-black hover:text-white"
        }`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
