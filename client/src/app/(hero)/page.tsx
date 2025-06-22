import NavBar from "@/components/hero/NavBar"
import MainContent from "@/components/hero/MainContent"
import MobileContent from "@/components/hero/MobileContent"

export default function Component() {
  return (
    <div className="min-h-screen bg-white text-black lg:overflow-hidden">
      <NavBar/>
      <div className="hidden lg:flex">
        <MainContent/>
      </div>
      <div className="flex lg:hidden">
        <MobileContent/>
      </div>
    </div>
  )
}
