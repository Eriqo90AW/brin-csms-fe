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

const data = [
  {
    id: "m5gr84i9",
    name: "Ken",
    consumption: 316,
    cost: 316000,
    last_heartbeat: "2021-09-01 00:00:00",
    status: "running",
  },
  {
    id: "x8hn72k3",
    name: "Alice",
    consumption: 275,
    cost: 275000,
    last_heartbeat: "2021-09-02 01:15:30",
    status: "running",
  },
  {
    id: "p4ls36t2",
    name: "Bob",
    consumption: 420,
    cost: 420000,
    last_heartbeat: "2021-09-03 02:30:45",
    status: "running",
  },
  {
    id: "y2op98u1",
    name: "Catherine",
    consumption: 200,
    cost: 200000,
    last_heartbeat: "2021-09-04 03:45:15",
    status: "running",
  },
  {
    id: "q9we45r8",
    name: "David",
    consumption: 150,
    cost: 150000,
    last_heartbeat: "2021-09-05 05:00:30",
    status: "running",
  },
  {
    id: "z6xc12v7",
    name: "Emily",
    consumption: 280,
    cost: 280000,
    last_heartbeat: "2021-09-06 06:15:45",
    status: "running",
  },
  {
    id: "l3kj67h4",
    name: "Frank",
    consumption: 350,
    cost: 350000,
    last_heartbeat: "2021-09-07 07:30:00",
    status: "running",
  },
  {
    id: "a1sz89x0",
    name: "Grace",
    consumption: 180,
    cost: 18000,
    last_heartbeat: "2021-09-08 08:45:15",
    status: "running",
  },
  {
    id: "b2pl93q5",
    name: "Harry",
    consumption: 320,
    cost: 320000,
    last_heartbeat: "2021-09-09 10:00:30",
    status: "running",
  },
  {
    id: "c7mn54o6",
    name: "Ivy",
    consumption: 250,
    cost: 250000,
    last_heartbeat: "2021-09-10 11:15:45",
    status: "running",
  },
  {
    id: "d8xf76t3",
    name: "Jack",
    consumption: 300,
    cost: 300000,
    last_heartbeat: "2021-09-11 12:30:00",
    status: "running",
  },
  {
    id: "e5vr89i2",
    name: "Karen",
    consumption: 400,
    cost: 400000,
    last_heartbeat: "2021-09-12 13:45:15",
    status: "running",
  },
  {
    id: "f1xc23o7",
    name: "Leo",
    consumption: 210,
    cost: 210000,
    last_heartbeat: "2021-09-13 15:00:30",
    status: "running",
  },
  {
    id: "g9qo45r8",
    name: "Mia",
    consumption: 260,
    cost: 260000,
    last_heartbeat: "2021-09-14 16:15:45",
    status: "running",
  },
  {
    id: "h2xc67v1",
    name: "Nathan",
    consumption: 180,
    cost: 180000,
    last_heartbeat: "2021-09-15 17:30:00",
    status: "running",
  },
  {
    id: "i3op89u4",
    name: "Olivia",
    consumption: 350,
    cost: 3500000,
    last_heartbeat: "2021-09-16 18:45:15",
    status: "running",
  },
];

export const columns = [
  {
    accessorKey: "id",
    header: () => <div className="text-[#1D2433]">ID</div>,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-[#1D2433]">Name</div>,
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "consumption",
    header: () => <div className="text-[#1D2433]">Consumption</div>,
    cell: ({ row }) => <div>{row.getValue("consumption") + " kWh"}</div>,
  },
  {
    accessorKey: "cost",
    header: () => <div className="text-[#1D2433]">Cost</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("cost"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(amount);
      return <div className="capitalize">{formatted}</div>;
    },
  },
  {
    accessorKey: "last_heartbeat",
    header: () => <div className="text-[#1D2433]">Last Heartbeat</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("last_heartbeat")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-[#1D2433]">Status</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  //   {
  //     accessorKey: "email",
  //     header: ({ column }) => {
  //       return (
  //         <Button
  //           variant="ghost"
  //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         >
  //           Email
  //           <CaretSortIcon className="ml-2 h-4 w-4" />
  //         </Button>
  //       );
  //     },
  //     cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  //   },
];

export default function main_table() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePreviousPage = (table) => {
    table.previousPage();
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleNextPage = (table) => {
    table.nextPage();
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const table = useReactTable({
    data,
    columns,
    initialState: { pagination: { pageSize: 4 } },
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
                <TableRow className="even:bg-[#F8F9FC]"
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
          Showing {1 + 4 * (currentPage - 1)} to {4 + 4 * (currentPage - 1)} of{" "}
          {data.length} stations
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePreviousPage(table)}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleNextPage(table)}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
