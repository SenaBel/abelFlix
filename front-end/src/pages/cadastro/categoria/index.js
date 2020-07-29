import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/pageDefault";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function handleSubimitForm(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais); // Limpando o Enput
  }

  function handleChange(event) {
    const { getAttribute, value } = event.target;
    setValue(getAttribute("name"), value);
    console.log(values);
    console.log(event.target.value);
  }

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  return (
    <PageDefault>
      <h1> Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={handleSubimitForm}>
        <div>
          <label>
            Nome da Categoria:
            <input
              className="recebe-nome-categoria"
              name="nome"
              type="text"
              value={values.nome}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Area da Descrição:
            <textarea
              className="recebe-nome-categoria"
              name="descricao"
              type="text"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Escolha cor:
            <input
              className="recebe-nome-categoria"
              name="cor"
              type="color"
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((cate, indice) => {
          return <li key={`${cate} ${indice}`}>{cate.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir Para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
