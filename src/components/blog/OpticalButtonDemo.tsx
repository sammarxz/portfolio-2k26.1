import { useState } from "react";
import s from "./OpticalButtonDemo.module.css";

interface Props {
  geometricLabel?: string;
  opticalLabel?: string;
  showPaddingLabel?: string;
  buttonLabel?: string;
}

export default function OpticalButtonDemo({
  geometricLabel = "Geometric",
  opticalLabel = "Optical",
  showPaddingLabel = "Show Padding",
  buttonLabel = "Button",
}: Props) {
  const [mode, setMode] = useState<"geometric" | "optical">("optical");
  const [showPadding, setShowPadding] = useState(true);

  const paddingLeft = 24;
  const paddingRight = mode === "optical" ? 20 : 24;

  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <div className={s.pillsContainer}>
          <button
            className={`${s.pill}${mode === "geometric" ? ` ${s.pillActive}` : ""}`}
            onClick={() => setMode("geometric")}
          >
            <div className={s.pillBg}></div>
            <span className={s.pillText}>{geometricLabel}</span>
          </button>
          <button
            className={`${s.pill}${mode === "optical" ? ` ${s.pillActive}` : ""}`}
            onClick={() => setMode("optical")}
          >
            <div className={s.pillBg}></div>
            <span className={s.pillText}>{opticalLabel}</span>
          </button>
        </div>
      </div>

      <div className={s.cardBody}>
        <div className={`${s.demoArea}${showPadding ? ` ${s.showPadding}` : ""}`}>
          <div className={`${s.paddingLabel} ${s.paddingLabelLeft}`}>{paddingLeft}px</div>

          <button
            className={s.actionBtn}
            style={{ paddingLeft: `${paddingLeft}px`, paddingRight: `${paddingRight}px` }}
          >
            <div className={`${s.paddingBar} ${s.paddingBarLeft}`} style={{ width: `${paddingLeft}px` }}></div>
            <div className={`${s.paddingBar} ${s.paddingBarRight}`} style={{ width: `${paddingRight}px` }}></div>
            <span>{buttonLabel}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={s.arrowIcon}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289C11.9024 8.68342 11.9024 9.31658 12.2929 9.70711L13.5858 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H13.5858L12.2929 14.2929C11.9024 14.6834 11.9024 15.3166 12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L13.7071 8.29289Z"
              ></path>
            </svg>
          </button>

          <div className={`${s.paddingLabel} ${s.paddingLabelRight}`}>{paddingRight}px</div>
        </div>
      </div>

      <div className={s.cardFooter}>
        <label className={s.checkboxWrapper}>
          <input
            type="checkbox"
            className={s.checkboxInput}
            checked={showPadding}
            onChange={(e) => setShowPadding(e.target.checked)}
          />
          <span className={s.checkboxBox}>
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={s.checkIcon}
            >
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
          <span className={s.checkboxText}>{showPaddingLabel}</span>
        </label>
      </div>
    </div>
  );
}
