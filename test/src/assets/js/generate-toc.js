function generateTOC() {

    var DOM = {
        container: 'js-toc-container',
        sectionHeadings: '.js-toc-section-headings'
    };

    for (var i = 0; i < DOM.sectionHeadings.length; i++) {
        console.log(i);
    }
};

generateTOC();
