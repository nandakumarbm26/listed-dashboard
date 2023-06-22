import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import DashHeader from "@/components/DashHeader";
import InfoCard from "@/components/InfoCard";



export default function Dashboard() {
	const { data: session, status } = useSession();
	const [open, setOpen] = useState(false);
	
	return (
		<main className="w-full p-3  md:p-5 md:flex-row h-screen overflow-y-scroll  gap-10 md:gap-5 flex  bg-background ">
			<Navigation open={open} setOpen={setOpen} />
			<div className="w-full flex flex-col h-full p-1 md:p-3 gap-5">
				<DashHeader open={open} setOpen={setOpen} title="Transaction"/>
                <div className="flex justify-around flex-wrap gap-5 ">
					<InfoCard
						title="Total Sales"
						subTitle="$2,298,756"
						iconPath="/tag.svg"
						className=" bg-lightgreen"
					/>
					<InfoCard
						title="Total Sales"
						subTitle="$2,298,756"
						iconPath="/crown.svg"
						className=" bg-lightyelloW"
					/>
					<InfoCard
						title="Total Sales"
						subTitle="$2,298,756"
						iconPath="/like.svg"
						className=" bg-lightbrown"
					/>
					<InfoCard
						title="Total Sales"
						subTitle="$2,298,756"
						iconPath="/sales.svg"
						className=" bg-lightpurple"
					/>
				</div>
			</div>
		</main>
	);
}
