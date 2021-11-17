import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Bootstrap</h1>
      <div className="container p-3">
        <div className="dropdown m-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            id="dropdownMenuButton1"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Option 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Option 2
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Option 3
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              height="30px"
              width="30px"
              className="d-block w-100"
              src="/img/cactus.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <Image
              height="30px"
              width="30px"
              className="d-block w-100"
              src="/img/moon.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <Image
              height="30px"
              width="30px"
              className="d-block w-100"
              src="/img/palmtrees.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
