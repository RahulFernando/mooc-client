import React from 'react'
import './footer.css';

export default function 
() {
  return (
    <div>
        <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p>&copy; 2023 My Company</p>
          </div>
          <div className="col-sm-6">
            <ul className="list-inline text-right">
              <li className="list-inline-item"><a href="#">Home</a></li>
              <li className="list-inline-item"><a href="#">About</a></li>
              <li className="list-inline-item"><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
