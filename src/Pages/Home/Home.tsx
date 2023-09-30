import { BsCurrencyBitcoin } from "react-icons/bs";
import { AiFillShop } from "react-icons/ai";
import { MdCurrencyExchange } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import millify from "millify";
import { useGetCurrencyQuery } from "../../Services/cryptoApis";
import "./Home.css";
import CryptoCurrency from "../../Components/CryptoCurrency/CryptoCurrency";
import CryptoNews from "../../Components/CryptoNews/CryptoNews";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { useGetNewsQuery } from "../../Services/newsApis";

const Home = () => {
  const {
    data: cryptoCoins,
    isFetching: isFetchingCoins,
    isLoading: isLoadingCoins,
  } = useGetCurrencyQuery(10);
  let dataStats = cryptoCoins?.data?.stats;
  let dataCoins = cryptoCoins?.data?.coins;

  const { data: dataNews, isLoading: isLoadingNews } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 2,
  });

  if (isFetchingCoins || isLoadingCoins || isLoadingNews || isFetchingCoins)
    return <Loader />;
  const landingNew = dataNews.value[1];
  return (
    <section className="homePage container">
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
            "	https://blockchainmedia.id/wp-content/uploads/2023/07/halving-bitcoin.webp"
          }
          alt={dataNews.name}
        />
      </div>
      {/* coins stats */}
      <div className="stats">
        <div>
          <BsCurrencyBitcoin />
          <p>Total Coins</p>
          <h3>{millify(dataStats.totalCoins)}</h3>
        </div>
        <div>
          <AiFillShop />
          <p>Total Markets</p>
          <h3>{millify(dataStats.totalMarkets)}</h3>
        </div>
        <div>
          <MdCurrencyExchange />
          <p>Total Exchanges</p>
          <h3>{millify(dataStats.totalExchanges)}</h3>
        </div>
        <div>
          <SiCoinmarketcap />
          <p>Total MarketCap</p>
          <h3>{millify(dataStats.totalMarketCap)}</h3>
        </div>
      </div>
      {/* top 10 coins */}
      <div className="subTitle">
        <h2>Top 10 coins</h2>
        <Link to="/currency">Show more</Link>
      </div>
      <CryptoCurrency data={dataCoins} navigateTo="currency/" />
      {/* head news */}
      <div className="subTitle">
        <h2>Coins news</h2>
        <Link to="/news">Show more</Link>
      </div>
      <CryptoNews home={true} />
    </section>
  );
};

export default Home;
