import './App.css';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <nav className='Topbar'>
          <img src='http://pngimg.com/uploads/amazon/amazon_PNG25.png' alt='Amazon Logo'/>
        </nav>
      </header>

      <div className='MainContainer'>
        <div className='ProductPreview'>
          <img src='https://m.media-amazon.com/images/I/610q610KVfL._AC_SX569_.jpg' alt='Product Preview'/>
        </div>

        <div className='ProductDetail'>
          <div className='TopText'>
            <h1 className='Tittle'>FitBit 19 - The Smartest Watch</h1>
            <p className='ProductDescription'>Meet Fitbit 19 — a smartwatch that elevates every moment. Use your voice to create alarms, set bedtime reminders, check the weather or start an exercise with Amazon Alexa Built-in, plus see the time or your stats at a glance with always-on display mode.* Take your look from the gym to the office with its modern and versatile design. Play your favorite music and podcasts with Spotify.** Plus get Fitbit Pay™, a daily Sleep Score, notifications and 24/7 heart rate for an experience that revolves around you.</p>
          </div>

          <div className='ColorContainer'>
            <h2 className='SubTittle'>Select Color</h2>
            <div className='ColorOptions'>
              <img src='https://m.media-amazon.com/images/I/610q610KVfL._AC_SX569_.jpg' alt='Product Preview'/>
              <img src='https://m.media-amazon.com/images/I/71jiGaztijL._AC_SX569_.jpg'/>
              <img src='https://m.media-amazon.com/images/I/61L5Jko2QqL._AC_SX569_.jpg'/>
              <img src='https://m.media-amazon.com/images/I/61tH7Ln5xJL._AC_SX569_.jpg'/>  
            </div>
          </div>

          <div className='BuyContainer'>
            <button type="button" class="btn btn-success">Buy Now</button>
          </div>

        </div>
      </div>
      <footer className="AppFooter">
        Footer
      </footer>

    </div>
  );
}

export default App;
