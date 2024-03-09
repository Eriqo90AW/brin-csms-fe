"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import axios from "axios";

// const data = [
//   // {
//   //   id: "m5gr84i9",
//   //   name: "CS Rektorat",
//   //   consumption: 316,
//   //   cost: 316000,
//   //   last_heartbeat: "2023-09-01 00:00:00",
//   //   status: "Connected",
//   //   activity: "Charging",
//   // },

// ];

const base_api_url = process.env.NEXT_PUBLIC_BASE_API_URL;

export const columns = [
  {
    accessorKey: "charge_box_id",
    header: () => <div className="text-[#1D2433]">ID</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("charge_box_id")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: () => <div className="text-[#1D2433]">Description</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "address",
    header: () => <div className="text-[#1D2433]">Location</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("address")}</div>
    ),
  },
  {
    accessorKey: "ocpp_protocol",
    header: () => <div className="text-[#1D2433]">OCPP</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("ocpp_protocol")}</div>
    ),
  },
  {
    accessorKey: "last_heartbeat_timestamp",
    header: () => <div className="text-[#1D2433]">Last Heartbeat</div>,
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("last_heartbeat_timestamp")}
      </div>
    ),
  },
];

const filterArray = (array) => {
  const excluded_fields = ["location_latitude", "location_longitude"];
  
  return array.map((obj) => {
    const newObj = {};
    for (const key in obj) {
      if (!excluded_fields.includes(key)) {
        const fieldValue = obj[key];
        if (typeof fieldValue === 'object') {
          if (fieldValue.hasOwnProperty('String')) {
            newObj[key] = fieldValue.String;
          } else if (fieldValue.hasOwnProperty('Time')) {
            newObj[key] = fieldValue.Time;
          }
        } else {
          newObj[key] = fieldValue;
        }
      }
    }
    return newObj;
  });
};

export default function main_table() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [currentPage, setCurrentPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [dataLength, setDataLength] = React.useState(0);
  const [canPrev, setCanPrev] = React.useState(false);
  const initialRenderRef = React.useRef(true);
  const pageSize = 1;

  const handlePreviousPage = (table) => {
    table.previousPage();
    setCanPrev(currentPage - 1 > 1);
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (table) => {
    table.nextPage();
    setCanPrev(currentPage + 1 > 1);
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const table = useReactTable({
    data,
    columns,
    initialState: { pagination: { pageSize: pageSize } },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  React.useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    const fetchChargeBoxes = async () => {
      const endpoint = base_api_url + `/chargeBox/bulk?page=${currentPage}&pageSize=${pageSize}`; 
      console.log(endpoint);
      await axios
        .get(endpoint)
        .then((response) => {
          // console.log(filterArray(response.data.paginated_list));
          setData(filterArray(response.data.paginated_list));
          setDataLength(response.data.total_size);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // after the first call repeat every 10 seconds
    fetchChargeBoxes();
    const interval = setInterval(fetchChargeBoxes, 10000);
    return () => clearInterval(interval);

  }, [currentPage]);

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-[#F1F3F9]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="even:bg-[#F8F9FC]"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground bg-white">
          Showing {1 + pageSize * (currentPage - 1)} to {pageSize + pageSize * (currentPage - 1)} of{" "}
          {dataLength} stations
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePreviousPage(table)}
            disabled={!canPrev}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleNextPage(table)}
            // disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
