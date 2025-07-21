import { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import "jodit/es2021/jodit.min.css";

function Jodit() {
  const editor = useRef(null);
  const [content, setContent] = useState("<h1>Hello World</h1>");

  // Runtime CSS injection for popup override
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .jodit-popup,
      .jodit-popup.jodit_theme_default,
      div.jodit-popup,
      .jodit-container .jodit-popup {
        min-width: 216px !important;
        width: auto !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

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

      // Upload dialog stil ayarları - Daha güçlü override
      style: {
        ".jodit-popup": "min-width: 216px !important; width: auto !important;",
        ".jodit-popup.jodit_theme_default": "min-width: 216px !important;",
        "div.jodit-popup": "min-width: 216px !important;",
        ".jodit-container .jodit-popup": "min-width: 216px !important;",
      },

      // Print feature active
      allowCommandsInReadOnly: ["print", "source", "fullsize"],

      // Image upload configuration
      uploader: {
        insertImageAsBase64URI: true, // Base64 olarak resim ekleme
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"], // Desteklenen formatlar
        filesVariableName: "files", // File input name
        withCredentials: false,
        pathVariableName: "path",
        format: "json",
        headers: {
          "X-CSRF-TOKEN": "test",
        },
        prepareData: function (formdata) {
          // Form data'yı hazırlama
          return formdata;
        },
        isSuccess: function (response) {
          return !response?.error;
        },
        getMessage: function (response) {
          return response.message || response.msg;
        },
        process: function (response) {
          return {
            files: response?.files || [],
            path: response?.path || "",
            baseurl: response?.baseurl || "",
            error: response?.error,
            message: response?.message,
          };
        },
        error: function (e) {
          console.error("Upload error:", e);
        },
        defaultHandlerSuccess: function (data, response) {
          if (data?.files && data?.files?.length) {
            for (let i = 0; i < data.files.length; i++) {
              const file = data.files[i];
              this.selection.insertImage(file);
            }
          }
        },
        defaultHandlerError: function (error) {
          this.events.fire("errorMessage", error.message || "Upload failed");
        },
      },

      // Drag and drop support
      enableDragAndDropFileToEditor: true,
      processPasteHTML: true,
      processPasteFromWord: true,

      // Image dialog configuration
      image: {
        openOnDblClick: true,
        editSrc: true,
        useImageEditor: true,
        editTitle: true,
        editAlt: true,
        editLink: true,
        editSize: true,
        editBorderRadius: true,
        editMargins: true,
        editClass: true,
        editStyle: true,
        editId: true,
        resizeUseRatio: true,
        resizeMinSize: [10, 10],
        resizeMaxSize: [2000, 2000],
        dialogWidth: 800, // Upload popup genişliği
        dialogHeight: 600, // Upload popup yüksekliği
      },

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
            // HTML içeriğini al ve HTML etiketlerini temizle
            const htmlContent = editor.value || "";
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = htmlContent;
            const text = tempDiv.textContent || tempDiv.innerText || "";

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
