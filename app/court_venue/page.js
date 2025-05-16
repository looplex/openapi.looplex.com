"use client"

import { RedocStandalone } from 'redoc'

const json = require('./court_venue.json')

export default function CourtVenue() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: false,
        downloadFileName: 'openapi_looplex_court_venue.json'
      }}
    />
  )
}