'use client';

import ActionTooltip from "@/components/action-tooltip";
import Image from "next/image";

interface NavigationItemProps {
	id: number;
	imageUrl: string;
	name: string;
	className?: string;
}

const NavigationItem = ({
	id,
	imageUrl,
	name,
	className
}: NavigationItemProps) => {
	console.log("name :", name);
	return (
		<ActionTooltip
			side="right"
			align="center"
			label={name + "gpt"}
			className="ml-4"
		>
			<Image
				src={imageUrl}
				alt={name}
				className={className}
				width={48}
				height={48}
				priority
			/>
		</ActionTooltip>
	);
}

export default NavigationItem;