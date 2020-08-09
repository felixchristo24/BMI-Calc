"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BMI = void 0;
var BMI = /** @class */ (function () {
    function BMI() {
    }
    BMI.prototype.calculate = function (weight, height) {
        var bmi = weight / (Math.pow(height, 2));
        if (bmi < 18.5) {
            return "Underweight";
        }
        else if (bmi < 25) {
            return "Normal";
        }
        else if (bmi < 30) {
            return "Overweight";
        }
        else {
            return "Obese";
        }
    };
    return BMI;
}());
exports.BMI = BMI;
