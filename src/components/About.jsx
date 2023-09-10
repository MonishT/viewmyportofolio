import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const downloadPageContents = () => {
  const elementToCapture = document.documentElement;
  html2canvas(elementToCapture).then((canvas) => {
    // Create a PDF instance
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    // Add the captured image to the PDF
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdfWidth, pdfHeight);
    // Download the PDF with a specified file name
    pdf.save('resume.pdf');
  });
  };
  
function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p> I have a strong background in computer science, holding a Bachelor's degree. Over the past two years, I've been actively involved in the software development industry. During my career, I had the privilege of receiving accolodes from seniors for my contributions to project XYZ and organization</p>
      <button id="downloadButton"onClick={downloadPageContents}>Download Resume</button>
    </section>
  );
}

export default About;
