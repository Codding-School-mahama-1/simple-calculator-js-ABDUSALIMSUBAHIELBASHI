import React from 'react';
import Content from "./Component/content"
import Header from "./Component/header";
import Footer from "./Component/footer";

function App(){

  return (
    <div>
      <h1>Welcome to My React App</h1>
      <p>This is a simple React application.</p>
      <Content />
      <Header />
      <Footer />
    </div>
  );  
}
export default App;