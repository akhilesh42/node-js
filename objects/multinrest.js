function multiply(multiplier, ...args) {
    return args.map(element => {
      return multiplier * element
    })
  }

  let arr = multiply(3, 15, 29, 42) // 2 value is going into multiplier and rest other values are going into ...args.
  console.log(arr)