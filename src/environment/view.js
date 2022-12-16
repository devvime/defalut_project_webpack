export const view = (html) => {
  const template = document.createElement("template")
  template.innerHTML = html.trim()
  return template.content.firstElementChild
}