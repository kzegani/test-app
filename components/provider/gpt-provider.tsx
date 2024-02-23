'use client';

import { useEffect, useState } from "react";

import ChatGpt from "@/components/gpts/chatgpt";

const GptProvider = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted)
		return null;

	return (
		<>
			<ChatGpt />
		</>
	);
}

export default GptProvider;