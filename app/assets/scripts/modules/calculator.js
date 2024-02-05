const itemsDB = [
	{ room: 'bedroom', name: 'bedhead', space: 0.3 },
	{ room: 'bedroom', name: 'bedside table/drawers', space: 0.15 },
	{ room: 'bedroom', name: 'chest', space: 0.4 },
	{ room: 'bedroom', name: 'chest drawers large', space: 0.85 },
	{ room: 'bedroom', name: 'cheval mirror', space: 0.3 },
	{ room: 'bedroom', name: 'cot', space: 0.7 },
	{ room: 'bedroom', name: 'desk', space: 0.8 },
	{ room: 'bedroom', name: 'double bed & mattress', space: 1.2 },
	{ room: 'bedroom', name: 'dressing table', space: 0.8 },
	{ room: 'bedroom', name: 'dressing table & mirror', space: 0.8 },
	{ room: 'bedroom', name: 'folding bed', space: 0.28 },
	{ room: 'bedroom', name: 'mattress double', space: 0.48 },
	{ room: 'bedroom', name: 'mattress single', space: 0.3 },
	{ room: 'bedroom', name: 'portable robe', space: 0.6 },
	{ room: 'bedroom', name: 'queen bed & mattress', space: 1.8 },
	{ room: 'bedroom', name: 'single bed & mattress', space: 0.6 },
	{ room: 'bedroom', name: 'wardrobe', space: 1.2 },

	{ room: 'dining-room', name: 'auto trolley', space: 0.3 },
	{ room: 'dining-room', name: 'buffet/sideboard', space: 1 },
	{ room: 'dining-room', name: 'crystal cabinet', space: 0.85 },
	{ room: 'dining-room', name: 'dining chair', space: 0.15 },
	{ room: 'dining-room', name: 'dining table', space: 1 },
	{ room: 'dining-room', name: 'whatnot', space: 0.3 },

	{ room: 'family-room', name: '2 seater couch', space: 1 },
	{ room: 'family-room', name: '3 seater couch', space: 1.3 },
	{ room: 'family-room', name: 'armchair', space: 0.48 },
	{ room: 'family-room', name: 'billiard table', space: 2.4 },
	{ room: 'family-room', name: 'chair', space: 0.15 },
	{ room: 'family-room', name: 'table', space: 1.2 },

	{ room: 'hall', name: 'coat stand', space: 0.6 },
	{ room: 'hall', name: 'dropside table', space: 0.4 },
	{ room: 'hall', name: 'hall table', space: 0.25 },
	{ room: 'hall', name: 'hat stand', space: 0.28 },

	{ room: 'laundry-room', name: 'clothes airer', space: 0.05 },
	{ room: 'laundry-room', name: 'clothes dryer', space: 0.56 },
	{ room: 'laundry-room', name: 'ironing board', space: 0.1 },
	{ room: 'laundry-room', name: 'laundry basket', space: 0.1 },
	{ room: 'laundry-room', name: 'laundry trolley', space: 0.1 },
	{ room: 'laundry-room', name: 'small laundry cupboard', space: 0.8 },
	{ room: 'laundry-room', name: 'vacuum cleaner', space: 0.2 },
	{ room: 'laundry-room', name: 'washing machine', space: 0.6 },

	{ room: 'lounge', name: 'bar', space: 1 },
	{ room: 'lounge', name: 'bookcase', space: 0.6 },
	{ room: 'lounge', name: 'bureau', space: 0.6 },
	{ room: 'lounge', name: 'chair arm', space: 0.48 },
	{ room: 'lounge', name: 'china cabinet', space: 0.7 },
	{ room: 'lounge', name: 'coffee table', space: 0.2 },
	{ room: 'lounge', name: 'desk', space: 0.85 },
	{ room: 'lounge', name: 'lampshade', space: 0.2 },
	{ room: 'lounge', name: 'organ', space: 2 },
	{ room: 'lounge', name: 'piano', space: 2 },
	{ room: 'lounge', name: 'wall unit', space: 1 },

	{ room: 'kitchen', name: 'cabinet dresser', space: 1 },
	{ room: 'kitchen', name: 'chopping block', space: 0.12 },
	{ room: 'kitchen', name: 'cupboard', space: 0.85 },
	{ room: 'kitchen', name: 'freezer', space: 1 },
	{ room: 'kitchen', name: 'fridge', space: 1 },
	{ room: 'kitchen', name: 'high chair', space: 0.15 },
	{ room: 'kitchen', name: 'kitchen chair', space: 0.15 },
	{ room: 'kitchen', name: 'microwave', space: 0.15 },
	{ room: 'kitchen', name: 'stool', space: 0.15 },
	{ room: 'kitchen', name: 'table', space: 0.98 },

	{ room: 'outside', name: 'B.B.Q.', space: 0.75 },
	{ room: 'outside', name: 'bicycle', space: 0.4 },
	{ room: 'outside', name: 'chair', space: 0.14 },
	{ room: 'outside', name: "child's ride-on toy", space: 0.2 },
	{ room: 'outside', name: 'esky', space: 0.1 },
	{ room: 'outside', name: 'fold lounge', space: 0.2 },
	{ room: 'outside', name: 'garden setting', space: 2.5 },
	{ room: 'outside', name: 'ladder', space: 0.4 },
	{ room: 'outside', name: 'large bin', space: 0.6 },
	{ room: 'outside', name: 'large umbrella', space: 0.3 },
	{ room: 'outside', name: 'motor mower', space: 0.3 },
	{ room: 'outside', name: 'pot plants', space: 0.1 },
	{ room: 'outside', name: 'table tennis table', space: 1 },
	{ room: 'outside', name: 'trampoline (dismantled)', space: 1 },
	{ room: 'outside', name: 'wheel barrow', space: 0.48 },
	{ room: 'outside', name: 'whipper snipper', space: 0.15 },

	{ room: 'saundries', name: 'bench', space: 0.8 },
	{ room: 'saundries', name: 'book & wine carton', space: 0.1 },
	{ room: 'saundries', name: 'bookcase', space: 0.6 },
	{ room: 'saundries', name: 'bookshelf', space: 0.5 },
	{ room: 'saundries', name: 'chair', space: 0.15 },
	{ room: 'saundries', name: 'cupboard', space: 0.85 },
	{ room: 'saundries', name: 'divan', space: 1.2 },
	{ room: 'saundries', name: 'exercise bike', space: 0.4 },
	{ room: 'saundries', name: 'filing cabinet', space: 0.6 },
	{ room: 'saundries', name: 'folding chairs', space: 0.1 },
	{ room: 'saundries', name: 'golf bag', space: 0.2 },
	{ room: 'saundries', name: 'heater', space: 0.1 },
	{ room: 'saundries', name: 'mats & rugs', space: 0.15 },
	{ room: 'saundries', name: 'occasional table', space: 0.28 },
	{ room: 'saundries', name: 'pram', space: 0.35 },
	{ room: 'saundries', name: 'sewing cabinet', space: 0.6 },
	{ room: 'saundries', name: 'sewing machine', space: 0.2 },
	{ room: 'saundries', name: 'standard carton', space: 0.15 },
	{ room: 'saundries', name: 'stereo', space: 0.4 },
	{ room: 'saundries', name: 'suitcase', space: 0.2 },
	{ room: 'saundries', name: 'swing (dismantled)', space: 1 },
	{ room: 'saundries', name: 'trestle table', space: 1 },
	{ room: 'saundries', name: 'TV', space: 0.4 },
	{ room: 'saundries', name: 'video recorder/player', space: 0.1 }
];

