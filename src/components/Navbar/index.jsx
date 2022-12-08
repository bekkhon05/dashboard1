import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import "./index.css"
import { Nav } from "../../assets/Nav"
import { Nav2 } from "../../assets/Nav"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Nav3 } from "../../assets/Nav"
const pages = ['Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const asad = ()=>{
    setAnchorElNav(null);
  }
  const navigate= useNavigate()
    const Aler = () => {
        if (window.confirm("Are you sure you want to sign out?")){
            navigate("/singout")
            setAnchorElNav(null);
        }        
            
    }

  return (
    <AppBar position="static" sx={{
      height: "50px",
      backgroundColor: "#222",
      borderColor: "#080808",
      border: "1px solid transparent",
      boxShadow: "none",
      width:"100%"
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "end" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  display: "flex",
                  marginTop: { lg: "0px", md: "0px", sm: "-15px", xs: "-7px" },
                  border: "1px solid transparent",
                  borderRadius: "4px",
                  borderColor: "#333",
                  padding: { lg: "0px", md: "0px", sm: "1.5px 7px", xs: "1px 6px" },
                  marginRight: { lg: "0px", md: "0px", sm: "-10px", xs: "-2px" },
                  float: "right",
                  justifyContent: "end"
                }}
              >
                <MenuIcon sx={{
                  fontSize: { lg: "0px", md: "0px", sm: "29px", xs: "auto" },
                  color: "#fff"
                }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  marginLeft: "15.5px",
                  marginRight: "-15.5px",
                  marginTop: "10px",
                  minHeight:"100%"
                }}
              >
                <Box sx={{
                  display: "flex",
                  padding: "25px 15px 10px 0px"
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
                        <Link style={{ textDecoration: "none" }}>
                          <Accordion sx={{
                            margin: "0%",
                            padding: "0%",
                            boxShadow: "none",
                            background: "none",
                            cursor: "pointer",
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
                                marginTop: "1px",
                                marginRight: "4px",
                                width: "1.25rem",
                              }}>
                                {val.icons}
                              </Typography>
                              <Typography sx={{fontSize:"14px"}}>{val.yoz}</Typography>
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
                                    "&:hover": {
                                      background: "rgb(228,228,228)"
                                    }
                                  }}>
                                    {val2.ichi}
                                  </Typography>
                                ))}
                              </Box>
                            </AccordionDetails>
                          </Accordion>
                        </Link>
                        :
                        <Box id="Navbar2ZZZ" onClick={asad}>
                        <Link to={val.path} style={{ textDecoration: "none" }}>
                          <Box sx={{
                            display: "flex",
                            padding: "18px 18px",
                            fontSize: "14px",
                            fontWeight: "300",
                            cursor: "pointer",
                            width: "100%",
                            background: "0 0",
                            "&:hover": {
                              background: "rgb(191, 232, 167)"
                            },
                            "&:focus": {
                              background: "rgb(191, 232, 167)"
                            }
                          }}>
                            <Box>
                              <Typography sx={{
                                fontSize: "15px",
                                top: "2px",
                                marginTop: "1px",
                                marginRight: "4px",
                                width: "1.25rem",
                                color: "#111",
                              }}>
                                {val.icons}
                              </Typography>
                            </Box>
                            <Box sx={{
                              width: "100%"
                            }}>
                              <Typography sx={{
                                fontSize: "14px",
                                fontWeight: "300",
                                color: "black",
                                fontFamily: "'Open Sans', sans-serif",
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
                                      float: "right!important",
                                      marginLeft: "right!important"
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
              </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;