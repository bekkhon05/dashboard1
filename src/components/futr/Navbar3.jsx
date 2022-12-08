import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
function Navbar3() {
    return(
        <Box sx={{
            width:"100%",
            textAlign:"center",
            backgroundColor:"#333",
            color:"#ccc",
            padding:"8px 0 5px 0",
            fontSize:"13px"
        }}>
            <Typography sx={{
                fontSize:"13px",
                marginBottom:"8px",
                fontFamily:"'Open Sans', sans-serif"
            }}>
            Copyright © 2084 Your Company Name
            </Typography>
        </Box>
    )
}
export default Navbar3 ;