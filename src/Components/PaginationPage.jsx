import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

function PaginationPage({currentPage,totalPages,onPageChange}) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
        <PaginationPrevious 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }} 
          />
        </PaginationItem>
        <PaginationItem>
        <PaginationLink href="#">{currentPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
        <PaginationNext 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }} 
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationPage;
