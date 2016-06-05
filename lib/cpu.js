class CPU {
  constructor(inputOptions) {
    const options = Object.assign({
      divisor: 12,
      frequency: 1.789773
    }, inputOptions);

    this.divisor = options.divisor;
    this._frequency = options.frequency;

    this._registers = {
      a: 0,
      x: 0,
      y: 0,
      pc: 0,
      s: 0,
      p: 0
    };
  }

  step() {

  }
}

export default CPU;
