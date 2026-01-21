import { useState } from 'react'
import closedBox from './assets/images/lunch-box-closed.png'
import openBox from './assets/images/lunch-box-open.png'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="landing-container">
      {/* Decorative background elements */}
      <div className="bg-decoration decoration-1"></div>
      <div className="bg-decoration decoration-2"></div>
      <div className="bg-decoration decoration-3"></div>
      
      <div className="content">
        {/* Greeting Section */}
        <div className={`greeting-section ${isOpen ? 'expanded' : ''}`}>
          <h1 className="main-title">
            Chúc Cô Bác Sĩ <span className="highlight">Ngon Miệng</span> 🌸
          </h1>
          <p className="subtitle">
            Một bữa trưa thật ngon để tiếp thêm năng lượng cho ngày làm việc!
          </p>
        </div>

        {/* Lunch Box Interactive Section */}
        <div 
          className={`lunch-box-container ${isOpen ? 'opened' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="box-wrapper">
            <img 
              src={closedBox} 
              alt="Closed lunch box" 
              className={`lunch-box closed ${isOpen ? 'hidden' : ''}`}
            />
            <img 
              src={openBox} 
              alt="Delicious Vietnamese lunch" 
              className={`lunch-box opened ${isOpen ? 'visible' : ''}`}
            />
          </div>
          
          {!isOpen && (
            <div className="hover-hint">
              <span className="pulse-dot"></span>
              Nhấn hoặc di chuột vào để mở hộp
            </div>
          )}
        </div>

        {/* Message Section */}
        {isOpen && (
          <div className="message-section fade-in">
            <div className="message-card">
              <h2>🍱 Hôm nay có gì ngon?</h2>
              <ul className="menu-list">
                <li>🍚 Cơm tấm sườn nướng thơm phức</li>
                <li>🥚 Trứng ốp-la vàng ươm</li>
                <li>🥒 Rau củ tươi ngon, đầy màu sắc</li>
                <li>🥫 Nước mắm chua ngọt đậm đà</li>
              </ul>
              <p className="blessing">
                Chúc Cô Bác Sĩ có một bữa trưa ngon miệng, đầy năng lượng! 
                <br />
                Cảm ơn Cô vì những cống hiến hết mình cho bệnh nhân. 💝
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Được làm với ❤️ và sự trân trọng</p>
      </footer>
    </div>
  )
}

export default App
