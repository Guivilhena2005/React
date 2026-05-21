import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./About.css";

function AboutPage() {

  const timeline = [

    {
      year: "2006",
      title: "A Semente da Mudança",
      text: "Tudo começou em 2006 quando a empresa iniciou sua trajetória."
    },

    {
      year: "2012",
      title: "Expandindo Horizontes",
      text: "A empresa cresceu e começou a expandir seus objetivos."
    }

  ];

  return (

    <>

      <Header />

      <section className="about">

        <div className="about-left">

          <h1>Nossa História</h1>

          <p>
            Há muitos anos um sonho começou a se transformar em realidade.
            Nossa trajetória foi construída através de dedicação, crescimento
            e inovação.
          </p>

          <button>
            Fale Conosco
          </button>

        </div>

        <div className="timeline">

          {timeline.map((item, index) => (

            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span>{item.year}</span>

                <h2>{item.title}</h2>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </>
  );
}

export default AboutPage;