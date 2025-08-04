"use client"

import { RedocStandalone } from 'redoc'

const json = require('./looplex365.json')

export default function Looplex365 () {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: false,
        downloadFileName: 'openapi_looplex365.json'
      }}
    />
  )
}