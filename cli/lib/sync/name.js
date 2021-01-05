
module.exports = {
  validComponent
}

function validComponent (name) {
  const isReserved = reservedKeywords.has(name)
  if (isReserved) {
    throw new Error(`${name} is a reserved keyword.`)
  }
  return /^_[a-zA-Z]/.test(name) && !isReserved
}

// https://mathiasbynens.be/notes/reserved-keywords
var reservedKeywords = new Set([
  'do',
  'if',
  'in',
  'for',
  'let',
  'new',
  'try',
  'var',
  'case',
  'else',
  'enum',
  'eval',
  'null',
  'this',
  'true',
  'void',
  'with',
  'await',
  'break',
  'catch',
  'class',
  'const',
  'false',
  'super',
  'throw',
  'while',
  'yield',
  'delete',
  'export',
  'import',
  'public',
  'return',
  'static',
  'switch',
  'typeof',
  'default',
  'extends',
  'finally',
  'package',
  'private',
  'continue',
  'debugger',
  'function',
  'arguments',
  'interface',
  'protected',
  'implements',
  'instanceof',
])
