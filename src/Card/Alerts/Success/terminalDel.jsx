import React from 'react';
import {UncontrolledAlert} from 'reactstrap'
class Delete extends React.Component{
    render(){
        return(
            <>
             <UncontrolledAlert
                            className="alert-with-icon"
                            color="danger"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              Byteproof Terminal Deleted Successfully
                            </span>
             </UncontrolledAlert>
            </>
        )
    }
}
export default Delete