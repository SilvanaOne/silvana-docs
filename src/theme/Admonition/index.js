import React from "react";
import { ThemeClassNames } from "@docusaurus/theme-common";
import WarningIcon from "../../../static/img/info.svg";
import styles from "./styles.module.css";

// Все поддерживаемые типы admonitions
const ADMONITION_TYPES = {
  note: "note",
  tip: "tip",
  info: "info",
  caution: "caution",
  warning: "warning",
  danger: "danger",
  "warning-alt": "warning-alt", // кастомный тип
};

// Цвета для каждого типа (можно переопределить)
const ADMONITION_COLORS = {
  note: "var(--ifm-color-info)",
  tip: "var(--ifm-color-success)",
  info: "var(--ifm-color-info)",
  caution: "var(--ifm-color-warning)",
  warning: "#D6448F",
  danger: "var(--ifm-color-danger)",
  "warning-alt": "#8a2be2", // фиолетовый для warning-alt
};

// Иконки для каждого типа
function getAdmonitionIcon(type) {
  switch (type) {
    case "danger":
      return <WarningIcon className={styles.warningIcon} />;
    case "note":
      return <WarningIcon className={styles.noteIcon} />;
    case "warning-alt":
      return <WarningIcon className={styles.warningAltIcon} />;
    // Для остальных типов Docusaurus подставит иконки автоматически
    default:
      return null;
  }
}

function AdmonitionContainer({
  type = "note", // по умолчанию note
  title,
  children,
  icon,
  color,
  className = "",
  ...props
}) {
  const iconComponent = icon || getAdmonitionIcon(type);
  const colorValue = color || ADMONITION_COLORS[type];

  // Для кастомных типов с отдельными стилями
  if (Object.keys(styles).includes(type)) {
    return (
      <div
        className={`${styles[type]} ${className} ${
          !title ? styles.wrapperWithoutTitle : ""
        }`}
        {...props}
      >
        <div className={`${styles.header} ${styles[`${type}Header`]}`}>
          {iconComponent && (
            <span className={styles.icon}>{iconComponent}</span>
          )}
          {title && (
            <span className={`${styles.title} ${styles[`${type}Title`]}`}>
              {title}
            </span>
          )}
        </div>
        <div className={`${styles.content} ${styles[`${type}Content`]}`}>
          {children}
        </div>
      </div>
    );
  }

  // Стандартные admonitions (note, tip, info, caution, danger)
  return (
    <div
      className={`${ThemeClassNames.common.admonition} ${className}`}
      {...props}
    >
      <div
        className={ThemeClassNames.common.admonitionHeading}
        style={{ backgroundColor: colorValue }}
      >
        {iconComponent && (
          <span className={ThemeClassNames.common.admonitionIcon}>
            {iconComponent}
          </span>
        )}
        {title && (
          <span className={ThemeClassNames.common.admonitionTitle}>
            {title}
          </span>
        )}
      </div>
      <div className={ThemeClassNames.common.admonitionContent}>{children}</div>
    </div>
  );
}

export default AdmonitionContainer;
