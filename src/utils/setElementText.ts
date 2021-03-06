import { getElementId } from './getElementId'

const renderHtml = 'weather-icon'

export const setElementText = (id: string, text: string | number) => {
  const element = getElementId(id)
  if (renderHtml === id) {
    element.innerHTML = text as string
  } else {
    typeof text === 'number'
      ? (element.textContent = String(text))
      : (element.textContent = text)
  }
}
