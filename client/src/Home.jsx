import Chatbox from './Chatbox';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import gpt from '/images/gpt.png';
import aiimage from '/images/ai.jpg';
import chatgpt from '/images/chatgpt.png';
import ai from '/videos/3.mp4';
import backvideo from '/videos/4.mp4';
import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faQuestionCircle, faClipboardList, faUser } from '@fortawesome/free-solid-svg-icons';



export default function Home() {
<<<<<<< HEAD
  return (
    <>
      <section id="navbar">
        <center>
          <Navbar expand="lg" className="bg-body fixed">
            <Container>
              <Navbar.Brand href="#home">Pathfinder</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Chatbot</Nav.Link>
                  <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
                <Button variant="warning">Get Started</Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </center>
      </section>
      <section id="home1">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={backvideo} type="video/mp4" />
        </video>
        <div className="landing">
          <center>
            <p className='maintit'>
              <img src={gpt} width="120px" height="120px" alt="OpenAI Logo" /> OpenAI <br /> Your Future
            </p>
            <p className='title'>Unleash your potential with our quirky chatbot guide!</p>
=======
    return (
        <>
            <section id="navbar">
        <center>
       <Navbar expand="lg" className="bg-body fixed">
      <Container>
        <Navbar.Brand href="#home">Pathfinder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Chatbot</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Button variant="warning">Get Started</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </center>
        </section>
        <section id="home1">
  <video className="background-video" autoPlay loop muted playsInline>
    <source src={backvideo} type="video/mp4" />
    {/* Add alternative formats if available */}
  </video>
  <div className="landing">
    <center>
      <p className='maintit'>
        <img src={gpt} width="120px" height="120px" alt="OpenAI Logo" /> OpenAI <br /> Your Future
      </p>
      <p className='title'>Unleash your potential with our quirky chatbot guide!</p>
      <Button className="startchat" variant="warning">Start Chatting</Button>
    </center>
  </div>
</section>

            <section id="img">
    <Box sx={{ width: '100%' }}>
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={3} md={6}>
                <img src={aiimage} className='aiimage1' alt="AI Image 1" />
            </Grid>
            <Grid item xs={12} lg={3} md={6}>
                <img src={chatgpt} className='aiimage1' alt="ChatGPT Image" />
            </Grid>
            <Grid item xs={12} lg={3} md={6}>
                <img src={aiimage} className='aiimage1' alt="AI Image 2" />
            </Grid>
            <Grid item xs={12} lg={3} md={6}>
                <img src={chatgpt} className='aiimage1' alt="ChatGPT Image 2" />
            </Grid>
        </Grid>
    </Box>
</section>

            <section id="video">
                <video className='vidtag' autoPlay loop muted playsInline>
                    <source src={ai} type="video/mp4" /> {/* <source src="movie.ogg" type="video/ogg"> */}
                </video>
            </section>
            <section id="aboutus">
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1}>
                        <Grid item xs={12} lg={6}>
                        <img src={aiimage} className='aiimage'/>

                        </Grid>
                        <Grid  item xs={12} lg={6} >  
                            <div className='aboutdes'>
                            <h2 className='heading'>Chart Your Future</h2>
                           <p className='description'>Welcome to the wild world of career exploration! Our interactive chatbot is your trusty sidekick, ready to help you navigate the maze of academic and career choices. Forget boring brochures and endless Google searches; we bring the fun back into finding your path!</p>
                        <p className='description'>Whether you’re fresh out of 10th grade, staring down the barrel of 12th grade, or just feeling lost in the vast universe of options, our chatbot is here to sprinkle some magic on your decision-making process. Get ready to dive into a personalized adventure that’s as unique as you are!</p>
                        <p className='description'>So, what are you waiting for? Let’s kickstart your journey to success with a chat that’s more exciting than a rollercoaster ride!</p>
                        
                            </div>
                           </Grid>
                    </Grid>
                </Box>
            </section>
            <section id="success">
               <center><h1 style={{ fontSize: "60px", fontWeight:"700" }}>Success</h1></center> 
            <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1}>
                        <Grid xs={12} lg={3} md={6}>
                          <center className='testimonial'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                       <h2 className='name'>Emily Johnson</h2>
                       <p style={{fontSize:'20px'}}>This chatbot changed my life! I found my dream career!</p></center>                        
                       
                        </Grid>
                        <Grid xs={12} lg={3} md={6}>  
                        <center className='testimonial'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                       <h2 className='name'>Emily Johnson</h2>
                       <p style={{fontSize:'20px'}}>This chatbot changed my life! I found my dream career!</p></center>                        
                       </Grid>
                           <Grid xs={12} lg={3} md={6}>  
                           <center className='testimonial'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                       <h2 className='name'>Michael Smith</h2>
                       <p style={{fontSize:'20px'}}>I was lost, but now I’m on the right path!</p></center>                        
                       </Grid>
                           <Grid xs={12} lg={3} md={6}>  
                           <center className='testimonial'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                       <h2 className='name'>Sarah Lee</h2>
                       <p style={{fontSize:'20px'}}>Best decision ever! I’m pursuing my passion!</p></center>                        
                       </Grid>
                    </Grid>
                    <Grid container rowSpacing={1}>
                    <Grid xs={12} lg={3} md={6}> 
                    <center className='testimonial'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                       <h2 className='name'>David Brown</h2>
                       <p style={{fontSize:'20px'}}>I never knew I had so many options!</p></center>                        
                       </Grid>
                        <Grid xs={12} lg={3} md={6}>  
                        <center className='testimonial'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                       <h2 className='name'>Emily Johnson</h2>
                       <p style={{fontSize:'20px'}}>This chatbot changed my life! I found my dream career!</p></center>                        
                         </Grid>
                           <Grid xs={12} lg={3} md={6}>  
                           <center className='testimonial'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                       <h2 className='name'>Emily Johnson</h2>
                       <p style={{fontSize:'20px'}}>This chatbot changed my life! I found my dream career!</p></center>                        
                       </Grid>
                           <Grid xs={12} lg={3} md={6}>  
                           <center className='testimonial'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                       <h2 className='name'>Emily Johnson</h2>
                       <p style={{fontSize:'20px'}}>This chatbot changed my life! I found my dream career!</p></center>                        
                       </Grid>
                    </Grid>
                </Box>
            </section>
          <section id="adventure">
            <center>
            <h1 className='maintit'>Start Your Adventure Now!</h1>
            <p>Your future is just a chat away!</p>
>>>>>>> 52561a2f98f7f2147db94770eeeea5915dce2109
            <Button className="startchat" variant="warning">Start Chatting</Button>
          </center>
        </div>
      </section>

      <section id="img">
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={3} md={6}>
              {/* <img src={aiimage} className='aiimage1' alt="AI Image 1" /> */}
              <Card className='chatbotfeatures'>
                <center>
              <FontAwesomeIcon  icon={faCompass} size='2xl' style={{color: "#20511f",}} />
                 <h3>Custom Career Recommendations</h3>
                <p>Get tailored career suggestions based on your interests and strengths, simplifying your decision-making process.</p>
                </center>
<<<<<<< HEAD
              </Card>

            </Grid>
            <Grid item xs={12} lg={3} md={6}>
              {/* <img src={chatgpt} className='aiimage1' alt="ChatGPT Image" /> */}
              <Card className='chatbotfeatures'> 
                <center>
              <FontAwesomeIcon  icon={faQuestionCircle} size='2xl' style={{color: "#007BFF",}} />
                <h3>Instant Academic Guidance</h3>
                <p>Receive real-time answers to your academic queries, ensuring you have information to make choices.</p>
                </center>
              </Card>
            </Grid>
            <Grid item xs={12} lg={3} md={6}>
              {/* <img src={aiimage} className='aiimage1' alt="AI Image 2" /> */}
              <Card className='chatbotfeatures'>
              <center>
              <FontAwesomeIcon  icon={faClipboardList} size='2xl' style={{color: "#FF5733",}} />
                 <h3>Engaging Interactive Assessments</h3>
                <p>Take quick quizzes to identify your strengths, with personalized career advice based on your results.</p>
                </center>
              </Card>
            </Grid>
            <Grid item xs={12} lg={3} md={6}>
              {/* <img src={chatgpt} className='aiimage1' alt="ChatGPT Image 2" /> */}
              <Card className='chatbotfeatures'>
              <center>
              <FontAwesomeIcon  icon={faUser} size='2xl' style={{color: "#6f42c1",}} />
                 <h3>One-on-One Career Counseling</h3>
                <p>Book private sessions with expert counselors for personalized guidance on your career path and academic planning.</p>
                </center>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section id="video">
        <video className='vidtag' autoPlay loop muted playsInline>
          <source src={ai} type="video/mp4" /> {/* <source src="movie.ogg" type="video/ogg"> */}
        </video>
      </section>
      <section id="aboutus">
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} lg={6}>
              <img src={aiimage} className='aiimage' />

            </Grid>
            <Grid item xs={12} lg={6} >
              <div className='aboutdes'>
                <h2 className='heading'>Chart Your Future</h2>
                <p className='description'>Welcome to the world of personalized career exploration! Our interactive chatbot is your ultimate guide, here to help you navigate the maze of academic and career choices. Whether you're unsure about which path to take or already have a specific dream, we make finding your future simple—and fun!</p>
                <p className='description'>From tailored career suggestions to resume-building tips, our chatbot can do it all. Want to know the best universities for your chosen field? Need help preparing for interviews? Looking for online courses or internships to boost your profile? We’ve got you covered.</p>
                <p className='description'>Whether you’re fresh out of 10th grade, staring down the barrel of 12th grade, or simply exploring your options, our chatbot personalizes its advice just for you. Dive into a unique adventure and discover career paths that match your strengths and interests!</p>

              </div>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section id="success">
        <center><h1 style={{ fontSize: "60px", fontWeight: "700", color:"#6f42c1" }}>Testimonial</h1>
        <h5 style={{color:"#343a40"}}>Hear From Those Who’ve Transformed Their Careers</h5>
        </center>
        <Box style={{marginTop:"40px"}} sx={{ width: '100%' }}>
          <Grid container rowSpacing={1}>
            <Grid xs={12} lg={4} md={6}>
              <Card className='testimonialcard'>
                <center>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <p><span style={{color:"#6f42c1",fontSize:"20px"}}>&ldquo;</span>PathFinder completely transformed my career outlook. The personalized guidance helped me choose a field I truly love, and I’m excited about my future!<span style={{color:"#6f42c1", fontSize:"20px"}}>“</span></p>
                <p><span style={{fontSize:"20px", fontWeight:"500", color:"#6f42c1"}}>John Smith</span>, Software Engineer</p>
                </center>
              </Card>
              </Grid>
            <Grid xs={12} lg={4} md={6}>
            <Card className='testimonialcard'>
                <center>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <p> <span style={{color:"#6f42c1",fontSize:"20px"}}>&ldquo;</span>The interactive assessments on PathFinder were incredibly insightful. They not only clarified my strengths but also guided me toward suitable career options.<span style={{color:"#6f42c1", fontSize:"20px"}}>“</span></p>
                <p><span style={{fontSize:"20px", fontWeight:"500", color:"#6f42c1"}}>Sarah Johnson</span>, Recent Graduate</p>
                </center>
              </Card>
              </Grid>
            <Grid xs={12} lg={4} md={12}>
            <Card className='testimonialcard'>
                <center>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <p> <span style={{color:"#6f42c1",fontSize:"20px"}}>&ldquo;</span>Thanks to PathFinder, I received one-on-one counseling addressed my unique concerns. The advice I received was practical and actionable, leading me to my dream job.<span style={{color:"#6f42c1", fontSize:"20px"}}>“</span></p>
                <p><span style={{fontSize:"20px", fontWeight:"500", color:"#6f42c1"}}> Emily Wang</span>, Marketing Specialist</p>
                </center>
              </Card>
              </Grid>
          </Grid>
          {/* <Grid container rowSpacing={1}>
            <Grid xs={12} lg={3} md={6}>
              <center className='testimonial'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <h2 className='name'>David Brown</h2>
                <p style={{ fontSize: '20px' }}>I never knew I had so many options!</p></center>
            </Grid>
            <Grid xs={12} lg={3} md={6}>
              <center className='testimonial'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <h2 className='name'>Emily Johnson</h2>
                <p style={{ fontSize: '20px' }}>This chatbot changed my life! I found my dream career!</p></center>
            </Grid>
            <Grid xs={12} lg={3} md={6}>
              <center className='testimonial'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <h2 className='name'>Emily Johnson</h2>
                <p style={{ fontSize: '20px' }}>This chatbot changed my life! I found my dream career!</p></center>
            </Grid>
            <Grid xs={12} lg={3} md={6}>
              <center className='testimonial'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <h2 className='name'>Emily Johnson</h2>
                <p style={{ fontSize: '20px' }}>This chatbot changed my life! I found my dream career!</p></center>
            </Grid>
          </Grid> */}
        </Box>
      </section>
      <section id="adventure">
        <center>
          <h1 className='maintit'>Start Your Adventure Now!</h1>
          <p>Your future is just a chat away!</p>
          <Button className="startchat" variant="warning">Start Chatting</Button>
          <Button className="startchat" variant="warning">Start Chatting</Button>
        </center>
      </section>
      <section id="footer">
        <center>
          <div className='footerlink'>
            <Link className='flink' href="#">Home</Link>
            <Link className='flink' href="#">About</Link>
            <Link className='flink' href="#">Service</Link>
            <Link className='flink' href="#">Contact</Link>
          </div>
          <div className='icon'>
            <FontAwesomeIcon className='socialicon' icon={faFacebookF} style={{ color: "black", }} size="2xl" />
            <FontAwesomeIcon className='socialicon' icon={faTwitter} style={{ color: "#000000", }} size="2xl" />
            <FontAwesomeIcon className='socialicon' icon={faInstagram} style={{ color: "black", }} size="2xl" />
            <FontAwesomeIcon className='socialicon' icon={faLinkedinIn} style={{ color: "black", }} size="2xl" />
          </div>
          <p className='lastfooter'>&copy;2024 Career Chatbot. All rights reserved.</p>
        </center>
      </section>
      {/* <Chatbox /> */}
    </>
  )
}
=======
            </section>
            {/* <Chatbox /> */}
        </>
    )
}
>>>>>>> 52561a2f98f7f2147db94770eeeea5915dce2109
