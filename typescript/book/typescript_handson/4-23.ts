class Data<T> {
  data?: T[]

  constructor(...item: T[]) {
    this.data = item
  }

  print(): void {
    if (this.data) {
      for (let item of this.data) {
        console.log(item)
      }
    } else {
      console.log('no data...')
    }
  }
}

const hoge = new Data<string>('h', 'a')
hoge.print()
