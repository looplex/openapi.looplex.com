"use client"

import { RedocStandalone } from 'redoc'

const json = require('./v3_legal_person_classification.json')

// Nome de function component deve ser PascalCase
export default function LegalPersonClassification() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: true,
        downloadFileName: 'openapi_looplex_v3_legal_person_classification.json'
      }}
    />
  )
}