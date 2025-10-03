import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import '../styles/home.css';

function App() {
  return (
    <div className='home-class'>
        <div className='box-list'>
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
                        <div className='about-project-content'>
                            <div className='box-inside'>
                            <div className='feature-box'>
                                    <span className='feature'>Colors, Fonts, Cursors</span>
                                    <span className='feature-desc'>Customize your colors, fonts, and cursors to match your vibe! Make your page truly yours – bold, minimal, playful or aesthetic – let every detail reflect your unique style.</span>
                                </div>
                                <div className='feature-box'>
                                    <span className='feature'>Avatars, Banners & Backgrounds</span>
                                    <span className='feature-desc'>Personalize your page with custom avatars, banners & backgrounds. Gifs/Images/Videos doesnt metter!</span>
                                </div>
                                <div className='feature-box'>
                                    <span className='feature'>Music</span>
                                    <span className='feature-desc'>Share your favorite music on your profile and bring your page to life! Let your followers vibe with your taste and make your profile truly reflect who you are.</span>
                                </div>
                                <div className='feature-box'>
                                    <span className='feature'>Social Platforms</span>
                                    <span className='feature-desc'>Link your other social media accounts to your page and make sure everyone sees them! Let the world know where else they can find you.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='source-box-home'>
                    <div className='box-title'>
                        <Icon icon="material-symbols:help"/>
                        <span>About the Project</span>
                    </div>
                    <div className='about-project-content'>
                        <div className='box-inside'>
                            <div className='queres'>
                                <span>Developed by: <a href='https://boykissing.dev/'>Abi</a></span>
                            </div>
                            <div className='queres'>
                                <span>Source Code: <a href='https://github.com/abithepawlicker/bionyaw'>
                                <div className='link-icon'>
                                    <Icon icon="mdi:github"/>GitHub
                                </div>
                                </a></span>
                            </div>
                            <div className='queres'>
                                <span>Version: </span> <span className='version-value'>1.0.0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default App
