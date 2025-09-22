import "../Styles/Animated-balls.css"

export default function AnimatedBalls({ className = "" }) {
  return (
    <div className={`animate-ball relative ${className}`}>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
    </div>
  )
}
