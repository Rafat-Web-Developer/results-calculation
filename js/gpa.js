const getFieldValue = (getId) => {
    const field = document.getElementById(getId);
    const value = field.value;
    return value;
};

const getAndSetInnerText = (elementId, value) => {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

const checkGradeAndGetTotal = (marks, credit) => {
    let grade = 0;
    if(marks >= 40 && marks < 45){
        grade = 2.00 * credit;
        return grade;
    }else if(marks >= 45 && marks < 50){
        grade = 2.25 * credit;
        return grade;
    }else if(marks >= 50 && marks < 55){
        grade = 2.50 * credit;
        return grade;
    }else if(marks >= 55 && marks < 60){
        grade = 2.75 * credit;
        return grade;
    }else if(marks >= 60 && marks < 65){
        grade = 3.00 * credit;
        return grade;
    }else if(marks >= 65 && marks < 70){
        grade = 3.25 * credit;
        return grade;
    }else if(marks >= 70 && marks < 75){
        grade = 3.50 * credit;
        return grade;
    }else if(marks >= 75 && marks < 80){
        grade = 3.75 * credit;
        return grade;
    }else if(marks >= 80){
        grade = 4.00 * credit;
        return grade;
    }else{
        console.log("You are not allowed");
    }
};


const getStudentDataFromLocalStorage = () => {
    let studentData;
    const data = localStorage.getItem('student');
    if(data){
        studentData = JSON.parse(data);
    }else{
        studentData = {};  
    }
    return studentData;
}

const setGPAInLocalStorage = (getSemesterName, getGPA) => {
    const studentData = getStudentDataFromLocalStorage();
    studentData[getSemesterName] = getGPA;
    const data = JSON.stringify(studentData);
    localStorage.setItem('student', data);
}


const loadResultFromLocalStorage = () => {
    const studentResult = getStudentDataFromLocalStorage();
    getAndSetInnerText('showFirstGPAFront', studentResult['First'] || '0.00');
    getAndSetInnerText('showSecondGPAFront', studentResult['Second'] || '0.00');
    getAndSetInnerText('showThirdGPAFront', studentResult['Third'] || '0.00');
    getAndSetInnerText('showFourthGPAFront', studentResult['Fourth'] || '0.00');
    getAndSetInnerText('showFifthGPAFront', studentResult['Fifth'] || '0.00');
    getAndSetInnerText('showSixthGPAFront', studentResult['Sixth'] || '0.00');
    getAndSetInnerText('showSeventhGPAFront', studentResult['Seventh'] || '0.00');
    getAndSetInnerText('showEighthGPAFront', studentResult['Eighth'] || '0.00');
    document.getElementById('showCGPA').innerText = studentResult['CGPA'] || '0.00';
}
loadResultFromLocalStorage();

const validationInputField = (className) => {
    const inputs = document.getElementsByClassName(className);
    for (const input of inputs) {
        // console.log(input.value);
        if(input.value === '' || input.value < 40 || input.value > 100){
            alert(`${input.placeholder.split(' ')[1]} field is null or value is less then 40 or gater then 100. So check this field please.`);
            return false;
        }
    }
    return true;
};


const getFirstGPA = () => {
    const validInputField = validationInputField('firstInput');

    if(validInputField){
        let total = 0;
        const cf = checkGradeAndGetTotal(getFieldValue('cf'), 3);
        const c = checkGradeAndGetTotal(getFieldValue('c'), 3);
        const phy1 = checkGradeAndGetTotal(getFieldValue('phy1'), 2);
        const math1 = checkGradeAndGetTotal(getFieldValue('math1'), 3);
        const eng = checkGradeAndGetTotal(getFieldValue('eng'), 2);
        const acc = checkGradeAndGetTotal(getFieldValue('acc'), 2);
        const bs = checkGradeAndGetTotal(getFieldValue('bs'), 1);
        const cfLab = checkGradeAndGetTotal(getFieldValue('cfLab'), 1);
        const cLab = checkGradeAndGetTotal(getFieldValue('cLab'), 2);
        const phy1Lab = checkGradeAndGetTotal(getFieldValue('phy1Lab'), 1);
        total = cf + c + phy1 + math1 + eng + acc + bs + cfLab + cLab + phy1Lab;
        const gpa = total / 20;
        
        getAndSetInnerText('showFirstGPAFront', gpa.toFixed(2));
        getAndSetInnerText('showFirstGPA', gpa.toFixed(2));
        
        setGPAInLocalStorage('First', gpa.toFixed(2));
    }else{
        console.log("Enter valid information please!!");
    }

};


const getSecondGPA = () => {
    const validInputField = validationInputField('SecondInput');
    
    if(validInputField){
        let total = 0;
        const bee = checkGradeAndGetTotal(getFieldValue('bee'), 3);
        const ds = checkGradeAndGetTotal(getFieldValue('ds'), 3);
        const cPlus = checkGradeAndGetTotal(getFieldValue('cPlus'), 3);
        const phy2 = checkGradeAndGetTotal(getFieldValue('phy2'), 2);
        const math2 = checkGradeAndGetTotal(getFieldValue('math2'), 3);
        const pe = checkGradeAndGetTotal(getFieldValue('pe'), 2);
        const beeLab = checkGradeAndGetTotal(getFieldValue('beeLab'), 1);
        const dsLab = checkGradeAndGetTotal(getFieldValue('dsLab'), 1);
        const cPlusLab = checkGradeAndGetTotal(getFieldValue('cPlusLab'), 2);
        const phy2Lab = checkGradeAndGetTotal(getFieldValue('phy2Lab'), 1);
        total = bee + ds + cPlus + phy2 + math2 + pe + beeLab + dsLab + cPlusLab + phy2Lab;
        const gpa = total / 21;
        
        getAndSetInnerText('showSecondGPAFront', gpa.toFixed(2));
        getAndSetInnerText('showSecondGPA', gpa.toFixed(2));

        setGPAInLocalStorage('Second', gpa.toFixed(2));
    }else{
        console.log("Please enter valid data!!");
    }
};

const getThirdGPA = () => {
    const validInputField = validationInputField('thirdInput');
    
    if(validInputField){
        let total = 0;
        const dld = checkGradeAndGetTotal(getFieldValue('dld'), 3);
        const dm = checkGradeAndGetTotal(getFieldValue('dm'), 3);
        const be = checkGradeAndGetTotal(getFieldValue('be'), 3);
        const java = checkGradeAndGetTotal(getFieldValue('java'), 3);
        const math3 = checkGradeAndGetTotal(getFieldValue('math3'), 3);
        const stat = checkGradeAndGetTotal(getFieldValue('stat'), 3);
        const dldLab = checkGradeAndGetTotal(getFieldValue('dldLab'), 1);
        const beLab = checkGradeAndGetTotal(getFieldValue('beLab'), 1);
        const javaLab = checkGradeAndGetTotal(getFieldValue('javaLab'), 2);
        total = dld + dm + be + java + math3 + stat + dldLab + beLab + javaLab;
        const gpa = total / 22;
        getAndSetInnerText('showThirdGPAFront', gpa.toFixed(2));
        getAndSetInnerText('showThirdGPA', gpa.toFixed(2));

        setGPAInLocalStorage('Third', gpa.toFixed(2));
    }else{
        console.log("Please enter valid input");
    }
};

const getFourthGPA = () => {
    const validInputField = validationInputField('fourthInput');
    
    if(validInputField){
        let total = 0;
        const ca1 = checkGradeAndGetTotal(getFieldValue('ca1'), 3);
        const inc = checkGradeAndGetTotal(getFieldValue('inc'), 3);
        const na = checkGradeAndGetTotal(getFieldValue('na'), 3);
        const ca2 = checkGradeAndGetTotal(getFieldValue('ca2'), 3);
        const math4 = checkGradeAndGetTotal(getFieldValue('math4'), 3);
        const caLab = checkGradeAndGetTotal(getFieldValue('caLab'), 1);
        const incLab = checkGradeAndGetTotal(getFieldValue('incLab'), 2);
        const naLab = checkGradeAndGetTotal(getFieldValue('naLab'), 1);
        total = ca1 + inc + na + ca2 + math4 + caLab + incLab + naLab;
        const gpa = total / 19;
        getAndSetInnerText('showFourthGPAFront', gpa.toFixed(2));
        getAndSetInnerText('showFourthGPA', gpa.toFixed(2));

        setGPAInLocalStorage('Fourth', gpa.toFixed(2));
    }else{
        console.log("Please enter valid input!!");
    }
};


const getFifthGPA = () => {
    const validInputField = validationInputField('fifthInput');
    
    if(validInputField){
        let total = 0;
        const dbms = checkGradeAndGetTotal(getFieldValue('dbms'), 3);
        const dc = checkGradeAndGetTotal(getFieldValue('dc'), 3);
        const os = checkGradeAndGetTotal(getFieldValue('os'), 3);
        const micro = checkGradeAndGetTotal(getFieldValue('micro'), 3);
        const sad = checkGradeAndGetTotal(getFieldValue('sad'), 3);
        const dbmsLab = checkGradeAndGetTotal(getFieldValue('dbmsLab'), 2);
        const osLab = checkGradeAndGetTotal(getFieldValue('osLab'), 1);
        const microLab = checkGradeAndGetTotal(getFieldValue('microLab'), 2);
        const sdp1 = checkGradeAndGetTotal(getFieldValue('sdp1'), 2);
        total = dbms + dc + os + micro + sad + dbmsLab + osLab + microLab + sdp1;
        const gpa = total / 22;
        getAndSetInnerText('showFifthGPAFront', gpa.toFixed(2));
        getAndSetInnerText('showFifthGPA', gpa.toFixed(2));

        setGPAInLocalStorage('Fifth', gpa.toFixed(2));
    }else{
        console.log("Please enter valid input!!");
    }
};


const getSixthGPA = () => {
    const validInputField = validationInputField('sixthInput');
    
    if(validInputField){
        let total = 0;
        const sub1 = checkGradeAndGetTotal(getFieldValue('cn'), 3);
        const sub2 = checkGradeAndGetTotal(getFieldValue('tc'), 2);
        const sub3 = checkGradeAndGetTotal(getFieldValue('compiler'), 3);
        const sub4 = checkGradeAndGetTotal(getFieldValue('cms'), 3);
        const sub5 = checkGradeAndGetTotal(getFieldValue('cpi'), 3);
        const sub6 = checkGradeAndGetTotal(getFieldValue('se'), 3);
        const sub7 = checkGradeAndGetTotal(getFieldValue('cnLab'), 1);
        const sub8 = checkGradeAndGetTotal(getFieldValue('cpiLab'), 1);
        const sub9 = checkGradeAndGetTotal(getFieldValue('sdp2'), 2);
        total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9;
        const gpa = total / 21;
        getAndSetInnerText('showSixthGPAFront', gpa.toFixed(2));
        getAndSetInnerText('showSixthGPA', gpa.toFixed(2));

        setGPAInLocalStorage('Sixth', gpa.toFixed(2));
    }else{
        console.log("Please enter valid input!!");
    }
};


const getSeventhGPA = () => {
    const validInputField = validationInputField('seventhInput');
    
    if(validInputField){
        let total = 0;
        const sub1 = checkGradeAndGetTotal(getFieldValue('proSE'), 1);
        const sub2 = checkGradeAndGetTotal(getFieldValue('fnn'), 3);
        const sub3 = checkGradeAndGetTotal(getFieldValue('ai'), 3);
        const sub4 = checkGradeAndGetTotal(getFieldValue('te'), 3);
        const sub5 = checkGradeAndGetTotal(getFieldValue('dsd'), 3);
        const sub6 = checkGradeAndGetTotal(getFieldValue('cns'), 3);
        const sub7 = checkGradeAndGetTotal(getFieldValue('fnnLab'), 1);
        const sub8 = checkGradeAndGetTotal(getFieldValue('aiLab'), 1);
        const sub9 = checkGradeAndGetTotal(getFieldValue('teLab'), 1);
        const sub10 = checkGradeAndGetTotal(getFieldValue('dsdLab'), 1);
        total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10;
        const gpa = total / 20;
        getAndSetInnerText('showSeventhGPAFront', gpa.toFixed(2));
        getAndSetInnerText('showSeventhGPA', gpa.toFixed(2));

        setGPAInLocalStorage('Seventh', gpa.toFixed(2));
    }else{
        console.log("Please enter valid input!!");
    }
};

const getEighthGPA = () => {
    const validInputField = validationInputField('eighthInput');
    
    if(validInputField){
        let total = 0;
        const sub1 = checkGradeAndGetTotal(getFieldValue('finalPro'), 3);
        const sub2 = checkGradeAndGetTotal(getFieldValue('cg'), 3);
        const sub3 = checkGradeAndGetTotal(getFieldValue('dsp'), 3);
        const sub4 = checkGradeAndGetTotal(getFieldValue('et1'), 3);
        const sub5 = checkGradeAndGetTotal(getFieldValue('it'), 2);
        const sub6 = checkGradeAndGetTotal(getFieldValue('cgLab'), 1);
        total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;
        const gpa = total / 15;
        getAndSetInnerText('showEighthGPAFront', gpa.toFixed(2));
        getAndSetInnerText('showEighthGPA', gpa.toFixed(2));

        setGPAInLocalStorage('Eighth', gpa.toFixed(2));
    }else{
        console.log("Please enter valid input!!");
    }
};

let sum = 0;

const getValueFromElementAndCalculate = (elementId, credit) => {
    const element = document.getElementById(elementId);
    const value = parseFloat(element.innerText) * credit;
    sum += value;
    return value;
};

const calculateCGPA = () => {
    getValueFromElementAndCalculate('showFirstGPAFront', 20);
    getValueFromElementAndCalculate('showSecondGPAFront', 21);getValueFromElementAndCalculate('showThirdGPAFront', 22);
    getValueFromElementAndCalculate('showFourthGPAFront', 19);getValueFromElementAndCalculate('showFifthGPAFront', 22);getValueFromElementAndCalculate('showSixthGPAFront', 21);
    getValueFromElementAndCalculate('showSeventhGPAFront', 20);
    getValueFromElementAndCalculate('showEighthGPAFront', 15);
    const cgpa = sum / 160;
    setGPAInLocalStorage('CGPA', cgpa.toFixed(2))
    loadResultFromLocalStorage();
};
