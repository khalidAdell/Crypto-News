import millify from "millify";
import "./CryptoCurrency.css";
import { useNavigate } from "react-router-dom";

type cryptoCurrencyProps = {
  navigateTo: string;
  data: {
    map(arg0: (coin: any) => any): import("react").ReactNode;
    uuid: string;
    symbol: string;
    name: string;
    color: string;
    iconUrl: string;
    marketCap: string;
    price: string | number;
    listedAt: number | string;
    tier: number;
    change: string;
    rank: number;
    sparkline: string[];
    lowVolume: boolean;
    coinrankingUrl: string;
    "24hVolume": string;
    btcPrice: string;
  };
};
const CryptoCurrency = (props: cryptoCurrencyProps) => {
  let coinsData = props.data;

  let navigate = useNavigate();
  return (
    <div className="cryptoCurrency">
      {coinsData.map((coin: any) => (
        <div
          key={coin.uuid}
          id={coin.uuid}
          className="coinCard"
          onClick={() => {
            navigate(`${props.navigateTo}${coin.uuid}`);
          }}
        >
          <div className="coinHeader">
            <span>
              {coin.rank}-{coin.name}
            </span>
            <img src={coin.iconUrl} alt={coin.name} />
          </div>
          <div>
            Market Cap:
            <span>{millify(coin.marketCap)}</span>
          </div>
          <div>
            Price:
            <span>${millify(coin.price)}</span>
          </div>
          <div>
            Daily Change:
            <span>{millify(coin["24hVolume"])}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoCurrency;
