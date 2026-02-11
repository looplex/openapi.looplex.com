"use client"

import { RedocStandalone } from 'redoc'

const json = require('./v2_practice_areas.json')

// Nome de function component deve ser PascalCase
export default function PracticeArea() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        requiredPropsFirst: true,
        sortPropsAlphabetically: true,
        downloadFileName: 'openapi_looplex_practice_areas.json'
      }}
    />
  )
}