import React from 'react';
import {UncontrolledAlert} from 'reactstrap'
class Add extends React.Component{
    render(){
        return(
            <>
             <UncontrolledAlert
                            className="alert-with-icon"
                            color="success"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              Byteproof New Terminal Created Successfully
                            </span>
             </UncontrolledAlert>
            </>
        )
    }
}
export default Add