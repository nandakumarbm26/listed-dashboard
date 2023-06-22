import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavItem({ title, location, open, lg = false }: any) {
	const router = useRouter();
	const [place, setPlace] = useState(false);
	useEffect(() => {
		{
            console.log(router.asPath.slice(1))
			setPlace(router.asPath.slice(1)===title.toLowerCase());
		}
	});
	return (
		<Link href={`/${title.toLowerCase()}`} className={`flex ${place?"font-bold":"font-extralight"}  gap-2 text-lg`}>
			<Image
				src={location}
				height={18}
				width={18}
				alt={title}
				className={`${lg ? "lg:hidden" : ""}`}
			/>
			<span className={` ${open ? "inline" : "hidden "}  lg:inline`}>
				{title}
			</span>
		</Link>
	);
}
