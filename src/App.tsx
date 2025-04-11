import { useState } from "react";

import { NewItem } from "components/NewItem";
import { List } from "components/List";

export function App() {
	const [list, setList] = useState<string[]>([]);

	return (
		<div id="body">
			<NewItem list={list} setList={setList} />
			<List list={list} setList={setList} />
		</div>
	);
}
