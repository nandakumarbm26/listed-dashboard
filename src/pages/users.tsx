import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import DashHeader from "@/components/DashHeader";
import InfoCard from "@/components/InfoCard";
import axios from "axios";
import Image from "next/image";

export default function Dashboard() {
	const [data, setData] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/users"
			);
			setData(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	const { data: session, status } = useSession();
	const [open, setOpen] = useState(false);
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<main className="w-full p-3  md:p-5 md:flex-row h-screen overflow-y-scroll  gap-10 md:gap-5 flex  bg-background ">
			<Navigation open={open} setOpen={setOpen} />
			<div className="w-full flex flex-col h-full p-1 md:p-3 gap-5">
				<DashHeader open={open} setOpen={setOpen} title="Users" />
<h2 className="text-black">Users fetched using Axios library from https://jsonplaceholder.typicode.com/users</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-black">
					{data.map((user: any) => (
						<div
							key={user?.id}
							className={
								"flex rounded-[30px]  justify-center md:gap-5 w-full h-max p-2 md:p-5 bg-lightgreen"
							}
						>
							<div >
								<h2>{user?.name}</h2>
								<p>Email: {user?.email}</p>
								<p>Phone: {user?.phone}</p>
							</div>
							<Image
								className="mb-[20%]"
								src="/sales.svg"
								height={20}
								width={20}
								alt="sales"
							/>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
