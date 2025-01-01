
	function dataGenerator(startDate, endDate) {
	  const start = new Date(startDate);
	  const end = new Date(endDate);
	  const data = [];

	  if (start > end) {
		console.error("Start date must be before or equal to the end date.");
		return [];
	  }

	  for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
		const formattedDate = date.toISOString().split("T")[0];
		data.push({ date: formattedDate, level: Math.floor(Math.random() * 5) });
		
		// data.push({ [formattedDate]: { level: Math.floor(Math.random() * 5) } });
	  }

	  return data;
	}
	
	function addEmptyBoxes(container, count) {
	  for (let i = 0; i < count; i++) {
		const dateBox = document.createElement('div');
		dateBox.classList.add('date-box');
		container.appendChild(dateBox);
	  }
	}

	function addMonthLabel(month, count) {
		const label = document.createElement('div');
		label.textContent = monthNames[month];
		label.style.flexBasis = `calc((100% / ${totalCols}) * ${count})`;
		colLabel.appendChild(label);
	}

	const calendarData = dataGenerator("2023-12-15", "2024-12-15");
	console.log(calendarData);

	const totalActivity = 505;
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const dateNames = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
	const colorLevels = ['#cbd5e1', '#8be497', '#36ba59', '#2e9449', '#206a37'];
	
	
	const calendar = document.getElementById("calendar");
	const dateContainer = document.createElement('div');
	const rowLabel = document.createElement('div');
	const colLabel = document.createElement('div');
	calendar.classList.add('calendar');
	dateContainer.classList.add('date-container');
	rowLabel.classList.add('row-label');
	colLabel.classList.add('col-label');
	
	//// set date grid ////
	const firstDayNo = new Date(calendarData[0].date).getDay();
	const lastDayNo = new Date(calendarData[calendarData.length-1].date).getDay();
	const totalBox = calendarData.length + firstDayNo + (6 - lastDayNo);
	const totalCols = Math.ceil(totalBox / 7);
	
	calendar.style.setProperty('--datecols', totalCols);
	calendar.style.setProperty('--datecolor', colorLevels[0]);
	
	console.log(firstDayNo, lastDayNo, calendarData.length, totalCols);
	

	addEmptyBoxes(dateContainer, firstDayNo);
	
	for (let index = 0; index < calendarData.length; index++) {
		const dateBox = document.createElement('div');
		dateBox.classList.add('date-box');
		dateBox.style.backgroundColor = colorLevels[calendarData[index].level];
		
		const tootip = document.createElement('span');
		// const tootipText = document.createTextNode(index);
		const tootipText = document.createTextNode(calendarData[index].date);
		tootip.appendChild(tootipText);
		
		dateBox.appendChild(tootip);
		dateContainer.appendChild(dateBox);
	}
	
	addEmptyBoxes(dateContainer, 6 - lastDayNo);
	
	//// set top column labels ////
	let monthPrev = null;
	let count = 0;
	const dateBoxes = dateContainer.children.length;
	console.log("dateBoxes: ", dateBoxes);
	
	for (let index = 0; index < dateBoxes; index+=7) {
		
		const dateText = dateContainer.children.item(index).firstChild?.firstChild.textContent;
		const monthNo = new Date(dateText).getMonth();
		// console.log(dateText);
		
		if ((monthNo != monthPrev) ) {
			console.log(monthPrev, count);
			
			addMonthLabel(monthPrev, count);
			
			monthPrev = monthNo;
			count = 0;
		}
		
		count++;
		
		if (index + 7 >= dateBoxes) {
			addMonthLabel(monthPrev, count);
		}	
	}
	// console.log(monthPrev, count);

	//// set left row labels ////
	for (let row = 0; row < 7; row++) {
		const label = document.createElement('div');
		const text = document.createTextNode(dateNames[row]);
		label.appendChild(text);
		rowLabel.appendChild(label);
	}
	
	//// set bottom status bar ////
	const statusBar = document.createElement('div');
	const levelBar = document.createElement('div');
	const span1 = document.createElement('span');
	const span2 = document.createElement('span');
	const span3 = document.createElement('span');

	const text1 = document.createTextNode('Less');
	const text2 = document.createTextNode('More');
	const text3 = document.createTextNode(`${totalActivity} activities in the last year`);

	span1.appendChild(text1);
	span2.appendChild(text2);
	span3.appendChild(text3);
	levelBar.appendChild(span1);
	
	for (let i = 0; i < 5; i++ ) {
		const box = document.createElement('div');
		box.classList.add('level-box');
		box.style.backgroundColor = colorLevels[i]
		levelBar.appendChild(box);
	}
	levelBar.appendChild(span2);
	levelBar.classList.add('level-bar');
	statusBar.classList.add('status-bar');
	statusBar.appendChild(span3);
	statusBar.appendChild(levelBar);

	calendar.appendChild(colLabel);
	calendar.appendChild(rowLabel);
	calendar.appendChild(dateContainer);
	calendar.appendChild(statusBar);
	