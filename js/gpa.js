const getFieldValue = (getId) => {
    const field = document.getElementById(getId);
    const value = field.value;
    field.value = '';
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

const getFirstGPA = () => {
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
};


const getSecondGPA = () => {
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
    const gpa = total / 20;
    getAndSetInnerText('showSecondGPAFront', gpa.toFixed(2));
    getAndSetInnerText('showSecondGPA', gpa.toFixed(2));
};
