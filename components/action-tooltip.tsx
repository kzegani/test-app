'use client';

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from "@/components/ui/tooltip";

interface ActionTooltipProps {
	label: string;
	children: React.ReactNode;
	className?: string;
	side?: 'top' | 'right' | 'bottom' | 'left';
	align?: 'start' | 'center' | 'end';
}

const ActionTooltip = ({
	label,
	children,
	className,
	side,
	align
}: ActionTooltipProps) => {
	return (
		<TooltipProvider >
			<Tooltip>
				<TooltipTrigger asChild>
					{children}
				</TooltipTrigger>
				<TooltipContent side={side} align={align} className={className}>
					<p className="font-semibold test-sm capitalize">
						{label.toLocaleLowerCase()}
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

export default ActionTooltip;