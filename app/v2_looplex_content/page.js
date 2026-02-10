"use client"

import { RedocStandalone } from 'redoc'

const json = require('./looplex_content.json')

// Nome de function component deve ser PascalCase
export default function LooplexContent() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        requiredPropsFirst: true,
        sortPropsAlphabetically: true,
        downloadFileName: 'openapi_looplex_content.json'
      }}
    />
  )
}