import { Link } from "react-router-dom";
import CryptoNews from "../../Components/CryptoNews/CryptoNews";
import { useGetNewsQuery } from "../../Services/newsApis";
import Loader from "../../Components/Loader/Loader";

const News = () => {
  const { data: dataNews, isLoading: isLoadingNews } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 1,
  });
  if (isLoadingNews) return <Loader />;
  const landingNew = dataNews.value[0];

  return (
    <section>
      {/* landing */}
      <div className="landing">
        <div className="landing-text">
          <div className="landing-latesets">latesets news</div>
          <Link to={landingNew.url} target="_blank">
            <h2 className="landing-text-name">
              {landingNew.name.slice(0, 65)}...
            </h2>
          </Link>
          <p className="landing-text-date">
            {landingNew.datePublished.slice(0, 10)}
          </p>
          <p className="landing-text-description">
            {landingNew.description.length > 100
              ? `${landingNew.description.slice(0, 130)}...`
              : landingNew.description}
          </p>
        </div>
        <img
          className="landing-img"
          src={
            "https://bitcoin.pl/wp-content/uploads/2014/05/Jak-dziala-bitcoin.jpg"
          }
          alt={dataNews.name}
        />
      </div>
      <div className="subTitle">
        <h2>Latest coins news</h2>
      </div>
      <CryptoNews />
    </section>
  );
};

export default News;
