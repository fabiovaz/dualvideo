"use client"

import { useEffect, useRef, useState } from "react"

export default function Home() {
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)
  const [isVideo2Active, setIsVideo2Active] = useState(false)
  const [isUserInteracted, setIsUserInteracted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const syncVideos = () => {
    if (video1Ref.current && video2Ref.current) {
      video2Ref.current.currentTime = video1Ref.current.currentTime
    }
  }

  useEffect(() => {
    syncVideos()
    if (isUserInteracted) {
      if (isVideo2Active) {
        video2Ref.current.muted = false
        video1Ref.current.muted = true
      } else {
        video2Ref.current.muted = true
        video1Ref.current.muted = false
      }
    }
  }, [isVideo2Active, isUserInteracted])

  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      setIsVideo2Active(true)
    }
  }

  const handleKeyUp = (e) => {
    if (e.code === "Space") {
      setIsVideo2Active(false)
    }
  }

  const handleTouchStart = () => {
    setIsVideo2Active(true)
  }

  const handleTouchEnd = () => {
    setIsVideo2Active(false)
  }

  const startVideos = () => {
    if (video1Ref.current && video2Ref.current) {
      video1Ref.current.play()
      video2Ref.current.play()
      setIsUserInteracted(true)
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  return (
    <>
      <button className="z-10 absolute inset-0 flex items-end py-8 justify-center bottom-0" onClick={startVideos}>
        <div className="text-center">
          <div className="size-20 mx-auto text-white fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 979.404 941.223" className="size-full">
              <path d="M0,202.5c1-8.1,1.7-16.2,3.1-24.2,12.1-70.7,47.5-125.6,111-160.9C135,5.9,157.6.7,181.6.7Q474.25.4,766.9,0c17.8,0,35.8-.1,53.3,2.5,29.5,4.4,55.4,18.1,78.3,37.1,40.4,33.5,66.1,76.4,75.7,127.8,12.9,68.9,2.6,133.7-39.7,191.4-25.6,34.9-59.1,58.8-100.1,72.5a96.43,96.43,0,0,1-30.1,5c-69.7.4-139.5,1.2-209.2,1.7-3.2,0-4.6,1.1-5.7,4a182.481,182.481,0,0,1-8.4,18.6c-2.7,5.2-7.1,6.4-13.8,4.6-5.5-1.5-9-5.3-8.6-10.6a69.128,69.128,0,0,1,2.3-12.7c14.4-51.8-20.9-100.1-76.3-96.5-29,1.9-58.2,25.4-63,52.2-3,16.9-3.5,34.4,3.1,51.1a24.042,24.042,0,0,1,1.6,5.2c1.2,5.8-1.5,10.9-7.2,13.9-4.9,2.6-10.5,2.1-13.8-3A118.424,118.424,0,0,1,395,444c-1.5-3.9-3.2-5.1-7.3-5.1q-89.1-.3-178.3-.9c-27.4-.2-54.5-2.1-80.3-12.3C91.6,410.9,63.2,385,40.3,352.6c-22-31.2-34.3-66.1-38.4-104C1.3,243.5.6,238.4,0,233.4Q0,218.1,0,202.5Zm913.3,86.6c-.5.6-1.1,1.2-1.6,1.9-37.2,45-83.4,70.9-143.3,69.9-48.6-.9-97.2-.3-145.8-.5a42.855,42.855,0,0,1-11.7-2,7.729,7.729,0,0,1-4.5-4c-3.7-9.3.2-16,10.1-16.9,10.6-.9,21.2-1.8,31.9-1.9,47.3-.5,94.5-.7,141.8-1.3a63.942,63.942,0,0,0,18.4-3.1c22.9-7.2,44.1-17.9,61.6-34.6,30.5-29.1,46.5-64.1,45.8-107-.4-23.7-4.3-45.8-16-66.4C882,91.6,857.1,68,822,56.4c-13.6-4.5-27.7-3.4-41.6-3.5-87.7-.9-175.4-2-263.2-1.8-114.4.3-228.7,1.7-343.1,2.5a64.535,64.535,0,0,0-27.4,6.5c-57.4,27.1-93.8,84.4-82.2,158,3.6,22.9,14.2,43.1,28.1,61.5,21.9,28.9,52.6,44,86.1,54.5a13.476,13.476,0,0,0,3.5.2c33,.3,65.9.5,98.9,1.1,28.6.5,57.2,1.3,85.9,2,4.8.1,9.3.7,11.4,6.1,3.3,8.4-1.9,16-11.9,16.7-7.1.5-14.3.9-21.4.9-49.1-.2-98.2-.4-147.3-.9-25.8-.2-49.8-7.3-72.3-19.8-18.7-10.4-34.4-24.5-48.9-40-2.9-3.1-5.5-6.5-8.3-9.8-.5.4-1.1.9-1.6,1.3.4,1.2.6,2.5,1.1,3.6,10.5,22.6,24.5,42.7,43.7,58.8,15.4,12.9,32.1,24.3,52.5,27.1,17.7,2.4,35.8,3.2,53.7,3.4,57.9.5,115.9.2,173.8.5,4.5,0,6.1-1.7,7.8-5.5,18.6-43.8,62-66.9,106.3-60.1,37.2,5.7,63.8,26.5,78.3,61.7,1.1,2.7,2.3,3.8,5.4,3.7,66.9-.4,133.8-.6,200.8-1.2,17-.1,33.7-2.7,49.1-11C874.4,354.3,899.2,326.5,913.3,289.1Z" fill="currentColor" />
              <path className={isVideo2Active ? 'translate-y-0' : 'translate-y-4'} d="M453.6,589.6c.3-2.7,1-5.5.9-8.2q-.75-60.15-1.6-120.3c-.2-14.5-.5-29-.3-43.4.3-18.8,13.8-33.5,34.1-38,13.5-3,32.9,7.6,39.6,22.2a35.713,35.713,0,0,1,2.9,13c1.2,35.6,2.2,71.2,3.2,106.8q2.1,78.3,4.1,156.7c.1,2.2.5,4.3.7,6.4.3,2.5-.5,6,3.2,6.3,2.9.2,6.7.1,8.6-1.6a89.056,89.056,0,0,0,12-13.3c13.9-18.3,27.3-36.9,41.3-55,6-7.7,12.5-15.4,23-17.3,22.6-4.1,45.5,6.9,47.7,35.1.7,8.7-.7,16.5-5.7,24.4-39.9,63.2-79.2,126.8-118.7,190.3-25.5,40.9-61.2,69.1-107.7,81-108.8,27.8-203.3-36.6-227.2-130-4.6-17.8-6.1-36.8-6.7-55.3-1.2-39.6-1-79.2-1.3-118.8a72.667,72.667,0,0,1,1.3-13.9c2.5-12.3,15.9-24,28.8-25.6,13.2-1.7,25.1.5,34.9,10.4a38.248,38.248,0,0,0,7.6,5.6c4,2.3,6.6,1.3,8.2-3a54.543,54.543,0,0,0,2-8.2c3.4-16.2,15.2-28.2,30.3-30.6,17.5-2.8,31.9,3.6,41,18.1,1.9,3.1,3.6,8,8.1,6.6,1.8-.5,3-5.5,3.2-8.5,1.4-20.1,16.3-36.1,37-38,16.2-1.5,32.5,7.9,39,29.1,1.4,4.6,2.1,9.4,3.2,14.1a20.9,20.9,0,0,0,1.6,2.9Z" fill="currentColor" />
              <path d="M154.2,233.1q-11.25-3.45-17.7-9l6.7-15a51.159,51.159,0,0,0,15.6,8.2,57.747,57.747,0,0,0,18.6,3.2c7.7,0,13.5-1.2,17.3-3.7s5.7-5.7,5.7-9.8a9.4,9.4,0,0,0-3.2-7.3,22.5,22.5,0,0,0-8.1-4.5c-3.3-1.1-7.7-2.3-13.3-3.7a177.221,177.221,0,0,1-19.2-5.6,31.676,31.676,0,0,1-12.6-8.8c-3.5-4-5.3-9.4-5.3-16.2a27.78,27.78,0,0,1,4.7-15.6c3.1-4.7,7.8-8.4,14.1-11.2s13.9-4.1,23-4.1a74.364,74.364,0,0,1,18.7,2.4,54.886,54.886,0,0,1,15.9,6.8l-6.1,15a59.125,59.125,0,0,0-14.2-6.1,52.272,52.272,0,0,0-14.4-2.1c-7.6,0-13.3,1.3-17,3.9s-5.6,6-5.6,10.2a9.4,9.4,0,0,0,3.2,7.3,20.974,20.974,0,0,0,8.1,4.4c3.3,1.1,7.7,2.3,13.3,3.7a135.849,135.849,0,0,1,19,5.6,33.054,33.054,0,0,1,12.7,8.8c3.5,4,5.3,9.3,5.3,16a27.78,27.78,0,0,1-4.7,15.6q-4.65,6.9-14.1,11.1c-6.3,2.8-14,4.1-23.1,4.1A85.9,85.9,0,0,1,154.2,233.1Z" fill="currentColor" />
              <path d="M301.2,160.1a36.823,36.823,0,0,1,14.3,14.2,41.908,41.908,0,0,1,5.2,21.2,42.549,42.549,0,0,1-5.2,21.3,36.418,36.418,0,0,1-14.3,14.3,41.732,41.732,0,0,1-20.7,5c-10.7,0-19.1-3.6-25.3-10.7v38.4H236.7V155.9h17.6v10.4a27.537,27.537,0,0,1,11.3-8.4,38.032,38.032,0,0,1,14.9-2.8A40.7,40.7,0,0,1,301.2,160.1Zm-6,53.3c4.4-4.5,6.6-10.5,6.6-17.9s-2.2-13.4-6.6-17.9a22.53,22.53,0,0,0-16.8-6.8,24.288,24.288,0,0,0-12,3,20.749,20.749,0,0,0-8.4,8.7,26.313,26.313,0,0,0-3.1,13,26.05,26.05,0,0,0,3.1,13,22.686,22.686,0,0,0,8.4,8.7,24.288,24.288,0,0,0,12,3A22.53,22.53,0,0,0,295.2,213.4Z" fill="currentColor" />
              <path d="M394.2,163.4c6.2,5.6,9.3,14,9.3,25.3V235H386v-9.6a21.178,21.178,0,0,1-9.7,7.9,38.61,38.61,0,0,1-15.2,2.7,38.085,38.085,0,0,1-15.6-3,23.392,23.392,0,0,1-10.3-8.4,21.573,21.573,0,0,1-3.6-12.2c0-7.1,2.6-12.8,7.9-17.1s13.6-6.4,25-6.4h20.4v-1.2c0-5.5-1.7-9.8-5-12.7-3.3-3-8.2-4.4-14.7-4.4a42.224,42.224,0,0,0-13.1,2.1,32.377,32.377,0,0,0-10.9,5.8L333.9,165a43.741,43.741,0,0,1,15-7.3,65.631,65.631,0,0,1,18.5-2.5C379.1,155,388,157.8,394.2,163.4Zm-16.9,56a17.461,17.461,0,0,0,7.6-9.1v-9.2H365.8c-10.7,0-16,3.5-16,10.5a9.339,9.339,0,0,0,4,8q4.05,3,11.1,3A24.093,24.093,0,0,0,377.3,219.4Z" fill="currentColor" />
              <path d="M442.1,230.9a39.31,39.31,0,0,1-15.3-14.4,40.152,40.152,0,0,1-5.5-21,39.546,39.546,0,0,1,5.5-20.9A39.036,39.036,0,0,1,442,160.2a45.936,45.936,0,0,1,22.1-5.2,43.361,43.361,0,0,1,20.5,4.7,31.192,31.192,0,0,1,13.3,13.6l-14.2,8.3a22.194,22.194,0,0,0-8.5-8.2,23.469,23.469,0,0,0-11.2-2.7c-6.9,0-12.6,2.2-17.2,6.7-4.5,4.5-6.8,10.5-6.8,18s2.2,13.5,6.7,18,10.2,6.7,17.3,6.7a23.755,23.755,0,0,0,11.2-2.7,22.948,22.948,0,0,0,8.5-8.2l14.2,8.3a32.2,32.2,0,0,1-13.4,13.7,42.114,42.114,0,0,1-20.4,4.8A45.762,45.762,0,0,1,442.1,230.9Z" fill="currentColor" />
              <path d="M586.9,201.4H524.8a21.923,21.923,0,0,0,8.5,13.9q6.9,5.1,17.1,5.1c8.7,0,15.9-2.9,21.5-8.6l9.9,11.4a33.719,33.719,0,0,1-13.5,9.6,48.659,48.659,0,0,1-18.4,3.3c-8.7,0-16.3-1.7-23-5.2a37.992,37.992,0,0,1-15.3-14.4,41.048,41.048,0,0,1-5.4-21,41.512,41.512,0,0,1,5.3-20.8,36.768,36.768,0,0,1,14.6-14.4,44.782,44.782,0,0,1,41.7-.1A35.79,35.79,0,0,1,582,174.6a43.692,43.692,0,0,1,5.1,21.4A37.1,37.1,0,0,1,586.9,201.4Zm-54.8-26.3a22.243,22.243,0,0,0-7.5,14h44.9a21.563,21.563,0,0,0-7.3-13.9c-4.1-3.6-9.1-5.3-15.1-5.3A21.787,21.787,0,0,0,532.1,175.1Z" fill="currentColor" />
              <path d="M669.5,160.1a36.823,36.823,0,0,1,14.3,14.2,41.908,41.908,0,0,1,5.2,21.2,42.549,42.549,0,0,1-5.2,21.3,36.418,36.418,0,0,1-14.3,14.3,41.732,41.732,0,0,1-20.7,5,38.032,38.032,0,0,1-14.9-2.8,28.684,28.684,0,0,1-11.3-8.4V235H605V125.1h18.5v40.4a31.328,31.328,0,0,1,11.2-7.9,36.153,36.153,0,0,1,14.1-2.7A42.936,42.936,0,0,1,669.5,160.1Zm-6,53.3c4.4-4.5,6.6-10.5,6.6-17.9s-2.2-13.4-6.6-17.9a22.53,22.53,0,0,0-16.8-6.8,24.288,24.288,0,0,0-12,3,20.749,20.749,0,0,0-8.4,8.7,26.314,26.314,0,0,0-3.1,13,26.05,26.05,0,0,0,3.1,13,22.686,22.686,0,0,0,8.4,8.7,24.288,24.288,0,0,0,12,3A22.53,22.53,0,0,0,663.5,213.4Z" fill="currentColor" />
              <path d="M762.5,163.4c6.2,5.6,9.3,14,9.3,25.3V235H754.3v-9.6a21.178,21.178,0,0,1-9.7,7.9,38.61,38.61,0,0,1-15.2,2.7,38.085,38.085,0,0,1-15.6-3,23.392,23.392,0,0,1-10.3-8.4,21.573,21.573,0,0,1-3.6-12.2c0-7.1,2.6-12.8,7.9-17.1s13.6-6.4,25-6.4h20.4v-1.2c0-5.5-1.7-9.8-5-12.7-3.3-3-8.2-4.4-14.7-4.4a42.224,42.224,0,0,0-13.1,2.1,32.377,32.377,0,0,0-10.9,5.8L702.2,165a43.74,43.74,0,0,1,15-7.3,65.631,65.631,0,0,1,18.5-2.5C747.4,155,756.3,157.8,762.5,163.4Zm-16.9,56a17.461,17.461,0,0,0,7.6-9.1v-9.2H734.1c-10.7,0-16,3.5-16,10.5a9.339,9.339,0,0,0,4,8q4.05,3,11.1,3A24.093,24.093,0,0,0,745.6,219.4Z" fill="currentColor" />
              <path d="M841.2,155v17.6a22.923,22.923,0,0,0-4.3-.4c-7.2,0-12.8,2.1-16.9,6.3s-6.1,10.2-6.1,18.1V235H795.4V155.9H813v11.6C818.4,159.2,827.8,155,841.2,155Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </button>
      {!isPlaying && (
        <button className="z-20 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={startVideos}>
          <div className="text-center">
            <h1 className="text-white text-2xl font-bold">Clique aqui para começar</h1>
          </div>
        </button>
      )}
      <div className="z-0 relative h-screen w-screen pointer-events-none">
        <video
          ref={video1Ref}
          src="/video1.mp4"
          className={`absolute top-0 left-0 size-full object-cover transition-opacity duration-100 ${ isVideo2Active ? "opacity-0" : "opacity-100" }`}
          loop
          muted
        />

        <video
          ref={video2Ref}
          src="/video2.mp4"
          className={`absolute top-0 right-0 size-full object-cover transition-opacity duration-100 ${ isVideo2Active ? "opacity-100" : "opacity-0" }`}
          loop
          muted
        />
      </div>
    </>
  );
}
