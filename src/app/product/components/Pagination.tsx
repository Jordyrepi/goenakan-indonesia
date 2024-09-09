"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PaginationCompProps {
  totalPages: number;
}

const PaginationComp: React.FC<PaginationCompProps> = ({ totalPages }) => {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(1);
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentPage = searchParams.get("page") || "1";
    setPageNumber(parseInt(currentPage));
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    const category = searchParams.get("category") || "";
    router.push(`/product?category=${category}&page=${page}`);
    setPageNumber(page);
  };

  return (
    <div className="my-4 flex justify-center overflow-x-auto">
      <Pagination>
        <PaginationContent>
          {/* Previous Button */}
          {pageNumber > 1 ? (
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(pageNumber - 1)}
              />
            </PaginationItem>
          ) : (
            <PaginationItem>
              <PaginationPrevious
                className="pointer-events-none opacity-50" // Add visual indication that it's disabled
                href="#"
              />
            </PaginationItem>
          )}

          {/* First Page Link */}
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={pageNumber === 1}
              onClick={() => handlePageChange(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>

          {/* Ellipsis for large gaps */}
          {pageNumber > 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Current Page Link */}
          {pageNumber > 1 && pageNumber < totalPages && (
            <PaginationItem>
              <PaginationLink href="#" isActive>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Ellipsis for large gaps */}
          {pageNumber < totalPages - 1 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Last Page Link */}
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={pageNumber === totalPages}
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>

          {/* Next Button */}
          {pageNumber < totalPages ? (
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(pageNumber + 1)}
              />
            </PaginationItem>
          ) : (
            <PaginationItem>
              <PaginationNext
                className="pointer-events-none opacity-50" // Add visual indication that it's disabled
                href="#"
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComp;
