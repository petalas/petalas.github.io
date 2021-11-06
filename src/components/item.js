import PropTypes from "prop-types"
import * as React from "react"

const Item = ({title, timeframe, name, description}) => {
    return (
        <>
            <h1 class="p-1 rounded-t-lg flex flex-row justify-between bg-secondary-400 text-primary-900"><div>{name}</div><div>{timeframe}</div></h1>
            <div class="p-1 text-primary-400">
                <h2 class="text-base text-primary-300">{title}</h2>
                {description.map ? description.map(i => <p>{i}</p>) : <p>{description}</p>}
            </div>
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