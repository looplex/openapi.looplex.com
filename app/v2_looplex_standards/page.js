"use client"

import { RedocStandalone } from 'redoc'

const json = require('./looplex_standards.json')

// Nome de function component deve ser PascalCase
export default function looplexstandards() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: true,
        downloadFileName: 'openapi_looplex_looplex_standards.json'
      }}
    />
  )
}