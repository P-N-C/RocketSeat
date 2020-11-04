function temHabilidade(skills) {
    if(skills.indexOf('Javascript') >= 0) {
        return true;
    }
    return false;
}

var skills = ["Javascript", "ReactJS", "React Native"];
var temJs = temHabilidade(skills);
console.log(temJs);