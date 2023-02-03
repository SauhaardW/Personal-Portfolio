import React from 'react'
import {Row, Container, Col, Button } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Grophers from "../assets/img/grophers.png"
import Fithub from "../assets/img/Fithub.png"
import Sauhaarddotcom from "../assets/img/sauhaarddotcom.png"
import dotNet from "../assets/img/dotNet.png"
import FilesizeCompressor from "../assets/img/FilesizeCompressor.png"
import ChasingSun from "../assets/img/ChasingSun.png"


export const Projects = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return(
        <section className="project" id="projects"> 
        <h2 className='title-projects'>
            My Projects
        </h2>
            <Container>
                <Row>
                    <Col>
                        <div className="project-bx">
                            
                            <p>
                                Here you can find a selection of some of my projects, feel free to check out the demo or the code!
                            </p>
                            <Carousel responsive={responsive} infinte={true} className="projects-slider">
                                <div className="projectsItem">
                                    <img src={Fithub} alt="Image" className='projectsPics'/>
                                    <h4 className='projectName'>Fithub Fitness Application: MongoDB, React.js, Node.js</h4>
                                    <div className='buttonsItem'>
                                    <Button href="https://youtu.be/UwDtg5oIe2k" variant="primary" size="lg" className='projectButton'>Demo</Button>
                                    <Button href="https://github.com/SauhaardW/FitHub" variant="primary" size="lg" className='projectButton'>Code</Button>
                                    </div>
                                </div>
                                <div className="projectsItem">
                                    <img src={dotNet} alt="Image" className='projectsPics'/>
                                    <h4 className='projectName'>Assignment Tracker: Vue.js, .NET Core and MongoDB</h4>
                                    <div className='buttonsItem'>
                                    <Button href="https://youtu.be/Uo_QK5Ek0fY" variant="primary" size="lg" className='projectButton'>Demo</Button>
                                    <Button href="https://github.com/SauhaardW/Assignment-Tracker" variant="primary" size="lg" className='projectButton'>Code</Button>
                                    </div>
                                </div>
                                <div className="projectsItem">
                                    <img src={Grophers} alt="Image" className='projectsPics'/>
                                    <h4 className='projectName'>Grophers Android App: Java, XML and Mockito</h4>
                                    <div className='buttonsItem'>
                                    <Button href="https://youtu.be/rlAjKzWbuzs" variant="primary" size="lg" className='projectButton'>Demo</Button>
                                    <Button href="https://github.com/SauhaardW/Grophers" variant="primary" size="lg" className='projectButton'>Code</Button>
                                    </div>
                                </div>
                                <div className="projectsItem">
                                    <img src={Sauhaarddotcom} alt="Image" className='projectsPics'/>
                                    <h4 className='projectName'>Sauhaard.com: React.js, Bootstrap, Email.js</h4>
                                    <div className='buttonsItem'>
                                    <Button href="https://youtu.be/kCulApSuQu4" variant="primary" size="lg" className='projectButton'>Demo</Button>
                                    <Button href="https://github.com/SauhaardW/Personal-Portfolio" variant="primary" size="lg" className='projectButton'>Code</Button>
                                    </div>
                                </div>
                                <div className="projectsItem">
                                    <img src={FilesizeCompressor} alt="Image" className='projectsPics'/>
                                    <h4 className='projectName'>Image File Size Compressor: C</h4>
                                    <div className='buttonsItem'>
                                        <Button href="https://youtu.be/dIhFqQqw0h4" variant="primary" size="lg" className='projectButton'>Demo</Button>
                                    <Button href="https://github.com/SauhaardW/Image_Filesize_Reducer" variant="primary" size="lg" className='projectButton'>Code</Button>
                                    </div>
                                </div>
                                <div className="projectsItem">
                                    <img src={ChasingSun} alt="Image" className='projectsPics'/>
                                    <h4 className='projectName'>Chasing The Sun: Assembly Langauge</h4>
                                    <div className='buttonsItem'>
                                    <Button href="https://www.youtube.com/watch?v=v2pmxJFoSNk" variant="primary" size="lg" className='projectButton'>Demo</Button>
                                    <Button href="https://github.com/SauhaardW/B58-Final-Game---Chasing-The-Sun" variant="primary" size="lg" className='projectButton'>Code</Button>
                                    </div>
                                </div>

                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
