export class Game {
  private _score: number = 0

  jogar(pinos: number): void {
    this._score += pinos
  }

  score() : number {
    return this._score
  }
}
