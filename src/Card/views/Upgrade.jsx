
    import React from 'react';
    import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
    import {Button} from 'reactstrap'
    import axios from 'axios'
    import curl from 'curl'
    const token ="pk_test_0a4edde00a3b8fdf7b68ab787aedda79bb53d3fa"

    const paystack = () => {
      const th = {
        amount: 2000,
        email: 'abimbolavictor3@gmail.com'
      }
      
      curl.post('https://api.paystack.co/transaction/initialize',th ,{
        header: {
          Authorization: 'Beaerer sk_test_12cc703f64e512e132f2ef7b5250c7db2ddf4ea7',
          ContentType: 'application/json'
        }
      },function(err, response, body) {});

    }
    
    const config = {
        reference: '5672aa6wyh76477',
        email: "abimbolavictor3@gmail.com",
        amount: 200000,
        publicKey: 'pk_test_0a4edde00a3b8fdf7b68ab787aedda79bb53d3fa',
    };
    
    const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            <div>
                <button onClick={() => {
                    initializePayment()
                }}>Paystack Hooks Implementation</button>
            </div>
        );
    };
    
    function Upgrade() {
        const componentProps = {
            ...config,
            text: 'Paystack Button Implementation',
            onSuccess: () => null,
            onClose: () => null
        };


    
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <br />
          <br />
          <br />
            {/* <PaystackHookExample />
            <PaystackButton {...componentProps} /> */}
            <PaystackConsumer {...componentProps} >
                {({initializePayment}) => <button onClick={() => initializePayment()}>Paystack Consumer Implementation</button>}
            </PaystackConsumer>

            <Button color="info" size="md" onClick={paystack} >Pay Stack</Button>
        </div>
      );
    }
    
    export default Upgrade;