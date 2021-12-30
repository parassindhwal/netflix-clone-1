import React from 'react';
import './Trailor.css';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';

function Trailor({open, onClose, youTubeId}) {
    if(!open) return null;
    return ReactDOM.createPortal(
        <>
            <div onClick={onClose} className="overlay">
            <div className='trailor'>
                {/* <button onClick={onClose}>Close</button> */}
                <ReactPlayer  height={"80vh"} width={"80vw"} className="player" url={`https://www.youtube.com/watch?v=${youTubeId}`} controls />
            </div>
            </div>
        </>
        , document.getElementById('portal')
    )
}

export default Trailor

// key={youTubeId}