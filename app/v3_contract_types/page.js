"use client"

import { RedocStandalone } from 'redoc'

const json = require('./v3_contract_types.json')

// Nome de function component deve ser PascalCase
export default function ContractType() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: true,
        downloadFileName: 'openapi_looplex_contract_type.json'
      }}
    />
  )
}