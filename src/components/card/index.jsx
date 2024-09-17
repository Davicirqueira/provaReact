import './index.scss';

export default function Card(props) {

    let corFaixa = '';

    switch (props.item.status){
        case 'Comprado':
            corFaixa = '#15c933'
            break;

        case 'NC':
            corFaixa = '#d30f0f'
            break;

        default:
            corFaixa = '#000'
            break;

    }

    return (

        <div className='comp-card'>

            <div className='card'>
                <div
                    className='line'
                    style={{ backgroundColor: corFaixa}}
                />
                <div>
                    <h3>{props.item.titulo}</h3>
                    <h2>{props.item.periodo}</h2>
                </div>
            </div>

        </div>

    );
}