"use client"

import { RedocStandalone } from 'redoc'

const json = require('./cases.json')

// Nome de function component deve ser PascalCase
export default function Cases() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        requiredPropsFirst: true,
        sortPropsAlphabetically: true,
        downloadFileName: 'openapi_looplex_cases_v1.json'
      }}
    />
  )
}