"use client"

import { RedocStandalone } from 'redoc'

const json = require('./court_venue_v3.json')

// Nome de function component deve ser PascalCase
export default function CourtVenuev3() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        requiredPropsFirst: true,
        sortPropsAlphabetically: true,
        downloadFileName: 'openapi_looplex_Court_Venue_v3.json'
      }}
    />
  )
}