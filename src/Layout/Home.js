

function Home() {
  return (
    <div>


      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="./images/carousal1.jpg" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./images/carousal2.jpg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./images/carousal3.jpg" alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


      <div className="container-fluid mt-3">

      </div>


      <div className="container">

        <div className="row">

          <div className="col-sm-4">
            <p>Birthday Cakes</p>
            <p>Celebrate every momemt using Cakes</p>
          </div>

          <div className="col-sm-4">
            <p>Aniversary cakes</p>
            <p>Enjoy healthy life with fresh fruit Cakes</p>
          </div>

          <div className="col-sm-4">
            <p>Wedding cakes</p>
            <p>Celebrate Special moments with our best cakes</p>
          </div>
        </div>
      </div>
    </div>

  );
}




export default Home;