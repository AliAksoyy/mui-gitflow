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
import { useRef, useEffect } from "react";

import "@grapesjs/studio-sdk/style";

function App() {
  // Benzersiz kimlikler oluştur
  const projectId = "mui-gitflow-v2-" + Date.now();
  const userId = "user-" + Math.random().toString(36).substr(2, 9);
  const editorRef = useRef(null);

  useEffect(() => {
    // Editör hazır olduğunda HTML kodunu konsola yazdır
    if (editorRef.current) {
      const editor = editorRef.current;

      // HTML kodunu almak için
      const getHtml = () => {
        const html = editor.getHtml();
        const css = editor.getCss();
        console.log("HTML:", html);
        console.log("CSS:", css);
        return { html, css };
      };

      // Global olarak erişilebilir yap
      window.getEditorHtml = getHtml;

      // Code modalı açıldığında içeriği kaydet
      const saveCodeContent = () => {
        const html = editor.getHtml();
        const css = editor.getCss();

        // LocalStorage'a kaydet
        localStorage.setItem("grapesjs-html", html);
        localStorage.setItem("grapesjs-css", css);

        // Konsola yazdır
        console.log("=== KAYDEDİLEN HTML ===");
        console.log(html);
        console.log("=== KAYDEDİLEN CSS ===");
        console.log(css);

        // Dosya olarak indir
        const blob = new Blob(
          [
            `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GrapesJS Export</title>
    <style>${css}</style>
</head>
<body>
${html}
</body>
</html>`,
          ],
          { type: "text/html" }
        );

        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "grapesjs-export.html";
        a.click();
        URL.revokeObjectURL(url);
      };

      // Code modalı açıldığında event listener ekle
      const checkForCodeModal = setInterval(() => {
        const codeModal = document.querySelector(".gjs-modal");
        if (codeModal && codeModal.textContent.includes("Code")) {
          // Modal açıldığında içeriği kaydet
          setTimeout(saveCodeContent, 1000);
          clearInterval(checkForCodeModal);
        }
      }, 500);

      // Global fonksiyon olarak ekle
      window.saveCodeContent = saveCodeContent;
      window.getSavedContent = () => {
        const html = localStorage.getItem("grapesjs-html");
        const css = localStorage.getItem("grapesjs-css");
        console.log("Kaydedilen HTML:", html);
        console.log("Kaydedilen CSS:", css);
        return { html, css };
      };
    }
  }, []);

  return (
    <StudioEditor
      ref={editorRef}
      options={{
        licenseKey: "DEMO_LOCALHOST_KEY",
        project: {
          type: "web",
          id: projectId,
        },
        identity: {
          id: userId,
        },
        assets: {
          storageType: "local",
        },
        storage: {
          type: "local",
          autosaveChanges: 100,
          autosaveIntervalMs: 10000,
        },
        layout: {
          default: {
            type: "row",
            style: {
              height: "100%",
            },
            children: [
              { type: "sidebarLeft" },
              { type: "canvasSidebarTop" },
              { type: "sidebarRight" },
            ],
          },
        },
        plugins: [
          tableComponent.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/table */
          }),
          listPagesComponent.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/listPages */
          }),
          lightGalleryComponent.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/lightGallery */
          }),
          fsLightboxComponent.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/fslightbox */
          }),
          swiperComponent.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/swiper */
          }),
          accordionComponent.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/accordion */
          }),
          iconifyComponent.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/iconify */
          }),
          flexComponent.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/flex */
          }),
          rteProseMirror.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/rte/prosemirror */
          }),
          canvasEmptyState.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/canvas/emptyState */
          }),
          canvasFullSize.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/canvas/full-size */
          }),
          canvasGridMode.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/canvas/grid-mode */
          }),
          layoutSidebarButtons.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/layout/sidebar-buttons */
          }),
          youtubeAssetProvider.init({
            /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/asset-providers/youtube-asset-provider */
          }),
        ],
      }}
    />
  );
}

export default App;
