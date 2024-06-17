import React from "react";
import './Home.css'


function Gallery(){



    return(<>
<div className="carousel-container">
            <div className="carousel">
                {/* First Set of Original Slides */}
                <div className="logo">
                    <img src="https://placehold.co/600x400/FF3333/FFF" alt="Slide 1" />
                </div>
                <div className="logo">
                    <img src="https://placehold.co/400/eba134/FFF" alt="Slide 2" />
                </div>
                <div className="logo">
                    <img src="https://placehold.co/700x300/ebe234/FFF" alt="Slide 3" />
                </div>
                <div className="logo">
                    <img src="https://placehold.co/500/34eb40/FFF" alt="Slide 4" />
                </div>
                <div className="logo">
                    <img src="https://placehold.co/600x400/FF5733/FFF" alt="Slide 5" />
                </div>
                <div className="logo">
                    <img src="https://placehold.co/400/eaab34/FFF" alt="Slide 6" />
                </div>
                <div className="logo">
                    <img src="https://placehold.co/700x300/ebd234/FFF" alt="Slide 7" />
                </div>
                <div className="logo">
                    <img src="https://placehold.co/500/34eab0/FFF" alt="Slide 8" />
                </div>
            </div>
        </div>
    </>)
}

export default React.memo(Gallery);