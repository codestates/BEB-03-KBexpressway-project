import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

function Table() {
  const Styles = styled.div`
    padding: 1rem;
    table {
      width: 100%;
      margin: 25px auto;
      border-collapse: collapse;
      border: 1px solid #eee;
      border-bottom: 2px solid #4154f1;

      tr {
        &:hover {
          background: #f4f4f4;

          td {
            color: #555;
          }
        }
      }
      th,
      td {
        color: #999;
        border: 1px solid #eee;
        padding: 12px 35px;
        border-collapse: collapse;
      }
      th {
        background: #4154f1;
        color: #fff;
        text-transform: uppercase;
        font-size: 12px;
        &.last {
          border-right: none;
        }
      }
    }
  `;

  const columns = React.useMemo(
    () => [
      {
        Header: "Type",
        accessor: "Type",
      },
      {
        Header: "Item",
        accessor: "Item",
      },
      {
        Header: "Price",
        accessor: "Price",
      },
      {
        Header: "Quantity",
        accessor: "Quantity",
      },
      {
        Header: "From",
        accessor: "From",
      },
      {
        Header: "To",
        accessor: "To",
      },
      {
        Header: "Time",
        accessor: "Time",
      },
    ],
    []
  );
  const data = React.useMemo(
    () => [
      {
        Type: "Minted",
        Item: "Hello",
        Price: "World",
        Quantity: "1",
        From: "Me",
        To: "You",
        Time: "Time",
      },
      {
        Type: "Airdrop",
        Item: "Hello",
        Price: "World",
        Quantity: "1",
        From: "Me",
        To: "You",
        Time: "Time",
      },
      {
        Type: "Transfer",
        Item: "Hello",
        Price: "World",
        Quantity: "1",
        From: "Me",
        To: "You",
        Time: "Time",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Styles>
      <table {...getTableProps()}>
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
          {rows.map((row) => {
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
      </table>
    </Styles>
  );
}

export default Table;
