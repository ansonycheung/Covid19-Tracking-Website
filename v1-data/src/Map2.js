import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_usaLow from '@amcharts/amcharts4-geodata/usaLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

class Map2 extends Component {
	componentDidMount() {
		// Create map instance
		var chart = am4core.create('chartdiv', am4maps.MapChart);

		// Set map definition
		chart.geodata = am4geodata_usaLow;

		// Set projection
		chart.projection = new am4maps.projections.AlbersUsa();

		// Create map polygon series
		var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

		//Set min/max fill color for each area
		polygonSeries.heatRules.push({
			color: '#101010',
			property: 'fill',
			target: polygonSeries.mapPolygons.template,
			min: am4core.color('red').brighten(1),
			max: am4core.color('red').brighten(-0.3)
		});

		// Make map load polygon data (state shapes and names) from GeoJSON
		polygonSeries.useGeodata = true;

		var mydata = require('./datas/states.json');
		for (let i = 0; i < mydata.length; i++) {
			let state = 'US-' + mydata[i].state;
			let positive = mydata[i].positive;
			polygonSeries.data.push({ id: state, value: positive });
		}

		// Set up heat legend
		let heatLegend = chart.createChild(am4maps.HeatLegend);
		heatLegend.series = polygonSeries;
		heatLegend.align = 'right';
		heatLegend.valign = 'bottom';
		heatLegend.width = am4core.percent(20);
		heatLegend.marginRight = am4core.percent(4);
		heatLegend.minValue = 0;
		heatLegend.maxValue = 40000000;

		// Set up custom heat map legend labels using axis ranges
		var minRange = heatLegend.valueAxis.axisRanges.create();
		minRange.value = heatLegend.minValue;
		minRange.label.text = 'Little';
		var maxRange = heatLegend.valueAxis.axisRanges.create();
		maxRange.value = heatLegend.maxValue;
		maxRange.label.text = 'A lot!';

		// Blank out internal heat legend value axis labels
		heatLegend.valueAxis.renderer.labels.template.adapter.add('text', function(labelText) {
			return '';
		});

		// Configure series tooltip
		var polygonTemplate = polygonSeries.mapPolygons.template;
		polygonTemplate.tooltipText = '{name}: {value}';
		polygonTemplate.nonScalingStroke = true;
		polygonTemplate.strokeWidth = 0.5;

		// Create hover state and set alternative fill color
		var hs = polygonTemplate.states.create('hover');
		hs.properties.fill = am4core.color('black');
	}

	componentWillUnmount() {
		if (this.chart) {
			this.chart.dispose();
		}
	}

	render() {
		return (
			<div>
				<p style={{ textAlign: 'center', color: 'white', fontSize: '20px' }}>Positive cases in USA</p>
				<div id="chartdiv" style={{ width: '100%', height: '500px' }} />
			</div>
		);
	}
}

export default Map2;
