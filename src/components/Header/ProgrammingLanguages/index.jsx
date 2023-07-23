import ImageLanguage from './imageLanguage'
import style from './style.module.css'

export default function ProgrammingLanguages() {
    return (
        <div className={style.programming__language}>
                <ImageLanguage 
                linkImage='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' 
                alt='Hyper Text Markup Language'
                />
                <ImageLanguage 
                 linkImage='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' 
                 alt='Cascading Style Sheets' />
                <ImageLanguage
                 linkImage='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                 alt='JavaScript' />
                <ImageLanguage 
                linkImage='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' 
                alt='React JavaScript'
                />
            </div>
    )
}