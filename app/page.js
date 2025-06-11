'use client'

import React from 'react'
import { Row, Col, Typography, Card, Input, Button } from "antd"
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
      <Row style={{ border: 1, borderColor: 'blue' }}>

        <Col span={6}>
          <Image
            src={'/logo.png'}
            width={200}
            height={100}
            alt='Looplex'
          />
        </Col>

        <Col span={12} style={{ marginTop: 30 }}>
          <Input placeholder="Pesquise na Looplex OpenAPI" />
        </Col>

        <Col span={5} style={{ marginLeft: 30, marginTop: 30 }}>
          Redes sociais Looplex
        </Col>

      </Row>

      <Row>

        <Col span={16}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 100, marginTop: 50 }}>
            Documentação - APIs Looplex
          </Text>
        </Col>

      </Row>

      <Row>
      
        <Col span={16}>
          <div style={{ fontSize: 20, marginLeft: 100, marginTop: 30 }}>
            Seja bem-vindo à página oficial de <b>documentação das APIs da Looplex.</b>
          </div>
          <br />
          <div style={{ fontSize: 20, marginLeft: 100 }}>
            Aqui você encontrará informações detalhadas, guias e exemplos para auxiliar na 
            integração eficiente dos nossos serviços.
          </div>
        </Col>

      </Row>

      <Row style={{ marginTop: 50, marginLeft: 100, fontWeight: 'bold' }}>
        <div style={{ fontSize: 24 }}>
          Funcionalidades
        </div>
      </Row>

      <Row style={{ marginTop: 30, marginLeft: 100 }}>

        <Col span={8}>
          
        <Card title="Court Venue">
          <p>
            É o grupo de APIs responsável por definir <b>a cidade ou 
            tribunal</b> onde o <b>processo será julgado</b>, com base nos dados 
            fornecidos.
          </p>

          <a 
            href='/court_venue' 
            target='_blank'
            style={{
              backgroundColor: 'green',
              height: 50
            }}
          >
            <div style={{ textAlign: 'left' }}>
              Court Venue
            </div>
          </a>
            
        </Card>

        </Col>
      </Row>

      <Row style={{ marginTop: 50, marginLeft: 100, fontWeight: 'bold' }}>
        <div style={{ fontSize: 24 }}>
          Plataforma
        </div>
      </Row>

      <Row style={{ marginTop: 30, marginLeft: 100 }}>

        <Col span={8}>
          
        <Card title="Cases">
          <p>
            API de casos gerencia dados e status de processos.<br/>
            Permite consultar e atualizar informações automaticamente.
          </p>

          <a 
            href='/v1/cases' 
            target='_blank'
            style={{
              backgroundColor: 'green',
              height: 50
            }}
          >
            <div style={{ textAlign: 'left' }}>
              Cases V1 (legado)
            </div>
          </a>

          <a 
            href='/v1/case-management' 
            target='_blank'
            style={{
              marginTop: 15, 
              width: '100%', 
              height: 50, 
              borderWidth: 10, 
              borderColor: 'grey' 
            }}
          >
            <div style={{ textAlign: 'left' }}>
              Cases Management
            </div>
          </a>
            
        </Card>

        </Col>
      </Row>
    </>
  )
}
