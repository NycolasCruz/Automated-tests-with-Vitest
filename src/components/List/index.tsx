import "./styles.scss";

type Props = {
	list: string[];
	setList: (list: string[]) => void;
};

export function List({ list, setList }: Props) {
	function handleTheRemovalOfTheItemFromTheList(index: number) {
		const updatedList = [...list];

		updatedList.splice(index, 1);
		if (setList) {
			setList(updatedList);
		}
	}

	return (
		<ul>
			{list.map((item, index) => (
				<li key={`item-${index}`}>
					{item}
					<button onClick={() => handleTheRemovalOfTheItemFromTheList(index)}>Remover</button>
				</li>
			))}
		</ul>
	);
}
