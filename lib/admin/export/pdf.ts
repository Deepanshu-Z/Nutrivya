import { toCanvas } from "html-to-image";
import jsPDF from "jspdf";

export const exportPDF = async () => {
  const element = document.getElementById("admin-report");
  if (!element) return;

  try {
    // 1. High-Resolution Canvas
    const canvas = await toCanvas(element, {
      pixelRatio: 2, // 🚀 Doubles the resolution (fixes blurriness)
      skipFonts: false,
      backgroundColor: "#ffffff",
      // Force the width so it doesn't look like a mobile squashed version
      style: {
        width: "1200px",
        height: "auto",
        margin: "0",
        padding: "20px",
      },
    });

    const imgData = canvas.toDataURL("image/png", 1.0);

    // 2. Format as A4
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    // 3. Smart Pagination
    const pageHeight = pdf.internal.pageSize.getHeight();
    let heightLeft = pdfHeight;
    let position = 0;

    // Page 1
    pdf.addImage(
      imgData,
      "PNG",
      0,
      position,
      pdfWidth,
      pdfHeight,
      undefined,
      "FAST",
    );
    heightLeft -= pageHeight;

    // Subsequent pages
    while (heightLeft > 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        pdfWidth,
        pdfHeight,
        undefined,
        "FAST",
      );
      heightLeft -= pageHeight;
    }

    pdf.save(`admin-report.pdf`);
  } catch (error) {
    console.error("Export failed", error);
  }
};
