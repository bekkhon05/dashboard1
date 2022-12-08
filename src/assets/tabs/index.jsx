import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./style.css"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', mt: "7%", }}>
            <Box sx={{ borderColor: 'divider', }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                    <Tab label="Home" {...a11yProps(0)} sx={{ fontSize: "14px", "&:focus":{border:"1px solid #ddd"},border:"1px solid #ddd"}} />
                    <Tab label="Profile" {...a11yProps(1)} sx={{ fontSize: "14px" , "&:focus":{border:"1px solid #ddd"}}} />
                    <Tab label="Messages" {...a11yProps(2)} sx={{ fontSize: "14px" , "&:focus":{border:"1px solid #ddd"}}} />
                    <Tab label="Settings" {...a11yProps(3)} sx={{ fontSize: "14px" , "&:focus":{border:"1px solid #ddd"}} }/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                <FormGroup >
                   
                    <Typography sx={{ paddingLeft: "30px", fontSize: "14px",border: "1px solid #DDDDDD", padding:"10px 35px", }} className="prche">
                        <input type="checkbox" value="" className='prcheck' />
                        Suspendisse dapibus sodales
                    </Typography>
                    <Typography sx={{ paddingLeft: "30px", fontSize: "14px",border: "1px solid #DDDDDD", padding:"10px 35px", }} className="prche">
                        <input type="checkbox" value="" className='prcheck' />
                        Proin mattis ex vitae
                    </Typography>
                    <Typography sx={{ paddingLeft: "30px", fontSize: "14px",border: "1px solid #DDDDDD", padding:"10px 35px", }} className="prche">
                        <input type="checkbox" value="" className='prcheck' />
                        Aenean euismod dui vel
                    </Typography>
                    <Typography sx={{ paddingLeft: "30px", fontSize: "14px",border: "1px solid #DDDDDD", padding:"10px 35px", }} className="prche">
                        <input type="checkbox" value="" className='prcheck' />
                        Vivamus dictum posuere odio
                    </Typography>
                    <Typography sx={{ paddingLeft: "30px", fontSize: "14px",border: "1px solid #DDDDDD", padding:"10px 35px", mb:"5%" }} className="prche">
                        <input type="checkbox" value="" className='prcheck' />
                        Morbi convallis sed nisi suscipit
                    </Typography>

                </FormGroup>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Vivamus dictum posuere odio
                Dapibus ac facilisis in
                Morbi convallis sed nisi suscipit
                14Cras justo odio
                2Vestibulum at eros
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Three
            </TabPanel>
        </Box>
    );
}