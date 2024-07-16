import React, { ReactNode, useCallback, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import FontAwesomeIcons from "../FontAwesomeIcons/FontAwesomeIcons";
import { faMagnifyingGlass } from "@fortawesome/pro-regular-svg-icons";
import { faBarsFilter, faClose } from "@fortawesome/pro-solid-svg-icons";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import "./AppDataTable.scss";
import CustomPagination from "../AppDataTablePagination/AppDataTablePagination";
import { faArrowUpArrowDown } from "@fortawesome/pro-light-svg-icons";
import { AppButton } from "../AppButton";
import AppDataTableNoData from "./AppDataTableNoData";
import AppDataTableProgressBar from "./AppDataTableProgressBar";

export interface AppDataTableProps {
  data: any[];
  columns: any[];
  loading?: true | false;
  pagination?: true | false;
  conditionalRowStyles?: any[];
  tableHeading?: string;
  filter?: true | false;
  search?: true | false;
  filtersData?: any[];
  searchCallBack?: Function;
  filterCallBack?: Function;
  customStyles?: any;
  filterColumnsPerRow?: number;
  tableHeaderActions?: ReactNode;
  expandableRows?: any;
  expandableRowsComponent?: any;
  expandableRowsComponentProps?: any;
  expandableRowExpanded?: any;
  onSelectedRowsChange?: (selected: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: any;
  }) => void;
  selectableRows?: boolean;
  noDataComponent?: React.ReactNode;
  noDataMessage?: string;
}

