import React from "react";
import ItemlListContainer from "../../components/ItemListContainer/ItemlListContainer";
import NavBar from "../../components/NavBar/NavBar";

function HomePage(props) {
  return (
    <div>
      <NavBar />
      <ItemlListContainer />
    </div>
  );
}

export default HomePage;
