import React from 'react';
import '../assets/Styles.css';
import logoadmin from '../assets/images/logoadmin.png'
import user from '../assets/images/user.png'
import { Link } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

export default function ContactUs() {
    return (
        <>
            <div className='addusercontainer'>
                {/* <div className="adminsidebar">
                    <img src={logoadmin} alt="logo" />

                    <Link to="/adduser"><h3>Manage User </h3></Link>
                    <Link to="/managepages"><h3>Manage Pages </h3></Link>
                    <Link to="/getonboard"><h3>Get Onboard </h3></Link>
                    <Link to="/texttestomonial"><h3>Text Testimonials </h3></Link>
                    <Link to="/partnerwithus"><h3>Partner with us </h3></Link>
                    <Link to="/contactus"><h3>Contact Us </h3></Link>
                    <Link to="/managenews"><h3>Manage Newsletter </h3></Link>
                    <Link to="/"><h3>Logout </h3></Link>

                </div> */}
                <AdminSidebar/>

                <div className="adminbody">
                    <div className="adminnavbar">
                        <h2>Welcome to: Beklom</h2>
                        <span><img src={user} alt="" /><br />Akash Singh</span>
                    </div>

                    <div className="adduser">

                        <br />   <br />

                        <div className="tables">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Delete User</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Akash Singh</td>
                                        <td>xyz xyz xyz xyz xyz xyz xyzzn <br />
                                            xyz xyz xyz xyz xyz xyz xyz xyz
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>Sakshi Singh</td>
                                        <td>xyz xyz xyz xyz xyz <br />
                                            xyz xyz xyz xyz xyz xyz xyz xyz
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>Sudhanshu Singh</td>
                                        <td>xyz xyz xyz xyz xyz <br />
                                            xyz xyz xyz xyz xyz
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>Pratibha Singh</td>
                                        <td>xyz xyz xyz xyz xyz <br />
                                            xyz xyz xyz xyz xyz
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>Komal Singh</td>
                                        <td>xyz xyz xyz xyz xyz xyz xyzzn <br />
                                            xyz xyz xyz xyz xyz
                                        </td>
                                    </tr>
                                </tbody>

                            </table>

                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}
