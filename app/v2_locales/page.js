"use client"

import { RedocStandalone } from 'redoc'

const json = require('./v2_locales.json')

// Nome de function component deve ser PascalCase
export default function Locales() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        requiredPropsFirst: true,
        sortPropsAlphabetically: true,
        downloadFileName: 'openapi_looplex_Locales.json'
      }}
    />
  )
}