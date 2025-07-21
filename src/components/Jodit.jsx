import { useEffect, useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import "jodit/es2021/jodit.min.css";

function Jodit() {
  const editor = useRef(null);
  const [content, setContent] = useState(
    `<h1>🎉 Jodit Editör'e Hoş Geldiniz!</h1>
   `
  );

  // Jodit editör için kapsamlı konfigürasyon
  const config = useMemo(
    () => ({
      // Temel ayarlar
      readonly: false,
      placeholder: "Harika içerikler yazmaya başlayın...",
      language: "tr", // Türkçe dil desteği
      width: "auto",
      height: 500,
      minHeight: 300,
      maxHeight: 800,

      // Tema ve görünüm
      theme: "default", // default, dark
      toolbarButtonSize: "middle", // small, middle, large
      toolbarSticky: true,
      toolbarStickyOffset: 10,

      // Butonlar - Tüm özellikler aktif
      buttons: [
        "source",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "superscript",
        "subscript",
        "|",
        "ul",
        "ol",
        "|",
        "outdent",
        "indent",
        "|",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "|",
        "image",
        "video",
        "file",
        "|",
        "table",
        "link",
        "hr",
        "|",
        "align",
        "undo",
        "redo",
        "|",
        "cut",
        "copy",
        "paste",
        "selectall",
        "|",
        "copyformat",
        "eraser",
        "|",
        "symbol",
        "fullsize",
        "print",
        "preview",
        "find",
        "|",
        "about",
      ],

      // Toolbar responsive ayarları
      buttonsMD: [
        "bold",
        "italic",
        "underline",
        "|",
        "ul",
        "ol",
        "|",
        "font",
        "fontsize",
        "brush",
        "|",
        "image",
        "link",
        "|",
        "align",
        "undo",
        "redo",
        "|",
        "fullsize",
        "dots",
      ],
      buttonsSM: [
        "bold",
        "italic",
        "|",
        "ul",
        "ol",
        "|",
        "image",
        "link",
        "|",
        "undo",
        "redo",
        "|",
        "dots",
      ],
      buttonsXS: [
        "bold",
        "image",
        "|",
        "brush",
        "paragraph",
        "|",
        "align",
        "|",
        "undo",
        "redo",
        "|",
        "dots",
      ],

      // Gelişmiş özellikler
      enter: "p", // p, div, br
      useSplitMode: false,
      autofocus: false,
      spellcheck: true,

      // Resim ayarları
      image: {
        editSrc: true,
        useImageEditor: true,
        openOnDblClick: true,
        editTitle: true,
        editAlt: true,
        editLink: true,
        editSize: true,
        editBorderRadius: true,
        editMargins: true,
        editStyle: true,
        editId: true,
        editClass: true,
        showPreview: true,
        selectImageAfterClose: true,
      },

      // Tablo ayarları
      table: {
        selectionCellStyle: "border: 1px double #1e88e5 !important;",
        useExtraClassesOptions: true,
      },

      // Link ayarları
      link: {
        followOnDblClick: true,
        processVideoLink: true,
        processPastedLink: true,
        noFollowCheckbox: true,
        openInNewTabCheckbox: true,
      },

      // Video ayarları
      video: {
        defaultWidth: 400,
        defaultHeight: 300,
      },

      // Yapıştırma ayarları
      askBeforePasteHTML: true,
      askBeforePasteFromWord: true,
      processPasteHTML: true,
      processPasteFromWord: true,

      // Temizlik ayarları
      cleanHTML: {
        replaceNBSP: true,
        fillEmptyParagraph: true,
        removeEmptyElements: true,
        replaceOldTags: {
          i: "em",
          b: "strong",
        },
      },

      // Renk paleti
      colors: {
        greyscale: [
          "#000000",
          "#434343",
          "#666666",
          "#999999",
          "#B7B7B7",
          "#CCCCCC",
          "#D9D9D9",
          "#EFEFEF",
          "#F3F3F3",
          "#FFFFFF",
        ],
        palette: [
          "#980000",
          "#FF0000",
          "#FF9900",
          "#FFFF00",
          "#00F0F0",
          "#00FFFF",
          "#4A86E8",
          "#0000FF",
          "#9900FF",
          "#FF00FF",
        ],
      },

      // Stil ayarları
      style: {
        font: "14px Arial, sans-serif",
        color: "#333333",
      },

      // Tab ayarları
      tab: {
        tabInsideLiInsertNewList: true,
      },

      // Arama özelliği
      useSearch: true,
      search: {
        lazyIdleTimeout: 1000,
      },

      // Karakter/kelime sayacı
      showCharsCounter: true,
      showWordsCounter: true,
      countHTMLChars: false,

      // Özel butonlar
      extraButtons: [
        {
          name: "insertDate",
          iconURL:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDNoLTFWMWgtMnYySDhWMUg2djJINWMtMS4xIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNkg1VjhoMTR2MTF6bS03LTZoNXYyaC01di0yeiIgZmlsbD0iIzMzMzMzMyIvPgo8L3N2Zz4K",
          tooltip: "Bugünün Tarihini Ekle",
          exec: function (editor) {
            const today = new Date().toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            editor.s.insertHTML(
              `<span style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px; font-weight: bold;">${today}</span>`
            );
          },
        },
        {
          name: "insertTime",
          iconURL:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIgZmlsbD0iIzMzMzMzMyIvPgo8cGF0aCBkPSJNMTIuNSA3SDExdjZsNS4yNSAzLjE1Ljc1LTEuMjMtNC41LTIuNjdWN3oiIGZpbGw9IiMzMzMzMzMiLz4KPC9zdmc+",
          tooltip: "Şu Anki Saati Ekle",
          exec: function (editor) {
            const now = new Date().toLocaleTimeString("tr-TR");
            editor.s.insertHTML(
              `<span style="background-color: #fff3e0; padding: 2px 6px; border-radius: 3px; font-weight: bold;">⏰ ${now}</span>`
            );
          },
        },
        {
          name: "insertSignature",
          iconURL:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDJINmMtMS4xIDAtMS45OS45LTEuOTkgMkw0IDIwYzAgMS4xLjg5IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjhoLTZ6bTQgMThINlY0aDdsMSAxdjE1eiIgZmlsbD0iIzMzMzMzMyIvPgo8L3N2Zz4K",
          tooltip: "İmza Ekle",
          exec: function (editor) {
            const signature = `
              <div style="margin-top: 20px; padding: 15px; border-top: 2px solid #e0e0e0; color: #666;">
                <strong>Saygılarımla,</strong><br>
                <em>Your Name</em><br>
                <small>Your Title | Your Company</small><br>
                <small>📧 email@example.com | 📞 +90 555 123 45 67</small>
              </div>
            `;
            editor.s.insertHTML(signature);
          },
        },
      ],

      // Event handlers
      events: {
        afterInit: function () {
          console.log("✅ Jodit Editör başarıyla başlatıldı!");
        },
        change: function (value) {
          console.log("📝 İçerik değişti:", value.length, "karakter");
        },
        focus: function () {
          console.log("🎯 Editör odaklandı");
        },
        blur: function () {
          console.log("💤 Editör odaktan çıktı");
        },
        paste: function (event) {
          console.log("📋 İçerik yapıştırıldı");
        },
      },

      // Diğer özellikler
      allowResizeX: true,
      allowResizeY: true,
      showTooltip: true,
      showTooltipDelay: 500,
      enableDragAndDropFileToEditor: true,

      // Placeholder özellikleri
      showPlaceholder: true,
      useInputsPlaceholder: false,

      // Tam ekran ayarları
      globalFullSize: true,

      // Kaynak kod editörü
      sourceEditor: "area", // area, ace
      beautifyHTML: true,

      // Ses komutları (modern tarayıcılarda)
      speechRecognize: {
        continuous: true,
        interimResults: true,
      },
    }),
    []
  );

  // İçerik değişikliği handler'ı
  const handleContentChange = (newContent) => {
    setContent(newContent);
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
      {/* Ana Editör */}
      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            border: "1px solid #e0e0e0",
          }}
        >
         

          <div style={{ padding: "0" }}>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1}
              onBlur={handleContentChange}
              onChange={() => {}} // Performans için sadece onBlur kullanıyoruz
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jodit;
