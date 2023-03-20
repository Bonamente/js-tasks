class ExtendedClock extends Clock {
  constructor(settings) {
    super(settings);
    const { precision = 1000 } = settings;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
