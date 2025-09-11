const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "packages/app/src/assets");
const maxWidth = 1400;

fs.readdirSync(assetsDir).forEach((file) => {
  if (file.endsWith(".png")) {
    const filePath = path.join(assetsDir, file);
    sharp(filePath)
      .metadata()
      .then((metadata) => {
        if (metadata.width > maxWidth) {
          const tempPath = filePath + ".tmp";
          return sharp(filePath)
            .resize({ width: maxWidth })
            .toFile(tempPath)
            .then(() => {
              fs.renameSync(tempPath, filePath);
              console.log(`Resized ${file} to width ${maxWidth}`);
            });
        } else {
          console.log(`${file} is within size limit.`);
        }
      })
      .catch((err) => {
        console.error(`Error processing ${file}:`, err);
      });
  }
});
