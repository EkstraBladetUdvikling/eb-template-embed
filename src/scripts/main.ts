class EbFeatureClass {
  private desktopUrl: string;
  private mobileUrl: string;

  /**
   * Init production
   */
  constructor() {
    this.desktopUrl = this.getParameterByName('desktopurl');
    this.mobileUrl = this.getParameterByName('mobileurl');

    // Create image
    const target: HTMLDivElement = document.querySelector('.eb-image-loader');
    const imageElem: HTMLImageElement = document.createElement('img');
    if (window.innerWidth > 480 || !this.mobileUrl) {
      // Desktop
      imageElem.src = this.desktopUrl;
    } else {
      // Mobil (full width image)
      imageElem.src = this.mobileUrl;
      imageElem.style.width = '100%';
    }

    target.appendChild(imageElem);
  }

  /**
   * Get parameters from URL
   * @param name query
   */
  private getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
}

const ebFeatureInstance: EbFeatureClass = new EbFeatureClass();
