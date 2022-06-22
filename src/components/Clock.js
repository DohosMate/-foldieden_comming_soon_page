import React, { Fragment } from 'react'

function Clock({ timerDays, timerHours, timerMinutes, timerSeconds }) {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div>
            <div className='hamarosan_nyitunk_text_container'>
              <p className='hamarosan_nyitunk_text'>Hamarosan nyitunk!</p>
            </div>
            <div className="clock">
              <section>
                <p>{timerDays}</p>
                <small>Nap</small>
              </section>
              <span>:</span>
              <section>
                <p>{timerHours}</p>
                <small>Óra</small>
              </section>{" "}
              <span>:</span>
              <section>
                <p>{timerMinutes}</p>
                <small>Perc</small>
              </section>{" "}
              <span>:</span>
              <section>
                <p>{timerSeconds}</p>
                <small>s</small>
              </section>
            </div>
          </div>
        </section>
      </section>
    </Fragment >
  )
}

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10
}

export default Clock