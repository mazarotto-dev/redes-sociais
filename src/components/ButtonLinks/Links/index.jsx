import PropTypes from 'prop-types'
import style from './style.module.css'

Links.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}
export default function Links({ link, children }) {
    return (
        <a className={style.button} href={link} target="_blank" rel="noreferrer">{children}</a>
    )
}