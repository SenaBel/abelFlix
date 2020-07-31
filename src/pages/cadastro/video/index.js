import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/pageDefault'

function cadastroVideo() {
    return (
        <PageDefault>

            <h1> Cadastro de Vídeo</h1>

            <Link to="/cadastro/categoria">
                Cadastro Cagegoria
            </Link>

        </PageDefault>
    )
}

export default cadastroVideo