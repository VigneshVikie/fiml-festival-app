import React from 'react'

const Details = () => {
  return (
<div>
      <div className="ResponsiveLayout">
        <div className="Touchpoints">
          <div className="Touchpoint">
            <div className="Header-h2">
              Discover Amazing
              <br />
              Festivals
            </div>
            <div className="Paragraph">
              Browse thousands of the world's top film festivals and contests.
            </div>
            <div className="Link">
              <a href="#">
                Learn More
                <span
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  class="material-symbols-outlined"
                >
                  navigate_next
                </span>
              </a>
            </div>
          </div>
          <div className="Touchpoint">
            <div className="Header-h2">
              The Smart and Easy
              <br />
              Way to Submit
            </div>
            <div className="Paragraph">
              Add your project then click to submit. Simple and fast.
            </div>
            <div className="Link">
              <a href="#">
                Start Submitting
                <span
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  class="material-symbols-outlined"
                >
                  navigate_next
                </span>
              </a>
            </div>
          </div>
          <div className="Touchpoint">
            <div className="Header-h2">
              Game Changing for
              <br />
              Festivals and Contests
            </div>
            <div className="Paragraph">
              Receive entries, sell tickets, promote and manage your event.
            </div>
            <div className="Link">
              <a href="#">
                Why FilmFreeway
                <span
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  class="material-symbols-outlined"
                >
                  navigate_next
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>  )
}

export default Details