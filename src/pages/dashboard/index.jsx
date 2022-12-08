import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
// import { Container } from '@mui/system'
import React from 'react'
import Acardionoff from '../../assets/acardion/acar'
import Charts from '../../assets/charts'
import linee from "../../assets/save"
import Lates from '../../assets/latesdata'
import Links from '../../assets/Link'
import Buttons from '../../assets/buttons'
import Tabs from '../../assets/tabs'
import Tables from '../../assets/table'
function Dashboard() {



  return (
    <Box sx={{ width: "100%", margin: { lg: "0 1.2%", md: "0 2%", sm: "0 2.8%", xs: "0 3%" } }}>
      <Typography sx={{
        width: "100%",
        height: "40px",
        padding: "5px 10px",
        background: "#F5F5F5",
        m: "18px 0"
      }}>

        <Links />
      </Typography>


      <Typography sx={{
        fontSize: "24px"
      }}>
        Dashboard
      </Typography>
      <Typography sx={{
        fontSize: "14px",
        mb: "15px",
        textDecoration: "none",

      }}>
        Dashboard is free admin template for everyone. Credits go to <Link id='text' href="#"> Chart JS, Bootstrap,</Link>  and <Link id='text' href="#">JQVMap</Link> . templatemo provides <Link id='text' href="#">free website templates</Link>  that can be used for any purpose. Morbi id nisi enim. Ut congue interdum pharetra facilisi. Aenean consectetur pellentesque mauris nec ornare. Nam tortor just, condimentum.

      </Typography>

      <Box sx={{ display: "flex", }}>

        {Buttons.map((val) => (
          <Typography sx={{
            background: (val.bag),
            width: "120px",
            padding: "9px 11px",
            color: "white",
            display: "flex",
            margin: "0px 1px",
            cursor: "pointer",
            mb: "20px  ",


          }}>
            <h4 style={{
              marginRight: "5px",
              fontSize: "14px",
              fontWeight: "50"
            }}>

              {val.text}
            </h4>

            <h4 style={{
              width: "30px",
              height: "20px",
              background: "white",
              borderRadius: "15px",
              color: "#428BCA",
              textAlign: "center",
              ml: "45%",
              fontSize: "12px",
              padding: "2.5px 0"
            }}>{val.number}
            </h4>

          </Typography>

        ))}
      </Box>



      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} lg={6} md={6} sm={12} >

          {linee.map((val) => (
            <Typography sx={{
              fontSize: { lg: "14px", md: "15px", sm: "15px", xs: "16px" },
              background: (val.colorr),
              mb: "15px",
              padding: "15px",
              color: (val.color),
              borderColor: (val.border),
            }}>{val.text}</Typography>
          ))}
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12}>

          {Lates.map((val) => (
            <Typography sx={{
              background: (val.bag),
              padding: "10px 15px",
              color: (val.color),
              border: (val.border),
              cursor: "pointer",
              "&:hover": {
                background: (val.hover)
              },
              fontSize: "14px"
            }}

            >
              <Typography fontSize='18px' paddingBottom='-10px' > {val.name}</Typography>
              {val.text}

            </Typography>
          ))}

          <Typography sx={{
            width: "100%",
            height: "22px",
            background: "#F5F5F5",
            mt: "3%"
          }}>
            <Typography sx={{
              width: "37%",
              height: "100%",
              background: "#5CB85C"
            }}>

              <Typography sx={{
                width: "57%",
                height: "100%",
                background: "#F0AD4E",
                ml: "100%"
              }}>
                <Typography sx={{
                  width: "57%",
                  height: "100%",
                  background: "#D9534F",
                  ml: "100%"
                }}>

                </Typography>

              </Typography>

            </Typography>

          </Typography>

          <Typography sx={{
            width: "100%",
            height: "23px",
            background: "#F5F5F5",
            mt: "3%"
          }}>
            <Typography sx={{
              width: "45%",
              height: "100%",
              background: "#428BCA"
            }}>

            </Typography>


          </Typography>


        </Grid>

      </Grid>








      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={6} lg={6} >

          <Box width="100%" sx={{
            border: "1px solid #D6E9C6",
            mt: "5%",
            fontSize: "15px",
            height: { lg: "60%", md: "45%", xs: "75%", sm: "50%" }
          }}>
            <Typography sx={{
              background: "#DFF0D8",
              height: "45px",
              padding: "11px 15px",
              fontSize: "16px",
              color: "#3c763d"
            }}>
              Data Visualization
            </Typography>

            <Charts />
          </Box>



          <Button sx={{
            background: "#5CB75C",
            borderRadius: "0px",
            color: "white",
            width: "110px",
            borderColor: "#4cae4c",
            mt: "3%",
            "&:hover": {
              background: "#449d44",
              borderColor: "#398439",

            },
            padding: " 9px 0"
          }}>

            <Link href='/data'>
              <Typography sx={{ fontSize: "12px", textDecoration: "none", color: "white" }}>

                More Charts
              </Typography>
            </Link>

          </Button>


        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box width="100%" height='80%' sx={{
            border: "1px solid #428BCA",
            mt: "5%"


          }}>
            <Typography sx={{
              background: "#428BCA",
              height: "45px",
              padding: "11px 15px",
              color: "white",
              fontSize: "16px  "
            }}>
              User Table
            </Typography>
            <Typography sx={{
              padding: '7px 10px'

            }}>
              <Tables />
            </Typography>
          </Box>
          <Button sx={{
            background: "#428bca",
            borderRadius: "0px",
            color: "white",
            width: "110px",
            borderColor: "#357ebd",
            mt: "3%",
            "&:hover": {
              background: "#3071a9",
              borderColor: "#285e8e",
            },
            padding: " 9px 0"
          }}>
            <Link href='/users'>
              <Typography sx={{ fontSize: "12px", textDecoration: "none", color: "white" }}>
                See Tables
              </Typography>
            </Link>
          </Button>

        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography sx={{ width: "90%" }}>

            <Tabs />
          </Typography>

        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>

          <Typography sx={{ mt: "8%" }}>
            <Acardionoff />
          </Typography>
        </Grid>

      </Grid>





    </Box >
  )
}

export default Dashboard