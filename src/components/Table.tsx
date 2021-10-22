import React from "react";
import { Pagination, Table } from "react-bootstrap";
import { useTable, usePagination } from "react-table";

const CTable: React.FC<any> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  );

  return (
    <>
      <Table responsive striped={true} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
        <Pagination.Prev
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        />

        <Pagination.Item onClick={() => gotoPage(1)}>{1}</Pagination.Item>
        <Pagination.Item onClick={() => gotoPage(2)}>{2}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item onClick={() => gotoPage(7)}>{7}</Pagination.Item>
        <Pagination.Item onClick={() => gotoPage(8)}>{8}</Pagination.Item>

        <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
        <Pagination.Last
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </Pagination>
    </>
  );
};

export default CTable;
