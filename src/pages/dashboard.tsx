import Image from "next/image";
import { Inter } from "next/font/google";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import DashHeader from "@/components/DashHeader";
import InfoCard from "@/components/InfoCard";
const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic";
import { PieChart } from "@/components/PieChart";

const DynamicChartComponent = dynamic(() => import("../components/Chart"), {
	ssr: false,
});

export default function Dashboard() {
	const { data: session, status } = useSession();
	const [open, setOpen] = useState(false);
	// if (status !== "authenticated") {
	// 	return <p>Loading...</p>;
	// }

	// if (session) {
	// 	return (
	// 		<>
	// 			<p>Welcome, {session.user?.email}!</p>
	// 			<button onClick={() => signOut()}>Sign out</button>
	// 		</>
	// 	);
	// }
	return (
		<main className="w-full p-3  md:p-5 md:flex-row h-screen overflow-y-scroll  gap-10 md:gap-5 flex  bg-background ">
			<Navigation open={open} setOpen={setOpen} />
			<div className="w-full flex flex-col h-full p-1 md:p-3 gap-5">
				<DashHeader open={open} setOpen={setOpen} title="Dashboard"/>
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
				<div className="w-full lg:h-[50%] flex justify-center">
					<DynamicChartComponent />
				</div>
				<div className="flex flex-col gap-5 md:flex-row justify-around ">
					<div className="flex text-black flex-col gap-2 bg-white p-5 w-full rounded-[10px]">
						<div className="flex justify-between gap-10 items-center">
							Top Products{" "}
							<div className="flex gap-1 text-xs text-lightgray">
								May-June 2023{" "}
								<Image
									src="/down-cheveron.svg"
									height={10}
									width={10}
									alt="chev"
								/>
							</div>
						</div>
						<div className="flex gap-5">
							<div className="w-[200px] lg:h-[200px] flex justify-center">
								<PieChart />
							</div>
							<div className="flex flex-col gap-3 justify-center">
								<div className="flex gap-2">
									<div className="h-[10px] w-[10px] mt-1 bg-green rounded-full"></div>
									<div className="text-sm">
										Basic Tees <div className="text-xs text-lightgray">50%</div>
									</div>
								</div>
								<div className="flex gap-2">
									<div className="h-[10px] w-[10px] mt-1 bg-yellow rounded-full"></div>
									<div className="text-sm">
										Custom Short Pants
										<div className="text-xs text-lightgray">50%</div>
									</div>
								</div>
								<div className="flex gap-2 items-start">
									<div className="h-[10px] w-[10px] mt-1 bg-brown rounded-full"></div>
									<div className="text-sm">
										Super Hoodies{" "}
										<div className="text-xs text-lightgray">50%</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex w-full text-black flex-col gap-2 bg-white p-5 rounded-[10px]">
						<div className="flex justify-between gap-10 items-center">
							Today Schedule
							<div className="flex gap-1 text-xs text-lightgray">
								See all
								<Image
									className=" -rotate-90"
									src="/down-cheveron.svg"
									height={10}
									width={10}
									alt="chev"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-3 h-full justify-around ">
							<div className="flex gap-2">
								<div className="w-[5px] mt-1 h-full bg-green "></div>
								<div className="text-sm">
									Meeting with suppliers from Kuta Bali
									<div className="text-xs text-lightgray">
										14.00-15.00
										<br />
										at Sunset Road, Kuta, Bali
									</div>
								</div>
							</div>
							<div className="flex gap-2">
								<div className=" w-[5px] mt-1 h-full bg-purple "></div>
								<div className="text-sm">
									Check operation at Giga Factory 1
									<div className="text-xs text-lightgray">
										18.00-20.00
										<br />
										at Central Jakarta
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
