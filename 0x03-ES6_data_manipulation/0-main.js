import getListStudents from "./0-get_list_students.js";
import getListStudentIds from "./1-get_list_student_ids.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";
import getStudentIdsSum from "./3-get_ids_sum.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";
import createInt8TypedArray from "./5-typed_arrays.js";
import setFromArray from "./6-set.js";
import hasValuesFromArray from "./7-has_array_values.js";
import cleanSet from "./8-clean_set.js";
import groceriesList from "./9-groceries_list.js";
import updateUniqueItems from "./10-update_uniq_items.js";
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

const map = groceriesList();
console.log(map);
updateUniqueItems(map)
console.log(map);
console.log(groceriesList());
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
console.log(setFromArray([12, 32, 15, 78, 98, 15]));
console.log(createInt8TypedArray(10, 2, 89));
console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));
console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
const students = getListStudents();
const value = getStudentIdsSum(students);
console.log(getStudentsByLocation(students, 'San Francisco'));
console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));
console.log(getListStudents());
