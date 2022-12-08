import * as React from 'react';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import Links from '../../assets/Link/Link';
import { Pinput, CHeck, Scheck, Rcheck, Pbutton } from '../../assets/Pinput/Pinput';
import "./Preferences.css"
import MultipleSelectPlaceholder from '../../assets/Sellekt/Selekt';
import MultipleSelect from '../../assets/Sellekt/Selmuil';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Preferences() {
    return (
        <>

            <Box sx={{ width: "100%", margin: "1%" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "10px" }}>
                    <Grid lg={11} md={11.4} sm={11.3} xs={10.8} xl={11.8} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Typography sx={{
                            width: "100%",
                            height: "40px",
                            padding: "10px",
                            background: "#F5F5F5",
                            m: "18px 0"
                        }}>
                            <Links />
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "5px" }}>
                    <Grid lg={4.7} md={11.4} sm={11.3} xs={10.8} xl={4.4} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Typography sx={{
                            fontSize: "24px",
                            fontFamily: "intinherit",
                            color: "inherit",
                            marginBottom: "10px"
                        }}>
                            Preferences
                        </Typography>
                        <Typography sx={{
                            fontSize: "14px",
                            mb: "25px",
                            textDecoration: "none"
                        }}>
                            Here goes another form and form controls.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "30px" }}>
                    <Grid lg={4.7} md={5.4} sm={11.3} xs={10.8} xl={4.4} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Typography className="pref_label">First Name</Typography>
                        <input className="pref_input" value="John" />
                    </Grid>
                    <Grid lg={4.7} md={5.4} sm={11.3} xs={10.8} xl={4.4} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Typography className="pref_label" >Last Name</Typography>
                        <input className="pref_input" value="Henry" />

                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "20px" }}>
                    <Grid lg={4.7} md={5.4} sm={11.3} xs={10.8} xl={4.4} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Typography className="pref_label">Username</Typography>
                        <Typography sx={{
                            fontSize: "14px",
                            paddingTop: "7px",
                            paddingBottom: "7px",
                            marginBottom: "0px"
                        }}>
                            @admin
                        </Typography>
                    </Grid>
                    <Grid lg={4.7} md={5.4} sm={11.3} xs={10.8} xl={4.4} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Typography className="pref_label">Email address </Typography>
                        <Typography sx={{
                            fontSize: "14px",
                            paddingTop: "7px",
                            paddingBottom: "7px",
                            marginBottom: "0px"
                        }}>
                            admin@company.com
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "30px" }}>
                    <Grid lg={4.7} md={5.4} sm={11.3} xs={10.8} xl={4.3} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Typography className="pref_label" >Current Password</Typography>
                        <input value="******" style={{
                            cursor: "not-allowed", backgroundColor: "#eee", opacity: "1", width: "100%",
                            height: "34px", fontSize: "14px", padding: "6px 12px", color: "#555", border: "1px solid #eee"
                        }} />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "30px" }}>
                    <Grid lg={4.7} md={5.4} sm={11.3} xs={10.8} xl={4.3} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Typography className="pref_label">New Password</Typography>
                        <input className="pref_input" placeholder="New Password" />
                    </Grid>
                    <Grid lg={4.7} md={5.4} sm={11.3} xs={10.8} xl={4.3} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" } }}>
                        <Typography className="pref_label" >Confirm New Password</Typography>
                        <input className="pref_input" placeholder="Confirm New Password" />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "10px" }}>
                    {Pinput.map((val) => (
                        <Grid lg={10} md={11.4} sm={11.3} xs={10.8} xl={8.8} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" }, marginBottom: "10px" }}>
                            <Typography className="pref_label" sx={{
                                color: (val.color),
                                marginBottom: "10px"
                            }}>{val.name}</Typography>
                            <input className="pref_input" style={{
                                background: (val.bag),
                                color: (val.color),
                                border: (val.border),
                                cursor: "pointer",
                            }} />
                        </Grid>
                    ))}
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "30px" }}>
                    <Grid lg={10} md={11.4} sm={11.3} xs={10.8} xl={8.8} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" }, marginBottom: "10px" }}>
                        <Typography className="pref_label">Notes</Typography>
                        <textarea className="pref_input" rows="3" style={{ height: "100px" }} />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "30px" }}>
                    <Grid lg={4.7} md={5.4} sm={11.3} xs={10.8} xl={4.3} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" }, marginBottom: "10px" }}>
                        <Typography className="pref_label">Single selection control</Typography>
                        <Typography><MultipleSelectPlaceholder className="pref_input" /></Typography>
                    </Grid>
                    <Grid lg={4.7} md={5.4} sm={11.3} xs={10.8} xl={4.3} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" }, marginBottom: "10px" }}>
                        <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
                            <Typography sx={{ paddingLeft: "30px" }} className="prche">
                                <input type="checkbox" value="" className='prcheck' />
                                Email me when new memeber sign up.
                            </Typography>
                            <Typography sx={{ paddingLeft: "30px", cursor: "not-allowed" }} className="prche">
                                <input type="checkbox" value="" className='prcheck' disabled />
                                Never email me.
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "10px" }}>
                    <Grid lg={4.7} md={5.4} sm={11.3} xs={10.8} xl={4.3} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" }, marginBottom: "10px" }}>
                        <Typography className="pref_label">Single selection control</Typography>
                        <Typography><MultipleSelect className="pref_input" /></Typography>
                    </Grid>
                    <Grid lg={4.7} md={5.4} sm={11.3} xs={10.8} xl={4.3} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" }, marginBottom: "10px" }}>
                        {CHeck.map((val) => (
                            <Typography sx={{ marginTop: "10px", marginBottom: "2px" }}>
                                <Typography sx={{ paddingLeft: "30px" }} className="prche">
                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked className='prcheck' />
                                    {val.name}
                                </Typography>
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "10px" }}>
                    <Grid lg={10} md={11.4} sm={11.3} xs={10.8} xl={4.3} sx={{ display: "flex", gap: "2px", marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" }, marginBottom: "10px" }}>
                        {Scheck.map((val) => (
                            <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
                                <Typography sx={{ paddingLeft: "30px" }} className="prche" >
                                    <input type="checkbox" value="" className='prcheck' />
                                    {val.name}
                                </Typography>
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "10px" }}>
                    <Grid lg={10} md={11.4} sm={11.3} xs={10.8} xl={4.3} sx={{ display: "flex", gap: "5px", marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" }, marginBottom: "10px" }}>
                        {Rcheck.map((val) => (
                            <Typography sx={{ marginTop: "0px", marginBottom: "10px" }}>
                                <Typography sx={{ paddingLeft: "30px" }} className="prche" >
                                    <input type="radio" value="" className='prcheck' name="optionsRadios" id="optionsRadios1" checked />
                                    {val.name}
                                </Typography>
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "30px" }}>
                    <Grid lg={10} md={11.4} sm={11.3} xs={10.8} xl={8.8} sx={{ marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" }, marginBottom: "10px" }}>
                        <Typography className="pref_label">File input</Typography>
                        <input type="file" id="exampleInputFile" />
                        <Typography sx={{ marginBottom: "10px", marginTop: "5px", color: "#737373", fontSize: "13px" }}>You can upload file here.</Typography>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginBottom: "10px" }}>
                    <Grid lg={10} md={11.4} sm={11.3} xs={10.8} xl={8.8} sx={{ display: "flex", gap: "5px", marginLeft: { lg: "2%", md: "4%", sm: "4%", xs: "6%" }, marginBottom: "10px" }}>
                        {Pbutton.map((val) => (
                            <Typography sx={{ marginTop: "0px", marginBottom: "10px" }}>
                                <Button href='#' className='prbut' sx={{
                                    color: (val.color),
                                    backgroundColor: (val.bg),
                                    border: (val.border),
                                    borderRadius: "0px",
                                    "&:hover": {
                                        color: (val.color),
                                        backgroundColor: (val.bg),
                                        border: (val.br),
                                    },

                                }}>
                                    {val.name}
                                </Button>
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}
export default Preferences