import styles from './Footer.module.css';
import vegano from '../imagens/folha.svg';
import pet from '../imagens/pata.svg';
import puro from '../imagens/gota.svg';
import vtex from '../imagens/vtex.png';

import mastercord from '../imagens/mastercord.png';
import visa from '../imagens/visa.png';
import american from '../imagens/american.png';
import elo from '../imagens/elo.png';
import hipercard from '../imagens/hipercard.png';
import pix from '../imagens/pix.png';
import logo from '../imagens/logo.png';

function Footer(){
    return(
        <footer>
            <div id={styles.footer_part1}>
                <div className={styles.caracteristicas}>
                    <div className={styles.width}>
                        <img src={vegano} alt='vegano' />
                        <div>
                            <h3>Vegano</h3>
                            <p>sem componentes de origem animal</p>
                        </div>
                    </div>
                </div>
                <div className={styles.caracteristicas}>
                    <div className={styles.width} id={styles.cruelty}>
                        <img src={pet} alt='cruelty-free' />
                        <div>
                            <h3>Cruelty-Free</h3>
                            <p>não testado em animais</p>
                        </div>
                    </div>
                </div>
                <div className={styles.caracteristicas}>
                    <div className={styles.width}>
                        <img src={puro} alt='100% puro' />
                        <div>
                            <h3>100% Puro</h3>
                            <p>óleos puros e naturais</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.footer_part2}>
                <div id={styles.pagamento}>
                    <div>
                        <p>Formas de Pagamentos</p>
                    </div>
                    <div id={styles.pagamento2}>
                        <div>
                            <img src={mastercord} alt="Mastercord" />
                            <img src={visa} alt="visa" />
                            <img src={american} alt="american" />
                        </div>
                        <div>
                            <img src={elo} alt="elo" />
                            <img src={hipercard} alt="hipercard" />
                            <img src={pix} alt="pix" />
                        </div>
                    </div>
                </div>
                <div id={styles.redes_sociais}>
                    <div id={styles.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div id={styles.redes}>
                        <div id={styles.instagram}></div>
                        <div id={styles.fecebook}></div>
                        <div id={styles.blog}></div>
                        <div id={styles.youtuber}></div>
                        <div id={styles.twitter}></div>
                    </div>

                </div>
            </div>
            <div id={styles.footer_part3}>
                <div id={styles.footer_part3_1}>
                    <div>
                        <p id={styles.traco}>POLÍTICA DE PRIVACIDADE</p>
                    </div>
                    <div>
                        <p>TERMOS E CONDIÇÕES</p>
                    </div>
                </div>
                <div id={styles.footer_part3_2}>
                    <h6>PHYTOTERAPICA© 2023 | AV NOVA CANTAREIRA, 2627 - SÃO PAULO/SP | CNPJ: 72.962.327/0001-55</h6>
                </div>
                <div id={styles.footer_part3_3}>
                    <h6>Powered by</h6>
                    <img src={vtex} alt='vtex' />
                </div>
            </div>

        </footer>
    )
}

export default Footer