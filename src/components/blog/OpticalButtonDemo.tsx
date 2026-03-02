import { useState } from "react";

export default function OpticalButtonDemo() {
  const [mode, setMode] = useState<"geometric" | "optical">("optical");
  const [showPadding, setShowPadding] = useState(true);

  const paddingLeft = 24;
  const paddingRight = mode === "optical" ? 20 : 24;

  return (
    <>
      <style>{`
        .optical-button-card {
          margin: 3em 0;
          width: 100%;
          border-radius: 3px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .optical-button-card .card-header {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1em;
          background: #1a1a1a;
          border-bottom: 1px solid #2a2a2a;
        }

        .optical-button-card .pills-container {
          display: flex;
          gap: 2px;
          background: #1a1a1a;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 2px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .optical-button-card .pill {
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

        .optical-button-card .pill:hover {
          color: #e0e0e0;
        }

        .optical-button-card .pill-bg {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: #2a2a2a;
          opacity: 0;
          transition: opacity 0.2s;
          z-index: 0;
        }

        .optical-button-card .pill.active {
          color: #e0e0e0;
        }

        .optical-button-card .pill.active .pill-bg {
          opacity: 1;
        }

        .optical-button-card .pill-text {
          position: relative;
          z-index: 10;
        }

        .optical-button-card .card-body {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 320px;
          background: #1a1a1a;
          padding: 2em;
        }

        .optical-button-card .demo-area {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .optical-button-card .padding-label {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          padding: 0.25em 0.5em;
          border-radius: 9999px;
          border: 1px solid #22c55e;
          background: rgba(34, 197, 94, 0.15);
          color: #22c55e;
          font-size: 0.875em;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-weight: 500;
          user-select: none;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .optical-button-card .demo-area.show-padding .padding-label {
          opacity: 1;
        }

        .optical-button-card .padding-label.left {
          left: -4em;
        }

        .optical-button-card .padding-label.right {
          right: -4em;
        }

        .optical-button-card .action-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.375em;
          height: 48px;
          background: #2a2a2a;
          border: none;
          border-radius: 9999px;
          font-size: 1.125em;
          font-weight: 500;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #e0e0e0;
          cursor: pointer;
          overflow: hidden;
          transition: background 0.2s, padding 0.2s;
        }

        .optical-button-card .action-btn:hover {
          background: #333;
        }

        .optical-button-card .arrow-icon {
          width: 22px;
          height: 22px;
          fill: #e0e0e0;
          flex-shrink: 0;
        }

        .optical-button-card .padding-bar {
          position: absolute;
          top: 0;
          bottom: 0;
          background: rgba(34, 197, 94, 0.3);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s, width 0.2s;
        }

        .optical-button-card .demo-area.show-padding .padding-bar {
          opacity: 1;
        }

        .optical-button-card .padding-bar.left {
          left: 0;
        }

        .optical-button-card .padding-bar.right {
          right: 0;
        }

        .optical-button-card .card-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.6em;
          background: #1a1a1a;
          border-top: 1px solid #2a2a2a;
        }

        .optical-button-card .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5em;
          cursor: pointer;
          user-select: none;
        }

        .optical-button-card .checkbox-input {
          display: none;
        }

        .optical-button-card .checkbox-box {
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

        .optical-button-card .checkbox-input:checked + .checkbox-box {
          background: #3b82f6;
          border-color: #3b82f6;
        }

        .optical-button-card .check-icon {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.2s;
        }

        .optical-button-card .checkbox-input:checked + .checkbox-box .check-icon {
          opacity: 1;
          transform: scale(1);
        }

        .optical-button-card .checkbox-text {
          font-size: 0.875em;
          font-weight: 500;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #e0e0e0;
        }

        @media (max-device-width: 600px) {
          .optical-button-card .card-body {
            min-height: 280px;
            padding: 1.5em 1em;
          }

          .optical-button-card .action-btn {
            height: 44px;
            font-size: 1em;
          }

          .optical-button-card .arrow-icon {
            width: 20px;
            height: 20px;
          }

          .optical-button-card .padding-label {
            font-size: 0.75em;
            padding: 0.2em 0.4em;
          }

          .optical-button-card .padding-label.left {
            left: -2.5em;
          }

          .optical-button-card .padding-label.right {
            right: -2.5em;
          }

          .optical-button-card .pill {
            height: 28px;
            padding: 0 0.75em;
            font-size: 0.85em;
          }
        }
      `}</style>

      <div className="optical-button-card">
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
          <div className={`demo-area${showPadding ? " show-padding" : ""}`}>
            <div className="padding-label left">{paddingLeft}px</div>

            <button
              className="action-btn"
              style={{ paddingLeft: `${paddingLeft}px`, paddingRight: `${paddingRight}px` }}
            >
              <div className="padding-bar left" style={{ width: `${paddingLeft}px` }}></div>
              <div className="padding-bar right" style={{ width: `${paddingRight}px` }}></div>
              <span>Button</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="arrow-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289C11.9024 8.68342 11.9024 9.31658 12.2929 9.70711L13.5858 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H13.5858L12.2929 14.2929C11.9024 14.6834 11.9024 15.3166 12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L13.7071 8.29289Z"
                ></path>
              </svg>
            </button>

            <div className="padding-label right">{paddingRight}px</div>
          </div>
        </div>

        <div className="card-footer">
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={showPadding}
              onChange={(e) => setShowPadding(e.target.checked)}
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
            <span className="checkbox-text">Show Padding</span>
          </label>
        </div>
      </div>
    </>
  );
}
