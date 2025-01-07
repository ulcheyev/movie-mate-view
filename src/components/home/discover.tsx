import { useEffect, useState } from "react";
import MovieCard from "../movie-card/movie-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButtonNext,
  PaginationButtonPrevious,
} from "@/components/ui/pagination.tsx";
import { MoviePreview, PageDto } from "@/api/movieApi";
import { getMoviePage } from "../../api/movieApi";

const Discover = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [movies, setMovies] = useState<PageDto<MoviePreview> | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await getMoviePage({ page: currentPage });
      setMovies(res.data);
    };

    fetch();
  }, [currentPage]);

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        {movies?.elements.map((movie) => (
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
              isActive={!movies?.isLast}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default Discover;
