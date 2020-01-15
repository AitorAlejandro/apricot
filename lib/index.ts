class Working {
  param: string;
  constructor() {
    this.param = "value";
  }
  getParam(): string {
    return this.param;
  }
  static sum(data: number[]): number {
    return data.reduce((total, amount) => total + amount);
  }
}
