import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function () {
    getCabins().then((cabins) => console.log(cabins));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://qmzzwmbuvvcvrvbaaabp.supabase.co/storage/v1/object/public/cabin-images/cabin2.webp" />
    </Row>
  );
}

export default Cabins;
