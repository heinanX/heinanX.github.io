"use client"

const LanguageSettings = () => {

    const switchLanguage = (lang) => {
        localStorage.setItem('language', lang)
      }
  return (
    <select name="lang" id="" onChange={(e) => switchLanguage(e.target.value)}>
    <option value="0">Eng</option>
    <option value="1">Sve</option>
    <option value="2">Jap</option>
  </select>
  )
}

export default LanguageSettings