import Image from "next/image";

export default function DashHeader({ open, setOpen,title }: any) {
	return (
		<div className="flex justify-between ">
			<div className=" flex items-center gap-1 text-2xl font-bold text-black ">
				<div className="text-3xl text-white bg-black hover:text-black cursor-pointer hover:bg-white font-bold  p-1 rounded-full md:hidden"
				onClick={()=>{setOpen(!open)}}>
					B.
				</div>
				{title}
			</div>
			<div className="flex gap-6">
				<div className="relative flex w-max  items-center">
					<input
						type="text"
						className="bg-white hidden md:block placeholder:text-lightgray px-3 py-1 rounded-[10px]"
						placeholder="Search..."
					/>
					<Image
						className=" md:absolute  right-2"
						src="/search.svg"
						width={15}
						height={15}
						alt="search"
					/>
				</div>
				<Image src="/notify.svg" width={15} height={15} alt="search" />
				<Image src="/dp.svg" width={30} height={30} alt="search" />
			</div>
		</div>
	);
}
