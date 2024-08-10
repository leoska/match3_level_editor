import React from "react";
import Gem from "../../components/Gem";

export default function TabTools(): JSX.Element {
  const tools = config.getToolsAsArray();

  return (
    <>
      {tools.map(({ id, name }) => (
        <Gem key={id} id={id} name={name} />
      ))}
    </>
  );
}
