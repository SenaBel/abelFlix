import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/home';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria'

const Pagina404 = () => {
  return (<div> <h1>Página 404</h1></div>)
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404}/>

    </Switch>
  </BrowserRouter>,


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);


