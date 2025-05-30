import { FormEvent, useState } from "react";
import axios from "axios";

import "./styles.scss";

type Props = {
	list: string[];
	setList: (list: string[]) => void;
};

type NewItem = {
	title: string;
};

export function NewItem({ list, setList }: Props) {
	const [value, setValue] = useState("");

	function handleAddingTheItemToTheList(event: FormEvent) {
		event.preventDefault();

		setList([...list, value]);
		setValue("");
	}

	async function handleAddingRandomItemsToTheList(event: FormEvent) {
		event.preventDefault();

		const URL = "https://jsonplaceholder.typicode.com/todos?_limit=2";

		try {
			const { data } = await axios.get<NewItem[]>(URL);
			const newItems = data.map((item) => item.title);

			setList(list.concat(newItems));
		} catch {
			alert("Erro ao adicionar itens aleatórios");
		}
	}

	return (
		<form>
			<label htmlFor="new-item">Adicione um novo item à lista</label>

			<input id="new-item" value={value} onChange={(event) => setValue(event.target.value)} />

			<div id="add-button">
				<button disabled={!value} onClick={(event) => handleAddingTheItemToTheList(event)}>
					Adicionar
				</button>

				<button onClick={handleAddingRandomItemsToTheList}>Adicionar dados aleatórios</button>
			</div>
		</form>
	);
}
