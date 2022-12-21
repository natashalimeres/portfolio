import React from "react";
import Header from "../../components/Header";
import { Line } from "./styles";

function Home() {
  return (
    <>
      <Header />
      <Line />
      <main>
        <section className="about-me-section">
          <div className="about-me-title">
            <h1>SOBRE MIM</h1>
          </div>
          <div className="about-me-text">
            <p>
              Olá! <br></br>
              Sou formada em Enfermagem e atualmente estou buscando uma
              oportunidade para transição de carreira na área da Tecnologia.
              <br></br>
              Estudo Análise e Desenvolvimento de Sistemas e estou no 3º
              semestre.
            </p>
          </div>
        </section>

        <div className="social-fields">
          <section>
            <h2>REDES SOCIAIS</h2>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
