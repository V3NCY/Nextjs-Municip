import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";

import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "../variables/charts";

function Rtl() {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-right" sm="5">
                    <h5 className="card-category">Регистрирани</h5>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-left"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Година
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Месец
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Седмица
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-right" lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Потребление</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-primary" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="text-right" lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Компоненти</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-primary" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" lg="6" sm="6">
            <Card className="card-tasks text-left">
              <CardHeader className="text-right">
                <h6 className="title d-inline">Настройки</h6>{" "}
                <UncontrolledDropdown className="float-left">
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    color="link"
                    data-toggle="dropdown"
                    id="dropdownMenuLink"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink">
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Активни
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >

                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title"></p>
                          <p className="text-muted"> Потребители</p>
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip591536518"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip591536518"
                            placement="right"
                          >
                            Потребление
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">SEO функционалност</p>

                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip36890049"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip36890049"
                            placement="right"
                          >
                            Модалност
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">Конфигурации</p>
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip5456779"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip5456779"
                            placement="right"
                          >
                            Потребление
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">
                            Използвани допълнителни средства
                          </p>

                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip989428493"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip989428493"
                            placement="right"
                          >
                            Профили
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">Достъпност</p>

                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip169784793"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip169784793"
                            placement="right"
                          >
                            Инструменти
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">Инструменти</p>

                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="text-center" lg="6" sm="6">
            <Card className="card-tasks text-left">
              <CardHeader className="text-right">
                <h6 className="title d-inline">Езици</h6>{" "}
                <UncontrolledDropdown className="float-left">
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    color="link"
                    data-toggle="dropdown"
                    id="dropdownMenuLink"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink">
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Активни
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Неактивни
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >

                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title"></p>
                          <p className="text-muted"> Български</p>
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip591536518"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip591536518"
                            placement="right"
                          >

                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right" >
                          <p className="title">Английски</p>

                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip36890049"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip36890049"
                            placement="right"
                          >

                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">Испански</p>
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip5456779"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip5456779"
                            placement="right"
                          >
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">
                            Италиански
                          </p>

                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip989428493"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip989428493"
                            placement="right"
                          >
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">Румънски</p>

                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip169784793"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip169784793"
                            placement="right"
                          >
                            Немски
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">Инструменти</p>

                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Rtl;
