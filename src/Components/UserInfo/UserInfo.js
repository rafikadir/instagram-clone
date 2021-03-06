import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './UserInfo.css';

const UserInfo = () => {
    return (
       <Row>
           <Col lg={4}>
                <div className="userThumb">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="user" />
                </div>
           </Col>
           <Col lg={8}>
               <div className="userInfoText">
                    <div className="userName d-flex">
                        <h4>i_am_rafikadir</h4>
                        <button className="editProfile">
                            Edit profile
                        </button>
                    </div>
                    <div className="profileDetails">
                        <ul>
                            <li><b>80</b> post</li>      
                            <li><b>32</b> follower</li>      
                            <li><b>80</b> following</li>            
                        </ul>
                    </div>
                    <div className="profileDescription">
                        <h6 className="Uname">Rafi Kadir β’ Web Developer</h6>
                        <p className="Udescription">
                            π¨βπ»β’ Web DπΎππΎππππΎπ - MERN <br />
                            π§ β’ JavaScript - ReactJS <br />
                            π»β’ Freelance Web Developer & Content  <br />
                            πβ’ SππΊππππ RπΎπππππΌπΎs ππΏ Web DπΎππΎπππππΎππ
                        </p>
                    </div>
               </div>
           </Col>
       </Row>
    );
};

export default UserInfo;