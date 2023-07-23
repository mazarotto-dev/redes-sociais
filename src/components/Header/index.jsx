import style from './style.module.css'
import photoPerfil from '../../assets/images/photoPerfil.jpg'
import ProgrammingLanguages from './ProgrammingLanguages'

export default function Header() {
    
    return (
        <header className={style.header}>
            <div className={style.basicInfos}>
                <img className={style.photo} src={photoPerfil} alt="" />
                <h1>Julio Cesar</h1>
            </div>
            <h2 className={style.dev}>
                Desenvolvedor Front-End
            </h2>
            <ProgrammingLanguages/>
        </header>
    )
}