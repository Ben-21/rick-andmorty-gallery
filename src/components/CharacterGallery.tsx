import CharacterCard from "./CharacterCard.tsx";
import {Character} from "../models/models.ts";
import './CharacterGallery.css';


type Props =

    {
        characters: Character[],
    }


export default function CharacterGallery(props: Props) {
    return (
        <div className={"gallery"}>
            {
                props.characters.map(value => {
                    return <CharacterCard character={value} key={value.id}></CharacterCard>
                })
            }
        </div>
    )
}