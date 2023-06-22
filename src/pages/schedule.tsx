import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import DashHeader from "@/components/DashHeader";



export default function Dashboard() {
	const { data: session, status } = useSession();
	const [open, setOpen] = useState(false);
	
	return (
		<main className="w-full p-3  md:p-5 md:flex-row h-screen overflow-y-scroll  gap-10 md:gap-5 flex  bg-background ">
			<Navigation open={open} setOpen={setOpen} />
			<div className="w-full flex flex-col h-full p-1 md:p-3 gap-5">
				<DashHeader open={open} setOpen={setOpen} title="Schedule"/>
				
			</div>
		</main>
	);
}
