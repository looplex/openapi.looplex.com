"use client"

import { RedocStandalone } from 'redoc'

const json = require('./v3_procedures.json')

// Nome de function component deve ser PascalCase
export default function Procedures() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: true,
        downloadFileName: 'openapi_looplex_v3_procedures.json'
      }}
    />
  )
}