import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function () {
    getCabins().then(function () {
      console.log("Cabins fetched");
    });
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>

      <img src="https://qqjlwyndzdlriiahymvi.supabase.co/storage/v1/object/public/cabins//cabin-001.jpg" />
    </Row>
  );
}

export default Cabins;
