import Image from "next/image";

export default function InfoCard({
	title,
	subTitle,
	iconPath,
	className,
}: any) {
	return (
		<div className={"flex rounded-[30px] max-w-[200px] justify-center md:gap-5 w-max h-max p-2 md:p-5 " + className}>
			<div className="mt-[20%]">
				<div className=" text-black text-xs">{title}</div>
				<div className="text-black text-base font-bold">{subTitle}</div>
			</div>
			<Image
				className="mb-[20%]"
				src={iconPath}
				height={20}
				width={20}
				alt="sales"
			/>
		</div>
	);
}
