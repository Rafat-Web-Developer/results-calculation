const getFieldValue = (getId) => {
    const field = document.getElementById(getId);
    const value = field.value;
    field.value = '';
    return value;
};


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
    // console.log(cf, c, phy1, math1, eng, acc, bs, cfLab, cLab, phy1Lab);
    total = cf + c + phy1 + math1 + eng + acc + bs + cfLab + cLab + phy1Lab;
    const gpa = total / 20;
    const showFirstGPAFront = document.getElementById('showFirstGPAFront');
    const showFirstGPA = document.getElementById('showFirstGPA');
    showFirstGPAFront.innerText = gpa.toFixed(2);
    showFirstGPA.innerText = gpa.toFixed(2);
};