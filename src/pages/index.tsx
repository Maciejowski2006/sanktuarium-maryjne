import * as React from "react"

import '../styles/styles.scss'
import '../components/slide_imgGrid.scss'

import Slide from '../components/Slide'

const IndexPage = () => {
    return (
        <>
                <div className={'slides'}>
                    <Slide title={"Sanktuarium Matki Bożej Bolesnej Królowej Polski w Licheniu Starym"}>
                        <p>
                            Ośrodek kultu maryjnego o znaczeniu ogólnopolskim i międzynarodowym, jest położony w Licheniu Starym. Sanktuarium leży na terenie parafii św. Doroty, w diecezji włocławskiej.
                        </p>
                        <p>
                            Za początek sanktuarium odpowiadają objawnienia marjne w pierwszej połowie XIX wieku, którymi świadkami byli Tomasz Kłossowski i Mikołaj Sikatka.
                        </p>
                        <p>
                            Sanktuarium związane jest z objawieniami maryjnymi i uznawane jest za cudowny obraz Matki Boskiej Licheńskiej. Zasięgiem obejmuje  zespół kościołów, kaplice, klasztory, cmentarz, kamienną Golgotę, część muzeum im. ks. Józefa Jarzębowskiego z Fawley Court, muzeum budowy bazyliki, Licheńskie Centrum Pomocy Rodzinie i Osobom Uzależnionym, hospicjum im. bł. Stanisława Papczyńskiego, Centrum Formacji Maryjnej „Salvatoris Mater”, Duszpasterstwo Młodzieży i Powołań, Dom Papieski, źródełko, figury i pomniki oraz inne obiekty sakralne i infrastruktury pielgrzymkowej. Głównym kościołem sanktuarium jest obecnie bazylika Najświętszej Maryi Panny Licheńskiej w Licheniu Starym.
                        </p>
                    </Slide>
                    <Slide title={'Zdjęcia'}>
                        <div className={'slide--grid'}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Liche%C5%84_-_Cudowny_Obraz_Matki_Bo%C5%BCej_Liche%C5%84skiej.JPG/220px-Liche%C5%84_-_Cudowny_Obraz_Matki_Bo%C5%BCej_Liche%C5%84skiej.JPG" alt="Obraz Matki Bożej Licheńskiej"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pomnik_Jana_Paw%C5%82a_II_w_Licheniu.jpg/220px-Pomnik_Jana_Paw%C5%82a_II_w_Licheniu.jpg" alt="Pomnik upamiętniający pielgrzymkę Jana Pawła II do Lichenia"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Zmartwychwstanie_Jezusa_Chrystusa_%28Liche%C5%84%29.jpg/220px-Zmartwychwstanie_Jezusa_Chrystusa_%28Liche%C5%84%29.jpg" alt="Zmartwychwstanie Jezusa Chrystusa"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/G%C5%82%C3%B3wna_kopu%C5%82a_Sanktuarium_Cudownego_Obrazu_Matki_Boskiej_Liche%C5%84skiej.jpg/220px-G%C5%82%C3%B3wna_kopu%C5%82a_Sanktuarium_Cudownego_Obrazu_Matki_Boskiej_Liche%C5%84skiej.jpg" alt="Główna kopuła"/>

                            <span>Obraz Matki Bożej Licheńskiej</span>
                            <span>Pomnik upamiętniający pielgrzmkę Jana Pawła II do Lichenia</span>
                            <span>Zmartwychwstanie Jezusa Chrystusa</span>
                            <span>Główna kopuła</span>
                        </div>
                    </Slide>

                </div>


        </>
    )
}

export default IndexPage
