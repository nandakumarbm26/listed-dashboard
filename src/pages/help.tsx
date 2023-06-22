

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import DashHeader from "@/components/DashHeader";
import Link from "next/link";



export default function Dashboard() {
	const { data: session, status } = useSession();
	const [open, setOpen] = useState(false);
	
	return (
		<main className="w-full p-3  md:p-5 md:flex-row h-screen overflow-y-scroll  gap-10 md:gap-5 flex  bg-background ">
			<Navigation open={open} setOpen={setOpen} />
			<div className="w-full flex flex-col h-full p-1 md:p-3 gap-5">
				<DashHeader open={open} setOpen={setOpen} title="Help"/>
				<div className="flex flex-col items-center justify-center   bg-gray-100">
      <div className=" w-max max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Help Center</h1>
        <p className="text-gray-600 mb-4">
          Welcome to our Help Center! If you have any questions or need assistance, please feel free to reach out to
          our support team.
        </p>
        <div className="flex flex-col space-y-4 text-black">
          <div className="bg-gray-200 text-black px-1 h-8 rounded">Check out the most recent updates and news from the Chrome Blog</div>
          <div className="bg-gray-200 h-8 rounded">Check out the most recent updates and news from the Chrome Blog</div>
          <div className="bg-gray-200 h-8 rounded">Check out the most recent updates and news from the Chrome Blog</div>
          <div className="bg-gray-200 h-8 rounded">Check out the most recent updates and news from the Chrome Blog</div>
          <div className="bg-gray-200 h-8 rounded">Check out the most recent updates and news from the Chrome Blog</div>
        </div>
       <Link href="mailto:nandakumarbm26@gmail.com"> <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact Support</button>
      </Link></div>
    </div>
			</div>
		</main>
	);
}
