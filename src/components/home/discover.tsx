import { useState } from "react";
import MovieCard from "../movie-card/movie-card";
import { movies } from "@/mock/movie";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButtonNext,
  PaginationButtonPrevious,
} from "@/components/ui/pagination.tsx";

const Discover = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        {movies.slice(currentPage * 10, currentPage * 10 + 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationButtonPrevious
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
              isActive={currentPage === 0}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationButtonNext
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
              isActive={currentPage * 10 + 10 > movies.length}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default Discover;
