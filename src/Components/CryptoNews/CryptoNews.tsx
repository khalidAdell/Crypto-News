import { Link } from "react-router-dom";
import { useGetNewsQuery } from "../../Services/newsApis";
import "./CryptoNews.css";
import Loader from "../Loader/Loader";

type CryptoNewsProps = {
  home?: boolean;
};
const CryptoNews = (props: CryptoNewsProps) => {
  const {
    data: dataNews,
    isFetching: isFetchingNews,
    isLoading: isLoadingNews,
  } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: props.home ? 6 : 33,
  });
  if (isFetchingNews || isLoadingNews) return <Loader />;

  return (
    <div className="CryptoNews">
      {dataNews.value.map((news: any) => (
        <div key={news.name} className="newCard">
          <Link to={news.url} target="_blank">
            <div className="newsImageContainer">
              <h3>{news.name}</h3>
              <img
                src={
                  news?.image?.thumbnail?.contentUrl ||
                  "https://i.ibb.co/Z11pcGG/cryptocurrency.png"
                }
                alt={news.name}
              />
            </div>
            <p>
              {news.description.length > 100
                ? `${news.description.slice(0, 130)}...`
                : news.description}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CryptoNews;
