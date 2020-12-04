// https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
// https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
// https://github.com/GMchris/CoffeeColors

/**
 * Assumes all value in the set [0,1]
 * value is return in the range [0,1]
 */

export function hsl_to_hex(x, y, z) {
  let ret = hsl_to_rgb(x, y, z)
  return `#${to_hex_color(ret[0])}${to_hex_color(ret[1])}${to_hex_color(
    ret[2]
  )}`
}

export function hsb_to_hex(x, y, z) {
  let ret = hsb_to_rgb(x, y, z)
  return `#${to_hex_color(ret[0])}${to_hex_color(ret[1])}${to_hex_color(
    ret[2]
  )}`
}

export function to_hex_color(value) {
  return to_hex(value * 255)
}

export function to_hex(value) {
  const hex = Math.round(value).toString(16)
  return hex.length === 1 ? "0" + hex : hex
}

export function hsl_to_rgb(h, s, l) {
  let r, g, b
  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const hue_to_rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue_to_rgb(p, q, h + 1 / 3)
    g = hue_to_rgb(p, q, h)
    b = hue_to_rgb(p, q, h - 1 / 3)
  }
  return [r, g, b]
  // return {
  //   x: r,
  //   y: g,
  //   z: b,
  // };
}

export function hsb_to_rgb(h, s, v) {
  let r, g, b, i, f, p, q, t
  i = Math.floor(h * 6)
  f = h * 6 - i
  p = v * (1 - s)
  q = v * (1 - f * s)
  t = v * (1 - (1 - f) * s)
  switch (i % 6) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
    default:
  }

  return [r, g, b]
  // return {
  //   x: r,
  //   y: g,
  //   z: b,
  // };
}
