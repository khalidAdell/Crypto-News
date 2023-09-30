import { useRouteError } from "react-router-dom";
import Header from "../../Components/Header/Header";

const Error = () => {
  let error = useRouteError();
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <h1>An Error occured!</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
