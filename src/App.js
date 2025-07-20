import StudioEditor from "@grapesjs/studio-sdk/react";
import {
  tableComponent,
  listPagesComponent,
  lightGalleryComponent,
  fsLightboxComponent,
  swiperComponent,
  accordionComponent,
  iconifyComponent,
  flexComponent,
  rteProseMirror,
  canvasEmptyState,
  canvasFullSize,
  canvasGridMode,
  layoutSidebarButtons,
  youtubeAssetProvider,
} from "@grapesjs/studio-sdk-plugins";
import { useRef, useEffect, useState } from "react";

import "@grapesjs/studio-sdk/style";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import "./froala-iframe-fix.css";

// Froala editör için özel butonları tanımla
import FroalaEditorLibrary from "froala-editor";

function App() {
  // Benzersiz kimlikler oluştur
  const projectId = "mui-gitflow-v2-" + Date.now();
  const userId = "user-" + Math.random().toString(36).substr(2, 9);
  const editorRef = useRef(null);
  const [content, setContent] = useState(
    "<p>Merhaba! Bu örnek HTML içeriğidir. <strong>Kalın metin</strong> ve <em>italik metin</em> örnekleri.</p>"
  );

  useEffect(() => {
    // Component yüklendikten sonra özel butonları tanımla
    const timer = setTimeout(() => {
      try {
        // Temizle butonu
        FroalaEditorLibrary.DefineIcon("clear", { NAME: "trash" });
        FroalaEditorLibrary.RegisterCommand("clear", {
          title: "İçeriği Temizle",
          focus: false,
          undo: true,
          refreshAfterCallback: true,
          callback: function () {
            this.html.set("");
            this.events.focus();
          },
        });

        // HTML Ekle butonu
        FroalaEditorLibrary.DefineIcon("insertHtml", { NAME: "code" });
        FroalaEditorLibrary.RegisterCommand("insertHtml", {
          title: "HTML Ekle",
          focus: true,
          undo: true,
          refreshAfterCallback: true,
          callback: function () {
            const htmlContent = prompt(
              "Eklemek istediğiniz HTML kodunu girin:"
            );
            if (htmlContent) {
              this.html.insert(htmlContent);
            }
          },
        });

        // Kaydet butonu
        FroalaEditorLibrary.DefineIcon("save", { NAME: "save" });
        FroalaEditorLibrary.RegisterCommand("save", {
          title: "İçeriği Kaydet",
          focus: false,
          undo: false,
          refreshAfterCallback: false,
          callback: function () {
            const content = this.html.get();
            alert(
              "İçerik kaydedildi!\n\nUzunluk: " + content.length + " karakter"
            );
            console.log("Kaydedilen içerik:", content);
          },
        });

        // Özel stil butonu
        FroalaEditorLibrary.DefineIcon("customStyle", { NAME: "star" });
        FroalaEditorLibrary.RegisterCommand("customStyle", {
          title: "Vurgu Kutusu Ekle",
          focus: true,
          undo: true,
          refreshAfterCallback: true,
          callback: function () {
            this.html.insert(
              '<div class="custom-highlight" style="background: linear-gradient(45deg, #f3f4f6, #e5e7eb); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #3b82f6; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📌 Önemli: Buraya özel içeriğinizi yazın</div>'
            );
          },
        });

        console.log("Özel butonlar tanımlandı");
      } catch (error) {
        console.error("Buton tanımlama hatası:", error);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const config = {
    placeholderText: "İçeriğinizi buraya yazın...",
    charCounterCount: false,
    reactIgnoreAttrs: ["class", "id"],

    // HTML kodlarının düzgün işlenmesi için
    htmlAllowedTags: [".*"],
    htmlAllowedAttrs: [".*"],
    htmlAllowComments: true,
    htmlExecuteScripts: false,
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

    // Toolbar butonları - basit ve etkili yaklaşım
    toolbarButtons: [
      "bold",
      "italic",
      "underline",
      "|",
      "fontSize",
      "color",
      "|",
      "insertLink",
      "insertImage",
      "|",
      "customStyle",
      "insertHtml",
      "clear",
      "save",
      "|",
      "undo",
      "redo",
      "html",
    ],

    // Mobil cihazlar için
    toolbarButtonsXS: [
      "bold",
      "italic",
      "|",
      "customStyle",
      "insertHtml",
      "clear",
      "save",
      "|",
      "undo",
      "redo",
    ],

    // Tablet için
    toolbarButtonsSM: [
      "bold",
      "italic",
      "underline",
      "|",
      "insertLink",
      "insertImage",
      "|",
      "customStyle",
      "insertHtml",
      "clear",
      "save",
      "|",
      "undo",
      "redo",
      "html",
    ],

    // Gelişmiş özellükler
    heightMin: 200,
    heightMax: 500,
    attribution: false,

    // Toolbar ayarları
    toolbarInline: false,
    toolbarSticky: true,
    toolbarVisibleWithoutSelection: true,

    // Dil desteği
    language: "tr",

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
    <div style={{ margin: "60px 40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333", marginBottom: "30px" }}>
        Gelişmiş Froala Editör
      </h1>

      {/* Ana Editör */}
      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#666", marginBottom: "15px" }}>Editör:</h3>
        <FroalaEditor
          tag="textarea"
          config={config}
          model={content}
          onModelChange={handleModelChange}
        />
      </div>

      {/* HTML Önizleme */}
      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#666", marginBottom: "15px" }}>Canlı Önizleme:</h3>
        <div
          style={{
            border: "2px solid #e5e7eb",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "#f9fafb",
            minHeight: "100px",
          }}
        >
          <FroalaEditorView model={content} />
        </div>
      </div>

      {/* Ham HTML Çıktısı */}
      <div>
        <h3 style={{ color: "#666", marginBottom: "15px" }}>Ham HTML Kodu:</h3>
        <pre
          style={{
            backgroundColor: "#f3f4f6",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            fontSize: "12px",
            overflow: "auto",
            maxHeight: "200px",
          }}
        >
          {content}
        </pre>
      </div>

      {/* Kullanım Talimatları */}
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#eff6ff",
          borderRadius: "8px",
          border: "1px solid #bfdbfe",
        }}
      >
        <h4 style={{ color: "#1e40af", marginTop: 0 }}>
          Özel Buton Açıklamaları:
        </h4>
        <ul style={{ color: "#1e40af", lineHeight: "1.6" }}>
          <li>
            <strong>Özel Stil:</strong> Vurgulu bir stil kutusu ekler
          </li>
          <li>
            <strong>HTML Ekle:</strong> Doğrudan HTML kodu eklemenizi sağlar
          </li>
          <li>
            <strong>Temizle:</strong> Tüm editör içeriğini temizler
          </li>
          <li>
            <strong>Kaydet:</strong> İçeriği görüntüler (gerçek kaydetme için
            API entegrasyonu gereklidir)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
