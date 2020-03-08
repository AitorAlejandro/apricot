export class Apricot {
  static sum(data: number[]): number {
    return data.reduce((total, amount) => total + amount);
  }
}
