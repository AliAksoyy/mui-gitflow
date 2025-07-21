import { useEffect, useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import "jodit/es2021/jodit.min.css";

function Jodit() {
  const editor = useRef(null);
  const [content, setContent] = useState("<h1>Hello World</h1>");

  // Comprehensive Jodit editor configuration
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
      language: "en", // English language support
      width: "auto",
      height: 500,
      minHeight: 300,
      maxHeight: 800,
      iframe: true,
      iframeStyle: "width: 100% !important; height: 100% !important;",
      iframeSandbox:
        "allow-same-origin allow-scripts allow-forms allow-popups allow-presentation",

      // Print feature active
      allowCommandsInReadOnly: ["print", "source", "fullsize"],

      // Extra export buttons
      extraButtons: [
        {
          name: "exportHTML",
          iconURL:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTQsOVY1SDJWOUgxNE0xNiwxMUgxOFYxM0gxNlYxMU0xNiwxNUgxOFYxN0gxNlYxNU0xNiwxOUgxOFYyMUgxNlYxOU0xNiw3SDIyVjlIMTZWN00xNCwxN1YxOUgwVjE3SDE0TTE0LDEzVjE1SDBWMTNIMTRNMTQsOVYxMUgwVjlIMTRaIi8+PC9zdmc+",
          tooltip: "Export as HTML",
          exec: (editor) => {
            const html = editor.value;
            const blob = new Blob([html], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "document.html";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          },
        },
        {
          name: "exportText",
          iconURL:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTQsOVY1SDJWOUgxNE0xNiwxMUgxOFYxN0gxNlYxMU0xNiwxNUgxOFYxN0gxNlYxNU0xNiwxOUgxOFYyMUgxNlYxOU0xNiw3SDIyVjlIMTZWN00xNCwxN1YxOUgwVjE3SDE0TTE0LDEzVjE1SDBWMTNIMTRNMTQsOVYxMUgwVjlIMTRaIi8+PC9zdmc+",
          tooltip: "Export as Text",
          exec: (editor) => {
            const text = editor.getEditorText();
            const blob = new Blob([text], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "document.txt";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          },
        },
      ],
    }),
    []
  );

  // Content change handler - ensures content is always string
  const handleContentChange = (newContent) => {
    // Make sure the content is always a string
    const stringContent =
      typeof newContent === "string" ? newContent : String(newContent || "");
    setContent(stringContent);
  };

  return (
    <div
      style={{
        margin: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {/* Main Editor */}
      <div style={{ marginBottom: "30px" }}>
        <div style={{ padding: "0" }}>
          <JoditEditor
            ref={editor}
            value={content || ""} // Ensure value is always string
            config={config}
            tabIndex={1}
            onBlur={handleContentChange}
            onChange={handleContentChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Jodit;
