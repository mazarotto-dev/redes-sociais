/* eslint-disable react/prop-types */
export default function Header({image, nome, dev, skills}) {
    const alt = 'Foto de ' + nome

    return (
        <header>
            <img src={image} id="logotipo" alt={alt} />
            <h1>{nome}</h1>
            <h2>{dev} <br /> 
            <span id="skill">{skills}</span></h2>
        </header>
    )
}