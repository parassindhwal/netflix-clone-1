// import axios from '../axios';
// import React, { useEffect, useRef, useState } from 'react';
// import "./Row.css";
// import { fetchMovieURL, fetchTvURL } from '../Requests';
// import Trailor from './Trailor';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// function Row({title, fetchURL, isLargeRow = false}) {
//     const [movies, setMovies] = useState([]);
//     const [open, setOpen] = useState(false);
//     const [youTubeId, setYouTubeId] = useState(null);

//     //making button scroll
//     const scrl = useRef(null);
//     const [scrollX, setScrollX] = useState(0);
//     const [scrollEnd, setScrollEnd] = useState(false);

//     const slide = (shift) => {
//         scrl.current.scrollLeft += shift;
//         setScrollX(scrollX + shift);

//         if(Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
//             setScrollEnd(true);
//         } else {
//             setScrollEnd(false);
//         }
//     }

//     const scrollCheck  = () => {
//         setScrollX(scrl.current.scrollLeft);
//         if(Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
//         setScrollEnd(true);
//         } else {
//         setScrollEnd(false);
//         }
//     }

//     const base_url = "https://image.tmdb.org/t/p/original/";

//     useEffect(() => {
//         async function fetchData() {
//             const request = await axios.get(fetchURL);
//             setMovies(request.data.results);
//             return request;
//             // https://www.youtube.com/watch?v=tQYerccGDYA
//         }

//         fetchData();
//     }, [fetchURL]);

//     const fetchVideo = async (e) => {
//         try {
//             let request;
//             if(e.target.dataset.type === "tv") {
//                 request = await axios.get(fetchTvURL(e.target.dataset.id));
//                 setYouTubeId(request.data.results[request.data.results.length - 1].key);
//             }
            
//             else {
//                 request = await axios.get(fetchMovieURL(e.target.dataset.id));
//                 setYouTubeId(request.data.results[0].key);
//             }
//             console.log(request.data.results);
//             if(request.data.results.length === 0) throw new Error();
//             setOpen(true);
//             document.body.style.overflow = "hidden";
//             // setYouTubeId(request.data.results[0].key);

//         } catch(err) {
//             alert('No Video found');
//         }
//     }
//     return (
//         <div className="row">
//             <h2>{title}</h2>
//             <div className="row__wrapper">
//                 {scrollX !== 0 && (<button className="prev" onClick={() => slide(-scrl.current.offsetWidth + 150)}>
//                     <FontAwesomeIcon icon={faAngleLeft} />
//                 </button>)}
//                 <div onClick={fetchVideo} className="row__posters" ref={scrl} onScroll={scrollCheck}>
//                     {movies.map((movie) => (
//                         (isLargeRow && movie.poster_path) || (!isLargeRow && movie.poster_path)) && (
//                             <>
//                                 <img
//                                 className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//                                 key={movie.id} 
//                                 src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
//                                 alt={movie.name}
//                                 data-id={movie.id}
//                                 data-type={movie.media_type} />
//                             </>
//                         )
                        
//                         ) }
//                 </div>
//                 {!scrollEnd && (<button className="next" onClick={() => slide(+scrl.current.offsetWidth - 150)}>
//                     <FontAwesomeIcon icon={faAngleRight} />
//                 </button>)}
//             </div>

//             <Trailor 
//                 open={open} 
//                 onClose={() => {setOpen(false); document.body.style.overflow = "auto";} }
//                 youTubeId={youTubeId}  />
//         </div>
//     )
// }

// export default Row;

// ------------------------------------------------------------------------------------

import axios from '../axios';
import React, { useEffect, useRef, useState } from 'react';
import "./Row.css";
import { fetchMovieURL, fetchTvURL } from '../Requests';
import Trailor from './Trailor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Row({title, fetchURL, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const [open, setOpen] = useState(false);
    const [youTubeId, setYouTubeId] = useState(null);

    //making button scroll
    const scrl = useRef(null);
    const [scrollX, setScrollX] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);

    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setScrollX(scrollX + shift);

        if(Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
            setScrollEnd(true);
        } else {
            setScrollEnd(false);
        }
    }

    const scrollCheck  = () => {
        setScrollX(scrl.current.scrollLeft);
        if(Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
        setScrollEnd(true);
        } else {
        setScrollEnd(false);
        }
    }

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
            // https://www.youtube.com/watch?v=tQYerccGDYA
        }

        fetchData();
    }, [fetchURL]);

    const fetchVideo = async (e) => {
        if(e.target.dataset.id)
        try {
            let request;
            if(e.target.dataset.type === "tv") {
                request = await axios.get(fetchTvURL(e.target.dataset.id));
                setYouTubeId(request.data.results[request.data.results.length - 1].key);
            }
            
            else {
                request = await axios.get(fetchMovieURL(e.target.dataset.id));
                setYouTubeId(request.data.results[0].key);
            }
            console.log(request.data.results);
            if(request.data.results.length === 0) throw new Error();
            setOpen(true);
            document.body.style.overflow = "hidden";
            // setYouTubeId(request.data.results[0].key);

        } catch(err) {
            alert('No Video found');
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__wrapper">
                {scrollX !== 0 && (<button className="prev" onClick={() => slide(-scrl.current.offsetWidth + 150)}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>)}
                <div onClick={fetchVideo} className="row__posters" ref={scrl} onScroll={scrollCheck}>
                    {movies.map((movie) => (
                        (isLargeRow && movie.poster_path) || (!isLargeRow && movie.poster_path)) && (
                            <div className={`row__poster ${isLargeRow && "row__posterLarge"}`}>
                                <img
                                className={`row__img ${isLargeRow && "row__imgLarge"}`}
                                key={movie.id} 
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                                alt={movie.name}
                                data-id={movie.id}
                                data-type={movie.media_type} />
                                <div className='poster__details'>
                                    <h3>{movie.name || movie.title}</h3>
                                    <h4>{movie.vote_average}</h4>
                                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, eum?</p> */}
                                </div>
                                <div className="row__poster--overlay" />
                            </div>
                        )
                        
                        ) }
                </div>
                {!scrollEnd && (<button className="next" onClick={() => slide(+scrl.current.offsetWidth - 150)}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>)}
            </div>

            <Trailor 
                open={open} 
                onClose={() => {setOpen(false); document.body.style.overflow = "auto";} }
                youTubeId={youTubeId}  />
        </div>
    )
}

export default Row;