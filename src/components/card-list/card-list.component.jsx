import Card from '../card/card.component';
import './card-list.styles.css';


const CardList = ({monsters}) =>( //you can immediately destructure props in the parameter
<div className="card-list">
        {monsters.map((monster) => {
            return <Card key={monster.id} monster={monster}/>
        })}
    </div>
);
    


export default CardList;