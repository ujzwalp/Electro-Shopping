import React from "react";
import ELECT_ITEMS from "../ELEC_ITEMS";
import Header from "./Header";
import Electronic from "./Electronic";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Electronic items={ELECT_ITEMS} />
      <Footer />
    </div>
  );
};

export default App;
