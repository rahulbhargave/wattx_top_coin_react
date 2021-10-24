import React, { useEffect } from "react";
import { Col, Pagination, Row, Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useTable, usePagination } from "react-table";
import { RootState } from "../app/store";

const CTable: React.FC<any> = ({ columns, data }) => {
  const isLoading = useSelector((state: RootState) => state.spinner.loading);
  const isError = useSelector((state: RootState) => state.spinner.error);

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

  useEffect(() => {
    gotoPage(0);
  }, [data, gotoPage]);
  return (
    <>
      <Table responsive striped={true} {...getTableProps()}>
        <thead>
          {headerGroups &&
            headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
        </thead>

        {/* happy case */}
        {!isLoading && !isError && (
          <tbody {...getTableBodyProps()}>
            {page &&
              page.map((row, i) => {
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
        )}

        {/* data loading case */}
        {isLoading && (
          <tbody>
            <tr>
              <td colSpan={6}>
                <Row>
                  <Col sm={{ span: 2, offset: 6 }}>
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </Col>
                </Row>
              </td>
            </tr>
          </tbody>
        )}

        {/* api error case */}
        {isError && (
          <tbody>
            <tr>
              <td colSpan={6}>
                <Row>
                  <Col sm={{ span: 6, offset: 3 }}>
                    <h6>
                      Current subscription plan doesn't support this feature to
                      view historical data.
                    </h6>
                  </Col>
                </Row>
              </td>
            </tr>
          </tbody>
        )}
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
