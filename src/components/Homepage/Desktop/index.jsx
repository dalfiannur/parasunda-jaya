import React from 'react'
import './style.scss'

export default () => {
  const onMouseEnter = (element) => {
    element.target.classList.add('container--active')
    element.target.style.setProperty('--rY', 40);
    element.target.style.setProperty('--rX', 0);
    // element.target.style.setProperty('--bY', (80 - (X / 4).toFixed(2)) + '%');
    // element.target.style.setProperty('--bX', (50 - (Y / 4).toFixed(2)) + '%');
  }

  const onMouseLeave = (element) => {
    element.target.classList.remove('container--active')
    element.target.style.setProperty('--rY', 0);
    element.target.style.setProperty('--rX', 0);
    element.target.style.setProperty('--bY', '80%');
    element.target.style.setProperty('--bX', '50%');
  }

  const onMouseMove = (element, tiltEffect) => {
    const offsetX = element.movementX
    const offsetY = element.movementY

    let X;
    let Y;

    if (tiltEffect === "reverse") {
      X = ((offsetX - (300 / 2)) / 3) / 3;
      Y = (-(offsetY - (360 / 2)) / 3) / 3;
    }

    else if (tiltEffect === "normal") {
      X = (-(offsetX - (300 / 2)) / 3) / 3;
      Y = ((offsetY - (360 / 2)) / 3) / 3;
    }


  }

  return (
    <div className='root'>
      <h1 className='title'>
        SELAMAT DATANG DI
        <span>
          PASUNDAN JAYA
        </span>
        &mdash; BLANGPIDIE &mdash;
      </h1>
      <section className="main">
        <div
          className="wrap wrap--1">
          <div
            className="container container--1"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <p>Bakso Daging</p>
          </div>
        </div>

        <div className="wrap wrap--2">
          <div
            className="container container--2"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <p>Bakso Ayam</p>
          </div>
        </div>

        <div className="wrap wrap--3">
          <div
            className="container container--3"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <p>Bakso Ikan</p>
          </div>
        </div>
      </section>
    </div>
  )
}