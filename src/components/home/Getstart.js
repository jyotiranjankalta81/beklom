// import React from "react";
import Navbar from '../Navbar/Navbar';
// import Navbar from "../Navbar";
import './getstart.css';
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import Footer from '../Footer/Footer';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'red',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

const Getstart = () => {

    const getwidth = () => {
        if (window.innerWidth < 580) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <>
            <div className="bg-header">
                <Navbar />
                <section className="header-section">
                    <h1 className="get-header-h1">
                        Get Started
                    </h1>
                    <h3 className="header-p-">Let’s talk about your website or projects.
                        Send us a message and we <br />
                        will be in touch within one business day</h3>
                </section>
                {/* <img src="images/onboarding/vector1.png" className="get-vec" alt="" /> */}
            </div>
            <section className="form-section">
                <p className="p-text">You can think of Beklom Technologies as a one-stop shop for all of your outsourced company development needs. Web development, Social Media management, US Taxation, Book-keeping, Technical/Non-Technical recruitment, Graphic Designing, and Lead generation are all areas in which we specialize. After that, we perform all of the cold outreach to qualify prospects, generate interest, and open sales conversations for you.</p>
                <div className="get_start" >
                    <form className={getwidth() ? "form-sec_get" : "form-sec-div"}>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <PersonIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            <input className={getwidth() ? "form_input_get" : "form-input"} type="text" id="fname" name="firstname" placeholder="Name" />
                        </div>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <EmailIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            <input className={getwidth() ? "form_input_get" : "form-input"} type="email" id="fname" name="firstname" placeholder="Email" />
                        </div>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <CallIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            <input className={getwidth() ? "form_input_get" : "form-input"} type="number" id="fname" name="firstname" placeholder="Phone Number" />
                        </div>

                        <button type="btn" className={getwidth() ? "get_btn" : "btn_get_submit"}
                        >Submit</button>
                    </form>
                </div>

            </section>

            <Footer/>






        </>
    )
}
export default Getstart