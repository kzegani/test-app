'use client';

import * as React from "react";
import { useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import GptProvider from "@/components/provider/gpt-provider";

export default function Home() {
	const carouselNavPrevRef = useRef<HTMLButtonElement | null>(null);
	const carouselNavNextRef = useRef<HTMLButtonElement | null>(null);

	const handleKeyPressed = (event: React.KeyboardEvent) => {
		if (event.metaKey && event.key === 'ArrowLeft') {
			event.preventDefault();
			console.log('meta + <-');
			carouselNavPrevRef.current?.click();
		}
		else if (event.metaKey && event.key === 'ArrowRight') {
			event.preventDefault();
			console.log('meta + ->');
			carouselNavNextRef.current?.click();
		}
	};

	return (
		<div
			tabIndex={0}
			onKeyDown={handleKeyPressed}
			className="h-screen w-screen"
		>
			<Carousel>
				<CarouselContent className="m-0">
				{Array.from({ length: 2 }).map((_, index) => (
					<CarouselItem key={index} className="p-0">
						<div className="w-screen h-screen">
							<Card className={`${index == 1 && 'bg-red-600'} border-none h-screen w-screen rounded-none`}>
								<CardContent className="h-screen w-screen p-0">
									<GptProvider />
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
				</CarouselContent>
				<CarouselNext ref={carouselNavNextRef} className="hidden"/>
				<CarouselPrevious ref={carouselNavPrevRef} className="hidden"/>
			</Carousel>
		</div>
	);
}
