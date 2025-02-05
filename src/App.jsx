import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/img/Icon.png'
import logo2 from './assets/img/Illustration (1).png'
import logo3 from './assets/img/Logo (6).png'
import logo4 from './assets/img/Logo (9).png'
import logo5 from './assets/img/Logo (10).png'
import logo6 from './assets/img/Logo (11).png'
import logo7 from './assets/img/Logo (12).png'
import logo8 from './assets/img/Logo (13).png'
import logo9 from './assets/img/Logo (10).png'
import logo10 from './assets/img/Icon (1).png'
import logo11 from './assets/img/Icon (2).png'
import logo12 from './assets/img/Icon (3).png'
import logo13 from './assets/img/Frame 35.png'

function App() {
  

  return (
    <> 
      <header className='header'  style={{     display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px",  maxWidth: "1220px",    margin: "0 auto",
}}>
        <div  style={{     display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px",gap:"10px"}}>
          <img style={{width:"30px"}} src={logo} alt="" />
          <a style={{color:"black",textDecoration:"none",fontSize:"30px"}} href="">Nexcent</a>
        </div>
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center",gap:"30px"}}>
          <a style={{color:"black",textDecoration:"none"}} href="">Home</a>
          <a style={{color:"black",textDecoration:"none"}} href="">Features</a>
          <a style={{color:"black",textDecoration:"none"}} href="">Community</a>
          <a style={{color:"black",textDecoration:"none"}} href="">Blog</a>
          <a style={{color:"black",textDecoration:"none"}} href="">Pricing</a>
          <button style={{color:"white",backgroundColor:"#4CAF4F",border:"none",padding:"10px 25px",borderRadius:"5px"}}>Register Now</button>
        </div>

      </header>
      <main className='main '>
          <div className='sakkiz container2'>
              <div className='left'>
                  <h1 className='lessons'>Lessons and insights </h1>
                  <h1 className='fromsakkiz'>from 8 years</h1><br />  
                  <p className='whereto'>Where to grow your business as a photographer: site or social media?</p><br />
                  <button style={{color:"white",backgroundColor:"#4CAF4F",border:"none",padding:"10px 25px",borderRadius:"5px"}}>Register </button>
              </div>
              <div className='right'>
                  <img className='illustration' src={logo2} alt="" />
              </div>
          </div>
          <div className='container ourclientsbox'>
              <br /><h2 className='ourclients'>Our Clients</h2><br />
              <p className='whereto'>We have been working with some Fortune 500+ clients</p><br />
              <div className='icons'>
                    <img className='minilogos' src={logo3} alt="" />
                    <img className='minilogos' src={logo4} alt="" />
                    <img className='minilogos' src={logo5} alt="" />
                    <img className='minilogos' src={logo6} alt="" />
                    <img className='minilogos' src={logo7} alt="" />
                    <img className='minilogos' src={logo8} alt="" />
                    <img className='minilogos' src={logo9} alt="" />
              </div><br />
          </div>
          <div className='container manageyour'>
            <br /><br />
                  <h2 className='manageyourentire'>Manage your entire community </h2>
                  <h2 className='manageyourentire'>in a single system</h2><br /><br />
          </div>
          <div className='container managebox'>
                <div className='membership'>
                      <img className='minilogos' src={logo10} alt="" /><br />
                      <h2 className='ourclients'>Membership</h2>
                      <h2 className='ourclients'>Organisations</h2><br />
                      <p className='whereto'>Our membership management </p>
                      <p className='whereto'> software provides full automation of </p>
                      <p className='whereto'> membership renewals and payments</p>
                </div>
                <div className='membership'>
                      <img className='minilogos' src={logo11} alt="" /><br />
                      <h2 className='ourclients'>National</h2>
                      <h2 className='ourclients'> Associations</h2><br />
                      <p className='whereto'>Our membership management </p>
                      <p className='whereto'> software provides full automation of </p>
                      <p className='whereto'> membership renewals and payments</p>
                </div>
                <div className='membership'>
                      <img className='minilogos' src={logo12} alt="" /><br />
                      <h2 className='ourclients'>Clubs And </h2>
                      <h2 className='ourclients'>Groups</h2><br />
                      <p className='whereto'>Our membership management </p>
                      <p className='whereto'> software provides full automation of </p>
                      <p className='whereto'> membership renewals and payments</p>
                </div>
          </div>

<br /><br /><br /><br /><br />
          <div className='oxiri container'>
                <div className='chap'>
                      <img className='Frame35' src={logo13} alt="" />
                </div>
                <div className='ong'>
                      <h2 className='theunseen'>The unseen of spending three years at Pixelgrade</h2><br />
                      <p className='whereto'>When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.</p><br />
                      <button style={{color:"white",backgroundColor:"#4CAF4F",border:"none",padding:"10px 25px",borderRadius:"5px"}}>Learn More </button>
                </div>
          </div>
      </main>
    </>
  )
}

export default App
