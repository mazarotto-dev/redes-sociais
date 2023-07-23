import Links from "./Links";
import style from './style.module.css'

export default function AllLinks() {
    return (
        <main className={style.mainLinks}>
            <Links link='https://github.com/mazarottoo'>GitHub</Links>
            <Links link='https://instagram.com/mazarottoo'>Instagram</Links>
            <Links link='https://linkedin.com/in/mazarottoo'>LinkedIn</Links>
            <Links link='https://wa.me/5514998676097?text=Ol%C3%A1%21+Eu+gostaria+de+um+site...'>Contato</Links>
        </main>
    )
}