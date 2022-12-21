import React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import sauImg from "../assets/img/Sauhaardc.png";
import { useNavigate } from "react-router-dom";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {   
  
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Full Stack Developer", "Coding Enthusiast!" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Sauhaard a `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Full Stack Developer", "Coding Enthusiast!" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a Computer Science student at the University of Toronto double minoring in Economics and Statistics. I am also a full-stack developer focused on developing and designing unique digital experiences. I worked previously with a focus on app development and I am currently absored with building fun and interactive full-stack web applications. I also love camping and going on long hikes in the nature! </p>
                  <button onClick={event =>  window.location.href='/#contact'}>Let’s Connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
                  <img src={sauImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}