import React from 'react';

export default function Carousel() {
    return (
        <div>
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
                    <div className="carousel-inner" id='carousal'>
                        <div className='carousel-caption' style={{zIndex:"10"}}>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success text-white bg-black" type="submit" >Search</button>
                            </form>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/900x700/?frontend" className="d-block w-100" style={{ filter: "brightness(30%)", width: "100%", height: "36vw", borderRadius: "0px" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?backend" className="d-block w-100" style={{ filter: "brightness(30%)", width: "100%", height: "36vw", borderRadius: "0px" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?projects" className="d-block w-100" style={{ filter: "brightness(30%)", width: "100%", height: "36vw", borderRadius: "0px" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
