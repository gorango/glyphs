export const transform = (r, f) => {
  const rotation = value => {
    if (isNaN(value)) {
      return {
        n: 0,
        nne: 22.5,
        ne: 45,
        ene: 67.5,
        e: 90,
        ese: 112.5,
        se: 135,
        sse: 157.5,
        s: 180,
        ssw: 202.5,
        sw: 225,
        wsw: 247.5,
        w: 270,
        wnw: 292.5,
        nw: 315,
        nnw: 337.5
      } [value]
    }
    return value
  }
  const rotate = r && !['0', 'n'].includes(r) && `rotate(${rotation(r)})`
  const scale = f && {
    v: 'scale(1, -1)',
    x: 'scale(1, -1)',
    h: 'scale(-1, 1)',
    y: 'scale(-1, 1)',
    a: 'scale(-1)',
    xy: 'scale(-1)',
    yx: 'scale(-1)',
    hv: 'scale(-1)',
    vh: 'scale(-1)'
  }[f]
  const transform = (rotate && scale) ? `${rotate} ${scale}` : ((rotate || scale) || '')
  return transform
}
