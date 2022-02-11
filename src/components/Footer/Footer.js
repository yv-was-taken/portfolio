import "./Footer.css";


export default function Footer() {
  return(

    <div className="footer-container">
      <div className="footer-links-container">


        <div className="highlight">
          <div>
            Frontend Development @UXDProtocol
            <div>
              August 2021 - Current
            </div>

            <div className='work-example-container'>
              <div className="work-example">
                <div className='work-example-title'><a href="https://app.uxd.fi" target="_blank">app.uxd.fi</a></div>
                <div className="work-example-list">
                  <div>React</div>
                  <div>Typescript</div>
                  <div>Scss</div>
                </div>
              </div>
              <div className="work-example">
                <div className='work-example-title'><a href="https://ido.uxd.fi" target="_blank">ido.uxd.fi</a></div>
                <div className="work-example-list">
                  <div>NEXT JS</div>
                  <div>Typescript</div>
                  <div>Scss</div>
                </div>
              </div>
              <div className="work-example">
                <div className='work-example-title'><a href="https://uxd.fi" target="_blank">uxd.fi</a></div>
                <div className="work-example-list">
                  <div>HTML</div>
                  <div>CSS</div>
                  <div style={{opacity: 0}}> .</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
