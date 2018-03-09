class EbFeatureClass {
  constructor() {
    const titleTextElem: HTMLElement = document.querySelector('.article-widget-header--text')
    titleTextElem.innerText = 'Test Title'
  }
}

const ebFeatureInstance: EbFeatureClass = new EbFeatureClass();
