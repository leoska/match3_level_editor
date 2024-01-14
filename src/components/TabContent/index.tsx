import React from "react";
import "./index.css";

export declare interface TabContentProps {
  tabSelected: string;
  objElementByTabKey: { [key: string]: React.FunctionComponent };
}

export default function TabContent({
  tabSelected,
  objElementByTabKey,
}: TabContentProps): JSX.Element {
  const Element = objElementByTabKey[tabSelected];

  if (!Element) throw new Error("Invalid key for tab content element!");

  return (
    <div className="tab-content">
      <Element />
    </div>
  );
}
