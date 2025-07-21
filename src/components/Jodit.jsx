import { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import "jodit/es2021/jodit.min.css";

function Jodit() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

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
      
      /* Tablo border stilleri */
      .jodit-wysiwyg table {
        border-collapse: collapse !important;
        border: 1px solid #ddd !important;
        margin: 10px 0 !important;
      }
      
      .jodit-wysiwyg table td,
      .jodit-wysiwyg table th {
        border: 1px solid #ddd !important;
        padding: 8px 12px !important;
        text-align: left !important;
      }
      
      .jodit-wysiwyg table th {
        background-color: #f5f5f5 !important;
        font-weight: bold !important;
      }
      
      .jodit-wysiwyg table tr:nth-child(even) {
        background-color: #f9f9f9 !important;
      }
      
      .jodit-wysiwyg table tr:hover {
        background-color: #f0f0f0 !important;
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
      placeholder: "",
      language: "en",
      width: "auto",
      height: 500,
      minHeight: 300,
      maxHeight: 800,
      iframe: true,
      iframeStyle: `
        width: 100% !important; 
        height: 100% !important;
        table { 
          border-collapse: collapse !important; 
          border: 1px solid #ddd !important; 
          margin: 10px 0 !important; 
        } 
        table td, table th { 
          border: 1px solid #ddd !important; 
          padding: 8px 12px !important; 
          text-align: left !important; 
        } 
        table th { 
          background-color: #f5f5f5 !important; 
          font-weight: bold !important; 
        } 
        table tr:nth-child(even) { 
          background-color: #f9f9f9 !important; 
        } 
        table tr:hover { 
          background-color: #f0f0f0 !important; 
        }
      `,
      iframeSandbox:
        "allow-same-origin allow-scripts allow-forms allow-popups allow-presentation",

      // Remove specific buttons from toolbar
      removeButtons: ["file"], // Insert file button'unu kaldır

      // Upload dialog stil ayarları - Daha güçlü override
      style: {
        ".jodit-popup": "min-width: 216px !important; width: auto !important;",
        ".jodit-popup.jodit_theme_default": "min-width: 216px !important;",
        "div.jodit-popup": "min-width: 216px !important;",
        ".jodit-container .jodit-popup": "min-width: 216px !important;",
      },

      // Print feature active
      allowCommandsInReadOnly: ["print", "source", "fullsize"],

      // Custom footer with link
      statusbar: false,

      // Image upload configuration - simplified
      uploader: {
        insertImageAsBase64URI: true, // Base64 olarak resim ekleme
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp", "bmp"],
      },

      // Drag and drop support
      enableDragAndDropFileToEditor: true,
      processPasteHTML: true,
      processPasteFromWord: true,

      // Drag and drop file handling - disable built-in to prevent errors
      disableDragAndDropFileToEditor: false,

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
