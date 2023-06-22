import Image from "next/image";
import { useRouter } from "next/router";
import NavItem from "./NavItem";

export default function Navigation({ open, setOpen }: any) {

	return (
		<div
			className={` w-screen h-screen  lg:w-full fixed top-0  md:static md:max-w-[300px] overflow-y-scroll md:h-[95vh] p-10 sm:p-5 lg:p-10  flex flex-col justify-between md:rounded-[5px]  lg:rounded-[30px] bg-black transition-all duration-300  ${
				open ? "left-0 w-full " : "-left-[800px] md:w-max"
			}`}
		>
			<div className="flex flex-col gap-10">
				<div
					className="text-4xl font-bold text-white "
					onClick={() => {
						setOpen(!open);
					}}
				>
					B
					<span className={` ${open ? "inline" : "hidden "}  lg:inline`}>
						oard
					</span>
					.
				</div>
				<div className="flex flex-col gap-5">
					<NavItem title="Dashboard" location="/dashboard.svg" open={open} />
					<NavItem
						title="Transaction"
						location="/transaction.svg"
						open={open}
					/>
					<NavItem title="Schedule" location="/schedule.svg" open={open} />
					<NavItem title="Users" location="/user.svg" open={open} />
					<NavItem title="Settings" location="/setting.svg" open={open} />
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<NavItem title="Help" location="/setting.svg" open={open} lg />
				<NavItem title="Contact Us" location="/setting.svg" open={open} lg />
			</div>
		</div>
	);
}
