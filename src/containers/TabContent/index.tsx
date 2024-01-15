import React from "react";
import type { TabType } from "../ToolBar";
import "./index.css";

export declare interface TabContentProps {
  tabSelected: TabType;
  objElementByTabKey: { [key: string]: React.FunctionComponent };
}

export default function TabContent({
  tabSelected,
  objElementByTabKey,
}: TabContentProps): JSX.Element {
  const Element = objElementByTabKey[tabSelected as string];

  if (!Element) throw new Error("Invalid key for tab content element!");

  return (
    <div className="tab-content">
      <Element />
    </div>
  );
}
