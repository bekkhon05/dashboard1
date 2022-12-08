import { Box } from "@mui/system";
import Chip from '@mui/material/Chip';
import "../Navbar/index.css"
import { Nav } from "../../assets/Nav"
import { Nav2 } from "../../assets/Nav"
import { Nav3 } from "../../assets/Nav"
import { SX } from "../../assets/Nav"
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar2() {

const navigate= useNavigate()
    const Aler = () => {
        if (window.confirm("Are you sure you want to sign out?")){
            navigate("/singout")
        }
            
            
    }
    return (
        <Box sx={{
            width: { lg: "235px", md: "235px", sm: "0px", xs: "0px" },
            background: "#EBEBEB",
            height: "auto",
        }}>
            <Box id="Navbar2SX">
                <Box sx={{
                    display: "flex",
                    padding: "25px 15px 10px 15px"
                }}>
                    <input id="inp4" type="text" placeholder='Search...' />
                    <Chip label="Go" sx={{
                        color: "#333",
                        backgroundColor: "#fff",
                        border: "1px solid transparent",
                        borderColor: "#ccc",
                        borderRadius: "0px",
                        marginLeft: "5px",
                        width: "44.7px",
                        height: "34px",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "1.42857143",
                        "&:hover": {
                            borderColor: "#adadad",
                            backgroundColor: "#e6e6e6"
                        }
                    }} />
                </Box>
                <Box>
                    {Nav.map((val) => (
                        <Box>
                            {val.ok ?
                                <Link to={val.path} style={{ textDecoration: "none" }}>
                                    <Accordion sx={{
                                        margin: "0%",
                                        padding: "0%",
                                        boxShadow: "none",
                                        background: "none",
                                        cursor: "pointer"
                                    }}>
                                        <AccordionSummary
                                            expandIcon={<FaCaretDown />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            sx={{
                                                padding: "8px 18px",
                                                fontSize: "14px",
                                                fontWeight: "300",
                                                cursor: "pointer",
                                                width: "100%",
                                                background: "0 0",
                                                margin: "0%",
                                                height: "59.5px",
                                                "&:hover": {
                                                    background: "rgba(145,145,145,0.3)"
                                                }
                                            }}
                                        >
                                            <Typography sx={{
                                                fontSize: "15px",
                                                top: "2px",
                                                marginRight: "4px",
                                                width: "1.25rem"
                                            }}>
                                                {val.icons}
                                            </Typography>
                                            <Typography sx={{
                                                color: "#3D403D",
                                                fontSize: "14px",
                                                fontWeight: "300",
                                                fontFamily: "'Open Sans',sans-serif",
                                            }}>{val.yoz}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ backgroundColor: "#DFDFDF", padding: "0px" }}>
                                            <Box>
                                                {Nav2.map((val2) => (
                                                    <Typography sx={{
                                                        padding: "19.5px 18px",
                                                        fontSize: "14px",
                                                        fontWeight: "300",
                                                        cursor: "pointer",
                                                        width: "100%",
                                                        background: "0 0",
                                                    }}>
                                                        {val2.ichi}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                </Link>
                                :
                                <Box id="Navbar2ZZZ">
                                    <Link to={val.path} style={{ textDecoration: "none" }}>
                                        <Box sx={{
                                            display: "flex",
                                            padding: "18px 18px",
                                            fontSize: "14px",
                                            fontWeight: "300",
                                            cursor: "pointer",
                                            width: "100%",
                                        }}>
                                            <Box>
                                                <Typography sx={{
                                                    fontSize: "15px",
                                                    top: "2px",
                                                    marginRight: "3px",
                                                    width: "1.25rem",
                                                    color: "#111",
                                                }}>
                                                    {val.icons}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{
                                                    fontSize: "14px",
                                                    fontWeight: "300",
                                                    fontFamily: "'Open Sans',sans-serif",
                                                    width: "178px",
                                                    color: "#3D403D",
                                                }}>
                                                    {val.yoz}
                                                    <span>
                                                        {val.ok1 ?
                                                            <Box sx={{
                                                                fontSize: "12px",
                                                                fontWeight: "700",
                                                                textAlign: "center",
                                                                padding: "3px 7px",
                                                                lineHeight: "1",
                                                                backgroundColor: "#777",
                                                                color: "#fff",
                                                                borderRadius: "10px",
                                                                minWidth: "10px",
                                                                float: "right!important"
                                                            }}>{val.harf}</Box>
                                                            :
                                                            <Box></Box>
                                                        }
                                                    </span>

                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Box>
                            }
                        </Box>
                    ))}
                    {Nav3.map((val3) => (
                        <Box id="Navbar2ZZZ">
                            <button onClick={Aler} style={{
                                border:"none",
                                background:"none",
                                padding:"0px"
                            }}>
                            <Link  style={{ textDecoration: "none" }}>
                                <Box sx={{
                                    display: "flex",
                                    padding: "18px 18px",
                                    fontSize: "14px",
                                    fontWeight: "300",
                                    cursor: "pointer",
                                    width: "100%",
                                }}>
                                    <Box>
                                        <Typography sx={{
                                            fontSize: "15px",
                                            top: "2px",
                                            marginTop: "-2px",
                                            marginRight: "3px",
                                            width: "1.25rem",
                                            color: "#111",
                                            ml:"-5px"
                                        }}>
                                            {val3.icons}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                            fontFamily: "'Open Sans',sans-serif",
                                            width: "178px",
                                            color: "#3D403D",
                                            marginLeft:"-60px"
                                        }}>
                                            {val3.yoz}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Link>
                            </button>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
export default Navbar2;