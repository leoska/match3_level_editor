import React, { ReactElement } from "react";
import Gem from "../../components/Gem";
import gemsConfig from "../../../config/gems.json";

export default function TabGems(): ReactElement {
  return (
    <>
      {gemsConfig.map(({ id, name }) => (
        <Gem key={id} id={id} name={name} />
      ))}
    </>
  );
}
