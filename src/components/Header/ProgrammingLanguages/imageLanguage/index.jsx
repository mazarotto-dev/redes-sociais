import style from './style.module.css'
import PropTypes from 'prop-types'

ImageLanguage.propTypes = {
    linkImage: PropTypes.string,
    alt: PropTypes.string
}

export default function ImageLanguage({ linkImage, alt }) {
    return (
        <img className={style.image} src={linkImage} alt={alt} />
    )
}