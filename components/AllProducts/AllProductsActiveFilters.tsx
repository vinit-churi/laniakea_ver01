import React from "react";
import { Badge } from "@/components/ui/badge";
import { XCircle } from "lucide-react";

const AllProductsActiveFilters = () => {
  return (
    <div className="flex gap-4">
      <Badge
        variant="outline"
        className="min-w-16 group relative flex h-8 cursor-pointer justify-center rounded-lg font-light  transition-colors duration-300 ease-in-out hover:bg-slate-100 hover:text-amber-800"
      >
        Exclusive
        <XCircle className="absolute right-0 top-0 translate-x-[50%] translate-y-[-50%] rounded-full bg-white text-xs opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      </Badge>
      <Badge
        variant="outline"
        className="min-w-16 group relative flex h-8 cursor-pointer justify-center rounded-lg font-light  transition-colors duration-300 ease-in-out hover:bg-slate-100 hover:text-amber-800"
      >
        Low to high
        <XCircle className="absolute right-0 top-0 translate-x-[50%] translate-y-[-50%] rounded-full bg-white text-xs opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      </Badge>
      <Badge
        variant="outline"
        className="min-w-16 group relative flex h-8 cursor-pointer justify-center rounded-lg font-light  transition-colors duration-300 ease-in-out hover:bg-slate-100 hover:text-amber-800"
      >
        Gold
        <XCircle className="absolute right-0 top-0 translate-x-[50%] translate-y-[-50%] rounded-full bg-white text-xs opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      </Badge>
      <Badge
        variant="outline"
        className="min-w-16 group relative flex h-8 cursor-pointer justify-center rounded-lg font-light  transition-colors duration-300 ease-in-out hover:bg-slate-100 hover:text-amber-800"
      >
        New arrival
        <XCircle className="absolute right-0 top-0 translate-x-[50%] translate-y-[-50%] rounded-full bg-white text-xs opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      </Badge>
      <Badge
        variant="outline"
        className="min-w-16 group relative flex h-8 cursor-pointer justify-center rounded-lg font-light  transition-colors duration-300 ease-in-out hover:bg-slate-100 hover:text-amber-800"
      >
        Exclusive
        <XCircle className="absolute right-0 top-0 translate-x-[50%] translate-y-[-50%] rounded-full bg-white text-xs opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      </Badge>
    </div>
  );
};

export default AllProductsActiveFilters;
