"use client"

import { RedocStandalone } from 'redoc'

const json = require('./occupations.json')

// Nome de function component deve ser PascalCase
export default function Occupations() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: true,
        downloadFileName: 'openapi_looplex_Occupations.json'
      }}
    />
  )
}