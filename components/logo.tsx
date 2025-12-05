"use client"

interface LogoProps {
  size?: number
}

const Logo = ({ size = 64 }: LogoProps) => {
  return (
    <img width={size} height={size} src={"asaru-guard.png"}></img>
  )
}

export default Logo
