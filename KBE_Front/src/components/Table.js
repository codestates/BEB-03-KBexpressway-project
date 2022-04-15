import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import nftTransaction from "../data/nftTransaction.json";

const log = console.log;

function Table({ nftList }) {
  // log(nftTransaction.result[0].to);
  // log(nftTransaction.result[0].from);
  // const [nftList, setNftList] = useState([]);

  // useEffect(() => {
  //   const url = "http://localhost:4000/items/nfts/0";
  //   axios.get(url).then((res) => {
  //     console.log(res.data.data);
  //     setNftList(res.data.data);
  //   });
  // }, []);

  // log(nftList[0]);

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

  const getTimeDifference = function (timeStamp) {
    return `${((Date.now() - timeStamp) / 86400000000).toFixed(0)} 일 전`;
  };

  const getLink = function (tx) {
    return `https://rinkeby.etherscan.io/tx/${tx}`;
  };

  const data = React.useMemo(
    () => [
      {
        Type: "Minted",
        Item: "Hello",
        Price: "World",
        Quantity: "1",
        From: nftTransaction.result[0].from.slice(0, 6),
        To: nftTransaction.result[0].to.slice(0, 6),
        Time: (
          <a href={getLink(nftTransaction.result[0].hash)} target="_blank">
            {getTimeDifference(nftTransaction.result[0].timeStamp)}
          </a>
        ),
      },
      {
        Type: "Airdrop",
        Item: "Hello",
        Price: "World",
        Quantity: "1",
        From: nftTransaction.result[1].from.slice(0, 6),
        To: nftTransaction.result[1].to.slice(0, 6),
        Time: (
          <a href={getLink(nftTransaction.result[1].hash)} target="_blank">
            {getTimeDifference(nftTransaction.result[1].timeStamp)}
          </a>
        ),
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
