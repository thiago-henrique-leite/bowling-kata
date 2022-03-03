export class Game {
  private jogadas: number[] = Array(21)
  private jogadaAtual: number = 0

  jogar(pinos: number): void {
    this.jogadas[this.jogadaAtual++] = pinos
  }

  score() : number {
    let _score = 0
    let frameIndex = 0

    for(let frame=0; frame<10; frame++) {
      _score += this.jogadas[frameIndex] + this.jogadas[frameIndex + 1]
      frameIndex += 2
    }

    return _score
  }
}
