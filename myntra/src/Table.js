import React, { useEffect, useRef, useState } from "react";
import useFetch from "./Fetch";
import InfiniteScroll from "react-infinite-scroll-component";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CircularProgress } from "@material-ui/core";
import style from "./style.css";

export default function Picture() {
  const [page, setPage] = React.useState(1);
  const [data] = useFetch(page);

  function ShowData() {
    return (
      <InfiniteScroll
        dataLength={data.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={
          <div style={{ height: 80, paddingLeft: "45%", overflow: "hidden" }}>
            <CircularProgress color="#ffffff" />
          </div>
        }
      >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Author</TableCell>
                <TableCell align="center">Width</TableCell>
                <TableCell align="center">Height</TableCell>
                <TableCell align="center">Url</TableCell>
                <TableCell align="center">Download Url</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((data) => (
                <TableRow>
                  <TableCell component="th" scope="row" align="center">
                    {data.id}
                  </TableCell>
                  <TableCell align="center">{data.author}</TableCell>
                  <TableCell align="center">{data.width}</TableCell>
                  <TableCell align="center">{data.height}</TableCell>
                  <TableCell align="center">{data.url}</TableCell>
                  <TableCell align="center">{data.download_url}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InfiniteScroll>
    );
  }
  return (
    <section>
      <div className="main_heading">
        <h1 className="heading_text">Picture Table</h1>
      </div>
      <div className="show_table">
        <ShowData />
      </div>
    </section>
  );
}
