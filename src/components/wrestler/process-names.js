export default function processNames(name) {
  if (name.substring(0, 4) === "The ") {
    return [ name, ]
  }
  let names = name.trim().split(" ")

  return names
}
