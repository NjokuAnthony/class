import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>
        <div className="avout-text">
            <h2> {props.title} </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus earum tempora nobis suscipit ea cumque distinctio unde quis reprehenderit officiis consectetur, harum soluta?</p>
            <button> {props.button} </button>
        </div>
    </div>
  )
}

export default About