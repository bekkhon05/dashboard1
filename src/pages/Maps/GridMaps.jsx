                                                                           

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
import Box from '@mui/material/Box';

import { Container, Link, Typography } from '@mui/material';
import LinkMaps from "../../assets/Link/LinkMaps/LinkMaps";
import ZZZ from "../../assets/Maps/ZZZ"


function Maps() {
    return (
        <Box sx={{ width: "100%", margin:"10px 20px" }}>
            <Box sx={{
                width: "100%",
                height: "40px",
                padding: "4px 10px 10px 10px",
                background: "#F5F5F5",
                m: "11px 0 18px 0"
            }}>
                <LinkMaps />
            </Box>
            <Box>
                <Box>
                    <Typography sx={{
                        fontSize: "24px",
                        lineHeight: "1.1",
                        fontWeight: "500",
                        margin: "20px 0 10px 0"
                    }}>
                        Maps
                    </Typography>
                    <Typography sx={{
                        marginBottom: "10px",
                        fontSize: "14px",
                        lineHeight: "1.42857143",
                        color: "#333",
                        display: "flex"
                    }}>
                        Credit goes to <Box sx={{
                            color: "#428bca",
                            textDecoration: "none",
                            marginLeft: "5px",
                            "&:hover": {
                                color: "#2a6496",
                                textDecoration: "underline"
                            }
                        }}>JQVMap</Box>
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ width: '100%'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {ZZZ.map((val) => (
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Box sx={{
                            marginBottom:"50px",
                            boxShadow:"0 1px 1px rgb(0 0 0 / 5%)",
                            border:"1px solid transparent",
                            borderColor:"#ddd",
                            backgroundColor:"#fff"
                        }}>
                            <Box sx={{
                                maxWidth:"100%",
                                color:"#333",
                                backgroundColor:"#f5f5f5",
                                borderBottom:"1px solid transparent",
                                padding:"10px 15px"
                            }}>
                                <Typography sx={{
                                    fontSize:"16px",
                                    fontWeight:"500",
                                    color:"#333",
                                    lineHeight:"1.1"
                                }}>
                                    {val.yozuv}
                                </Typography>
                            </Box>
                            <Box sx={{
                                padding:"13px 15px",
                                height:"413px"
                            }}>
                                <Box>
                                    {val.harita}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}
export default Maps;