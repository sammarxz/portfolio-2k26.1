import { useState } from "react";

export default function OpticalComparison() {
  const [mode, setMode] = useState<"geometric" | "optical">("geometric");
  const [showMargins, setShowMargins] = useState(true);

  const leftLabel = mode === "optical" ? "6px" : "0px";
  const rightLabel = "0px";

  return (
    <>
      <style>{`
        .optical-play-card {
          margin: 3em 0;
          width: 100%;
          border-radius: 3px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .optical-play-card .card-header {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1em;
          background: #1a1a1a;
          border-bottom: 1px solid #2a2a2a;
        }

        .optical-play-card .pills-container {
          display: flex;
          gap: 2px;
          background: #1a1a1a;
          border-radius: 9999px;
          padding: 2px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .optical-play-card .pill {
          position: relative;
          height: 32px;
          padding: 0 1em;
          background: transparent;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 0.9em;
          font-weight: 500;
          color: #999;
          transition: color 0.2s ease;
        }

        .optical-play-card .pill:hover {
          color: #e0e0e0;
        }

        .optical-play-card .pill-bg {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: #2a2a2a;
          opacity: 0;
          transition: opacity 0.2s;
          z-index: 0;
        }

        .optical-play-card .pill.active {
          color: #e0e0e0;
        }

        .optical-play-card .pill.active .pill-bg {
          opacity: 1;
        }

        .optical-play-card .pill-text {
          position: relative;
          z-index: 10;
        }

        .optical-play-card .card-body {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 320px;
          background: #1a1a1a;
          padding: 2em;
        }

        .optical-play-card .demo-area {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .optical-play-card .margin-label {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          padding: 0.25em 0.5em;
          border-radius: 9999px;
          border: 1px solid #f97316;
          background: rgba(249, 115, 22, 0.15);
          color: #f97316;
          font-size: 0.875em;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-weight: 500;
          user-select: none;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .optical-play-card .demo-area.show-margins .margin-label {
          opacity: 1;
        }

        .optical-play-card .margin-label.left {
          left: -4em;
        }

        .optical-play-card .margin-label.right {
          right: -4em;
        }

        .optical-play-card .play-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 96px;
          height: 96px;
          background: #2a2a2a;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.2s;
          position: relative;
          overflow: hidden;
        }

        .optical-play-card .play-btn:hover {
          background: #333;
        }

        .optical-play-card .play-icon {
          width: 56px;
          height: 56px;
          color: #999;
          fill: currentColor;
        }

        .optical-play-card .play-btn.optical .play-icon {
          margin-left: 6px;
        }

        .optical-play-card .optical-indicator {
          pointer-events: none;
          position: absolute;
          inset: 0;
          background: rgba(249, 115, 22, 0.3);
          width: 6px;
          margin-left: calc(50% - 28px);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .optical-play-card .demo-area.show-margins .play-btn.optical .optical-indicator {
          opacity: 1;
        }

        .optical-play-card .card-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.6em;
          background: #1a1a1a;
          border-top: 1px solid #2a2a2a;
        }

        .optical-play-card .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5em;
          cursor: pointer;
          user-select: none;
        }

        .optical-play-card .checkbox-input {
          display: none;
        }

        .optical-play-card .checkbox-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background: #1a1a1a;
          border: 1px solid #555;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .optical-play-card .checkbox-input:checked + .checkbox-box {
          background: #3b82f6;
          border-color: #3b82f6;
        }

        .optical-play-card .check-icon {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.2s;
        }

        .optical-play-card .checkbox-input:checked + .checkbox-box .check-icon {
          opacity: 1;
          transform: scale(1);
        }

        .optical-play-card .checkbox-text {
          font-size: 0.875em;
          font-weight: 500;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #e0e0e0;
        }

        @media (max-device-width: 600px) {
          .optical-play-card .card-body {
            min-height: 280px;
            padding: 1.5em 1em;
          }

          .optical-play-card .play-btn {
            width: 80px;
            height: 80px;
          }

          .optical-play-card .play-icon {
            width: 48px;
            height: 48px;
          }

          .play-btn.optical .play-icon {
            margin-left: 6px;
          }

          .optical-play-card .margin-label {
            font-size: 0.75em;
            padding: 0.2em 0.4em;
          }

          .optical-play-card .margin-label.left {
            left: -3em;
          }

          .optical-play-card .margin-label.right {
            right: -3em;
          }

          .optical-play-card .pill {
            height: 28px;
            padding: 0 0.75em;
            font-size: 0.85em;
          }
        }
      `}</style>

      <div className="optical-play-card">
        <div className="card-header">
          <div className="pills-container">
            <button
              className={`pill${mode === "geometric" ? " active" : ""}`}
              onClick={() => setMode("geometric")}
            >
              <div className="pill-bg"></div>
              <span className="pill-text">Geometric</span>
            </button>
            <button
              className={`pill${mode === "optical" ? " active" : ""}`}
              onClick={() => setMode("optical")}
            >
              <div className="pill-bg"></div>
              <span className="pill-text">Optical</span>
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className={`demo-area${showMargins ? " show-margins" : ""}`}>
            <div className="margin-label left">{leftLabel}</div>

            <button className={`play-btn${mode === "optical" ? " optical" : ""}`}>
              <div className="optical-indicator"></div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="play-icon"
              >
                <path
                  d="M7.97943 2.53439C5.98076 1.29992 3.40295 2.73762 3.40295 5.08679V18.9147C3.40295 21.2639 5.98076 22.7016 7.97943 21.4671L19.1735 14.5531C21.0716 13.3808 21.0716 10.6206 19.1735 9.44837L7.97943 2.53439Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>

            <div className="margin-label right">{rightLabel}</div>
          </div>
        </div>

        <div className="card-footer">
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={showMargins}
              onChange={(e) => setShowMargins(e.target.checked)}
            />
            <span className="checkbox-box">
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="check-icon"
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
            <span className="checkbox-text">Show Margin</span>
          </label>
        </div>
      </div>
    </>
  );
}
