class EbFeatureClass {
  private productionName = 'eb-unnamed'; // Set DIV id to productionname to enable height
  private trackingData = {
    eventAction: '2019-' + this.productionName,
    eventCategory: 'EB interaktiv',
    eventLabel: 'First interaction',
    eventNint: 0,
    eventValue: 0
  };
  private firstInteraction: boolean = false;
  private completeInteraction: boolean = false;

  /**
   * Init production
   */
  constructor() {
    this.updateHeight();
  }

  /**
   * Tracks the first interaction once
   */
  private trackFirstInteraction(): void {
    if (!this.firstInteraction) {
      parent.postMessage(this.trackingData, '*');
      this.firstInteraction = true;
    }
  }

  /**
   * Tracks the final / complete action once
   */
  private trackCompleteInteraction(): void {
    if (!this.completeInteraction) {
      this.trackingData.eventLabel = 'Completed interaction';
      parent.postMessage(this.trackingData, '*');
      this.completeInteraction = true;
    }
  }

  /**
   * Update height on parent
   */
  private updateHeight(): void {
    parent.postMessage(
      'token:#' + this.productionName + ',height:' + String(document.documentElement.offsetHeight),
      '*'
    );
  }
}

const ebFeatureInstance: EbFeatureClass = new EbFeatureClass();
