import React from 'react'
import HeaderTop from './HeaderTop'
import MenuTop from './MenuTop'
import MainMenu from './MainMenu'

export default function Header() {
  return (
    <div>
        <header className="vs-header header-layout1">
        <HeaderTop/>
        <div className="container">
          <MenuTop/>
        </div>
        <div className="sticky-wrapper">
          <div className="sticky-active">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <MainMenu/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
