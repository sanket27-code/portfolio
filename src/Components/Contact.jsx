import React from 'react';
import Button from '@material-ui/core/Button';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import SendIcon from '@material-ui/icons/Send';

const Contact = () => {
    return (
        <>
            <div className="contact_main_div">
                <div className="component_title">
                    <h5>contact me</h5>
                    <p className='contact_p'><b>get in touch</b></p>
                </div>
                <div className="contact_content">
                    <div className="info">
                        <div className="msg_title_div">
                            <h4>Get in Touch</h4>
                            <p>Want to know more or willing to get connected to build innovative websites for your business do follow me...</p>
                        </div>
                        <div className="my_info">
                            <div className="icons">
                                <PersonSharpIcon />
                            </div>
                            <p>Name <br /><span>Sanket Ainchwar</span></p>
                        </div>
                        <div className="my_info">
                            <div className="icons">
                                <HomeRoundedIcon />
                            </div>
                            <p>Address <br /><span>Near BOM, Shivaji Nagar, Aheri</span></p>
                        </div>
                        <div className="my_info">
                            <div className="icons">
                                <EmailRoundedIcon />
                            </div>
                            <p>Email <br /><span>sanket@gmail.com</span></p>
                        </div>
                        <div className="my_info">
                            <div className="icons">
                                <PhoneRoundedIcon />
                            </div>
                            <p>Mobile <br /><span>9881711802</span></p>
                        </div>

                    </div>
                    <div className="msg_form">
                        <h4>Message me</h4>
                        <form>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <br /><input type="text" placeholder='Subject' />
                            <div className="text_msg">
                                <textarea placeholder='Drop your message...' name="msg1" id="msg" cols="10" rows="10" ></textarea>
                            </div>
                            <div className="but">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<SendIcon />}
                                >
                                    Send
                        </Button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;