import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";


class MoreDetails extends React.Component {
    state = {

    }

  render() {
      const column =[
        {
          
            name: "Branch Code",
            options: {
              filter: true,
              setCellHeaderProps: (value) => {
                return {
                 
                    style: {
                      backgroundColor: '#000',
                      
                      whiteSpace: 'pre',
                      color: 'white'
                    }
                };
              }
            }
          },
          {
      
            name: "Number of Cycles",
            options: {
              filter: true,
              setCellHeaderProps: (value) => {
                return {
                 
                    style: {
                      backgroundColor: '#000',
                      
                      whiteSpace: 'pre',
                      color: 'white'
                    }
                };
              }
            }
          },
          {
            name: "Date From",
            options: {
              filter: false,
              setCellHeaderProps: (value) => {
                return {
                 
                    style: {
                      backgroundColor: '#000',
                      
                      whiteSpace: 'pre',
                      color: 'white'
                    }
                };
              }
            }
          },
          {
            name: "Date To",
            options: {
              filter: true,
              setCellHeaderProps: (value) => {
                return {
                 
                    style: {
                      backgroundColor: '#000',
                      
                      whiteSpace: 'pre',
                      color: 'white'
              
                    }
                };
              }
            }
          }
          
      ];

    return (
      <>
      </>
    );

  }
}

export default MoreDetails;
