import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from "@mui/material/Box";
import React from "react";
import '../onboarding/onboarding.css'
import Navbar from "../Navbar/Navbar";
import Button from '@mui/material/Button';
import Header from "../Header/Header";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import Footer from '../Footer/Footer';



const Onboarding = () => {
    const getwidth = () => {
        if (window.innerWidth < 580) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <>
            <div className="section_Onboarding">
                <Navbar />
                <div className="home" >
                    <h1 className="home-h1-color">Onboarding</h1>
                    <div className='Home_Baklom_button11'>
                        <h3 className="contact_h3">
                        Leading Resource for Recruitment in Technical and Non-Technical backgrounds !
                        </h3>
                    </div>
                </div>
            </div>
            <section className="form-section">
                <h3 className="header_h3">Please fill the folowing details !</h3>
                {/* <div className="UserProfile" style={{ width: "45%", border: "3px solid red" }}>
                    <form style={{ border: "3px solid black", width: "100%" }}>
                        <Box
                            component="form"
                            sx={{
                                "& .MuiTextField-root": { m: 1, width: "100%" },
                                border: "3px solid green",
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                zIndex: 0,
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div className='text_input' style={{ width: "100%", display: "flex", gap: "1rem", alignItems: "center" }}>
                                <PersonIcon />
                                <CssTextField label="Custom CSS" id="custom-css-outlined-input" />

                            </div>
                            <CssTextField
                                sx={{ color: " #F7701D", width: "70%" }}
                                required
                                id="outlined-required"
                                color="warning"
                                label="Middle Name"
                                name="M_NAME"

                            />
                            <CssTextField
                                sx={{ color: " #F7701D", width: "70%" }}
                                required
                                id="outlined-required"
                                color="warning"
                                label="Last Name"
                                name="L_NAME"

                            />
                            <CssTextField
                                sx={{ color: " #F7701D", width: "70%" }}
                                required
                                id="outlined-required"
                                color="warning"
                                label="Email"
                                name="EMAIL"

                            />
                            <CssTextField
                                required
                                id="outlined-number"
                                label="Phone Number"
                                type="number"
                                name="PHONENO"

                            />
                            <CssTextField
                                id="outlined-multiline-static"
                                label="Current Address"
                                multiline
                                color="warning"
                                rows={3}
                                name="CURRENTADDRESS"
                            />
                            <CssTextField
                                id="outlined-multiline-static"
                                label="Permanent Address"
                                multiline
                                color="warning"
                                rows={3}
                                name="PERMANENTADDRESS"
                            />
                            <div className="label_box">
                                <label htmlFor="">Upload CV</label>
                            </div>
                            <Button
                                sx={{
                                    width: "70%",
                                    height: "15vh",
                                    justifyContent: "space-around",
                                    mt: 2,
                                    mb: 2,
                                    textTransform: "none",
                                    border: "1px dashed #F7701D",
                                    color: "#000000",
                                }}
                                color="warning"
                                variant="outlined"
                                component="label"
                            >
                                <CloudUploadIcon color="warning" />
                                Drag and Drop or Browse File
                                <input hidden accept="image/*" multiple type="file" name="CV" />
                            </Button>
                            <label htmlFor="">or</label>
                            <Button
                                variant="contained"
                                className="profile_btn"
                                sx={{
                                    width: "70%",
                                    height: "7vh",
                                    mt: 2,
                                    mb: 2,
                                    textTransform: "none",
                                    color: "#000000",
                                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                                    "&:hover": {
                                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                                    },
                                }}
                            >
                                Create Resume + Cover Letter
                            </Button>



                            <Button
                                variant="contained"
                                className="profile_btn"
                                type="button"
                                sx={{
                                    width: "70%",
                                    height: "7vh",
                                    textTransform: "none",
                                    color: "#000000",
                                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                                    "&:hover": {
                                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                                    },
                                }}
                            >
                                Save
                            </Button>
                        </Box>
                    </form>
                </div> */}
                {/* <div className="get_start" >
                    <form className={getwidth() ? "form-sec_get":"form-sec"}>
                        <div className={getwidth() ? "get_row":"row"} >
                            <div className="col-1" >
                                <img src="images/onboarding/name-icon.png" className="img-size" />

                            </div>
                            <div className={getwidth() ? "input_div_get":"col-11"}>
                                <input className={getwidth() ?"form_input_get":"form-input"} type="text" id="fname" name="firstname" placeholder="Name" />
                            </div>
                        </div>
                        <div className={getwidth() ? "get_row":"row"}>
                            <div className="col-1">
                                <img src="images/onboarding/phone-icon.png" className="mobile-img" />
                            </div>
                            <div className={getwidth() ? "input_div_get":"col-11"}>
                                <input className={getwidth() ?"form_input_get":"form-input"} type='password' id="password" name="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className={getwidth() ? "get_row":"row"}>
                            <div className="col-1">
                                <img src="images/onboarding/email-icon.png" className="email-img" />
                            </div>
                            <div className={getwidth() ? "input_div_get":"col-11"}>
                                <input className={getwidth() ?"form_input_get":"form-input"} type="email" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className={getwidth() ? "get_row":"row"}>
                            <div className="col-1">
                                <img src="images/onboarding/name-icon.png" className="textarea-img" />
                            </div>
                            <div className={getwidth() ? "input_div_get":"col-11"}>
                                <textarea className= {getwidth() ?"form_input_get":"form_textarea_onboard"} id="email" name="textarea" placeholder="Massege" />
                            </div>
                        </div>
                        <div className={getwidth() ? "get_row":"row"}>
                            <div className="col-1">
                                <img src="images/onboarding/upload-icon.png" className="upload-img" />
                            </div>

                            <div className={getwidth() ? "input_div_get":"col-11"} >

                                <Button variant="contained" component="label"
                                    sx={{
                                        background: "#FFFFFF",
                                        color: "black", border: "2.5px dashed #456BB4", textTransform: "none",
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        width: getwidth() ? "100%" : "200%",
                                        height: "10vh",
                                        "&:hover": {
                                            background: "#FFFFFF"
                                        }
                                    }}>
                                    <input hidden accept="image/*" multiple type="file" />
                                    <CloudUploadIcon sx={{ color: "#456BB4", transform: "scale(1.7)" }} />
                                    Drag &amp; Drop or Browse File
                                </Button>
                            </div>
                        </div>


                    </form>
                    <button type="btn" className={getwidth() ? "get_btn":"btn-btn-submit"}
                    >Submit</button>
                </div> */}
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
                            <StayCurrentPortraitIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            <input className={getwidth() ? "form_input_get" : "form-input"} type="number" id="fname" name="firstname" placeholder="Phone Number" />
                        </div>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <AccountBoxIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            <textarea className= {getwidth() ?"form_input_get":"form_textarea_onboard"} id="email" name="textarea" placeholder="Tell Me About Yourself" />
                        </div>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <ContactPageIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            {/* <textarea className= {getwidth() ?"form_input_get":"form_textarea_onboard"} id="email" name="textarea" placeholder="Massege" /> */}
                            <Button variant="contained" component="label"
                                    sx={{
                                        background: "#FFFFFF",
                                        color: "black", border: "2.5px dashed #456BB4", textTransform: "none",
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        width:"100%",
                                        height: "10vh",
                                        "&:hover": {
                                            background: "#FFFFFF"
                                        }
                                    }}>
                                    <input hidden accept="image/*" multiple type="file" />
                                    <CloudUploadIcon sx={{ color: "#456BB4", transform: "scale(1.7)" }} />
                                    Drag &amp; Drop or Browse File
                                </Button>
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
export default Onboarding;
































{/* <div >
    <form className="form-sec">
        <div className="row" >
            <div className="col-1" >
                <img src="images/onboarding/name-icon.png" className="img-size" />
                
            </div>
            <div className="col-11">
                <input className="form-input" type="text" id="fname" name="firstname" placeholder="Name" />
            </div>
        </div>
        <div className="row">
            <div className="col-1">
                <img src="images/onboarding/phone-icon.png" className="mobile-img" />
            </div>
            <div className="col-11">
                <input className="form-input" type='password' id="password" name="password" placeholder="Password" />
            </div>
        </div>
        <div className="row">
            <div className="col-1">
                <img src="images/onboarding/email-icon.png" className="email-img" />
            </div>
            <div className="col-11">
                <input className="form-input" type="email" id="email" name="email" placeholder="Email" />
            </div>
        </div>
        <div className="row">
            <div className="col-1">
                <img src="images/onboarding/name-icon.png" className="textarea-img" />
            </div>
            <div className="col-11">
                <textarea className="form-textarea" id="email" name="textarea" placeholder="Massege" />
            </div>
        </div>
        <div className="row">
            <div className="col-1">
                <img src="images/onboarding/upload-icon.png" className="upload-img" />
            </div>

            <div className="col-11  " >

                <Button variant="contained" component="label"
                    sx={{
                        background: "#FFFFFF",
                        color: "black", border: "2.5px dashed #456BB4", textTransform: "none",
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "200%",
                        height: "10vh",
                        "&:hover": {
                            background: "#FFFFFF"
                        }
                    }}>
                    <input hidden accept="image/*" multiple type="file" />
                    <CloudUploadIcon sx={{ color: "#456BB4", transform: "scale(1.7)" }} />
                    Drag &amp; Drop or Browse File
                </Button>
            </div>
        </div>


    </form>
    <button type="btn" className="btn-btn-submit"
    >Submit</button>
</div> */}