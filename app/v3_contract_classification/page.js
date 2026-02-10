"use client"

import { RedocStandalone } from 'redoc'

const json = require('./v3_contract_classification.json')

// Nome de function component deve ser PascalCase
export default function ContractClassification() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        requiredPropsFirst: true,
        sortPropsAlphabetically: true,
        downloadFileName: 'openapi_looplex_Contract_Classification.json'
      }}
    />
  )
}