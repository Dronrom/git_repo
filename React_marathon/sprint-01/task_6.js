// Please, implement a function accountPatients that takes a count of free beds in a hospital and returns two functions:

// the first one for adding a patient

// the second one for discharging a patient

// accountPatients should keep track of free beds in a hospital and every time when a patient is admitted or discharged, print the count to the console like in examples:

// A patient was discharged, 54 beds are available

// A patient was admitted, 34 beds are available

// When there are no beds available, 

// Can not admit a patient, no beds available should be printed

// When there is an attempt to discharge a patient when there are no patients,

// // There are no patients to discharge should be printed

const accountPatients = (n) => {
    var patients = 0;
    
    const admit = () => {
        if (n === 0) console.log("Can not admit a patient, no beds available");
        else
        (++patients)&&(n--)&&console.log('A patient was admitted, ' + n + ' beds are available'); }
    const discharge = () => {
    if (patients === 0) console.log("There are no patients to discharge"); else 
    (patients--)&&(++n)&&console.log('A patient was discharged, ' +  n + ' beds are available');
        
    } 
    return [admit, discharge];
}

	
const [admit, discharge] = accountPatients(3);
admit();
admit();
admit();
admit();
discharge();
discharge();
discharge();
discharge();