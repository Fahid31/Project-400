"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {

	return (
		<nav className='p-4 bg-transparent flex items-center justify-between'>
			<Link href='/' className='flex items-center'>
			
				<Image
							width={150}
							height={100}
							className='object-contain'
							src='/logo-trs.png'
							alt='Company name'
						/>
				
			</Link>
			<div className='flex items-center gap-x-2'>
				<Link href={"/sign-up"}>
					<Button variant='outline' className='rounded-full'>
						Get Started
					</Button>
				</Link>
			</div>
		</nav>
	);
};
