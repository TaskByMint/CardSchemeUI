import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
              export const receipt = [
                {
                    name: "Terminal ID",
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
                    name: "Transaction Date",
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
                    name: "STAN",
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
                              color: '#white'
                            }
                        };
                      }
                    }
                  },
                  {
                    name: "AuthIDs",
                    customHeadRender: (columnMeta, updateDirection) => (
                      <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433', fontWeight:"bold" }}>
                        {columnMeta.name}
                      </th>
                    ),
                    options: {
                      filter: false,
                      setCellHeaderProps: (value) => {
                        return {
                         
                            style: {
                              backgroundColor: 'white',
                              whiteSpace: 'pre',
                              fontWeight: 'bold',
                              color: '#172433',
                            }
                        };
                      }
                    }
                  },
                  {
                    name: "PAN",
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
                    name: "Transaction Status",
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

              ]

             export  const cycle = [
                {
                  name: "Terminal ID",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px', 
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172433'
                          }
                      };
                    },
              
                  }
                },
                {
              
                  name: "Branch Code",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172433'
                          }
                      };
                    }
                  }
                },
                {
              
                  name: "Analysis Status",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172433'
                          }
                      };
                    }
                  }
                },
               
               
                {
                  name: "Expected CashRemaining",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                {
                  name: "Expected CashDispensed",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                {
                  name: "Ej CashOffLoad",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                {
                  name: "Ej CashLoad",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                {
                  name: "Diff CashOffLoad",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                {
                  name: "Diff CashLoad",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                {
                  name: "Diff Balance",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                {
                  name: "Cycle TimeTo",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                {
                  name: "Cycle TimeFrom",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                {
                  name: "Cycle Status",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                {
                  name: "Cycle DateTo",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                {
                  name: "Cycle DateFrom",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
               
                {
                  name: "CBA CashOffLoad",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                
                {
                  name: "CBA CashLoad",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
                {
                  name: "Date From",
                  options: {
                    filter: true,
                    setCellHeaderProps: (value) => {
                      return {
                       
                          style: {
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
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
                            backgroundColor: 'white',
                            paddingRight: '50px',
                            whiteSpace: 'pre',
                            fontWeight:'bold',
                            color: '#172443'
                    
                          }
                      };
                    }
                  }
                },
              
              ];
              

    

   