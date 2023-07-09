/* eslint-disable react/prop-types */
import '../styles/index.css'
export default function Buttons({ link, texto }) {
    return (
    <>
        <a target='_blank' href={link} className="Btnlinks" rel="noreferrer">{texto}</a>
        <br />
    </>
    )
}