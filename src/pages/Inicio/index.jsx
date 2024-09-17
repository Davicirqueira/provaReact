import { useState } from 'react';
import './styles.scss';


import Card from '../../components/card';

export default function Inicio() {

  const [listaFazeres, setListaFazeres] = useState([])

  const [titulo, setTitulo] = useState('')
  const [periodo, setPeriodo] = useState('')
  const [status, setStatus] = useState('')

  let novoFazer = {

    titulo: titulo,
    periodo: periodo,
    status: status

  }


  function adicionarFazer() {

    if(titulo, periodo, status == ''){

      alert('Preencha todos os campos')
      return;
      
    }

    setListaFazeres([...listaFazeres, novoFazer]);

    setTitulo('');
    setPeriodo('');
    setStatus('');

  }

  function Enter(e){

    if(e.key == 'Enter'){

      adicionarFazer();

    }

  }

  return (
    <div className='pagina-inicio'>
      <h1>Inicio</h1>

      <input className='campo' placeholder='Informe o titulo' value={titulo} onChange={e => setTitulo(e.target.value)} />
      <input className='campo' placeholder='Informe o periodo' value={periodo} onChange={e => setPeriodo(e.target.value)} />
      <input className='campo' placeholder='Informe o status' value={status} onChange={e => setStatus(e.target.value)} onKeyUp={Enter}/>
      <button onClick={adicionarFazer}>Adicionar a fazer</button>

      <div className='card-container'>

        {listaFazeres.map(item =>

          <Card item={item} />

        )}

      </div>

    </div>
  );
}