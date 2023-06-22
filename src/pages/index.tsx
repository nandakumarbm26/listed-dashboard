import Image from "next/image";
import { Inter } from "next/font/google";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const { data: session, status } = useSession();

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
		<main className="w-full  flex-col md:flex-row  gap-10 md:gap- flex min-h-screen bg-background">
			<div className=" w-full md:w-[45%]  min-h-[20vh] bg-black md:min-h-screen  flex md:justify-center items-center">
			<Link href="/dashboard">
				<div className="text-6xl ml-5 font-semibold text-white ">Board.</div></Link>
			</div>
			<div className="w-full p-5 text-black flex justify-center items-center bg-background">
				<div className="flex flex-col gap-5 w-full max-w-[400px]">
					<div>
						<div className="text-4xl font-normal  ">Sign In</div>
						<div className="mt-1 text-base ">Sign in with your account</div>
					</div>
					<div className="flex gap-5">
						<button
							className=" text-secondaryText flex gap-1 justify-center items-center rounded-[10px] text-xs px-3 py-1 bg-white"
							onClick={() => signIn("google")}
						>
							<Image src="/google.svg" width={20} height={20} alt="google" />
							Sign in with Google
						</button>
						<button
							onClick={() => signIn("apple")}
							className=" text-secondaryText flex gap-1 justify-center items-center rounded-[10px] text-xs px-3 py-1 bg-white"
						>
							<Image src="/apple.svg" width={12} height={12} alt="google" />
							Sign in with Apple
						</button>
					</div>
					<div className="w-full bg-white p-[30px] rounded-[10px]">
						<form
							className="flex flex-col gap-5"
							onSubmit={(e) => {
								e.preventDefault();
								// console.log(e.target[0].value);
								// signIn("credentials", {
								// 	email: e.target[0].value,

								// 	password:e.target[1].value,
								// 	callbackUrl: "/",
								// })
							}}
						>
							<div>
								<label className="text-base">Email</label>
								<input
									className="block mt-1 w-full py-1 px-2 bg-background rounded-[10px] h-[40px]"
									type="email"
									name="email"
									placeholder="Email"
								/>
							</div>
							<div>
								<label className="text-base">Password</label>
								<input
									className=" mt-1 block w-full py-1 px-2 bg-background rounded-[10px] h-[40px]"
									type="password"
									name="password"
									placeholder="Password"
								/>
							</div>
							<Link href="/dashboard">
							<button
								className="w-full bg-black text-white py-1 rounded-[10px] h-[40px]"
								// type="submit"
							>
								Sign In
							</button></Link>
						</form>
					</div>
					<div className="text-sm w-full text-secondaryText text-center">
						Don&apos;t have an account?{" "}
						<Link
							className=" underline text-blue-400 hover:text-secondaryText"
							href="#"
						>
							Register now
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
