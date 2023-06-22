import {Character} from "../models/models.ts";
import './characterCard.css';


type Props =
    {
        character: Character,
    }


export default function CharacterCard(props: Props) {
    return (
        <div className={"main"}>
            <div>
                {props.character.name}
                <br/>
                {props.character.gender}
                <br/>
                {props.character.status}
                <br/>
                {props.character.species}
                <br/>
            </div>
            <div className={"images"}>
                <img src={props.character.image} alt="Character Image"/>
            </div>
        </div>
    )
}