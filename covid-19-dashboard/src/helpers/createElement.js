export const createElement = (
  tag,
  id = null,
  classNames = null,
  innerHTML = null,
  children = null,
  attributes = null
) => {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (classNames)
    classNames.forEach((className) => element.classList.add(className));
  if (innerHTML) element.innerHTML = innerHTML;
  if (children) children.forEach((child) => element.appendChild(child));
  if (attributes)
    attributes.forEach((attribute) =>
      element.setAttribute(attribute.name, attribute.value)
    );

  return element;
};
