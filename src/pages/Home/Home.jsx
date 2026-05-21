import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {

  return (

    <>

      <Header />

      <main className="home">

        <h1>Página Inicial</h1>

        <p>
          Bem-vindo ao meu projeto React.
        </p>

      </main>

      <Footer />

    </>

  );
};

export default Home;