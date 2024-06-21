import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa obrigatorio label="Time" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
