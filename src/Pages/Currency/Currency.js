import { useState } from "react";
import CryptoCurrency from "../../Components/CryptoCurrency/CryptoCurrency";
import { useGetCurrencyQuery } from "../../Services/cryptoApis";
import Select, { createFilter } from "react-select";
import Loader from "../../Components/Loader/Loader";

const Currency = () => {
  const { data, isFetching, isLoading } = useGetCurrencyQuery(50);
  let [value, setValue] = useState("");
  const filterData =
    value?.value?.length > 0
      ? data?.data?.coins.filter((coin) => coin.name === value.value)
      : data?.data?.coins;

  const options = data?.data?.coins.map((coin) => {
    return { value: coin.name, label: coin.name };
  });
  if (isFetching || isLoading) return <Loader />;
  return (
    <section>
      <div className="subTitle">
        <h2>Top coins</h2>
      </div>
      <Select
      className="search-inp"
        filterOption={createFilter({ ignoreAccents: false })}
        options={options}
        defaultValue={null}
        onChange={setValue}
        placeholder="Search..."
        isClearable
      />
      <CryptoCurrency data={filterData} navigateTo="" />
    </section>
  );
};

export default Currency;
