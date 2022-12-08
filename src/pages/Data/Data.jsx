import * as React from 'react';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import DataLinks from '../../assets/Link/Datalink';
import RadarChartt from '../../assets/charts/RadarChart';
import DoughChart from '../../assets/charts/DoughChart';
import PolarChart from '../../assets/charts/PolarChart';
import LineCharts from '../../assets/charts/LineChart';
import BarChartt from '../../assets/charts/BarChart';
import Example from '../../assets/charts/PieChart';
import "./Data.css"

function Data() {
    return (
        <>
            <Box sx={{ width: "100%", margin: "1%" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "10px" }}>
                    <Grid lg={12} md={11.4} sm={11.3} xs={10.8} xl={11.8} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Typography sx={{
                            width: "100%",
                            height: "40px",
                            padding: "10px",
                            background: "#F5F5F5",
                            m: "18px 0"
                        }}>
                            <DataLinks />
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "5px" }}>
                    <Grid lg={4.7} md={11.4} sm={11.3} xs={10.8} xl={11.8} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Typography sx={{
                            fontSize: "24px",
                            fontFamily: "intinherit",
                            color: "inherit",
                            marginBottom: "10px"
                        }}>
                            Data Visualization
                        </Typography>
                        <Typography sx={{
                            fontSize: "15px",
                            mb: "25px",
                            textDecoration: "none"
                        }}>
                            Credit goes to <Link href="http://www.chartjs.org" sx={{ textDecoration: "none" }}>chartjs.org</Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "50px" }}>
                    <Grid lg={12} md={11.4} sm={11.3} xs={10.8} xl={11.8} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Typography sx={{
                            width: "100%",
                            height: "50px",
                            padding: "14px",
                            backgroundColor: "#d9edf7",
                            m: "0px 0",
                            color: "#31708f",
                            borderColor: "#bce8f1",
                            fontSize:"14px  "
                        }}>
                            Pie Chart & Doughnut Chart
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} >
                    <Grid lg={2.7} md={2.3} sm={3.7} xs={10.8} xl={2.8} sx={{ marginLeft: { lg: "0%", md: "4%", sm: "0%", xs: "6%" } }}>
                        <Typography sx={{ textAlign: "center", width: "100%", height: "85%" }}>
                            
                            <Example />
                            
                            <Typography className="data_label">Pie Chart</Typography>
                            <Typography className='data_p'>Maecenas non</Typography>
                        </Typography>
                    </Grid>
                    <Grid lg={2.7} md={2.3} sm={3.7} xs={10.8} xl={2.8} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "0%", xs: "6%" }, marginTop: { lg: "0%", md: "0%", sm: "1%", xs: "8%" } }}>
                        <Typography sx={{ textAlign: "center", width: "100%", height: "85%" }}>

                            <DoughChart />

                            <Typography className="data_label"  >Doughnut Chart</Typography>
                            <Typography className='data_p'  >Sodales orci aliquet</Typography>
                        </Typography>
                    </Grid>
                    <Grid lg={2.7} md={2.5} sm={3.7} xs={10.8} xl={2.8} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "0%", xs: "6%" }, marginTop: { lg: "0%", md: "0%", sm: "1%", xs: "8%" } }}>
                     

                        <Typography sx={{ textAlign: "center", width: "100%", height: "85%", fontSize:"13px" }}>

                            
                            <RadarChartt />
                            <Typography className="data_label">Radar Chart</Typography>
                            <Typography className='data_p'>Lorem sed</Typography>
                        </Typography>
                    </Grid>
                    <Grid lg={3.2} md={2.9} sm={3.7} xs={10.8} xl={3} sx={{ marginLeft: { lg: "0%", md: "4%", sm: "5%", xs: "6%" }, marginTop: { lg: "3.5%", md: "8%", sm: "4%", xs: "8%" } , paddingLeft:{xl:"5%", lg:"5%",xs:"20%",sm:"0%"}}}>
                        <Typography sx={{ textAlign: "center", width: "75%", height: "100%" }}>
                           
                            <PolarChart />
                            <Typography sx={{marginTop:{md:"40%",xl:"0%",lg:"0%"}}}>
                            <Typography className="data_label" >Polar Area Chart</Typography>
                            <Typography className='data_p'>Curabitur</Typography></Typography>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "5px" }}>
                    <Grid lg={5.7} md={5.4} sm={5.4} xs={10.8} xl={5.7} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Box width="100%" height='85%' sx={{
                            border: "1px solid #D6E9C6",
                            mt: "10%",
                            fontSize:"15px"
                        }}>
                            <Typography sx={{
                                color: "#3c763d",
                                background: "#DFF0D8",
                                height: "45px",
                                padding: "10px 15px",
                                fontSize: "15px"
                            }}>
                                Line Chart
                            </Typography>
                            <LineCharts />

                        </Box>
                    </Grid>
                    <Grid lg={5.7} md={5.4} sm={5.4} xs={10.8} xl={5.8} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Box width="100%" height='85%' sx={{
                            border: "1px solid #428bca",
                            mt: "10%",
                            fontSize:"15px"
                        }}>
                            <Typography sx={{
                                color: "#fff",
                                background: "#428bca",
                                height: "45px",
                                padding: "10px 15px",
                                fontSize: "15px"
                            }}>
                                Bar Chart
                            </Typography>
                            <BarChartt />

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Data