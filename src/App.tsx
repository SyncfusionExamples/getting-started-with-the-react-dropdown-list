import React from 'react';
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import {DataManager, WebApiAdaptor, Query} from '@syncfusion/ej2-data';
import './App.css';

function App() {
  const divStyle = {
    margin: 100,
    width: 250
  }
  const sportsData: { [key: string]: Object }[] = [
    { Id: 'game1', Game: 'Badminton' },
    { Id: 'game2', Game: 'Football' },
    { Id: 'game3', Game: 'Tennis' }
];
const remoteData: DataManager = new DataManager({
  url: "https://ej2services.syncfusion.com/production/web-services/api/Employees",
  adaptor: new WebApiAdaptor,
  crossDomain: true
})
const dataQuery: Query = new Query().select(['FirstName', 'EmployeeID']).take(10).requiresCount();
  return (
    <div style={divStyle}>
      <DropDownListComponent dataSource={remoteData} query={dataQuery}
      fields={{value:"EmployeeID", text:"FirstName"}}></DropDownListComponent>
    </div>
  );
}

export default App;
