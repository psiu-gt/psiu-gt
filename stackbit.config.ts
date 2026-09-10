import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  // ...
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      assetsConfig: {
        referenceType: "static",
        staticDir: "static",
        uploadDir: "img",
        publicPath: "/"
      },
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          // Define the model as a page model
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/{slug}.md",
          fields: [{ name: "title", type: "string", required: true }]
        }
      ],
    })
  ]
});
