'use client'

import React from 'react'
import { Row, Col, Typography, Card, Input } from "antd"
import Image from 'next/image'

import {
  AudioOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  ApiOutlined
} from '@ant-design/icons'

const { Search } = Input;
const { Text } = Typography

export default function Home() {

  return (

    <div style={{ backgroundColor: '#F5FBFE' }}>

      <Row
        style={{
          padding: 0,
          backgroundColor: '#F0F4F6',
          borderBottom: "0.5px solid grey",
          boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
          marginBottom: 80
        }}
      >

        <Col span={6}>

          <Image
            src={'/logo.png'}
            width={160}
            height={80}
            alt='Looplex'
          />

        </Col>

        <Col span={10} style={{ marginTop: 30 }}>
          <Search
            placeholder="Pesquise na Looplex OpenAPI"
            onSearch={() => { }}
            suffix={
              <AudioOutlined
                style={{
                  fontSize: 16,
                  color: '#1677ff',
                }}
              />
            }
          />
        </Col>

        <Col span={5} style={{ marginLeft: 120, marginTop: 30 }}>
          <FacebookOutlined style={{ fontSize: 26, color: '#1677FF' }} />
          <LinkedinOutlined style={{ fontSize: 26, color: '#1677FF', marginLeft: 30 }} />
          <InstagramOutlined style={{ fontSize: 26, color: '#1677FF', marginLeft: 30 }} />
        </Col>

      </Row>

      <Row>

        <Col span={15} offset={1}>

          <Row>

            <Col span={16}>
              <Text style={{ fontSize: 36, fontWeight: 'bold', marginTop: 50 }}>
                Documentação - APIs Looplex
              </Text>
            </Col>

          </Row>

          <Row>

            <Col span={16}>
              <div style={{ fontSize: 18, marginTop: 30 }}>
                Seja bem-vindo à página oficial de <b>documentação das APIs da Looplex.</b>
              </div>
              <br />
              <div style={{ fontSize: 18 }}>
                Aqui você encontrará informações detalhadas, guias e exemplos para auxiliar na
                integração eficiente dos nossos serviços.
              </div>
            </Col>

          </Row>

        </Col>

        <Col span={7}>
          <Image
            src={'/api_image.png'}
            width={500}
            height={350}
            alt='Looplex'
          />
        </Col>

      </Row>

      <Row style={{ marginTop: 50, marginLeft: 100, fontWeight: 'bold' }}>
        <div style={{ fontSize: 24 }}>
          Funcionalidades
        </div>
      </Row>

      <Row style={{ marginTop: 30, marginLeft: 100 }}>

        <Col span={7}>

          <Card style={{ height: 250 }}>

            <div>
              <ApiOutlined style={{ fontSize: 40, color: '#1677FF' }} />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 22,
                  fontWeight: 'bold'
                }}
              >
                Actions
              </Text>
            </div>

            <p>
              É o grupo de APIs usado pelos <b>templates</b> relacionados ao <b>fluxo de documentos.</b>
            </p>

            <BorderedLink
              text={'Actions v1'}
              link={'/v1/actions'}
            />

          </Card>

        </Col>

        <Col span={7} style={{ marginLeft: 20 }}>

          <Card style={{ height: 250 }}>

            <div>
              <ApiOutlined style={{ fontSize: 40, color: '#1677FF' }} />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 22,
                  fontWeight: 'bold'
                }}
              >
                Court Venue
              </Text>
            </div>

            <p>
              É o grupo de APIs responsável por definir <b>a cidade ou
                tribunal</b> onde o <b>processo será julgado</b>, com base nos dados
              fornecidos.
            </p>

            <BorderedLink
              text={'Court Venue'}
              link={'/court_venue'}
            />

          </Card>

        </Col>

        <Col span={7} style={{ marginLeft: 20 }}>

          <Card style={{ height: 250 }}>
            <div>
              <ApiOutlined style={{ fontSize: 40, color: '#1677FF' }} />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 22,
                  fontWeight: 'bold'
                }}
              >
                Feriado
              </Text>
            </div>

            <p>
              API de feriados é um serviço que fornece datas oficiais de feriados para diferentes regiões.
            </p>

            <BorderedLink
              link='/v1/recess'
              text={'Feriado v1'}
            />

          </Card>

        </Col>

      </Row>

      <Row style={{ marginTop: 50, marginLeft: 100, fontWeight: 'bold' }}>
        <div style={{ fontSize: 24 }}>
          Plataforma
        </div>
      </Row>

      <Row style={{ marginTop: 30, marginLeft: 100 }}>

        <Col span={7}>

          <Card style={{ height: 280 }}>

            <div>
              <ApiOutlined style={{ fontSize: 40, color: '#1677FF' }} />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 22,
                  fontWeight: 'bold'
                }}
              >
                Cases
              </Text>
            </div>

            <p>
              API de casos gerencia dados e status de processos.<br />
              Permite consultar e atualizar informações automaticamente.
            </p>

            <BorderedLink
              link='/v1/cases'
              text={'Cases V1 (legado)'}
            />

            <BorderedLink
              link='/v1/case-management'
              text={'Cases Management'}
            />

          </Card>

        </Col>

        <Col span={7} style={{ marginLeft: 20 }}>

          <Card style={{ height: 280 }}>

            <div>
              <ApiOutlined style={{ fontSize: 40, color: '#1677FF' }} />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 22,
                  fontWeight: 'bold'
                }}
              >
                Assembler
              </Text>
            </div>
            <p>
              É o grupo de APIs usado pela <b>interface web do Looplex</b>, relacionado ao <b>fluxo de documentos, templates e tarefas.</b>
            </p>

            <BorderedLink
              link='/v1/assembler'
              text={'Assembler v1'}
            />

          </Card>

        </Col>

        <Col span={7} style={{ marginLeft: 20 }}>

          <Card style={{ height: 280 }}>

            <div>
              <ApiOutlined style={{ fontSize: 40, color: '#1677FF' }} />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 22,
                  fontWeight: 'bold'
                }}
              >
                Looplex 365
              </Text>
            </div>
            <p>
              Ciclo de vida de aplicativos da microsoft e renderizações.
            </p>

            <BorderedLink
              link='/v1/looplex365'
              text={'Looplex 365 v1'}
            />

          </Card>

        </Col>

      </Row>
    </div>
  )
}

const BorderedLink = ({ text, link }) => {
  return (
    <div
      style={{
        border: "0.5px solid lightgrey",
        borderRadius: 8,
        padding: 10,
        marginTop: 10
      }}
    >
      <a
        href={link}
        target='_blank'
      >
        <div style={{ textAlign: 'left' }}>
          {text}
        </div>
      </a>

    </div>
  )
}