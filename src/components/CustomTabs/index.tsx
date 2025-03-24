import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import clsx from "clsx";
import styles from "./сustomTabs.module.css";

export enum TabVariants {
  BOTTOM_BORDER = "bottom-border",
  FULL_BORDER = "full-border",
}

export default function CustomTabs({ tabs, variant = TabVariants.BOTTOM_BORDER }) {
  return (
    <Tabs className={`${styles.tabsContainer} ${styles[variant]}`} groupId="customTabs">
      {tabs.map((tab) => (
        <TabItem
          key={tab.value}
          value={tab.value}
          default={tab.default}
          attributes={{ className: styles.tab }}
        >
          <div className={styles.tabContent}>{tab.content}</div>
        </TabItem>
      ))}
    </Tabs>
  );
}
