"use client"

import { RedocStandalone } from 'redoc'

const json = require('./court_venue.json')

export default function CourtVenue() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        requiredPropsFirst: true,
        sortPropsAlphabetically: true,
        downloadFileName: 'openapi_looplex_court_venue.json'
      }}
    />
  )
}