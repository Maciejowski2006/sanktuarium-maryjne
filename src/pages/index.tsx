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
                            Za początek sanktuarium odpowiadają objawnienia marjne z pierwszej połowy XIX wieku, którymi świadkami byli Tomasz Kłossowski i Mikołaj Sikatka.
                        </p>
                        <p>
                            Sanktuarium związane jest z objawieniami maryjnymi i uznawane jest za cudowny obraz Matki Boskiej Licheńskiej. Głównym kościołem sanktuarium jest obecnie bazylika Najświętszej Maryi Panny Licheńskiej w Licheniu Starym.
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
                    <Slide title={"Bazylika"}>
                        <p>
                            Bazylika Najświętszej Maryi Panny Licheńskiej, często jest nazywana niepoprawnie Bazyliką Matki Bożej Bolesnej Królowej Polski. Jest to obecnie największy kościół w Polsce. To ważny katolicki ośrodek religijny w kraju. Wzniesiono go dla upamiętnienia objawień z lat 1813 i 1850–1852.
                        </p>
                    </Slide>
                    <Slide title={"Ważne obiekty"}>
                        <p>
                            W skład sanktuarium wchodzi zespół kościołów, kaplice, klasztory, cmentarz, kamienną Golgotę, część muzeum im. ks. Józefa Jarzębowskiego z Fawley Court, muzeum budowy bazyliki, Licheńskie Centrum Pomocy Rodzinie i Osobom Uzależnionym, hospicjum im. bł. Stanisława Papczyńskiego, Centrum Formacji Maryjnej „Salvatoris Mater”, Duszpasterstwo Młodzieży i Powołań, Dom Papieski, źródełko, figury i pomniki oraz inne obiekty sakralne i infrastruktury pielgrzymkowej.
                        </p>
                    </Slide>
                    <Slide title={"Kalendarium"}>
                        <ul>
                            <li>1151 r. - Pierwsza historyczna wzmianka dotycząca Lichenia - Piotr Dunin postawił wtedy granitowy krzyż w połowie drogi między Grąblinem a Licheniem, czym zaznaczył szlak z Kalisza do Kruszwicy. Krzyż stoi obecnie w kapliczce w centrum wsi.</li>
                            <li>1232 r. - Pierwsze wzmianki o kapelanach licheńskich.</li>
                            <li>1415 r. - Biskup poznański Andrzej Łaskarz z rodu Godziembów Licheńskich ufundował parafię i kościół pod wezwaniem św. Doroty Panny i Męczenniczki.</li>
                            <li>1655 r. - Nazjad Szwedów, położył on kres miasteczku - ludność została wymordowana, a kościół zniszczony i ograbiony.</li>
                            <li>1728 r. - Odbudowa zdewastowanej świątyni.</li>
                            <li>1800 r. - Rozbiórka starej świątyni - w jej miejscu powstał nowy kościół.</li>
                            <li>1813 r. - Bitwa pod Lipskiem. Pierwsze objawienia, których doznał ranny żołnierz - Tomasz Kłossowski.</li>
                            <li>1819 r. - Właścicielami Lichenia został ród Kwileckich - od początku planowali wybudowanie murowanego kościoła. Miał zastąpić zbyt małą świątynię, lecz ze względu na zubożenie ludności plany te odłożono na później.</li>
                            <li>1836 r. - Kłossowski odnalazł po latach poszukiwań na przydrożnym drzewie koło wsi Lgota podczas pielgrzymki na Jasną Górę obraz zgodny z wizją i po uzyskaniu zgody właściciela zabrał go ze sobą do domu w Izabelinie.</li>
                            <li>1844 r. - Tomasz Kłossowski umieścił obrazek na sośnie w pobliskim lesie.</li>
                            <li>1845 r. - Hrabina Izabela Kwilecka położyła kamień węgielny pod budowę kościoła murowanego.</li>
                            <li>1848 r. - Śmierć Tomasza Kłossowskiego.</li>
                            <li>1850 r. - Objawienia Matki Bożej Mikołajowi Sikatce. Podczas objawień, według relacji wizjonera zachowanej w ludowym przekazie, Maryja wzywała do modlitwy(w szczególności różańcowej). Zapowiedziała epidemie i wojny oraz odrodzenie Polski. Prosiła, aby kapłani odprawiali msze św. przebłagalne. Chciała, żeby obraz był przeniesiony z lasu w godniejsze miejsce. Zapowiedziała budowę wielkiego kościoła ku jej czci.</li>
                            <li>1852 r. - Po wybuchu epidemii cholery i wzmożeniu kultu, na mocy decyzji ks. biskupa Jana Michała Marszewskiego, obraz został przeniesiony do kaplicy w Licheniu (obecny kościół Matki Boskiej Częstochowskiej).</li>
                            <li>1858 r. - Nastąpiła konsekracja murowanego kościoła w stylu neogotyckim (obecny kościół św. Doroty).</li>
                            <li>1921–1924 r. - Pobyt i uzdrowienie Stefana Wyszyńskiego..</li>
                            <li>1940–1945 r. - Kościół św. Doroty w czasie wojny został siedzibą obozu Hitlerjugend – młodzieży hitlerowskiej. Niemcy ograbili kościół, jednak sam obraz został ukryty przez parafian.</li>
                            <li>1944 r. - Wychowawczyni hitlerowskiej młodzieży Berta Bauer w czasie pobytu w Licheniu strzelała do krucyfiksu.</li>
                            <li>1945 r. - Wizerunek Matki Boskiej wrócił z Malińca do Lichenia.</li>
                            <li>1949 r. - Marianie objęli parafię w Licheniu, pierwszym mariańskim kustoszem sanktuarium został ks. Józef Glinka.</li>
                            <li>1967 r. - Kustoszem został ks. Eugeniusz Makulski MIC. Ks. kard. Stefan Wyszyński ukoronował Cudowny Obraz Matki Boskiej Licheńskiej koroną papieską, papież Paweł VI obdarzył też sanktuarium przywilejem odpustu zupełnego w każdy dzień roku.</li>
                            <li>1968 r. - Poświęcenie źródełka, budowa kapliczki w lesie grąblińskim na miejscu objawień.</li>
                            <li>1969 r. - Odbudowa i poświęcenie kościoła Matki Bożej Częstochowskiej.</li>
                            <li>1970 r. - Poświęcenie Kaplicy św. Krzyża w której umieszczono krzyż do którego strzelała wychowawczyni Hitlerjugend.</li>
                            <li>1975 r. - Budowa mauzoleum pasterza Mikołaja Sikatki i kapliczki objawień Tomasza Kłossowskiego.</li>
                            <li>1976 r. - Początek budowy Golgoty.</li>
                            <li>1993 r. - Zatwierdzenie projektu budowy bazyliki, opracowanego przez Barbarę Bielecką.</li>
                            <li>1994 r. - Ruszyła budowa bazyliki, plac poświęcił nuncjusz apostolski w Polsce, ks. abp Józef Kowalczyk.</li>
                            <li>1995 r. - Prymas Polski ks. kard. Józef Glemp wmurował kamień węgielny bazyliki.</li>
                            <li>1996 r. - Poświęcenie kaplicy Trójcy Świętej – pierwszej oddanej kaplicy w nowej świątyni.</li>
                            <li>1999 r. - Przybycie papieża Jana Pawła II do Lichenia który w czasie nabożeństwa pobłogosławił powstającą świątynię. W tym roku również w dzwonnicy bazyliki został umieszczony największy w Polsce dzwon noszący imię Maryja Bogurodzica.</li>
                            <li>2000 r. - Episkopat Polski wyznaczył licheńską bazylikę jako wotum jubileuszowe Kościoła Katolickiego w Polsce. Na powitanie nowego tysiąclecia, w nawie głównej powstającej bazyliki, odprawiona została też pierwsza msza św. – pasterka.</li>
                            <li>2001 r. - Poświęcenie kaplicy 108 Męczenników.</li>
                            <li>2003 r. - W zachodnim ramieniu transeptu świątyni, po uroczystym poświęceniu, po raz pierwszy zagrały 52-głosowe organy.</li>
                            <li>2004 r. - Nastąpiło uroczyste poświęcenie świątyni pod wezwaniem Najświętszej Maryi Panny Licheńskiej.</li>
                            <li>2005 r. - W dniu odpustu Najświętszej Maryi Panny Licheńskiej uroczyście nadano kościołowi tytuł bazyliki mniejszej.</li>
                            <li>2006 r. - Cudowny Obraz Matki Bożej Licheńskiej został przeniesiony z kościoła parafialnego św. Doroty do bazyliki mniejszej (2 lipca). Poświęcenie całego instrumentarium organowego.</li>
                            <li>2007 r. - Odbyła się uroczystość beatyfikacji o. Stanisława Papczyńskiego – założyciela Zgromadzenia Księży Marianów.</li>
                            <li>2010 r. - Powstało Muzeum im. ks. Józefa Jarzębowskiego w Licheniu Starym.</li>
                        </ul>
                    </Slide>
                </div>


        </>
    )
}

export default IndexPage
