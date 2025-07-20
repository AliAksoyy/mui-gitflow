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
import { useRef } from "react";

import "@grapesjs/studio-sdk/style";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";

function App() {
  // Benzersiz kimlikler oluştur
  const projectId = "mui-gitflow-v2-" + Date.now();
  const userId = "user-" + Math.random().toString(36).substr(2, 9);
  const editorRef = useRef(null);
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
