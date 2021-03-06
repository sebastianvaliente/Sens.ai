import React, {Component} from 'react';
import {Pie, Line, HorizontalBar, Polar, Doughnut, Radar} from 'react-chartjs-2';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import Arrow from'./arrow.png';

configureAnchors({scrollDuration: 1000})

class Reddit extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let chartSet = this.props.chartData.reddit
    let chartSpecific = this.props.chartData.reddit.specificHowManyWere
    let pastChart = this.props.pastChartData

    const dataPie = (canvas) => {

      const ctx = canvas.getContext("2d")
      var gradientStroke = ctx.createRadialGradient(0, 0,0,0, 0, 500);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');
      var gradientStroke2 = ctx.createRadialGradient(0, 0,0,0, 0, 450);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

      return {
        labels: [
          'Positive Response',
          'Negative Response'
        ],
        datasets: [{
          data: [chartSet.overallHowManyWere.positive, chartSet.overallHowManyWere.negative],
          backgroundColor: [
            gradientStroke2,
            gradientStroke
          ],
          borderWidth: 0,
          hoverBackgroundColor: [
          '#78909C',
          '#B0BEC5'
          ]
        }]
      }
    };
    const dataRadar = (canvas) => {

      const ctx = canvas.getContext("2d")
      let gradientStroke = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');

      let gradientStroke2 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

      let gradientStroke3 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke3.addColorStop(0.5, 'rgb(43, 192, 228, 0.25)');
      gradientStroke3.addColorStop(1, 'rgb(234, 236, 198, 1)');

      let gradientStroke4 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke4.addColorStop(0.5, 'rgb(255, 128, 8, 0.25)');
      gradientStroke4.addColorStop(1, 'rgb(255, 200, 55, 1)');

      let gradientStroke5 = ctx.createRadialGradient(0, 0, 0, 0, 0, 300);
      gradientStroke2.addColorStop(0.5, 'rgb(240, 82, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(255, 200, 55, 1)');

      return {
        datasets: [{
          data: [
            chartSpecific.dissapointed,
            chartSpecific.angry,
            chartSpecific.cautious,
            chartSpecific.doubtful,
            chartSpecific.happy
          ],
          backgroundColor: [
            gradientStroke5,
            gradientStroke2,
            gradientStroke,
            gradientStroke4,
            gradientStroke3
          ],
          borderWidth: 0,
          label: 'My dataset' // for legend
      }],
      labels: [
        'Disapointed',
        'Angry',
        'Cautious',
        'Doubtful',
        'Happy'
      ]
    };
  };

  if (pastChart) {

    let chartLabelGenerator = () => {
      let labels = []
      for(var i = 0; i < pastChart.length; i++){
        let chart = JSON.parse(pastChart[i])
        labels.push(chart.createdAt)
      }
      console.log(labels);
      return labels
    }
    let redditLinePositive = () => {
      let positiveData = []
      for (var i = 0; i < pastChart.length; i++) {
        let chart = JSON.parse(pastChart[i])
        positiveData.push(chart.reddit.overallHowManyWere.positive)
      }
      return positiveData
    }
    let redditLineNegative = () => {
      let negativeData = []
      for (var i = 0; i < pastChart.length; i++) {
        let chart = JSON.parse(pastChart[i])
        negativeData.push(chart.reddit.overallHowManyWere.negative)
      }
      return negativeData
    }

    let redditBarDisappointed = () => {
      let dissapointedData = []
      for (var i = 0; i < pastChart.length; i++) {
        let chart = JSON.parse(pastChart[i])
        dissapointedData.push(chart.reddit.specificHowManyWere.dissapointed)
      }
      return dissapointedData
    }
    let redditBarAngry = () => {
      let data = []
      for (var i = 0; i < pastChart.length; i++) {
        let chart = JSON.parse(pastChart[i])
        data.push(chart.reddit.specificHowManyWere.angry)
      }
      return data
    }
    let redditBarCautious = () => {
      let data = []
      for (var i = 0; i < pastChart.length; i++) {
        let chart = JSON.parse(pastChart[i])
        data.push(chart.reddit.specificHowManyWere.cautious)
      }
      return data
    }
    let redditBarDoubtful = () => {
      let data = []
      for (var i = 0; i < pastChart.length; i++) {
        let chart = JSON.parse(pastChart[i])
        data.push(chart.reddit.specificHowManyWere.doubtful)
      }
      return data
    }
    let redditBarHappy = () => {
      let data = []
      for (var i = 0; i < pastChart.length; i++) {
        let chart = JSON.parse(pastChart[i])
        data.push(chart.reddit.specificHowManyWere.happy)
      }
      return data
    }

    const dataBar = (canvas) => {
      const ctx = canvas.getContext("2d")
      let gradientStroke = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');

      let gradientStroke2 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

      let gradientStroke3 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke3.addColorStop(0.5, 'rgb(43, 192, 228, 0.25)');
      gradientStroke3.addColorStop(1, 'rgb(234, 236, 198, 1)');

      let gradientStroke4 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke4.addColorStop(0.5, 'rgb(255, 128, 8, 0.25)');
      gradientStroke4.addColorStop(1, 'rgb(255, 200, 55, 1)');

      let gradientStroke5 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke2.addColorStop(0.5, 'rgb(240, 82, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(176, 84, 96, 1)');
      return {
        labels: chartLabelGenerator(),
        datasets: [
          {
            label: 'Disapointed',
            backgroundColor: gradientStroke2,
            borderWidth: 0,
            data: redditBarDisappointed()
          }, {
            label: 'Angry',
            backgroundColor: gradientStroke,
            borderWidth: 0,
            data: redditBarAngry()
          }, {
            label: 'Cautious',
            backgroundColor: gradientStroke3,
            borderWidth: 0,
            data: redditBarCautious()
          }, {
            label: 'Doubtful',
            backgroundColor: gradientStroke4,
            borderWidth: 0,
            data: redditBarDoubtful()
          }, {
            label: 'Happy',
            backgroundColor: gradientStroke5,
            borderWidth: 0,
            data: redditBarHappy()
          }
        ]
      }
    };
    const dataLine = (canvas) =>  {

      const ctx = canvas.getContext("2d")
      var gradientStroke = ctx.createLinearGradient(0, 0, 0, 250);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 0.5)');

      var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 450);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 0.7)');

      return {
        labels: chartLabelGenerator(),
        datasets: [
          {
            label: 'Reddit',
            borderColor: '',
            pointBackgroundColor: 'white',
            borderWidth: 2,
            gridlines: {
              lineWidth:0
            },
            pointBorderColor: 'white',
            backgroundColor: gradientStroke2,
            data: redditLinePositive()
          },{
            label: 'Twitter',
            lineWidth: 25,
            borderColor: '',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            borderWidth: 2,
            gridlines: {
              display: false
            },
            backgroundColor: gradientStroke,
            data: redditLineNegative()
          }
        ]
      }
    };

      return (
        <div className="Card">

          <Grid fluid>
          {/*THIS IS THE BUTTON THAT TRIGGERS THE SCROLL*/}
            <p className="redditTwitter">
              <a href="#scrollReddit">
                <img className="arrow" src={Arrow} height="40" width="80"/>
              </a>
            </p>
          {/*THIS IS THE BUTTON THAT TRIGGERS THE SCROLL*/}
            <ScrollableAnchor id={'scrollReddit'}>
              <div className='cardHeader'>
                Analysis of Reddit
              </div>
            </ScrollableAnchor>

            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="singleChart">
                  <Pie data={dataPie}
                  options={
                          {
                            legend:{
                          position:'bottom'
                        }}}/>
                </div>
              </Col>

              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="singleChart">
                  <Line data={dataLine}   options={
                          {
                            legend:{
                          position:'bottom'
                        },
                        scales: {xAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",}}],
                                yAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",}}]}}}/>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="singleChart">
                  <HorizontalBar data={dataBar}   options={
                          {
                            legend:{
                          position:'bottom'
                        },
                        scales: {xAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",}}],
                                yAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",}}]}}}/>
                </div>
              </Col>

              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="singleChart">
                  <Polar data={dataRadar}   options={
                          {
                            legend:{
                          position:'bottom'
                        },
                        scale:{
                          display: false
                        },
                        scales: {xAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",}}],
                                yAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",}}]}}}/>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    } else {
      return (
        <div className="Card">

          <Grid fluid>
          {/*THIS IS THE BUTTON THAT TRIGGERS THE SCROLL*/}
            <p className="redditTwitter">
              <a href="#scrollReddit">
                <img className="arrow" src={Arrow} height="40" width="80"/>
              </a>
            </p>
          {/*THIS IS THE BUTTON THAT TRIGGERS THE SCROLL*/}
            <ScrollableAnchor id={'scrollReddit'}>
              <div className='cardHeader'>
                Analysis of Reddit
              </div>
            </ScrollableAnchor>
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="singleChart">
                  <Pie data={dataPie}
                  options={
                          {
                            legend:{
                          position:'bottom'
                        }}}/>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="singleChart">
                  <Polar data={dataRadar}   options={
                          {
                            legend:{
                          position:'bottom'
                        },
                        scale:{
                          display: false
                        },
                        scales: {xAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",}}],
                                yAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",}}]}}}/>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
	  }
}

export default Reddit
