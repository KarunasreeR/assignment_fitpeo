import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import {
    DropdownMenu,
    DropdownItem,
    ButtonDropdown,
    DropdownToggle,
} from 'reactstrap'

Chart.register(...registerables)

const roundedBarPlugin = {
    id: 'roundedBarPlugin',
    beforeDraw: (chart) => {
        const ctx = chart.ctx
        const meta = chart.getDatasetMeta(0)
        const radius = 10

        meta.data.forEach((bar) => {
            const { x, y, width, height } = bar.getProps(
                ['x', 'y', 'width', 'height'],
                true
            )

            ctx.beginPath()
            ctx.moveTo(x + radius, y)
            ctx.lineTo(x + width - radius, y)
            ctx.arcTo(x + width, y, x + width, y + radius, radius)
            ctx.lineTo(x + width, y + height - radius)
            ctx.arcTo(
                x + width,
                y + height,
                x + width - radius,
                y + height,
                radius
            )
            ctx.lineTo(x + radius, y + height)
            ctx.arcTo(x, y + height, x, y + height - radius, radius)
            ctx.lineTo(x, y + radius)
            ctx.arcTo(x, y, x + radius, y, radius)
            ctx.closePath()

            ctx.fillStyle = '#7394fd'
            ctx.fill()
        })
    },
}

const data = {
    labels: Array.from({ length: 28 }, (_, i) => i + 1),
    datasets: [
        {
            label: 'Activity',
            data: [
                3010, 10234, 4256, 3987, 6098, 6786, 5098, 6563, 4655, 1112,
                7345, 8627, 6848, 11930, 9453, 12435, 16678, 11890, 8987, 4123,
                6456, 11234, 8673, 6982,
            ],
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderWidth: 0,
        },
    ],
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    return context.raw.toLocaleString()
                },
            },
        },
        title: {
            display: true,
            text: 'Activity',
            color: '#FFFFFF',
            font: {
                size: 18,
                family: 'sans-serif',
                weight: 'bold',
            },
            align: 'start',
            padding: {
                bottom: 20,
            },
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                callback: function (val, index) {
                    return index % 2 === 0 ? this.getLabelForValue(val) : ''
                },
            },

            barPercentage: 0.8,
            categoryPercentage: 1.0,
        },
        y: {
            grid: {
                display: true,
                color: '#343434',
                drawBorder: false,
                drawOnChartArea: true,
            },
            ticks: {
                color: '#929497',
                callback: function (val, index) {
                    return index !== 0 ? `${val / 1000}k` : val
                },
                stepSize: 5000,
            },
        },
    },
    layout: {
        padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 0,
        },
    },
    barPercentage: 0.78,
    categoryPercentage: 1.0,
}

const CustomBarChart = () => {
    const [dropdownOpen, setOpen] = React.useState(false)

    return (
        <div style={{ position: 'relative', width: '100%', height: '220px' }}>
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
            <div style={{ width: '100%', height: '100%' }}>
                <Bar
                    data={data}
                    options={options}
                    plugins={[roundedBarPlugin]}
                />
            </div>
        </div>
    )
}

export default CustomBarChart