const roomBtns = document.querySelectorAll('.rooms li');
const itemsList = document.querySelector('.items');
const totalSpan = document.querySelector('.total-span');
let inputs = [];

let lastActive = undefined;

const roomChooseHandle = e => {
	if (e.target == lastActive) return;
	else {
		changeActiveRoom(e.target);
	}
};

const changeActiveRoom = chosenRoom => {
	showNewItems(chosenRoom.dataset.room);
	if (lastActive) lastActive.classList.remove('active');
	chosenRoom.classList.add('active');
	lastActive = chosenRoom;
	inputs = document.querySelectorAll('.items input');
	inputs.forEach(input => {
		input.addEventListener('change', handleInputChange);
	});
};

const showNewItems = room => {
	itemsList.innerHTML = '';

	const roomItems = itemsDB.filter(item => item.room == room);

	roomItems.forEach(item => {
		//create li item with proper data
		const li = document.createElement('li');
		const input = document.createElement('input');
		input.setAttribute('data-space', item.space);
		input.setAttribute('type', 'number');
		const val = parseInt(item.value) || 0;
		input.setAttribute('value', val);
		input.setAttribute('min', 0);
		input.setAttribute('name', item.name);

		const label = document.createElement('label');
		label.setAttribute('for', item.name);
		label.textContent = item.name;

		const p = document.createElement('p');
		p.innerHTML = `(<span>${(val * item.space).toFixed(
			2
		)}</span> m<sup>3</sup>)`;

		//combine items and add li to the list
		li.appendChild(input);
		li.appendChild(label);
		li.appendChild(p);

		itemsList.appendChild(li);
	});
};

const handleInputChange = e => {
	//change counted space
	const space = e.target.parentElement.querySelector('span');
	let spaceCount;
	space.innerText = (e.target.value * e.target.dataset.space).toFixed(2);

	itemsDB.forEach(item => {
		if (item.name == e.target.name) {
			item.value = parseInt(e.target.value);
		}
	});
	changeTotal();
};

const changeTotal = () => {
	let total = 0;

	//calculate space
	total = itemsDB.reduce(
		(acc, item) => acc + (item.value || 0) * item.space,
		0
	);

	totalSpan.innerText = total.toFixed(2);
};

//when app starts
changeActiveRoom(roomBtns[0]);

roomBtns.forEach(btn => {
	btn.addEventListener('click', roomChooseHandle);
});
