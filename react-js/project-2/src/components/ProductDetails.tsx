import { useParams, useSearchParams } from "react-router-dom";

type Params = {
  id: string;
};
function ProductDetails() {
  let { id } = useParams<Params>();

  return <div>ProductDetails {id}</div>;
}

export default ProductDetails;
