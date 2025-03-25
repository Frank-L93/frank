import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

export default function Schaakles({filename})
{
    console.log("Schaakles: ", filename);
    const docs = [ // Remote file
        { uri: "https://docs.google.com/presentation/d/1FdgIaN26YnDNcUuJA1JexY70Moz378__/edit?usp=sharing&ouid=104746007721087541898&rtpof=true&sd=true" }, // Local File
      ];

    return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;

}