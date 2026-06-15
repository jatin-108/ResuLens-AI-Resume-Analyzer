import fs from "fs/promises";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export const extractTextFromPDF = async (filePath) => {
  try {
    const fileData = await fs.readFile(filePath);

    const pdf = await pdfjsLib.getDocument({
      data: new Uint8Array(fileData),
    }).promise;

    let extractedText = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);

      const content = await page.getTextContent();

      const pageText = content.items
        .map((item) => item.str)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();

      extractedText += pageText + "\n";
    }

    return extractedText.trim();
  } catch (error) {
    console.error("PDF Extraction Error:", error);

    throw new Error("Failed to extract text from PDF");
  }
};
