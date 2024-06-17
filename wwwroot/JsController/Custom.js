document.addEventListener('DOMContentLoaded', function () {
    $("#pdfDownload").click(function () {
        // Fetch content of the div with id 'content-area'
        var contentArea = document.getElementById('content-area');

        // Create a new jsPDF instance
        var doc = new jsPDF();

        // Add HTML content to the PDF
        doc.html(contentArea, {
            callback: function (pdf) {
                // Save the PDF
                pdf.save('content.pdf');
            }
        });
    });
});