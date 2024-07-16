import React from "react";
import "./calendar";

const AppFullCalendar: React.FC = () => {
  return (
    <div className="card">
      {/* Card header */}
      <div className="card-header">
        <h2 className="card-title fw-bold">Calendar</h2>
        <div className="card-toolbar">
          <button className="btn btn-flex btn-primary" data-kt-calendar="add">
            <i className="ki-duotone ki-plus fs-2"></i>Add Event
          </button>
        </div>
      </div>
      {/* End Card header */}
      {/* Card body */}
      <div className="card-body">
        {/* Calendar */}
        <div id="kt_calendar_app"></div>
        {/* End Calendar */}
      </div>
      {/* End Card body */}
    </div>
  );
};

export default AppFullCalendar;
