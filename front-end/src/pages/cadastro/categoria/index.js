import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/pageDefault'

function cadastroCategoria() {
    return (
        <PageDefault>

            <h1> Cadastro de Categoria</h1>

            <form>

                <label>
                Nome da Categoria:
                <input
                    type="text"
                />
                </label>

                <button>
                Cadastrar
                </button>
            </form>

            <Link to="/">
               Ir Para Home
            </Link>

        </PageDefault>
    )
}

export default cadastroCategoria