import React from 'react'
import Layout from '../components/layout/Layout'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import videojs from 'video.js';


function VideoDetails() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

   // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };
  return (
   <Layout>
     <section>

    <div className="player-layout container">
      <div id="video-player">
        <div className="main-video-wraper">
        <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />

          {/* <img src="images/banner.png" alt="" /> */}
        </div>

        <div className="video-details">
          <div className="ratings-main">
            <div className="details">
              <span className="view">1M views</span>
              <span className="post-time">2021</span>
            </div>
            <div className="ratings">
              <span className="material-icons"> grade </span>
              <span className="material-icons"> grade </span>
              <span className="material-icons"> grade </span>
              <span className="material-icons"> grade </span>
              <span className="material-icons"> star_outline </span>
              <small>4.5</small>
            </div>
          </div>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Explicabo quibusdam similique sunt autem sed optio ipsum
            reiciendis ab id voluptas vero aliquam, quia a maiores harum odio.
            Earum, dolores tempore.
          </p>
        </div>
      </div>
      <div className="other-video">
        <h3 className="title stk">Other video</h3>
        <div className="other-video-item">
          <div className="thumbnail">
            <img src="images/banner.png" alt="" />
          </div>
          <div className="des">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className="details">
              <span className="view">1M views</span>
              <div className="ratings">
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> star_outline </span>
                <small>4.5</small>
              </div>
            </div>
          </div>
        </div>
        <div className="other-video-item">
          <div className="thumbnail">
            <img src="images/banner.png" alt="" />
          </div>
          <div className="des">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className="details">
              <span className="view">1M views</span>
              <div className="ratings">
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> star_outline </span>
                <small>4.5</small>
              </div>
            </div>
          </div>
        </div>
        <div className="other-video-item">
          <div className="thumbnail">
            <img src="images/banner.png" alt="" />
          </div>
          <div className="des">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className="details">
              <span className="view">1M views</span>
              <div className="ratings">
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> star_outline </span>
                <small>4.5</small>
              </div>
            </div>
          </div>
        </div>
        <div className="other-video-item">
          <div className="thumbnail">
            <img src="images/banner.png" alt="" />
          </div>
          <div className="des">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className="details">
              <span className="view">1M views</span>
              <div className="ratings">
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> star_outline </span>
                <small>4.5</small>
              </div>
            </div>
          </div>
        </div>
        <div className="other-video-item">
          <div className="thumbnail">
            <img src="images/banner.png" alt="" />
          </div>
          <div className="des">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className="details">
              <span className="view">1M views</span>
              <div className="ratings">
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> star_outline </span>
                <small>4.5</small>
              </div>
            </div>
          </div>
        </div>
        <div className="other-video-item">
          <div className="thumbnail">
            <img src="images/banner.png" alt="" />
          </div>
          <div className="des">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className="details">
              <span className="view">1M views</span>
              <div className="ratings">
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> star_outline </span>
                <small>4.5</small>
              </div>
            </div>
          </div>
        </div>
        <div className="other-video-item">
          <div className="thumbnail">
            <img src="images/banner.png" alt="" />
          </div>
          <div className="des">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className="details">
              <span className="view">1M views</span>
              <div className="ratings">
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> star_outline </span>
                <small>4.5</small>
              </div>
            </div>
          </div>
        </div>
        <div className="other-video-item">
          <div className="thumbnail">
            <img src="images/banner.png" alt="" />
          </div>
          <div className="des">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className="details">
              <span className="view">1M views</span>
              <div className="ratings">
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> star_outline </span>
                <small>4.5</small>
              </div>
            </div>
          </div>
        </div>
        <div className="other-video-item">
          <div className="thumbnail">
            <img src="images/banner.png" alt="" />
          </div>
          <div className="des">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className="details">
              <span className="view">1M views</span>
              <div className="ratings">
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> star_outline </span>
                <small>4.5</small>
              </div>
            </div>
          </div>
        </div>
        <div className="other-video-item">
          <div className="thumbnail">
            <img src="images/banner.png" alt="" />
          </div>
          <div className="des">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className="details">
              <span className="view">1M views</span>
              <div className="ratings">
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> grade </span>
                <span className="material-icons"> star_outline </span>
                <small>4.5</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </Layout>
  
  )
}

export default VideoDetails