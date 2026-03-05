import { useState } from "react";
import s from "./OpticalComparison.module.css";

interface Props {
  geometricLabel?: string;
  opticalLabel?: string;
  showMarginLabel?: string;
}

export default function OpticalComparison({
  geometricLabel = "Geometric",
  opticalLabel = "Optical",
  showMarginLabel = "Show Margin",
}: Props) {
  const [mode, setMode] = useState<"geometric" | "optical">("geometric");
  const [showMargins, setShowMargins] = useState(true);

  const leftLabel = mode === "optical" ? "6px" : "0px";
  const rightLabel = "0px";

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
        <div className={`${s.demoArea}${showMargins ? ` ${s.showMargins}` : ""}`}>
          <div className={`${s.marginLabel} ${s.marginLabelLeft}`}>{leftLabel}</div>

          <button className={`${s.playBtn}${mode === "optical" ? ` ${s.playBtnOptical}` : ""}`}>
            <div className={s.opticalIndicator}></div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={s.playIcon}
            >
              <path
                d="M7.97943 2.53439C5.98076 1.29992 3.40295 2.73762 3.40295 5.08679V18.9147C3.40295 21.2639 5.98076 22.7016 7.97943 21.4671L19.1735 14.5531C21.0716 13.3808 21.0716 10.6206 19.1735 9.44837L7.97943 2.53439Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>

          <div className={`${s.marginLabel} ${s.marginLabelRight}`}>{rightLabel}</div>
        </div>
      </div>

      <div className={s.cardFooter}>
        <label className={s.checkboxWrapper}>
          <input
            type="checkbox"
            className={s.checkboxInput}
            checked={showMargins}
            onChange={(e) => setShowMargins(e.target.checked)}
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
          <span className={s.checkboxText}>{showMarginLabel}</span>
        </label>
      </div>
    </div>
  );
}
