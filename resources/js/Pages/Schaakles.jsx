import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

export default function Schaakles(filename)
{
    const docs = [ // Remote file
        { uri: "./"+filename }, // Local File
      ];

    return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;

}