import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Регистрирани потребители</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Име</th>
                      <th>Държава</th>
                      <th>Град</th>
                      <th className="text-center">Потребление</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Теодора Иванова</td>
                      <td>България</td>
                      <td>Пловдив</td>
                      <td className="text-center">36,738%</td>
                    </tr>
                    <tr>
                      <td>Стоян Бозуков</td>
                      <td>България</td>
                      <td>София</td>
                      <td className="text-center">23,789%</td>
                    </tr>
                    <tr>
                      <td>Григор Михайлов</td>
                      <td>България</td>
                      <td>Плевен</td>
                      <td className="text-center">56,142%</td>
                    </tr>
                    <tr>
                      <td>Alex Stoeff</td>
                      <td>United States</td>
                      <td>Portland</td>
                      <td className="text-center">38,735%</td>
                    </tr>
                    <tr>
                      <td>Kevin Scheffer</td>
                      <td>Netherlands</td>
                      <td>Aalten</td>
                      <td className="text-center">63,542%</td>
                    </tr>
                    <tr>
                      <td>Кристина Суванджиева</td>
                      <td>България</td>
                      <td>Пловдив</td>
                      <td className="text-center">78,615%</td>
                    </tr>
                    <tr>
                      <td>Йоан Спасов</td>
                      <td>Португалия</td>
                      <td>Порто</td>
                      <td className="text-center">98,615%</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">

          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
