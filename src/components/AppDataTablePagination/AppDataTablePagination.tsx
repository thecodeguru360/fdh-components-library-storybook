import React, { useCallback, MouseEvent } from "react";
import { Col, Form, Row, Pagination } from "react-bootstrap";

import "./AppDataTablePagination.scss";
import FontAwesomeIcons from "../FontAwesomeIcons/FontAwesomeIcons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-solid-svg-icons";

export const CustomPagination: React.FC<any> = (props: any) => {
  const {
    rowCount,
    rowsPerPage,
    currentPage,
    paginationRowsPerPageOptions,
    onChangeRowsPerPage,
    onChangePage,
  } = props;

  const getNumberOfPages = (rowCount: number, rowsPerPage: number): number => {
    return Math.ceil(rowCount / rowsPerPage);
  };

  const handleRowsPerPage = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) =>
      onChangeRowsPerPage(Number(e.target.value), currentPage),
    [currentPage, onChangeRowsPerPage]
  );

  const handlePrevious = useCallback(
    () => onChangePage(currentPage - 1),
    [currentPage, onChangePage]
  );
  const handleNext = useCallback(
    () => onChangePage(currentPage + 1),
    [currentPage, onChangePage]
  );
  // const handlePageChange = useCallback(
  //   (e: MouseEvent<HTMLElement>) => {
  //     const pageNumber = Number(e.currentTarget.innerText);
  //     onChangePage(pageNumber);
  //   },
  //   [onChangePage]
  // );

  const memoizedHandlePageChange = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const pageNumber = Number(e.currentTarget.innerText.split("\n")[0]);
      console.log(pageNumber);
      onChangePage(pageNumber);
    },
    [onChangePage]
  );

  return (
    <div className="div-center">
      <Row className="mt-4 custom-pagination">
        <Col md={6} className="left-column">
          <div>Rows per page</div>
          <div className="div-center">
            <Form.Group controlId="pages">
              <Form.Label className="hidden-text">pages</Form.Label>
              <Form.Select
                name="pages"
                value={rowsPerPage}
                onChange={handleRowsPerPage}
              >
                {paginationRowsPerPageOptions.map((page: any, i: any) => (
                  <option key={i} value={page}>
                    {page}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
          <div>
            Showing {currentPage} - {rowsPerPage} of {rowCount}
          </div>
        </Col>

        <Col md={6} className="right-column">
          <Pagination>
            <Pagination.Item
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcons iconName={faChevronLeft} /> Previous
            </Pagination.Item>
            {Array.from(
              { length: getNumberOfPages(rowCount, rowsPerPage) },
              (_, i) => i + 1
            ).map((page) => (
              <Pagination.Item
                onClick={memoizedHandlePageChange}
                tabIndex={page}
                key={page}
                active={page === currentPage}
              >
                {page}
              </Pagination.Item>
            ))}
            <Pagination.Item
              onClick={handleNext}
              disabled={currentPage === getNumberOfPages(rowCount, rowsPerPage)}
            >
              Next
              <FontAwesomeIcons iconName={faChevronRight} />
            </Pagination.Item>
          </Pagination>
        </Col>
      </Row>
    </div>
  );
};

export default CustomPagination;
