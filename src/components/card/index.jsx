import './index.scss';

export default function Card(props) {

    return (

        <div className='comp-card'>

            <div className='card'>
                <div
                    className='line'
                    style={{ backgroundColor: props.item.status}}
                />
                <div>
                    <h3>{props.item.titulo}</h3>
                    <h2>{props.item.periodo}</h2>
                </div>
            </div>

        </div>

    );
}