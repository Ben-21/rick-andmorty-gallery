import {characterList} from "./models/CharacterList.tsx";
import Header from "./components/Header.tsx";
import CharacterGallery from "./components/CharacterGallery.tsx";



export default function App() {

    return (

        <div>

            <Header/>
            <CharacterGallery characters={characterList}></CharacterGallery>
        </div>
    )
}