import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Nav, NavItem } from 'react-bootstrap';

interface AppTabbedCardProps {
  tabs: string[];
  children: React.ReactNode[];
}

const AppTabbedCard: React.FC<AppTabbedCardProps> = ({ tabs, children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="card"> {/* Use Bootstrap card class */}
      <div className="card-header">
        <Nav variant="tabs" defaultActiveKey="0">
          {tabs.map((tab, index) => (
            <NavItem key={index}>
              <Nav.Link eventKey={index.toString()} onClick={() => handleTabChange(index)}>
                {tab}
              </Nav.Link>
            </NavItem>
          ))}
        </Nav>
      </div>
      <div className="card-body">
        {children[selectedTab]}
      </div>
    </div>
  );
};

export default AppTabbedCard;
