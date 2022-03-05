const getFieldValue = (getId) => {
    const field = document.getElementById(getId);
    const value = field.value;
    field.value = '';
    return value;
};

const checkGrade = (marks) => {
    if(marks >= 40 && marks < 45){
        console.log("Good");
    }else if(marks >= 45 && marks < 50){

    }else if(marks >= 50 && marks < 55){

    }else if(marks >= 55 && marks < 60){

    }else if(marks >= 60 && marks < 65){

    }else if(marks >= 65 && marks < 70){

    }else if(marks >= 70 && marks < 75){

    }else if(marks >= 75 && marks < 80){

    }else if(marks >= 80){

    }else{
        console.log("You are not allowed");
    }
};

const getFirstGPA = () => {
    const cf = getFieldValue('cf');
    const c = getFieldValue('c');
    const phy1 = getFieldValue('phy1');
    const math1 = getFieldValue('math1');
    const eng = getFieldValue('eng');
    const acc = getFieldValue('acc');
    const bs = getFieldValue('bs');
    const cfLab = getFieldValue('cfLab');
    const cLab = getFieldValue('cLab');
    const phy1Lab = getFieldValue('phy1Lab');

};