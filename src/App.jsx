import './App.css'
import homeImg1 from './assets/home1.svg'
import homeImg2 from './assets/home2.svg'
import homeImg3 from './assets/home3.svg'
import secondImg from './assets/image 13.svg'
import thirdImgFirst from './assets/image 21.svg'
import thirdImgSecond from './assets/image 18.svg'
import cardFirstImg from './assets/image 11.svg'
import cardSecondImg from './assets/image 10.svg'
import cardThirdImg from './assets/image 9.svg'
import avatar from './assets/Ellipse 1.svg'

function App() {
  return (
    <>
    <div className="all">
    <header>
      <div className="left_section-header">
        <h1>Cootels</h1>
      </div>
      <div className="center_section-header">
        <ul className='ul-header'>
          <li>Rooms</li>
          <li>Reservation</li>
          <li>Contacs</li>
        </ul>
      </div>
      <div className="right_section-header">
        <button>Get Started</button>
      </div>
    </header>

    <main className='main-section'>
      <div className="left_section-main">
        <h1>Nature, Warmth, and <br/> Beauty in One Space</h1>
        <p>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</p>
        <button>Reservation</button>
      </div>
      <div className="right_section-main">
        <img src={homeImg1} alt="Home 1" />
        <img className='nth-2' src={homeImg2} alt="Home 2" />
        <img src={homeImg3} alt="Home 3" />
      </div>
    </main>

    <section className='AllSecondSection'>
      <section className='secondSection'>
          <div className="left_section-second">
            <img src={secondImg} alt="" />
          </div>
          <div className="right_section-second">
            <h1>Cozy and Down to Earth Cootage <br/> Hotel in Norway.</h1>
            <p className='first-paragraph'>Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.</p>
            <p className='last-paragraph'>Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.</p>
            <button>Learn More</button>
          </div>
      </section>

      <section className='thirdSection'>
            <div className="top-section-third">
              <div className="left-section-first-third">
                <h1>Cabin Activities</h1>
                <p>Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.</p>
              </div>
              <div className="right-section-first-third">
                  <img src={thirdImgFirst} alt="" />
              </div>
            </div>
            <div className="bottom-section-third">
            <div className="left-section-second-third">
              <img src={thirdImgSecond} alt="" />
            </div>
            <div className="right-section-second-third">
                <h1>100% Organic Food</h1>
                <p>We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.</p>
            </div>
            </div>
      </section>
    </section>

    <section className='fourthSection'>
      <div className="top-section-fourthSection">
        <h1>Many Rooms to Choose</h1>
        <p>There is a room for every needs. We have room for individuals until <br/> family size, we also have a cabin for more private experience</p>
        <button>Explore more</button>
      </div>
      <div className="main-section-fourth">
        <div className="card">
          <div className="img-section_card">
            <img src={cardFirstImg} alt="" />
          </div>
          <div className="text-section_card">
            <h1>Single Room</h1>
            <p>Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.</p>
            <button>Learn more →</button>
          </div>
        </div>

        <div className="card">
          <div className="img-section_card">
            <img src={cardSecondImg} alt="" />
          </div>
          <div className="text-section_card">
            <h1>Double Room</h1>
            <p>Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two</p>
            <button>Learn more →</button>
          </div>
        </div>

        <div className="card">
          <div className="img-section_card">
            <img src={cardThirdImg} alt="" />
          </div>
          <div className="text-section_card">
            <h1>Single Room</h1>
            <p>Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends</p>
            <button>Learn more →</button>
          </div>
        </div>
      </div>
    </section>

    <section className='fifthSection'>
        <div className="left_section-fifth">
          <h5>Start your journey!</h5>
          <h1>How to Get My Room?</h1>
          <p>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</p>
          <div>
            <button>Contact us</button>
            <button>Explore more room</button>
          </div>
        </div>
        <div className="right_section-fifth">
          <div className="summary-1">
            <div className="left-summary">
              <h4>1. Choose a room and date</h4>
            </div>
            <div className="right-summary">
              <p>&or;</p>
            </div>
          </div>

          <div className="summary-1">
            <div className="left-summary">
              <h4>2. Check for room availability</h4>
            </div>
            <div className="right-summary">
              <p>&or;</p>
            </div>
          </div>

          <div className="summary-1">
            <div className="left-summary">
              <h4>3. Enjoy your room</h4>
            </div>
            <div className="right-summary">
              <p>&or;</p>
            </div>
          </div>

        </div>
    </section>

    <section className='contact'>
      <h1>Hear From Our Happy Customers</h1>
      <img src={avatar} alt="" />
      <p>“Great service, great food, great people. The scenery is also beautiful, you can do so much <br/> activity even with your famility. Worth every penny! you should come and see for your self.  5 <br/> out of 5! the waffle is great!”</p>
      <h5>Kirana Dunham</h5>

    <div className='divRounded'>
      <div className='rounded'></div>
      <div className='rounded'></div>
      <div className='rounded'></div>
      <div className='rounded'></div>
    </div>

    </section>

    </div>

    <div class="footer">
    <div class="footer-section-1">
        <h1>Cootels</h1>
        <p class="Copyright">Your Best Private Hideway From Crowd. Back to Nature.</p>
    </div>
    <div class="footer-section-2">
        <div class="poradoc-com">
            <ul>
                <h2 class="company"><b>Rooms</b></h2>
                <li class="list">Single Room</li>
                <li class="list">Double Room</li>
                <li class="list">Cabin</li>
                <li class="list">Custom Room</li>
            </ul>
        </div>

        <div class="poradoc-com">
            <ul>
                <h2 class="company"><b>Reservation</b></h2>
                <li class="list">See the Steps</li>
                <li class="list">Best Time</li>
            </ul>
        </div>

        <div class="poradoc-com">
            <ul>
                <h2 class="company"><b>Contact</b></h2>
                <li class="list">Our Number</li>
                <li class="list">Our Email</li>
                <li class="list">Our Location</li>
            </ul>
        </div>

    </div>
 </div>

    </>
  )
}

export default App
