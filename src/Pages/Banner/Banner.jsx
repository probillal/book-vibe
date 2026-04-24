import bannerImage from "./../../assets/BannerImage.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] rounded-2xl container mx-auto my-8 ">
      <div className="hero-content flex-col lg:flex-row-reverse w-full gap-32">
        <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn btn-success mt-6">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
