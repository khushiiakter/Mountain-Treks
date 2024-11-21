const Banner = () => {
  return (
    <div className="carousel w-full  md:min-h-screen h-[400px]">
      <div id="banner1" className="carousel-item relative w-full bg-cover bg-no-repeat" style={{
        backgroundImage: "url(https://i.ibb.co.com/vwLzSHr/mihaly-koles-N050-NP-u6j-I-unsplash.jpg)"}}>
          <h1 className="text-4xl">kf </h1>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner4" className="btn btn-circle">
            ❮
          </a>
          <a href="#banner2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="banner2" className="carousel-item relative w-full bg-cover bg-no-repeat" style={{
        backgroundImage: "url(https://i.ibb.co.com/3Y0zbcb/Lyh4ui.jpg)"}}>
      
        <h1 className="text-4xl">khushifffff </h1>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner1" className="btn btn-circle">
            ❮
          </a>
          <a href="#banner3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* https://i.ibb.co.com/CQxrCrS/mountain-peak-tourists-trekking-nature.jpg */}
      <div id="banner3" className="carousel-item relative w-full  bg-cover bg-no-repeat" style={{
        backgroundImage: "url(https://i.ibb.co.com/CQxrCrS/mountain-peak-tourists-trekking-nature.jpg )"}}>
        <h1 className="text-4xl">khus </h1>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner2" className="btn btn-circle">
            ❮
          </a>
          <a href="#banner4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* https://i.ibb.co.com/Rz8rCjr/thumb-1920-238870.jpg */}
      <div id="banner4" className="carousel-item relative w-full bg-cover bg-no-repeat" style={{
        backgroundImage: "url(https://i.ibb.co.com/Rz8rCjr/thumb-1920-238870.jpg )"}}
      >
      `<h1 className="text-4xl">khufff </h1>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner3" className="btn btn-circle">
            ❮
          </a>
          <a href="#banner1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
