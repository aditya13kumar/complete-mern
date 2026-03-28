import React from 'react'
import '../styles/reels.css'

const sampleVideos = [
  {
    id: 1,
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    description: 'Fresh organic salads and healthy bowls — order from nearby stores and get quick delivery!',
    storeUrl: 'https://example.com/store/1'
  },
  {
    id: 2,
    src: 'https://ik.imagekit.io/l676rljeyo/4058820-sd_338_640_25fps_gaZ9bXCo_.mp4',
    description: 'Delicious street food specials with exclusive partner discounts.',
    storeUrl: 'https://example.com/store/2'
  },
  {
    id: 3,
    src: 'https://ik.imagekit.io/l676rljeyo/8468211-hd_1080_1920_30fps_tVT5_jmno.mp4',
    description: 'Try our new spicy burger — limited time offer at participating stores.',
    storeUrl: 'https://example.com/store/3'
  }
]

export default function Reels({ videos = sampleVideos }) {
  return (
    <div className="reels-container" aria-label="video reels">
      {videos.map((v) => (
        <div className="reel" key={v.id}>
        <video
            src={v.src}
            playsInline
            muted
            autoPlay
            loop
            preload="metadata"
          />

          <div className="reel-overlay">
            <div className="description" title={v.description}>{v.description}</div>
            <a className="visit-btn" href={v.storeUrl} target="_blank" rel="noreferrer">Visit Store</a>
          </div>
        </div>
      ))}
    </div>
  )
}
