import styles from './MainBottom.module.css';

function MainBottom(){
    return(
        <section id={styles.newsletter}>
            <div id={styles.newsletter_div}>
                <div id={styles.parte1} >
                    <h3>INSCREVA-SE</h3>
                    <p>É RECEBA NOVIDADES É <br /> PROMOÇÕES</p>
                </div>
                <div id={styles.parte2}>
                    <input type="email" placeholder="Seu e-mail" />
                </div>
                <div id={styles.parte3}>
                    <button>ASSINAR NEWSLETTER</button>
                </div>
            </div>
        </section>
    )
}

export default MainBottom