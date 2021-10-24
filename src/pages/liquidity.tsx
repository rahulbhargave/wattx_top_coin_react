import React, { useCallback, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import IPage from "../types/route";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Crypto } from "../types/cryptos";
import { Col, Container, Row } from "react-bootstrap";
import { ChartScale, Series } from "../types/chart";

const LiquidityPage: React.FC<IPage & RouteComponentProps<any>> = (props) => {
  const [series, setSeries] = useState([] as Series[]);
  const [options, setOptions] = useState({});
  const [scale, setScale] = useState({} as ChartScale);

  const cryptos: Array<Crypto> = useSelector(
    (state: RootState) => state.cryptos
  );

  const generateData = useCallback(() => {
    const s: any = cryptos.map((item: Crypto, index: number) => {
      const axises = [];
      const { name, marketCap, volume, priceChange } = item;
      axises.push([
        Math.round((marketCap + Number.EPSILON) * 100) / 100000000000,
        Math.round((volume + Number.EPSILON) * 100) / 1000000000,
        Math.abs(Math.round((priceChange + Number.EPSILON) * 100) / 100),
      ]);

      return {
        name: name,
        data: [...axises],
      };
    });
    return s;
  }, [cryptos]);

  const updateChartScale = (seriesData: any) => {
    if (seriesData && seriesData.length > 0) {
      let minData = seriesData[seriesData.length - 1].data[0];
      let maxData = seriesData[0].data[0];

      setScale({
        x: { max: maxData[0] + 20, min: minData[0] },
        y: { max: maxData[1], min: minData[1] },
      });
    }
  };

  useEffect(() => {
    const seriesData = generateData();
    updateChartScale(seriesData);
    setSeries(seriesData);

    setOptions({
      chart: {
        height: "auto",
        type: "bubble",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      xaxis: {
        tickAmount: 15,
        min: scale.x ? scale.x.min : 1,
        max: scale.x ? scale.x.max : 1500,
        type: "numeric",
        forceNiceScale: true,
        decimalsInFloat: 0,
        labels: {
          show: true,
        },
      },
      yaxis: {
        min: scale.y ? scale.y.min : 300,
        max: scale.y ? scale.y.max : 2500,
        forceNiceScale: true,
        decimalsInFloat: 0,
        labels: {
          show: true,
        },
      },
      theme: {
        palette: "palette2",
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generateData, cryptos]);

  return (
    <>
      <Container>
        <Row>
          <Col sm={10}>
            {" "}
            <h4>Crypto Currencies Liquidity Chart</h4>
          </Col>
        </Row>
        <Row>
          <div id="chart">
            <ReactApexChart
              options={options}
              series={series}
              type="bubble"
              height={350}
            />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default LiquidityPage;