export const AppDataTable = ({
  data,
  columns,
  pagination,
  conditionalRowStyles,
  loading,
  tableHeading,
  filter,
  search,
  filtersData,
  searchCallBack,
  customStyles,
  filterCallBack,
  filterColumnsPerRow = 4,
  tableHeaderActions,
  expandableRows,
  expandableRowExpanded,
  expandableRowsComponent,
  expandableRowsComponentProps,
  onSelectedRowsChange,
  selectableRows,
  noDataComponent,
  noDataMessage = "No data found!",
  ...props
}: AppDataTableProps) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterForm, setFilterForm] = useState<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleShow = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const cols = `col col-md-${12 / filterColumnsPerRow}`;

  const rows: JSX.Element[] = [];
  const filtersDataObj = filtersData ? filtersData : [];
  for (let i = 0; i < filtersDataObj.length; i += filterColumnsPerRow) {
    const rowColumns = filtersDataObj.slice(i, i + filterColumnsPerRow);

    const row = (
      <div key={"row-" + i} className="row mb-2">
        {rowColumns?.map((val: any, index: any) => {
          if (val.type === "SELECT") {
            return (
              <>
                <div key={"col-" + index} className={cols}>
                  <Form.Group className="mb-1" controlId={val.key}>
                    <Form.Select
                      name={val.key}
                      value={filterForm?.[val.key] || ""}
                      onChange={(e: any) =>
                        handleFilterForm(val, e.target.value)
                      }
                      className="form-select-sm"
                    >
                      <option value={""}>{val.title}</option>
                      {val.values.map((data: any) => (
                        <option key={data.val} value={data.val}>
                          {data.text}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
              </>
            );
          }
        })}
      </div>
    );

    rows.push(row);
  }

  const handleFilterForm = (data: any, fieldValue: any) => {
    let obj = {
      ...filterForm,
      [data.key]: fieldValue,
    };
    setFilterForm(obj);
  };

  const handleFilterClear = () => {
    setFilterForm(null);
    if (filterCallBack) {
      filterCallBack(null);
    }
  };

  const handleFilterApply = () => {
    if (filterForm) {
      Object.keys(filterForm).forEach((key) => {
        if (filterForm[key] === "" || !filterForm[key]) {
          delete filterForm[key];
        }
      });
    }
    if (filterCallBack) {
      filterCallBack(filterForm);
    }
  };

  const handleKeyDown = useCallback(
    (e: any) => {
      let value = e?.target?.value;
      if (e.key === "Enter" && searchCallBack) {
        searchCallBack(value);
      }
    },
    [searchKeyword, searchCallBack]
  );

  return (
    <div className="AppDatatable row">
      <div className="col col-md-12">
        <Row className="mb-3 heading m-auto">
          <Col md={5}>
            <Row className="mb-3 align-items-center">
              <Col md={"auto"}>
                {tableHeading ? (
                  <h5>
                    <strong>{tableHeading}</strong>
                  </h5>
                ) : (
                  ""
                )}
              </Col>
              {tableHeaderActions && (
                <Col md={"auto"}>
                  <div className="d-flex dt-action-buttons">
                    {tableHeaderActions}
                  </div>
                </Col>
              )}
            </Row>
          </Col>
          <Col md={7} className="div-right-center">
            <Row>
              {filter ? (
                <Col md={"auto"}>
                  <button
                    className="form-control"
                    type="button"
                    onClick={toggleShow}
                    // disabled={disabled}
                  >
                    <div className="filter">
                      <span>
                        <FontAwesomeIcons iconName={faBarsFilter} />
                      </span>
                      Filter
                    </div>
                  </button>
                </Col>
              ) : (
                ""
              )}

              {search ? (
                <Col md={"auto"}>
                  <div>
                    <InputGroup>
                      <Form.Control
                        //placeholder="Search by Keywords"
                        aria-label="Search by Keywords"
                        value={searchKeyword}
                        onChange={(e: any) => setSearchKeyword(e.target.value)}
                        onBlur={(e) => setSearchKeyword(e.target.value)}
                        onKeyDown={(e: any) => handleKeyDown(e)}
                      />
                      {searchKeyword ? (
                        <FontAwesomeIcons
                          iconName={faClose}
                          parentClasses="clear-search cursor-pointer"
                          handleClick={() => {
                            setSearchKeyword("");
                            searchCallBack && searchCallBack("");
                          }}
                        />
                      ) : (
                        ""
                      )}
                      <InputGroup.Text
                        className="search-icon"
                        onClick={() =>
                          searchCallBack && searchCallBack(searchKeyword)
                        }
                      >
                        <FontAwesomeIcons iconName={faMagnifyingGlass} />
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                </Col>
              ) : (
                ""
              )}
            </Row>
          </Col>
        </Row>
        {isOpen && (
          <Row className="mb-3 heading filter-fields m-auto">
            <Col md={12}>
              <Row className="mb-0">
                <Col
                  md={10}
                  className="div-right-center"
                  style={{ borderRight: "1px solid #CED4DA" }}
                >
                  <Row className="mb-0">{rows}</Row>
                </Col>
                <Col md={2} className="div-right-center">
                  <Row className="mb-0">
                    <Col xs={6}>
                      <Button
                        variant="outline"
                        type="submit"
                        onClick={handleFilterClear}
                        disabled={!filterForm}
                        className="px-4 btn-clear"
                      >
                        <u>Clear</u>
                      </Button>
                    </Col>
                    <Col xs={6} className="text-right">
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={!filterForm}
                        onClick={handleFilterApply}
                        className="submit-btn px-4 btn-apply"
                      >
                        Apply
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
        <DataTable
          sortIcon={<FontAwesomeIcons iconName={faArrowUpArrowDown} />}
          columns={columns}
          data={data}
          pagination={pagination}
          paginationComponent={CustomPagination}
          progressPending={loading}
          progressComponent={<AppDataTableProgressBar />}
          conditionalRowStyles={conditionalRowStyles}
          onChangeRowsPerPage={console.log}
          customStyles={customStyles}
          striped={true}
          highlightOnHover={true}
          responsive={true}
          expandableRows={expandableRows}
          expandableRowExpanded={expandableRowExpanded}
          expandableRowsComponent={expandableRowsComponent}
          expandableRowsComponentProps={expandableRowsComponentProps}
          onSelectedRowsChange={onSelectedRowsChange}
          selectableRows={selectableRows}
          noDataComponent={
            <AppDataTableNoData cols={columns} message={noDataMessage} />
          }
        />
      </div>
    </div>
  );
};

export default AppDataTable;
