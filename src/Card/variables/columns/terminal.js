import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Button,
  Form, FormGroup, Label, Input, FormText,CardText,UncontrolledAlert,
  Col
 
} from "reactstrap";
;


export const TerminalsM = [
  {
      name: "Terminal ID",
      options: {
        filter: true,
        customHeadRender: (columnMeta, updateDirection) => (
          <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
            {columnMeta.name}
          </th>
        ),
        setCellHeaderProps: (value) => {
          return {
           
              style: {
                backgroundColor: 'white',
              
                whiteSpace: 'pre',
                color: '#172433'
              }
          };
        },

      }
    },
    {

      name: "Terminal Name",
      options: {
        filter: true,
        customHeadRender: (columnMeta, updateDirection) => (
          <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
            {columnMeta.name}
          </th>
        ),
        setCellHeaderProps: (value) => {
          return {
           
              style: {
                backgroundColor: 'white',
                
                whiteSpace: 'pre',
                color: '#172433'
              }
          };
        }
      }
    },
    {

      name: "Branch Code",
      options: {
        filter: true,
        customHeadRender: (columnMeta, updateDirection) => (
          <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
            {columnMeta.name}
          </th>
        ),
        setCellHeaderProps: (value) => {
          return {
           
              style: {
                backgroundColor: 'white',
                
                whiteSpace: 'pre',
                color: '#172433'
              }
          };
        }
      }
    },
    {
      name:'Till Account',
      options: {
        filter: false,
        customHeadRender: (columnMeta, updateDirection) => (
          <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
            {columnMeta.name}
          </th>
        ),
        setCellHeaderProps: (value) => {
          return {
           
              style: {
                backgroundColor: 'white',
                
                whiteSpace: 'pre',
                color: '#172433'
              }
          };
        }
      }
    },
    {
      name: "Atm Type",
      options: {
        filter: true,
        customHeadRender: (columnMeta, updateDirection) => (
          <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
            {columnMeta.name}
          </th>
        ),
        setCellHeaderProps: (value) => {
          return {
           
              style: {
                backgroundColor: 'white',
                
                whiteSpace: 'pre',
                color: '#172433'
        
              }
          };
        }
      }
    },
    {
      name: "Status",
      options: {
        filter: true,
        customHeadRender: (columnMeta, updateDirection) => (
          <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
            {columnMeta.name}
          </th>
        ),
        setCellHeaderProps: (value) => {
          return {
           
              style: {
                backgroundColor: 'white',
                
                whiteSpace: 'pre',
                color: '#172433'
        
              }
          };
        }
      }
    },
    
      
    ];


    

   