import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
  Stack,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const BottomNoticesTable = ({ notices, page, handleChangePage, onNoticeClick }) => {
  const rowsPerPage = 8;

  const handleBackButtonClick = (event) => {
    handleChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    handleChangePage(event, page + 1);
  };

  const handlePageButtonClick = (event, newPage) => {
    handleChangePage(event, newPage);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>작성일</TableCell>
            <TableCell>제목</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notices
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((notice, index) => (
              <TableRow key={index} onClick={() => onNoticeClick(notice)}>
                <TableCell>{notice.date}</TableCell>
                <TableCell>{notice.title}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={notices.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        sx={{color: '#fff'}}
        ActionsComponent={({ onPageChange, page }) => (
          <div
            style={{
              display: "flex",
              margin: "5px 0",
            }}
          >
            <Stack direction="row" spacing={1} sx={{alignItems: 'center'}}>
              <IconButton
                onClick={(e) => handleBackButtonClick(e)}
                disabled={page === 0}
              >
                <NavigateBeforeIcon />
              </IconButton>
              {[...Array(Math.ceil(notices.length / rowsPerPage)).keys()].map(
                (number) => (
                  <IconButton
                    key={number}
                    onClick={(e) => handlePageButtonClick(e, number)}
                    sx={{
                      backgroundColor: page === number ? "rgba(255, 231, 105, 1)" : "rgba(234, 234, 234, 1)",
                      borderWidth: '1px',
                      borderColor: page === number ? "rgba(255, 205, 77, 1)" : "rgba(217, 216, 216, 1)",
                      borderRadius: "4px", 
                      width: "32px",
                      height: "32px",
                    }}
                  >
                    {number + 1}
                  </IconButton>
                )
              )}
              <IconButton
                onClick={(e) => handleNextButtonClick(e)}
                disabled={page === Math.ceil(notices.length / rowsPerPage) - 1}
              >
                <NavigateNextIcon />
              </IconButton>
            </Stack>
          </div>
        )}
      />
    </TableContainer>
  );
};

export default BottomNoticesTable;
