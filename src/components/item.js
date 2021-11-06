import PropTypes from "prop-types"
import * as React from "react"

const Item = ({title, timeframe, name, description}) => {
    return (
        <>
            <h1>{title}</h1>
            <h1>{timeframe}</h1>
            <h3>{name}</h3>
            {description.map ? description.map(i => <p>{i}</p>) : <p>{description}</p>}
        </>
    )
}

Item.defaultProps = {
    title: ``,
    timeframe: ``,
    name: ``,
    description: ``,
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    timeframe: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Item