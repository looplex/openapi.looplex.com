"use client"

import { RedocStandalone } from 'redoc'

const json = require('./tasks.json')

// Nome de function component deve ser PascalCase
export default function TasksManagement() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        requiredPropsFirst: true,
        sortPropsAlphabetically: true,
        downloadFileName: 'openapi_looplex_tasks-management.json'
      }}
    />
  )
}