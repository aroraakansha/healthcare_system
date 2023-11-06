import react from "react";
import one from "./images/insurance1.png";
import two from "./images/insurance3.png";
import three from "./images/insurance2.png";
import four from "./images/insurance4.png";
function Insurance()
{
    return (
        <div>
        <section><div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={two} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={one}class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={three} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
          <img src={four} class="d-block w-100" alt="..."/>
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div></section>
        </div>
    )
}
export default Insurance;