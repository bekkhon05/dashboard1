import { Link } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "./Sing.css"
function SingOut() {
    return (
        <Box sx={{
            position: "absolute",
            background: "#EBEBEB",
            width: "100%",
            height: "100%",
            marginTop: "-50px"
        }}>
            <AppBar position="static" sx={{
                height: "50px",
                backgroundColor: "#222",
                borderColor: "#080808",
                border: "1px solid transparent",
                boxShadow: "none",
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                flexGrow: 1,
                                fontSize: "24px",
                                fontWeight: "500",
                                lineHeight: "1.1",
                                color: "#7A7A7A",
                                marginTop: { lg: "-14px", md: "-13px", sm: "-13px", xs: "-5px" },
                                marginLeft: { lg: "-7px", md: "-7px", sm: "-7px", xs: "0px" },
                                letterSpacing: "0.75px",
                            }}
                        >
                            Dashboard - Admin Template
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{
                paddingTop: "50px",
                width: { lg: "600px", md: "600px", sm: "600px", xs: "88%" },
                margin: "0 auto"
            }}>
                <Box>
                    <Grid container Spacing={1}>
                        <Grid item xs={12} sm={2.5} md={2.5} lg={2.5}>
                            <Box sx={{
                                paddingTop: "7px",
                                textAlign: "right",
                                width: "16.66666667%",
                                paddingLeft: { lg: "30px", md: "30px", sm: "30px", xs: "0px" }
                            }}>
                                <Typography sx={{
                                    lineHeight: "1.42857143",
                                    color: "#333",
                                    fontSize: "14px",
                                    fontWeight: "700",
                                    marginBottom: "5px"
                                }}>
                                    Username
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8.9} md={8.9} lg={8.9}>
                            <Box sx={{ marginBottom: { lg: "20px", md: "20px", sm: "20px", xs: "5px" } }}>
                                <input className="sing_input" placeholder="Username" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={2.5} md={2.5} lg={2.5}>
                            <Box sx={{
                                paddingTop: "7px",
                                textAlign: "right",
                                width: "16.66666667%",
                                paddingLeft: { lg: "30px", md: "30px", sm: "30px", xs: "0px" }
                            }}>
                                <Typography sx={{
                                    lineHeight: "1.42857143",
                                    color: "#333",
                                    fontSize: "14px",
                                    fontWeight: "700",
                                    marginBottom: "5px"
                                }}>
                                    Password
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8.9} md={8.9} lg={8.9}>
                            <Box>
                                <input className="sing_input" placeholder="Password" type='password' />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Typography sx={{
                        paddingLeft: { lg: "145px", md: "145px", sm: "145px", xs: "20px" },
                        paddingTop: "20px"
                    }}>
                        <input type="checkbox" value="" className='sing_prcheck' />
                        <Typography sx={{
                            cursor: "pointer",
                            lineHeight: "1.42857143",
                            fontSize: "14px",
                            color: "#333",
                            fontWeight: "400",
                        }}>
                            Remember me
                        </Typography>
                    </Typography>
                </Box>
                <Box sx={{
                        paddingLeft: { lg: "125px", md: "125px", sm: "125px", xs: "0px" },
                        paddingTop: "20px",
                    }}>
                    <Link to="/dashboard" style={{ textDecoration:"none"}}>
                        <Typography sx={{
                            color:"#333",
                            backgroundColor:"#fff",
                            border:"1px solid #ccc",
                            padding:"6px 12px",
                            fontSize:"14px",
                            width:"70px"
                        }}>
                            Sign in
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
export default SingOut;