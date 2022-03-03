export class Game {
  private jogadas: number[] = Array(21)
  private jogadaAtual: number = 0

  jogar(pinos: number): void {
    this.jogadas[this.jogadaAtual++] = pinos
  }

  score() : number {
    let _score = 0

    for(let i=0; i<20; i++) {
      _score += this.jogadas[i]
    }

    return _score
  }
}
