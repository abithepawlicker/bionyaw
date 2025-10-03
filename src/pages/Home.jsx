import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import '../styles/home.css';

function App() {
  return (
    <div className='home-class'>
        <div className='home-box-main'>
            <div className='home-box-banner'>
                <img src='https://cdn.nyaw.org/nyaw/web/icon.png'/>
            </div>
            <div className='box-content'>
                <div className='home-box-title'>
                    <span>bio.nyaw.org</span><br/>
                    <small>Join fediverse instance! <a href="https://nyaw.org/">Nyaw</a></small>
                </div>
                <div className='box-inside'>
                    <span className='main-homebox-description'>NyawBio is your essential platform for a customizable bio-page. Unify your digital identity with links, music, and a unique design :3</span>
                </div>
                <div className='home-box-main-buttons'>
                    <button className='join-btn'>Join NyawBio</button>
                    <button className='signin-btn'>Sign in</button>
                </div>
            </div>
        </div>
            <div className='home-boxes-row'>
                <div className='showcase-box-home'>
                    <div className='box-title'>
                        <Icon icon="material-symbols:webhook"/>
                        <span>NyawBio Features</span>
                    </div>
                </div>
            <div className='source-box-home'>
                <div className='box-title'>
                    <Icon icon="material-symbols:help"/>
                    <span>About the Project</span>
                </div>
            </div>
        </div>

    </div>
  )
}
export default App
