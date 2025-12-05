"use client"

import { useRef } from "react"
import MenuDrawer from "@/components/menu-drawer"
import Navbar from "@/components/navbar"
import HomeSection from "@/components/sections/home-section"
import HistorySection from "@/components/sections/history-section"
import TrustedBySection from "@/components/sections/trusted-by-section"
import ContactSection from "@/components/sections/contact-section"

export default function Page() {
  const homeRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex w-full min-h-screen bg-black">

      <main className="flex-1 overflow-hidden">
        <Navbar />
        <div className="w-full overflow-hidden">
          <HomeSection ref={homeRef} />

          <HistorySection />
          
          <TrustedBySection />

          <ContactSection />
        </div>
      </main>
    </div>
  )
}
