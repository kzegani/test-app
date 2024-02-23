import NavigationAction from "@/components/navigation/navigation-action";
import NavigationItem from "@/components/navigation/navigation-item";

import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

type gptsProps = {
	id: number;
	imageUrl: string;
	name: string;
	className: string;
}

const gpts: gptsProps[] = [
	{ id: 1, imageUrl: '/litidia.svg', name: 'litidia', className: 'border-zinc-600 border rounded-xl' },
	{ id: 2, imageUrl: '/gpt-white.svg', name: 'chat', className: 'bg-[#88A788] rounded-xl' },
	{ id: 3, imageUrl: '/1337.svg', name: '1337', className: 'bg-black rounded-xl' },
	{ id: 4, imageUrl: '/aws.svg', name: 'aws', className: 'rounded-xl bg-white' },
];

const NavigationSidebar = () => {
	return (
		<div
			className="space-y-4 flex flex-col items-center h-full text-primary w-full bg-gray-800 py-3"
		>
			<NavigationAction />
			<Separator className="h-[2px] bg-zinc-400 rounded-md w-12 mx-auto"/>
			<ScrollArea className="flex-1 w-full">
				{gpts.map((gpt) => (
					<div key={gpt.id} className="mb-8 items-center justify-center flex">
						<NavigationItem
							id={gpt.id}
							imageUrl={gpt.imageUrl}
							name={gpt.name}
							className={gpt.className}
						/>
					</div>
				))}
			</ScrollArea>
		</div>
	);
}

export default NavigationSidebar;