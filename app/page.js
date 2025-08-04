'use client'

import React from 'react'
import { Row, Col, Typography, Card, Input } from "antd"
import Image from 'next/image'

import {
  AudioOutlined,
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  ApiOutlined,
  BookOutlined,
  CalendarOutlined,
  GlobalOutlined,
  ProfileOutlined,
  RightOutlined
} from '@ant-design/icons'

const { Search } = Input;
const { Text } = Typography

const iconStyle = { fontSize: 28, color: '#161719', padding: 4 }

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
            suffix={<AudioOutlined style={{ fontSize: 16, color: '#1677ff' }} />}
          />

        </Col>

        <Col span={5} style={{ marginTop: 30 }} offset={3}>

          <FacebookFilled
            onClick={() => { }}
            style={{ fontSize: 26, color: '#1677FF' }}
          />

          <LinkedinFilled
            onClick={() => { }}
            style={{ fontSize: 26, color: '#1677FF', marginLeft: 30 }}
          />

          <InstagramFilled
            onClick={() => { }}
            style={{ fontSize: 26, color: '#1677FF', marginLeft: 30 }}
          />

          <GlobalOutlined
            onClick={() => { }}
            style={{ fontSize: 26, color: '#1677FF', marginLeft: 30 }}
          />

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

            <HeaderAPI
              title={'Actions'}
              icon={<ApiOutlined style={iconStyle} />}
            />

            <p>
              É o grupo de APIs usado pelos <b>templates</b> relacionados ao <b>fluxo de documentos.</b>
            </p>

            <BorderedLink
              text={'Actions v1'}
              link={'/v1_actions'}
            />

          </Card>

        </Col>

        <Col span={7} style={{ marginLeft: 20 }}>

          <Card style={{ height: 250 }}>

            <HeaderAPI
              title={'Court Venue'}
              image={
                <Image
                  src={'/logo_justice.png'}
                  width={38}
                  height={35}
                  alt='Looplex'
                />
              }
            />

            <p>
              É o grupo de APIs responsável por definir <b>a cidade ou
                tribunal</b> onde o <b>processo será julgado</b>, com base nos dados
              fornecidos.
            </p>

            <BorderedLink
              text={'Court Venue'}
              link={'/v2_court_venue'}
            />

          </Card>

        </Col>

        <Col span={7} style={{ marginLeft: 20 }}>

          <Card style={{ height: 250 }}>

            <HeaderAPI
              title={'Feriado'}
              icon={<CalendarOutlined style={iconStyle} />}
            />

            <p>
              API de feriados é um serviço que fornece datas oficiais de feriados para diferentes regiões.
            </p>

            <BorderedLink
              link='/v1_recess'
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

            <HeaderAPI
              title={'Cases'}
              icon={<BookOutlined style={iconStyle} />}
            />

            <p>
              API de casos gerencia dados e status de processos.<br />
              Permite consultar e atualizar informações automaticamente.
            </p>

            <BorderedLink
              link='/v1_cases'
              text={'Cases V1 (legado)'}
            />

            <BorderedLink
              link='/v2_case-management'
              text={'Cases Management'}
            />

            <BorderedLink
              link='/v2_tasks'
              text={'Tasks Management'}
            />

          </Card>

        </Col>

        <Col span={7} style={{ marginLeft: 20 }}>

          <Card style={{ height: 280 }}>

            <HeaderAPI
              title={'Assembler'}
              icon={<ProfileOutlined style={iconStyle} />}
            />

            <p>
              É o grupo de APIs usado pela <b>interface web do Looplex</b>, relacionado ao <b>fluxo de documentos, templates e tarefas.</b>
            </p>

            <BorderedLink
              link='/v1_assembler'
              text={'Assembler v1'}
            />

          </Card>

        </Col>

        <Col span={7} style={{ marginLeft: 20 }}>

          <Card style={{ height: 280 }}>

            <HeaderAPI
              title={'Looplex 365'}
              image={
                <Image
                  src={'/logo_looplex.png'}
                  width={36}
                  height={36}
                  alt='Looplex'
                />
              }
            />

            <p>
              Ciclo de vida de aplicativos da microsoft e renderizações.
            </p>

            <BorderedLink
              link={'/v1_looplex365'}
              text={'Looplex 365 v1'}
            />

          </Card>

        </Col>

      </Row>
    </div>
  )
}

const HeaderAPI = ({ title, icon, image }) => {
  return (
    <Row>

      <div
        style={{
          backgroundColor: '#E6F4FF',
          border: "0.5px solid #8AC2FF",
          borderRadius: 8,
          width: 36,
          height: 36,
          padding: 5
        }}
      >
        {icon ?? image}
      </div>

      <Text
        style={{
          marginLeft: 20,
          marginTop: 5,
          fontSize: 22,
          fontWeight: 'bold'
        }}
      >
        {title}
      </Text>

    </Row>
  )
}

const BorderedLink = ({ text, link }) => {
  return (
    <Row
      style={{
        width: '100%',
        border: "0.5px solid lightgrey",
        borderRadius: 8,
        padding: 10,
        marginTop: 10
      }}
    >
      <Col span={21} offset={1}>

        <a
          href={link}
          target='_blank'
        >
          <div style={{ textAlign: 'left', color: 'black' }}>
            {text}
          </div>
        </a>
      </Col>

      <RightOutlined style={{ fontSize: 18, color: 'grey' }} />

    </Row>
  )
}