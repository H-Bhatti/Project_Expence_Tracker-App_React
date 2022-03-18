import React from "react";
import "./App.css"


//importing header 
//use {} for header because not export default
import {Header} from "./Header"
import {Balance} from "./Balance"
import {Summary}    from "./Account"
import {TransactionHistory} from "./TransactioHistory"
import {NewTransaction} from "./NewTransaction"
import { GlobalProvider } from "./context";

function App() {
  return (
   
    <div>
      <Header />
      <GlobalProvider>
        <div className="App">
          <Balance />
         <Summary />
         <TransactionHistory />
         <NewTransaction />
        </div>
        </GlobalProvider>
    </div>
    
  );
}

export default App;
