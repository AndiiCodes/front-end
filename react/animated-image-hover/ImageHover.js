import React from 'react'

export default function ImageHover() {
  return (
    <div>
    <div className="image-grid">
  <div className="image-card image-portrait">
    <h2 className="image-header">Hong Kong</h2>
    <img
      src="https://images.unsplash.com/photo-1686148016905-b08dafa868af?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYzNDQ1NjF8&ixlib=rb-4.0.3&q=85"
      data-scroll=""
      data-scroll-speed={-3}
    />
  </div>
  <div className="image-card image-landscape">
    <h2 className="image-header">Rome</h2>
    <img
      src="https://images.unsplash.com/photo-1684443726764-6a236cb33ccb?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYzNDQ1MDJ8&ixlib=rb-4.0.3&q=85"
      data-scroll=""
      data-scroll-speed={-3}
    />
  </div>
  <div className="image-card image-landscape">
    <h2 className="image-header">Paris</h2>
    <img
      src="https://images.unsplash.com/photo-1683784445501-a0732d1c6159?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYzNDQ1OTR8&ixlib=rb-4.0.3&q=85"
      data-scroll=""
      data-scroll-speed={-3}
    />
  </div>
  <div className="image-card image-portrait">
    <h2 className="image-header">New York</h2>
    <img
      src="https://images.unsplash.com/photo-1685543151238-6a1d821eafd0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYzNDQzMDh8&ixlib=rb-4.0.3&q=85"
      data-scroll=""
      data-scroll-speed={-3}
    />
  </div>
</div>

    </div>
  )
}
