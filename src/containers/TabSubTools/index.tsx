import React from "react";
import Gem from "../../components/Gem";
import gemsConfig from "../../config/gems.json";

export default function TabSubTools(): JSX.Element {
  return (
    <React.Fragment>
      {gemsConfig.map(({ id, name }) => (
        <Gem key={id} id={id} name={name} />
      ))}
    </React.Fragment>
  );
}
