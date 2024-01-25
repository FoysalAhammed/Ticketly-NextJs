import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center   wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/' className="w-36 font-bold text-lime-500	 text-2xl">
         <p>Ticektly</p>
        </Link>

        <p>2023 Ticketly. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer