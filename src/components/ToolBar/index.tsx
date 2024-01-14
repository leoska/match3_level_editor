import React, { useState } from "react";
import { Tabs } from "@gravity-ui/uikit";
import "./index.css";

const defaultActiveTab = "tools";

interface IToolBarState {
  activeTab: string;
}

export default function ToolBar(): JSX.Element {
  const [state, setState] = useState<IToolBarState>({
    activeTab: defaultActiveTab,
  });

  return (
    <aside className="toolbar">
      <Tabs
        activeTab={state.activeTab}
        items={[
          { id: "tools", title: "Tools" },
          { id: "set", title: "Set" },
          { id: "settings", title: "Settings" },
        ]}
        onSelectTab={(tabId: string) => setState({ activeTab: tabId })}
      />
    </aside>
  );
}
