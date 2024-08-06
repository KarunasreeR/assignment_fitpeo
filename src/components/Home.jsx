import { Card, Col, Row } from 'reactstrap'
import { FaShoppingBasket } from 'react-icons/fa'
import { IoMdArrowDropup } from 'react-icons/io'
import { IoMdArrowDropdown } from 'react-icons/io'
import { PiHandbagSimpleFill } from 'react-icons/pi'
import { AiFillDollarCircle } from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FcOk } from 'react-icons/fc'
import { MdCancel } from 'react-icons/md'
import { FaDownLong } from 'react-icons/fa6'
import CustomIcon from './CustomIcon'
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import CustomBarChart from './CustomBarChart'
import { TbCurrentLocation } from 'react-icons/tb'
import CustomDropdown from './CustomDropdown'
import { reviews } from '../utils'
import RatingsCard from './RatingsCard'
import CustomTable from './CustomTable'
import { LiaHamburgerSolid } from 'react-icons/lia'
import { LiaConciergeBellSolid } from 'react-icons/lia'

export default function Home() {
    const percentage = 70

    return (
        <div className="h-100 flex-column container d-flex align-items-stretch">
            <div className="mb-2 fs-4 fw-bold text-white">Dashboard</div>
            <Row style={{ flex: 1 }}>
                <Col
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={2}
                    className="mb-2 card-col"
                >
                    <Card body className="card-body">
                        <div>
                            <CustomIcon
                                iconColor="#4363f6"
                                icon={
                                    <FaShoppingBasket
                                        className="main-icon"
                                        style={{ color: '#4363f6' }}
                                    />
                                }
                                subIcon={
                                    <AiFillPlusCircle
                                        className="sub-icon"
                                        style={{ color: '#4363f6' }}
                                    />
                                }
                            />
                        </div>
                        <div className="mt-2 mb-2">Total Orders</div>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div className="fs-5 fw-bold">75</div>
                            <div
                                className="fw-bold"
                                style={{ color: '#03c58b' }}
                            >
                                <span>
                                    <IoMdArrowDropup />
                                </span>
                                <span>3%</span>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={2}
                    className="mb-2 card-col"
                >
                    <Card body className="card-body">
                        <div>
                            <CustomIcon
                                iconColor="#03c58b"
                                icon={
                                    <PiHandbagSimpleFill
                                        className="main-icon"
                                        style={{ color: '#03c58b' }}
                                    />
                                }
                                subIcon={
                                    <FcOk
                                        className="sub-icon"
                                        style={{ color: '#03c58b' }}
                                    />
                                }
                            />
                        </div>
                        <div className="mt-2 mb-2">Total Delivered</div>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div className="fs-5 fw-bold">70</div>
                            <div
                                className="fw-bold"
                                style={{ color: '#f45c5d' }}
                            >
                                <span>
                                    <IoMdArrowDropdown />
                                </span>
                                <span>3%</span>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={2}
                    className="mb-2 card-col"
                >
                    <Card body className="card-body">
                        <div>
                            <CustomIcon
                                iconColor="#f45c5d"
                                icon={
                                    <PiHandbagSimpleFill
                                        className="main-icon"
                                        style={{ color: '#f45c5d' }}
                                    />
                                }
                                subIcon={
                                    <MdCancel
                                        className="sub-icon"
                                        style={{ color: '#f45c5d' }}
                                    />
                                }
                            />
                        </div>
                        <div className="mt-2 mb-2">Total Cancelled</div>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div className="fs-5 fw-bold">05</div>
                            <div
                                className="fw-bold"
                                style={{ color: '#03c58b' }}
                            >
                                <span>
                                    <IoMdArrowDropup />
                                </span>
                                <span>3%</span>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={2}
                    className="mb-2 card-col"
                >
                    <Card body className="card-body">
                        <div>
                            <CustomIcon
                                arrowIcon={true}
                                iconColor="#e0429d"
                                icon={
                                    <FaDownLong
                                        className="main-icon arrow-icon"
                                        style={{ color: '#e0429d' }}
                                    />
                                }
                                subIcon={
                                    <AiFillDollarCircle
                                        className="arrow-sub-icon sub-icon"
                                        style={{ color: '#e0429d' }}
                                    />
                                }
                            />
                        </div>
                        <div className="mt-2 mb-2">Total Revenue</div>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div className="fs-5 fw-bold">$12K</div>
                            <div
                                className="fw-bold"
                                style={{ color: '#f45c5d' }}
                            >
                                <span>
                                    <IoMdArrowDropdown />
                                </span>
                                <span>3%</span>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col
                    xs={12}
                    sm={8}
                    md={12}
                    lg={4}
                    xl={4}
                    className="mb-2 card-col"
                >
                    <Card body className="card-body">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div>
                                <div>Net Profit</div>
                                <div className="fs-3 mt-2 mb-2 fw-bold">
                                    $ 6759.25
                                </div>
                                <div
                                    className="fw-bold"
                                    style={{ color: '#84cf77' }}
                                >
                                    <span>
                                        <IoMdArrowDropup />
                                    </span>
                                    <span>3%</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <div className="custom-progress-bar">
                                    <CircularProgressbarWithChildren
                                        value={percentage}
                                        strokeWidth={12}
                                        styles={buildStyles({
                                            textColor: '#fff',
                                            pathColor: '#7492fc',
                                            trailColor: '#7492fc80',
                                        })}
                                    >
                                        <div
                                            style={{
                                                fontSize: 20,
                                                marginTop: -5,
                                            }}
                                        >
                                            <strong>{percentage}%</strong>
                                        </div>
                                        <div className="subscript">Goal</div>
                                        <div className="subscript">
                                            Completed
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div>
                                    <sub className="subscript">
                                        *The values here has been rounded off.
                                    </sub>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row style={{ flex: 2 }}>
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={8}
                    className="mb-2 card-col"
                >
                    <Card body className="card-body">
                        <CustomBarChart />
                    </Card>
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={4}
                    xl={4}
                    className="mb-2 card-col"
                >
                    <Card body className="card-body justify-content-center">
                        <div className="d-flex flex-column">
                            <div>
                                <CustomDropdown
                                    icon={
                                        <TbCurrentLocation
                                            style={{
                                                color: '#eb7334',
                                                backgroundColor: '#eb733480',
                                                borderRadius: '50%',
                                                fontSize: '40px',
                                                padding: '5px',
                                            }}
                                        />
                                    }
                                    text="Goals"
                                />
                            </div>
                            <div>
                                <CustomDropdown
                                    text="Popular dishes"
                                    icon={
                                        <LiaHamburgerSolid
                                            style={{
                                                color: '#7a89e5',
                                                backgroundColor: '#7a89e580',
                                                borderRadius: '50%',
                                                fontSize: '40px',
                                                padding: '5px',
                                            }}
                                        />
                                    }
                                />
                            </div>
                            <div>
                                <CustomDropdown
                                    text="Menus"
                                    icon={
                                        <LiaConciergeBellSolid
                                            style={{
                                                color: '#2b94c1',
                                                backgroundColor: '#2b94c180',
                                                borderRadius: '50%',
                                                fontSize: '40px',
                                                padding: '5px',
                                            }}
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row style={{ flex: 3 }}>
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={8}
                    className="mb-2 card-col"
                >
                    <Card body className="card-body">
                        <b className="fontsize-20 mb-2">Recent Orders</b>
                        <div className="scrollable-table-container ">
                            <CustomTable />
                        </div>
                    </Card>
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={4}
                    xl={4}
                    className="mb-2 card-col"
                >
                    <Card body className="card-body justify-content-center">
                        <b className="fontsize-20 mb-2">Customer's Feedback</b>
                        <div className="scrollable-ratings-container">
                            {reviews.map((ele) => (
                                <RatingsCard data={ele} />
                            ))}
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
