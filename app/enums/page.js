"use client"

import { Col, Divider, Input, Row, Typography } from "antd"
import Image from "next/image"
import { useState } from "react"

const { Title } = Typography

const arrAllEnums = require('./list.json')

let arrEnumsFiltered = arrAllEnums

// Nome de function component deve ser PascalCase
export default function Enums() {

  const [state, setState] = useState('')

  return (

    <div
      style={{ marginLeft: 20 }}
    >

      <Image
        style={{ marginLeft: -35 }}
        src={'/logo.png'}
        width={200}
        height={100}
      />

      <Title
        level={3}
        type="success"
      >
        Lista de enums e seus possíveis valores
      </Title>

      <Row>
        <Col span={6}>
          <Input
            placeholder="Filtrar por nome do enum..."
            onChange={(text) => {
              setState(text.target.value)
              arrEnumsFiltered = arrAllEnums.filter(x => x['$comment'].toLowerCase().includes(text.target.value.toLowerCase()))
            }}
          />
        </Col>
      </Row>
      {
        arrEnumsFiltered.length === 0 &&
        (
          <Title
            level={4}
            type="warning"
          >
            Nenhum enum encontrado com o filtro informado.
          </Title>
        )
      }
      {
        arrEnumsFiltered.map(item => {

          return (

            <>

              <Title
                type="secondary"
                level={4}
              >
                Enum: {item["$comment"]}
              </Title>

              <p />

              {
                item["enum"].map((i, index) => {

                  return (

                    <Title
                      key={index}
                      level={4}
                      style={{ marginBottom: -20 }}
                    >
                      {`${i["value"]} = ${i["name"]}`}
                    </Title>

                  )

                })
              }

              <Divider
                style={{
                  marginTop: 45
                }}
              />
            </>
          )
        })
      }

    </div>
  )
}