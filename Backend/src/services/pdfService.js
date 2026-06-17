import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export const extractTextFromPDF = async (buffer) => {
  try {
    const pdf = await pdfjsLib.getDocument({
      data: new Uint8Array(buffer),
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
