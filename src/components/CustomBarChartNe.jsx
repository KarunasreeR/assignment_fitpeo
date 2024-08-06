import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts'
import {
    DropdownMenu,
    DropdownItem,
    ButtonDropdown,
    DropdownToggle,
} from 'reactstrap'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

export default function CustomBarChartNe() {
    const [dropdownOpen, setOpen] = React.useState(false)
    const options = {
        animationEnabled: true,
        theme: 'dark1',
        backgroundColor: '#1f2029',
        height: 260,
        title: {
            text: 'Activity',
            fontSize: 24,
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            horizontalAlign: 'left',
            padding: 10,
        },
        axisX: {
            labelFontColor: '#929497',
            lineColor: '#5A5757',
            tickLength: 0,
        },
        axisY: {
            includeZero: true,
            labelFontColor: '#929497',
            lineColor: 'transparent',
            maximum: 16678,
            interval: 5000,
            gridThickness: 0,
            tickLength: 0,
            stripLines: [
                {
                    value: 5000,
                    color: '#5A5757',
                },
                {
                    value: 10000,
                    color: '#5A5757',
                },
                {
                    value: 15000,
                    color: '#5A5757',
                },
            ],
            labelFormatter: (e) => (e.value === 0 ? '0' : e.value / 1000 + 'k'),
        },
        data: [
            {
                type: 'column',
                cornerRadius: 10,
                indexLabelFontColor: '#5A5757',
                indexLabelPlacement: 'outside',
                color: '#7394fd',
                lineColor: 'transparent',
                dataPoints: [
                    { x: 5, y: 3010 },
                    { x: 6, y: 10234 },
                    { x: 7, y: 4256 },
                    { x: 8, y: 3987 },
                    { x: 9, y: 6098 },
                    { x: 10, y: 6786 },
                    { x: 11, y: 5098 },
                    { x: 12, y: 6563 },
                    { x: 13, y: 4655 },
                    { x: 14, y: 1112 },
                    { x: 15, y: 7345 },
                    { x: 16, y: 8627 },
                    { x: 17, y: 6848 },
                    { x: 18, y: 11930 },
                    { x: 19, y: 9453 },
                    { x: 20, y: 12435 },
                    { x: 21, y: 16678 },
                    { x: 22, y: 11890 },
                    { x: 23, y: 8987 },
                    { x: 24, y: 4123 },
                    { x: 25, y: 6456 },
                    { x: 26, y: 11234 },
                    { x: 27, y: 8673 },
                    { x: 28, y: 6982 },
                ],
                dataPointRenderer: (e) => {
                    const ctx = e.chart.ctx
                    const x = e.dataPoint.x
                    const y = e.dataPoint.y
                    const radius = 10 // Set your desired corner radius
                    ctx.fillStyle = '#739fd' // Set the fill color
                    ctx.beginPath()
                    ctx.moveTo(x - radius, y)
                    ctx.lineTo(x + radius, y)
                    ctx.arcTo(x + radius, y, x + radius, y + radius, radius)
                    ctx.lineTo(
                        x + radius,
                        y + e.dataSeries.axisY[0].convertValueToPixel(0)
                    )
                    ctx.lineTo(
                        x - radius,
                        y + e.dataSeries.axisY[0].convertValueToPixel(0)
                    )
                    ctx.lineTo(x - radius, y)
                    ctx.closePath()
                    ctx.fill()
                },
            },
        ],
    }

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div
                style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    zIndex: 1,
                }}
            >
                <ButtonDropdown
                    toggle={() => {
                        setOpen(!dropdownOpen)
                    }}
                    isOpen={dropdownOpen}
                >
                    <DropdownToggle
                        className="rounded-5"
                        style={{
                            fontSize: '10px',
                        }}
                        caret
                    >
                        Weekly
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Weekly</DropdownItem>
                        <DropdownItem>Monthly</DropdownItem>
                        <DropdownItem>Yearly</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
            <CanvasJSChart options={options} />
        </div>
    )
}
