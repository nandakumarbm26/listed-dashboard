import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import DashHeader from "@/components/DashHeader";
import Link from "next/link";

export default function Dashboard() {
	const { data: session, status } = useSession();
	const [open, setOpen] = useState(false);
	const [email, setEmail] = useState("example@example.com");
	const [message, setMsg] = useState("Hello from My Website");
	const [name, setName] = useState(
		"Dear recipient,\n\nI hope this email finds you well."
	);

	// const mailtoLink = ;

	return (
		<main className="w-full p-3  md:p-5 md:flex-row h-screen overflow-y-scroll  gap-10 md:gap-5 flex  bg-background ">
			<Navigation open={open} setOpen={setOpen} />
			<div className="w-full flex flex-col h-full p-1 md:p-3 gap-5">
				<DashHeader open={open} setOpen={setOpen} title="Contact us" />
				<div className="flex text-black  flex-col items-center justify-center   bg-gray-100">
					<div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6">
						<h1 className="text-2xl font-bold mb-4">Contact Us</h1>
						<p className="text-gray-600 mb-4">
							Have a question or need assistance? Fill out the form below and
							we&apos;ll get back to you as soon as possible.
						</p>
						<form>
							<div className="mb-4">
								<label
									htmlFor="name"
									className="block text-gray-700 font-semibold mb-2"
								>
									Your Name
								</label>
								<input
									id="name"
									onChange={(e) => setName(e.target.value)}
									type="text"
									className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
									placeholder="Enter your name"
								/>
							</div>
							<div className="mb-4">
								<label
									htmlFor="email"
									className="block text-gray-700 font-semibold mb-2"
								>
									Your Email
								</label>
								<input
									id="email"
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
									placeholder="Enter your email"
								/>
							</div>
							<div className="mb-4">
								<label
									htmlFor="message"
									className="block text-gray-700 font-semibold mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
									//   rows="4"
									onChange={(e) => setMsg(e.target.value)}
									placeholder="Enter your message"
								></textarea>
							</div>
							<Link
								className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
								href={`mailto:${email}?subject=${encodeURIComponent(
									name
								)}&body=${encodeURIComponent(message)}`}
							>
								
						
								Send Message
							</Link>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}
