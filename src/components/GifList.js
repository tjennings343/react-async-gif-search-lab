import React from 'react'

const GifList = props => {
    return(
        <div>
            {props.gifs.map(g => <img key={g.url} src={g.url} alt="gif"/>)}
        </div>
    )
}

export default GifList