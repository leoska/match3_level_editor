import React, { useState } from "react";
import { Tabs } from "@gravity-ui/uikit";
import TabContent from "../TabContent";
import TabTools from "../TabTools";
import TabSubTools from "../TabSubTools";
import TabSettings from "../TabSettings";
import "./index.css";

export type TabType = "tools" | "subTools" | "settings";
const defaultActiveTab = "tools" as TabType;

interface ITabItem {
  id: TabType;
  title: string;
}

const tabItems: ITabItem[] = [
  { id: "tools" as TabType, title: "Tools" },
  { id: "subTools" as TabType, title: "Gems" },
  { id: "settings" as TabType, title: "Settings" },
];

export default function ToolBar(): JSX.Element {
  const [currentActiveTab, setState] = useState<TabType>(defaultActiveTab);

  return (
    <aside className="toolbar">
      <Tabs
        activeTab={currentActiveTab}
        items={tabItems}
        onSelectTab={(tabId: TabType) => setState(tabId)}
      />
      <TabContent
        tabSelected={currentActiveTab}
        objElementByTabKey={{
          tools: TabTools,
          subTools: TabSubTools,
          settings: TabSettings,
        }}
      />
    </aside>
  );
}
