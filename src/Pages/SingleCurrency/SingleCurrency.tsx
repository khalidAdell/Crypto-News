import { Link, useParams } from "react-router-dom";
import "./SingleCurrency.css";
import { useGetSingleCurrencyQuery } from "../../Services/cryptoApis";
import millify from "millify";
import Loader from "../../Components/Loader/Loader";

const SingleCurrency = () => {
  let { id } = useParams();

  const { data: coinData, isFetching } = useGetSingleCurrencyQuery(id);

  const currency = coinData?.data?.coin;

  if (isFetching) return <Loader />;

  const stats = [
    {
      title: "Rank",
      value: `$ ${currency.price && millify(currency.rank)}`,
    },
    {
      title: "Price in USD",
      value: `$ ${currency.price && millify(currency.price)}`,
    },
    {
      title: "Price in BTC",
      value: `$ ${currency.price && currency.btcPrice.slice(0, 8)}`,
    },
    {
      title: "24h Volume",
      value: `$ ${currency.price && millify(currency["24hVolume"])}`,
    },
    {
      title: "MarketCap",
      value: `$ ${currency.price && millify(currency.marketCap)}`,
    },
    {
      title: "All Time High",
      value: `$ ${currency.price && millify(currency.allTimeHigh.price)}`,
    },
  ];
  const genercs = [
    {
      title: "numberOfExchanges",
      value: `${currency.price && millify(currency.numberOfExchanges)}`,
    },
    {
      title: "numberOfMarkets",
      value: `${currency.price && millify(currency.numberOfMarkets)}`,
    },
    {
      title: "Total supply",
      value: `${currency.price && millify(currency.supply.total)}`,
    },

    {
      title: "Circulating supply",
      value: `${currency.price && millify(currency.supply.circulating)}`,
    },
    {
      title: "Change",
      value: `${currency.price && currency.change}`,
    },
    {
      title: "Supply at",
      value: `${currency.price && millify(currency.supply.supplyAt)}`,
    },
  ];
  return (
    <section className="singleCoin">
      <div className="singleCoinHeader">
        <img src={currency.iconUrl} alt={currency.name} title={currency.name} />
        <h3>
          {currency.name}({currency.symbol})
        </h3>
      </div>
      <div className="singleInfo">
        <div>
          <div className="statHeader">
            <h2>{currency.name} value statistics</h2>
            <p>An overview showing the stats of all crypto</p>
          </div>
          {stats.map((stat) => (
            <div key={stat.title} className="statContainer">
              {stat.title}: <span>{stat.value}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="statHeader">
            <h2>Other statistics</h2>
            <p>An overview showing the stats of all crypto</p>
          </div>
          {genercs.map((generc) => (
            <div key={generc.title} className="statContainer">
              {generc.title}: <span>{generc.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="coinLinks">
        <div className="statHeader">
          <h2>{currency.name} Links</h2>
          <p>An overview most related links</p>
        </div>
        {currency.links.map((link: any) => (
          <div key={`${link.name}${link.url}`} className="statContainer">
            {link.name}:{" "}
            <Link to={link.url} target="_blank">
              {link.url}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleCurrency;
