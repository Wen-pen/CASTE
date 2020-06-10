var jobPrompt;
let i;
const playerName = prompt('What is your name?');
const player = new Character(playerName, 100000 , 'Middle Class', new Jobless(), true , 5 , false);

class Character{
	constructor(name, money, status, job, higherEducation, assets, mortgage){
		this.name = name;
		this.money = money;
		this.status = status;
		this.job = job;
		this.higherEducation = higherEducation;
		this.assets = assets;
		this.mortgage = mortgage;
	}
}

class Jobless{
		constructor(jobname, jobValue){
			this.jobname = Jobless;
			this.jobValue = 0;
		}
		
}

Jobless.prototype.moneyMaker = () => {
				player.money += player.job.jobValue;
				i++;
				alert('Made Money');
		}

class ConstructionWorker extends Jobless{
	constructor(jobname, jobValue){
			super(jobname, jobValue);
			this.jobname = 'Construction Worker';
			this.jobValue = 5;
		}
}

class FactoryWorker extends ConstructionWorker{
	constructor(jobname, jobValue){
		super(jobname, jobValue);
			this.jobname = 'Factory Worker';
			this.jobValue = 10;
		}
}

 class Waiter extends FactoryWorker{
 	constructor(jobname, jobValue){
 		super(jobname, jobValue);
			this.jobname = 'Waiter';
			this.jobValue = 15;
		}
 }

  class OfficeHelp extends FactoryWorker{
 	constructor(jobname, jobValue){
 		super(jobname, jobValue);
			this.jobname = 'Waiter';
			this.jobValue = 50;
		}
 }

  class SchoolTeacher extends OfficeHelp{
 	constructor(jobname, jobValue){
 		super(jobname, jobValue);
			this.jobname = 'School Teacher';
			this.jobValue = 30;
		}
 }

class Nurse extends SchoolTeacher{
 	constructor(jobname, jobValue){
 		super(jobname, jobValue);
			this.jobname = 'Nurse';
			this.jobValue = 35;
		}
 }

class Doctor extends Nurse{
 	constructor(jobname, jobValue, jobPath){
 		super(jobname, jobValue);
			this.jobname = 'Doctor';
			this.jobValue = 100;
			this.jobPath = 'Doctor';
		}
 }

 class Accountant extends Doctor{
 	constructor(jobname, jobValue, jobPath){
 		super(jobname, jobValue, jobPath);
			this.jobname = 'Doctor';
			this.jobValue = 80;
			this.jobPath = 'Accountant';
		}
 }

 class SoftwareDev extends Accountant{
 	constructor(jobname, jobValue, jobPath){
 		super(jobname, jobValue, jobPath);
			this.jobname = 'SoftwareDev';
			this.jobValue = 120;
			this.jobPath = 'SoftwareDev';
		}
 }

  class PoliceOfficer extends SoftwareDev{
 	constructor(jobname, jobValue, jobPath){
 		super(jobname, jobValue, jobPath);
			this.jobname = 'PoliceOfficer';
			this.jobValue = 75;
			this.jobPath = 'PoliceOfficer';
		}
 }

function pickJob(status){
	switch (status){
		case 'Lower Class':

			let jobPrompt = prompt('Pick your options: \n 1. Factory Worker \n 2. Waiter \n 3. Construction Worker');
	
		 	if(jobPrompt === '1'){
		 		player.job = new FactoryWorker();
		 		i++
		 	}
		 	else if(jobPrompt === '2'){
		 		player.job = new Waiter();
		 		i++
		 	}
		 	else{
		 		player.job = new ConstructionWorker();
		 		i++
		 	}

			break;

		case 'Lower Middle Class':

			jobPrompt1 = prompt('Pick your options: \n 1. Office Help \n 2. School Teacher \n 3. Nurse');

		 	if(jobPrompt1 === '1'){
		 		player.job = new OfficeHelp();
		 		i++;
		 	}
		 	else if(jobPrompt1 === '2'){
		 		player.job = new SchoolTeacher();
		 		i++;
		 	}
		 	else{
		 		player.job = new Nurse();
		 		i++;
		 	}

			break;

		case 'Middle Class':

		jobPrompt2 = prompt('Pick your options: \n 1. Doctor \n 2. Accountant \n 3. Police Officer \n 4. Software Developer');

		 	if(jobPrompt2 === '1'){
		 		player.job = new Doctor();
		 		i++;
		 	}
		 	else if(jobPrompt2 === '2'){
		 		player.job = new Accountant();
		 		i++;
		 	}
		 	else if(jobPrompt2 === '3'){
		 		player.job = new PoliceOfficer();
		 		i++;
		 	}else{
		 		player.job = new SoftwareDev();
		 		i++;
		 	}

			break;
	}
	
}


function university(){

	if(player.money <= 5000 || player.higherEducation === true){
		alert('You do not have enough money to go to university');
	}else{
		alert('You have attained higher education');
		player.higherEducation = true;
		i+= 14;
		player.money -= 5000;
	}

}

function buyAssets(){
	if(player.money < 7000){
		alert('You do not have enough money to buy an asset')
	}else{
		player.assets++
		i++
		player.money -= 7000;

	}
} 

function main(){

	for(i = 1; i < Infinity;){
		console.log(player.name, player.money);
		if(player.money > 1000 && player.status === 'Lower Class'){
			alert(`Lower Middle Class Achieved`);
			player.status = 'Lower Middle Class';
		
			break;

		}

		if(player.money > 9999 && player.status === 'Lower Middle Class' && player.higherEducation === true && player.assets === 1){
			alert(`Middle Class Achieved`);
			player.status = 'Middle Class';
			break;

		}

		if(player.money > 99999 && player.status === 'Middle Class' && player.higherEducation === true && player.assets === 5){
			console.log('You win')
			break;
		}

    	const menuPrompt = prompt(`Pick your options: \n 1. Get A Job \n 2. Go to work \n 3. Get a loan \n 4. Buy Assets \n 5. Get a Mortgage \n 6. Move on to next day \n This is Day ${i} \n ${player.status} ` );
		 if(menuPrompt === '1'){
		 	pickJob(player.status);
		 }else if(menuPrompt === '2'){
		 	player.job.moneyMaker();
		 }else if(menuPrompt === '3' || menuPrompt === '4' || menuPrompt === '5'){
		 	console.log('This is not available yet');
		 }else{
		 	i++
		 }
	}
}
main();






