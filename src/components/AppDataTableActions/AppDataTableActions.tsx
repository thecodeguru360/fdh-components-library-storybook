import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import {
  faEllipsis,
  faPencil,
  faEye,
  faPrint,
  faRepeat,
} from "@fortawesome/pro-solid-svg-icons";

import FontAwesomeIcons from "../FontAwesomeIcons/FontAwesomeIcons";
// import { ApiClient } from "../../core/api/ApiClient";
// import AppConstants from "../../core/utils/AppConstants";

import "./AppDataTableActions.scss";

interface TableActionsProps {
  actionData: any;
  actions: any;
  actionCallback?: Function;
}
const TableActions = ({
  actionData,
  actions,
  actionCallback,
}: TableActionsProps) => {
  const componentRef = useRef(null);

  const onBeforeGetContentResolve = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [printData, setPrintData] = useState<any>(null);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  // const apiCalls = async () => {
  //   let response;
  //   switch (actionSection) {
  //     case "CRT":
  //       response = await ApiClient.get(
  //         `${AppConstants.API_ROUTES.CRTCASE.GET_CRT_CASE_DETAILS}?id=${actionData?.crtCaseId}`
  //       );
  //       setPrintData(response.data?.[0]);
  //       break;
  //     case "CAG":
  //       response = await ApiClient.get(
  //         `${AppConstants.API_ROUTES.CAG.EDIT_CAG}${actionData?.cagId}`
  //       );
  //       setPrintData(response.data?.[0]);
  //       break;
  //     default:
  //       return true;
  //   }
  // };

  //  Call data for print before content gets print
  // const handleOnBeforeGetContent = useCallback(() => {
  //   setLoading(true);

  //   return new Promise(async (resolve: any) => {
  //     onBeforeGetContentResolve.current = resolve;

  //     // await apiCalls();
  //     setTimeout(() => {
  //       setLoading(false);
  //       resolve();
  //     }, 5000);
  //   });
  // }, [setLoading, printData]);

  // useEffect(() => {
  //   if (printData && typeof onBeforeGetContentResolve.current === "function") {
  //     onBeforeGetContentResolve.current();
  //   }
  // }, [onBeforeGetContentResolve.current, printData]);

  // const reactToPrintTrigger = React.useCallback(() => {
  //   return (
  //     <div>
  //       <FontAwesomeIcons
  //         iconName={actionNames("print")}
  //         iconClasses="cursor-pointer"
  //       />
  //     </div>
  //   );
  // }, []);

  const actionNames = (type: string) => {
    switch (type) {
      case "ellipsis":
        return faEllipsis;

      case "edit":
        return faPencil;

      case "view":
        return faEye;

      case "print":
        return faPrint;

      case "repeat":
        return faRepeat;

      default:
        return faEye;
    }
  };

  const getDocumentTitle = (data: any, section: any) => {
    switch (section) {
      case "CRT":
        return `Region${data?.region}(${data?.reportingQuarter})`;
      case "CAG":
        return `${data?.hsCoalitionName}(${data?.fiscalYear})`;
      default:
        return "Test";
    }
  };

  return (
    <div className="table-actions">
      {actions.map((val: any, i: any) => (
        <div key={i} tabIndex={0}>
          {
            // val === "print" ? (
            //   <ReactToPrint
            //     content={reactToPrintContent}
            //     documentTitle={getDocumentTitle(actionData, actionSection)}
            //     onAfterPrint={console.log}
            //     onBeforeGetContent={handleOnBeforeGetContent}
            //     onBeforePrint={console.log}
            //     removeAfterPrint
            //     trigger={reactToPrintTrigger}
            //   />
            // ) :
            <FontAwesomeIcons
              key={i}
              iconName={actionNames(val)}
              iconClasses="cursor-pointer"
              handleClick={() =>
                actionCallback && actionCallback(actionData, val)
              }
            />
          }
        </div>
      ))}

      {/* <div style={{ display: "none" }}>
        {actionSection == "CRT" && printData ? (
          <PrintCRT ref={componentRef} data={printData} />
        ) : (
          ""
        )}
        {actionSection == "CAG" && printData ? (
          <PrintCAG ref={componentRef} data={printData} />
        ) : (
          ""
        )}
      </div> */}
    </div>
  );
};

export default TableActions;
