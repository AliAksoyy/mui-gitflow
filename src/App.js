
import { useEffect, useState } from "react";

import "@grapesjs/studio-sdk/style";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import Jodit from "./components/Jodit";
// import "./froala-iframe-fix.css";

function App() {
  const [content, setContent] = useState(null);

  const config = {
    placeholderText: "İçeriğinizi buraya yazın...",
    charCounterCount: false,
    reactIgnoreAttrs: ["class", "id"],

    // HTML kodlarının düzgün işlenmesi için
    htmlAllowedTags: [".*"],
    htmlAllowedAttrs: [".*"],
    htmlAllowComments: true,
    htmlExecuteScripts: true,
    htmlRemoveTags: [],
    htmlUntouched: true,

    // CSS ve stillerin korunması için
    htmlDoNotWrapTags: ["script", "style"],
    pasteAllowedStyleProps: [".*"],
    pastePlain: false,

    // İframe fix için
    iframe: true,
    iframeDefaultStyle:
      "body{font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#333;}",

    // Gelişmiş özellükler
    heightMin: 200,
    heightMax: 500,
    attribution: false,

    // Toolbar ayarları
    toolbarInline: false,
    toolbarSticky: true,
    toolbarVisibleWithoutSelection: true,

    // Stil tema
    theme: "royal",

    // Events
    events: {
      initialized: function () {
        console.log("Froala Editor başlatıldı");
      },
      contentChanged: function () {
        console.log("İçerik değişti");
      },
      "html.set": function () {
        console.log("HTML set edildi");
      },
    },
  };

  const handleModelChange = (model) => {
    setContent(model);
  };

  return (
    // <div style={{ margin: "60px 40px", fontFamily: "Arial, sans-serif" }}>
    //   <h1 style={{ color: "#333", marginBottom: "30px" }}>
    //     Gelişmiş Froala Editör
    //   </h1>

    //   {/* Ana Editör */}
    //   <div style={{ marginBottom: "40px" }}>
    //     <h3 style={{ color: "#666", marginBottom: "15px" }}>Editör:</h3>
    //     <FroalaEditor
    //       tag="textarea"
    //       config={config}
    //       model={content}
    //       onModelChange={handleModelChange}
    //     />
    //   </div>

    //   {/* HTML Önizleme */}
    //   {/* <div style={{ marginBottom: "40px" }}>
    //     <h3 style={{ color: "#666", marginBottom: "15px" }}>Canlı Önizleme:</h3>
    //     <div
    //       style={{
    //         border: "2px solid #e5e7eb",
    //         borderRadius: "8px",
    //         padding: "20px",
    //         backgroundColor: "#f9fafb",
    //         minHeight: "100px",
    //       }}
    //     >
    //       <FroalaEditorView model={content} />
    //     </div>
    //   </div> */}

    //   {/* Ham HTML Çıktısı */}
    //   {/* <div>
    //     <h3 style={{ color: "#666", marginBottom: "15px" }}>Ham HTML Kodu:</h3>
    //     <pre
    //       style={{
    //         backgroundColor: "#f3f4f6",
    //         padding: "15px",
    //         borderRadius: "8px",
    //         border: "1px solid #d1d5db",
    //         fontSize: "12px",
    //         overflow: "auto",
    //         maxHeight: "200px",
    //       }}
    //     >
    //       {content}
    //     </pre>
    //   </div> */}
    // </div>
    <Jodit />
  );
}

export default App;
