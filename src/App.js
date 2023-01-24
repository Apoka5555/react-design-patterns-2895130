import axios from "axios";
import { UserInfo } from "./UserInfo";
import { DataSource } from "./DataSource";
import { ProductInfo } from "./ProductInfo";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>

      <DataSource
        getDataFunc={getServerData("/products/1234")}
        resourceName="product"
      >
        <ProductInfo />
      </DataSource>
    </>
  );
}

export default App;
