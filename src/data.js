export const masterData = [ 
    [0, 1.00, 3400, 1, 0 ],
    [1, 1.00, 3400, 1, 0 ],
    [2, 1.00, 3400, 1, 0 ],
    [3, 0.90, 3400, 1, 1],
    [4, 0.80, 3400, 1, 1],
    [5, 0.70, 16700, 2, 2],
    [6, 0.60, 16700, 2, 2],
    [7, 0.50, 16700, 2, 3],
    [8, 0.45, 16700, 2, 3],
    [9, 0.45, 16700, 2, 4],
    [10, 0.45, 33400, 3, 4],
    [11, 0.45, 33400, 3, 5],
    [12, 0.45, 33400, 3, 5],
    [13, 0.40, 33400, 3, 6],
    [14, 0.40, 33400, 3, 6],
    [15, 0.40, 33400, 4, 7],
    [16, 0.40, 66700, 4, 7],
    [17, 0.40, 66700, 4, 8],
    [18, 0.35, 66700, 4, 8],
    [19, 0.35, 66700, 4, 9],
    [20, 0.35, 66700, 5, 9],
    [21, 0.35, 66700, 5, 10],
    [22, 0.35, 66700, 5, 10],
    [23, 0.30, 66700, 5, 11],
    [24, 0.30, 66700, 5, 11],
    [25, 0.30, 66700, 6, 12],
    [26, 0.30, 100000, 6, 12],
    [27, 0.30, 100000, 6, 13],
    [28, 0.25, 100000, 6, 13],
    [29, 0.25, 100000, 6, 14]
  ].map((a) => {
    return {
      level: a[0],
      probability: a[1],
      adenaQuantity: a[2],
      scrollQuantity: a[3],
      marbleQuantity: a[4]
    }
  })

export function findByLevel(level) {
  return masterData.filter((a) => a.level === level)[0]
}
