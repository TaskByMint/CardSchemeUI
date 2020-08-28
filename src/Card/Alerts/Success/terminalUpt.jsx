import React from 'react';
import {UncontrolledAlert} from 'reactstrap'
class Update extends React.Component{
    render(){
        return(
            <>
             <UncontrolledAlert
                            className="alert-with-icon"
                            color="primary"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              Byteproof Terminal Updated Successfully
                            </span>
             </UncontrolledAlert>
            </>
        )
    }
}
export default Update