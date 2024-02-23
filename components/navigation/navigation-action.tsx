'use client';

import Image from "next/image";
import ActionTooltip from "@/components/action-tooltip";


const NavigationAction = () => {
	return (
		<div>
			<ActionTooltip
				side="right"
				align="center"
				label="Helper Gpts"
				className="ml-3"
			>
				<Image
					src="/gpt-white.svg"
					alt="Gpt Logo"
					width={48}
					height={48}
					priority
				/>
			</ActionTooltip>
		</div>
	);
}

export default NavigationAction;
