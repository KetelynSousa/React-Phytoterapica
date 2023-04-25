import styles from './Header.module.css'
import logo from '../imagens/logo.png'
import login from '../imagens/login.png'
import carrinho from '../imagens/carrinho (2).png'

function Header(){
    return(
        <header>
            <div id={styles.header1}> 
                <div id={styles.header_parte1}>
                    <img src={logo} alt="Logo do site" />
                </div>

                <div id={styles.header_parte2}></div>

                <div id={styles.header_parte3}>
                    <input type="search" placeholder='O que você procura?' id={styles.procura} />
                    <input type="text" placeholder='-5% NA PRIMEIRA COMPRA' id={styles.compra} />
                </div>

                <div id={styles.header_parte4}>
                    <img src={login} alt="login" id={styles.login} />
                    <img src={carrinho} alt="carrinho" id={styles.carrinho} />
                    
                </div>
            </div>
            <div id={styles.header2}>
                <p>ÓLEOS ESSENCIAIS</p>
                <p>ÓLEOS VEGETAIS</p>
                <p>SINERGIAS</p>
                <p>COSMÉTICOS NATURAIS</p>
                <p>HIGIENE PESSOAL</p>
                <p>AROMATIZADORES</p>
                <p>SUPLEMENTOS</p>
                <p>ACESSÓRIOS</p>
                <p>OFERTAS</p>
                <p>CONSULTOR(A)</p>
            </div>
        </header>
    )
}

export default Header