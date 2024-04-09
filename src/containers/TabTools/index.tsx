import React from "react";
import config from "../../utils/config";
import Gem from "../../components/Gem";

export default function TabTools(): JSX.Element {
  const tools = config.getToolsAsArray();

  return (
    <React.Fragment>
      {tools.map(({ id, name }) => (
        <Gem key={id} id={id} name={name} />
      ))}
    </React.Fragment>
  );
}
