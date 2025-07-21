import { useEffect, useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import "jodit/es2021/jodit.min.css";

function Jodit() {
  const editor = useRef(null);
  const [content, setContent] = useState(
    `<h1>Hello World</h1>
   `
  );

  // Jodit editör için kapsamlı konfigürasyon
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing..",
      language: "en", // Türkçe dil desteği
      width: "auto",
      height: 500,
      minHeight: 300,
      maxHeight: 800,
      iframe: true,
      //   iframeStyle:
      //     'html{margin: 0px;}body{padding:10px;background:transparent;color:#000;position:relative;z-index:2;user-select:auto;margin:0px;overflow:hidden;}body:after{content:"";clear:both;display:block}',
      iframeSandbox:
        "allow-same-origin allow-scripts allow-forms allow-popups allow-presentation",
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
        <div style={{ padding: "0" }}>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={handleContentChange}
            onChange={handleContentChange} // Performans için sadece onBlur kullanıyoruz
          />
        </div>
      </div>
    </div>
  );
}

export default Jodit;
