import { Box, Grid, Typography } from "@mui/material"
import Btn from "../../assets/buttons/btn"
import Links from "../../assets/Link"
import Slec from "../../assets/Sellekt/selectuser"
import Tabble from "../../assets/table/table user"

function Users() {
  return (
    <Box sx={{ width: "100%", margin: "0 1.2%" }}>
      <Typography sx={{
        width: "100%",
        height: "40px",
        padding: "10px 15px",
        background: "#F5F5F5",
        m: "18px 0"
      }}>

        <Links />
      </Typography>
      <Typography sx={{ fontSize: "24px" }}>
        Manage Users
        <p style={{ fontSize: '14px', marginTop: "0.3%" }}>Here goes tables and users.  </p>

      </Typography>
      <Box sx={{ display: "flex", mt: "1%" }}>

        {Btn.map((val) => (
          <Typography sx={{
            background: (val.bag),
            width: "140px",
            padding: "9px 11px",
            color: (val.color),
            display: "flex",
            margin: "0px 1px",
            cursor: "pointer",
            mb: "20px  ",
            "&:hover": {
              background: (val.hover)
            }


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
              background: (val.bagg),
              borderRadius: "15px",
              color: (val.col),
              textAlign: "center",
              ml: "45%",
              fontSize: "12px",
              padding: "2.5px 0",

            }}>{val.number}
            </h4>

          </Typography>

        ))}
      </Box>
      


      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography sx={{ fontSize: "18px", m: "2% 0" }}>

            New Users Table
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{padding:"0 0.5% 0 0"}}>

          <Slec />
        </Grid>

      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Tabble sx={{
            width: "100%",
            marginBottom: "15px",
            overflowX: "auto",
            overflowY: "hidden"
          }} />
        </Grid>

      </Grid>


    </Box>
  )
}
export default Users