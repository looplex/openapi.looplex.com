'use client'

import { Row, Col, Typography, Tabs, Divider, Tag, Card } from "antd"
import Image from 'next/image'

const { Text } = Typography

const apis = [
  {
    key: 'actions',
    label: 'Actions',
    children:
      <>
        <Card
          title="Endpoints do Actions"
          actions={[]}
        >
          <a href="/v1/actions" target="_blank">Actions v1</a>
        </Card>
      </>
  },
  {
    key: 'assembler',
    label: 'Assembler',
    children:
      <>
        <Card
          title="Endpoints do Assembler"
          actions={[]}
        >
          <a href="/v1/assembler" target="_blank">Assembler v1</a>
        </Card>
      </>
  },
  {
    key: 'cases',
    label: 'Cases',
    children:
      <>
        <Card
          title="Endpoints do Looplex Cases"
          actions={[]}
        >
          <a href="/v1/cases" target="_blank">Cases v1</a> <br />
          <a href="/v1/case-management" target="_blank">Case Management</a>
        </Card>
      </>
  },
  {
    key: 'looplex365',
    label: 'Looplex 365',
    children:
      <>
        <Card
          title="Endpoints do Looplex 365"
          actions={[]}
        >
          <a href="/v1/looplex365" target="_blank">Looplex 365 v1</a>
        </Card>
      </>
  },
  {
    key: 'court_venue',
    label: 'Court Venue',
    children:
      <>
        <Card
          title="Endpoints de Court Venue"
          actions={[]}
        >
          <a href="/court_venue" target="_blank">Court Venue</a>
        </Card>
      </>
  },
  {
    key: 'recess',
    label: 'Feriados',
    children:
      <>
        <Card
          title="Endpoints de Feriados"
          actions={[]}
        >
          <a href="/v1/recess" target="_blank">Feriados</a>
        </Card>
      </>
  }
]

export default function Home() {

  return (
    <>
      <Row>
        <Col span={4}>
          <Image
            src={'/logo.png'}
            width={250}
            height={120}
            alt='Looplex'
          />

        </Col>
        <Col span={18} style={{ marginTop: 30 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            Bem vindo à página de documentações das APIs da Looplex
          </Text>
        </Col>

        <Col span={18} offset={4}>
          <Tabs
            tabPosition="left"
            items={apis}
          />
        </Col>

      </Row>

    </>
  )
}
