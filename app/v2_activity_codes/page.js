"use client"

import { RedocStandalone } from 'redoc'

const json = require('./v2_activity_codes.json')

// Nome de function component deve ser PascalCase
export default function ActivityCodes() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: true,
        downloadFileName: 'openapi_looplex_activity_codes.json'
      }}
    />
  )
}